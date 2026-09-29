import { motion } from "framer-motion";
import { profile, socials } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1];

const Footer = () => (
  <footer className="bg-ink px-5 pb-10 pt-4 text-paper md:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease }}
      className="mx-auto max-w-7xl"
    >
      <div className="flex flex-col gap-6 border-t border-paper/10 pt-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-6 text-sm">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep text-paper/60 transition-colors hover:text-paper"
            >
              {s.name} ↗
            </a>
          ))}
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="link-sweep w-fit text-sm text-paper/60 transition-colors hover:text-paper"
        >
          Back to top ↑
        </button>
      </div>

      <p className="font-display mt-8 select-none text-[11.5vw] leading-none font-semibold tracking-tight text-paper/10 md:text-[9vw]">
        YONATHAN C.
      </p>

      <div className="mt-6 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.firstName} {profile.lastName}. All rights reserved.</p>
        <p>Built with React</p>
      </div>
    </motion.div>
  </footer>
);

export default Footer;
