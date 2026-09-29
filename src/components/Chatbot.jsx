import { useEffect, useRef, useState } from "react";
/* eslint-disable react/prop-types -- plain JSX props, matching codebase convention */
import { AnimatePresence, motion } from "framer-motion";
import { answer } from "../assistant/assistant";
import { NAV_TARGETS } from "../assistant/assistant";

const ease = [0.22, 1, 0.36, 1];

const QUICK_QUESTIONS = [
  "What projects has he built?",
  "Apa saja project yang pernah dia buat?",
  "What technologies does he use?",
  "Apa saja keahlian dia?",
  "What IT Support experience does he have?",
  "Bagaimana cara menghubungi dia?",
];

let idCounter = 0;
const nextId = () => `msg-${++idCounter}`;

// Execute a structured action. Only whitelisted targets and data-supplied
// URLs are ever used — the assistant cannot run arbitrary JS.
// Scroll to a section once its element exists (the home page needs a
// moment to mount after a route change), then flash-highlight it.
const scrollWithHighlight = (targetId, attempt = 0) => {
  const el = document.getElementById(targetId);
  if (!el) {
    if (attempt < 30) setTimeout(() => scrollWithHighlight(targetId, attempt + 1), 100);
    return;
  }
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  el.classList.add("assistant-highlight");
  setTimeout(() => el.classList.remove("assistant-highlight"), 1600);
  // Self-correct while the freshly mounted page settles.
  let lastH = document.documentElement.scrollHeight;
  const t0 = Date.now();
  const watcher = setInterval(() => {
    if (Date.now() - t0 > 2500) return clearInterval(watcher);
    if (document.documentElement.scrollHeight !== lastH) {
      lastH = document.documentElement.scrollHeight;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 150);
};

const runAction = (action) => {
  if (action.type === "navigate" && NAV_TARGETS[action.target]) {
    const targetId = NAV_TARGETS[action.target];
    const onHome = window.location.pathname === "/";

    // IT Support lives on the projects page behind a category filter —
    // route there with the filter pre-applied, then highlight the rows.
    if (action.target === "it-support") {
      window.history.pushState({}, "", "/projects?filter=IT Support");
      window.dispatchEvent(new PopStateEvent("popstate"));
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          el.classList.add("assistant-highlight");
          setTimeout(() => el.classList.remove("assistant-highlight"), 1600);
        }
      }, 600);
      return;
    }

    // Sections live on the home page. If we're on /projects, switch routes
    // first (React Router), then scroll once the section has mounted.
    if (!onHome) {
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
      setTimeout(() => scrollWithHighlight(targetId), 600);
      return;
    }

    scrollWithHighlight(targetId);
  } else if (action.type === "external_link" && action.url) {
    // Resume/CV opens in the same tab so the browser's PDF viewer shows it;
    // everything else opens safely in a new tab.
    if (action.url.endsWith(".pdf")) {
      window.location.href = action.url;
    } else {
      window.open(action.url, "_blank", "noopener,noreferrer");
    }
  }
};

const ActionButtons = ({ actions }) => {
  if (!actions?.length) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {actions.map((a, i) =>
        a.type === "navigate" ? (
          <button
            key={i}
            onClick={() => runAction(a)}
            className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-paper transition-transform duration-200 hover:scale-[1.04]"
          >
            {a.label}
          </button>
        ) : (
          <a
            key={i}
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/25 px-3.5 py-1.5 text-xs font-medium text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-paper"
          >
            {a.label}
          </a>
        )
      )}
    </div>
  );
};

