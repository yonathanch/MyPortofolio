import { motion } from "framer-motion";
import { experience, profile } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1];

const Experience = () => (
  <section
    id="experience"
    className="border-t border-ink/10 px-5 py-24 md:px-8 md:py-32"
  >
    <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-12">
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease }}
        className="md:col-span-4"
      >
        <p className="micro-label text-mute">(03) — Experience</p>
        <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          THE
          <br />
          JOURNEY
          <span className="text-accent">.</span>
        </h2>
        <a
          href={profile.cv}
          download
          className="link-sweep mt-8 inline-block text-sm font-medium"
        >
          Download Résumé ↓
        </a>
      </motion.div>

      <div className="md:col-span-8">
        {experience.map((item, i) => (
          <motion.div
            key={item.title + item.period}
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.05, ease }}
            className="group grid grid-cols-1 gap-2 border-t border-ink/10 py-8 transition-colors duration-300 last:border-b hover:bg-paper-deep md:grid-cols-12 md:items-baseline md:gap-6 md:px-4"
          >
            <p className="micro-label text-mute md:col-span-3">
              {item.period}
            </p>
            <div className="md:col-span-5">
              <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">{item.org}</p>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft md:col-span-4">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
