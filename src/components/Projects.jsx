import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { Reveal, ProjectRow, GalleryModal, ease } from "./shared";

// Home page: only the 3 most recent projects, then a link to the full list.
const FEATURED_COUNT = 3;

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const featured = projects.slice(0, FEATURED_COUNT);

  return (
    <section id="work" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="micro-label text-mute">(01) — Selected Work</p>
            <h2 className="font-display mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
              PROJECTS<span className="text-accent">.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
            {projects.length} end-to-end builds — the latest three below, all
            {` ${projects.length}`} on the projects page.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-16">
          {featured.map((project, i) => (
            <ProjectRow
              key={project.title}
              project={project}
              index={i}
              num={String(projects.indexOf(project) + 1).padStart(2, "0")}
              onOpen={() => setSelected(project)}
            />
          ))}
        </div>

        {/* View-all CTA */}
        <Reveal className="mt-4 flex justify-center border-t border-ink/10 pt-14">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 rounded-full border border-ink/20 px-8 py-4 text-sm font-medium transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            View All {projects.length} Projects
            <motion.span
              aria-hidden
              className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-paper transition-transform duration-300 group-hover:translate-x-1"
              transition={{ duration: 0.3, ease }}
            >
              →
            </motion.span>
          </Link>
        </Reveal>
      </div>

      <GalleryModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;
