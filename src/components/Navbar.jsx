import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { navLinks, socials, profile } from "../data/portfolio";
import { setPendingHash, scrollToIdWhenReady } from "../utils/scroll";
import ThemeToggle from "./ui/theme-toggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (pathname !== "/") return;
      const ids = ["home", "work", "about", "experience", "skills", "contact"];
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (link) => {
    setOpen(false);
    if (link.to === "/projects") {
      navigate("/projects");
      return;
    }
    if (!link.hash) {
      // Plain route (e.g. Home): navigate, or scroll to top if already there.
      if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
      else navigate(link.to);
      return;
    }
    if (pathname !== "/") {
      // Cross-route: park the hash, navigate, jump instantly once mounted.
      setPendingHash(link.hash);
      navigate("/");
    } else {
      scrollToIdWhenReady(link.hash);
    }
  };

  const isActive = (link) => {
    if (link.to === "/projects") return pathname === "/projects";
    if (!link.hash) return pathname === "/";
    return pathname === "/" && active === link.hash.replace("#", "");
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-8">
          {/* Brand */}
          <button
            onClick={() => {
              setOpen(false);
              if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                navigate("/");
              }
            }}
            className="font-display text-lg font-semibold tracking-tight"
            aria-label="Back to home"
          >
            YC<span className="text-accent">©</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => go(link)}
                  className={`link-sweep text-sm transition-colors duration-300 ${
                    isActive(link) ? "text-ink" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`ml-1 inline-block h-1 w-1 rounded-full align-middle transition-opacity duration-300 ${
                      isActive(link) ? "bg-accent opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href={profile.cv}
              download
              className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-ink-soft md:inline-flex"
            >
              Download Resume ↓
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hidden rounded-full border border-ink/20 px-4 py-1.5 text-sm font-medium transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper md:inline-block"
            >
              Let&apos;s Talk ↗
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-ink/15 md:hidden"
            >
              <span
                className={`h-px w-4 bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-4 bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-paper md:hidden"
          >
            <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.4 }}
                    className="border-b border-ink/10"
                  >
                    <button
                      onClick={() => go(link)}
                      className="font-display w-full py-5 text-left text-4xl font-medium tracking-tight"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="flex items-center justify-between text-sm text-ink-soft">
                <ThemeToggle />
                <div className="flex gap-5">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-sweep"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
                <a href={profile.cv} download className="link-sweep">
                  Resume ↓
                </a>
                <a href={`mailto:${profile.email}`}>Email ↗</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
