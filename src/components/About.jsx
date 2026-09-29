import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1];

const About = () => (
  <section
    id="about"
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
        <p className="micro-label text-mute">(02) — About Me</p>
        <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          BEHIND
          <br />
          THE CODE
          <span className="text-accent">.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="md:col-span-8"
      >
        <p className="font-display max-w-2xl text-xl leading-snug tracking-tight text-ink md:text-3xl">
          I build web applications that solve real-world problems — from
          intuitive interfaces to reliable backend systems. My background spans
          Fullstack Development and IT Support
        </p>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
          {profile.about}
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;
