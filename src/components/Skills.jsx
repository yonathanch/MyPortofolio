import { motion } from "framer-motion";
import { skillCategories, skillsMarquee } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1];

const Skills = () => (
  <section
    id="skills"
    className="border-t border-ink/10 bg-paper-deep px-5 py-24 md:px-8 md:py-32"
  >
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease }}
        className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="micro-label text-mute">(04) — Skills</p>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Skills<span className="text-accent">.</span>
          </h2>
        </div>
      </motion.div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 md:grid-cols-2">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease }}
            className="bg-paper p-8"
          >
            <p className="micro-label text-mute">
              {String(i + 1).padStart(2, "0")} / {cat.category}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-ink/15 bg-paper px-3.5 py-1.5 text-sm transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Monochrome marquee */}
    <div className="relative mt-20 overflow-hidden border-y border-ink/10 py-6">
      <div className="animate-marquee flex w-max items-center">
        {[...skillsMarquee, ...skillsMarquee].map((skill, i) => (
          <span
            key={skill + i}
            className="font-display mx-6 flex items-center gap-12 text-3xl font-medium tracking-tight text-ink/70 md:text-5xl"
          >
            {skill}
            <span className="text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
