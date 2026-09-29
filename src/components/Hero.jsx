import { motion } from "framer-motion";
import { profile, socials } from "../data/portfolio";
import RobotHero3D from "./RobotHero3D";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const rise = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-5 pt-28 md:px-8 md:pt-32"
    >
      {/* faint grid backdrop */}
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[60vh] opacity-40"
      />

      {/* 3D robot — full-hero canvas layer BEHIND content. The canvas itself
          stays pointer-enabled so the robot's love-eyes click interaction works;
          text/buttons live above it (z-10) and receive their own clicks. */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 block"
      >
        <RobotHero3D className="h-full w-full" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-end lg:justify-between">
          {/* Left — type */}
          <div className="max-w-4xl">
            <motion.p variants={rise} className="micro-label text-mute">
              Portfolio — 2026
            </motion.p>

            <motion.h1
              variants={rise}
              className="font-display mt-6 text-[clamp(2.5rem,11.5vw,8.5rem)] leading-[0.92] font-semibold"
            >
              YONATHAN
              <br />
              <span className="text-ink-soft">CH</span>
            </motion.h1>

            <motion.div
              variants={rise}
              className="mt-8 flex flex-col gap-6 md:flex-row md:items-start md:gap-14"
            >
              <p className="max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
                {profile.role} — Currently{" "}
                <span className="text-ink">open to new opportunities</span>.
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#work"
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform duration-300 hover:scale-[1.03]"
                  >
                    View My Work
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↓
                    </span>
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm font-medium transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    Let&apos;s Talk ↗
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* bottom meta row */}
        <motion.div
          variants={rise}
          className="mt-16 flex items-center justify-between border-t border-ink/10 pt-6 pb-8 md:mt-24"
        >
          <div className="flex gap-6 text-sm">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep text-ink-soft hover:text-ink"
              >
                {s.name}
              </a>
            ))}
          </div>
          <a
            href="#work"
            className="micro-label hidden items-center gap-2 text-mute transition-colors hover:text-ink md:inline-flex"
          >
            Scroll ↓
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
