import { motion } from "framer-motion";
import { profile, socials } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1];

const Contact = () => (
  <section
    id="contact"
    className="border-t border-ink/10 bg-ink px-5 py-24 text-paper md:px-8 md:py-36"
  >
    <div className="mx-auto max-w-7xl">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease }}
        className="micro-label text-paper/50"
      >
        (05) — Contact
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, delay: 0.1, ease }}
        className="font-display mt-6 text-[clamp(2.6rem,10.5vw,7.5rem)] leading-[0.95] font-semibold tracking-tight"
      >
        LET&apos;S BUILD
        <br />
        SOMETHING
        <br />
        <span className="text-paper/40">TOGETHER</span>
        <span className="text-accent">.</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
        className="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
      >
        <p className="max-w-md text-base leading-relaxed text-paper/60">
          I&apos;m always open to new opportunities, collaborations, or just a
          friendly chat — the fastest way to reach me is by email.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex w-fit items-center gap-3 rounded-full bg-paper px-8 py-4 text-base font-semibold text-ink transition-transform duration-300 hover:scale-[1.04]"
        >
          Let&apos;s Talk
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-paper transition-transform duration-300 group-hover:rotate-45">
            ↗
          </span>
        </a>
      </motion.div>

      {/* Contact grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
        className="mt-20 grid gap-px overflow-hidden rounded-xl bg-paper/10 md:grid-cols-4"
      >
        <a
          href={`mailto:${profile.email}`}
          className="group bg-ink p-6 transition-colors duration-300 hover:bg-ink-soft"
        >
          <p className="micro-label text-paper/40">Email</p>
          <p className="mt-3 break-all text-sm font-medium group-hover:underline">
            {profile.email}
          </p>
        </a>
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-ink p-6 transition-colors duration-300 hover:bg-ink-soft"
          >
            <p className="micro-label text-paper/40">{s.name}</p>
            <p className="mt-3 flex items-center gap-2 text-sm font-medium">
              {s.url.replace("https://", "").replace("www.", "").split("/")[0]}
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                ↗
              </span>
            </p>
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Contact;