const Bubble = ({ msg }) => (
  <div className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
    <div
      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
        msg.role === "user"
          ? "rounded-br-sm bg-ink text-paper"
          : "rounded-bl-sm border border-ink/10 bg-paper text-ink"
      }`}
    >
      {msg.text}
      {msg.role === "assistant" && <ActionButtons actions={msg.actions} />}
    </div>
  </div>
);

const TEASER_KEY = "natan-assistant-teaser-shown";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: nextId(),
      role: "assistant",
      text: "Hi! I'm Natan, the portfolio assistant.\n\nI can help you learn about Yonathan's projects, skills, experience, and IT Support work — in English or Bahasa Indonesia.\n\nTry asking:",
    },
  ]);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, thinking, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // One-time teaser bubble on first visit (per tab session): a small nudge
  // above the floating button. Disappears when opened or dismissed.
  useEffect(() => {
    if (sessionStorage.getItem(TEASER_KEY)) return;
    const t = setTimeout(() => setTeaser(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const dismissTeaser = () => {
    setTeaser(false);
    sessionStorage.setItem(TEASER_KEY, "1");
  };

  const openPanel = () => {
    dismissTeaser();
    setOpen(true);
  };

  const send = (raw) => {
    const text = (raw ?? input).trim();
    if (!text || thinking) return;
    setInput("");
    setMessages((m) => [...m, { id: nextId(), role: "user", text }]);
    setThinking(true);
    // Small delay so the assistant feels deliberate, not jarring.
    setTimeout(() => {
      const reply = answer(text) ?? {
        message:
          "Sorry, I couldn't process that. You can explore my projects or contact me directly.",
        actions: [
          { type: "navigate", target: "projects", label: "View Projects" },
          { type: "navigate", target: "contact", label: "Contact Me →" },
        ],
      };
      setMessages((m) => [
        ...m,
        { id: nextId(), role: "assistant", text: reply.message, actions: reply.actions },
      ]);
      setThinking(false);
    }, 600);
  };

  const showQuick = messages.length <= 1;

  return (
    <>
      {/* One-time teaser popup */}
      <AnimatePresence>
        {teaser && !open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.35, ease }}
            className="fixed bottom-[88px] right-5 z-40 max-w-[240px] rounded-2xl rounded-br-sm border border-ink/10 bg-paper p-4 shadow-xl shadow-ink/15 md:bottom-[96px] md:right-8"
            role="status"
          >
            <button
              onClick={dismissTeaser}
              aria-label="Dismiss assistant teaser"
              className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-ink/15 bg-paper text-xs text-ink-soft shadow-sm transition-colors hover:bg-ink hover:text-paper"
            >
              ×
            </button>
            <p className="text-sm leading-relaxed text-ink">
              Hi! 👋 Need any help? Let me guide you through Yonathan&apos;s portfolio.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 16 }}
            transition={{ duration: 0.3, ease }}
            onClick={openPanel}
            aria-label="Open AI assistant"
            className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full border border-ink/10 bg-ink py-3 pl-4 pr-5 text-paper shadow-xl shadow-ink/20 transition-transform duration-300 hover:scale-[1.04] md:bottom-8 md:right-8"
          >
            <span className="text-base leading-none">👤</span>
            <span className="text-sm font-medium">Natan AI Asistant</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease }}
            className="fixed inset-x-4 bottom-4 z-50 flex max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-ink/15 bg-paper shadow-2xl shadow-ink/25 sm:inset-x-auto sm:right-8 sm:bottom-8 sm:w-[380px]"
            role="dialog"
            aria-label="Portfolio AI assistant"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3.5">
              <p className="flex items-center gap-2.5 text-sm font-semibold">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm text-paper" aria-hidden>
                  👤
                </span>
                Natan AI Asistant
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setMessages([
                      {
                        id: nextId(),
                        role: "assistant",
                        text: "Hi! I'm Natan, the portfolio assistant.\n\nI can help you learn about Yonathan's projects, skills, experience, and IT Support work — in English or Bahasa Indonesia.\n\nTry asking:",
                      },
                    ]);
                    setInput("");
                  }}
                  aria-label="Reset conversation"
                  title="Refresh chat"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/15 text-sm transition-colors hover:bg-ink hover:text-paper"
                >
                  ↺
                </button>
                <button
                  onClick={() => { dismissTeaser(); setOpen(false); }}
                  aria-label="Close assistant"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/15 text-sm transition-colors hover:bg-ink hover:text-paper"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
              {messages.map((m) => (
                <Bubble key={m.id} msg={m} />
              ))}

              {showQuick && (
                <div className="mt-1 flex flex-col items-start gap-2">
                  {QUICK_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="rounded-full border border-ink/15 px-3.5 py-1.5 text-xs text-ink-soft transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-paper"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {thinking && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-ink/10 bg-paper px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.25, 1, 0.25] }}
                        transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }}
                        className="h-1.5 w-1.5 rounded-full bg-ink"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2 border-t border-ink/10 px-3 py-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question... / Tulis pertanyaanmu..."
                className="h-10 flex-1 rounded-full border border-ink/15 bg-paper px-4 text-sm outline-none transition-colors placeholder:text-mute focus:border-ink"
                aria-label="Ask the portfolio assistant"
              />
              <button
                type="submit"
                disabled={!input.trim() || thinking}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-opacity disabled:opacity-30"
              >
                ➤
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
