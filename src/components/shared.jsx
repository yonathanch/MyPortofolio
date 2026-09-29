/* eslint-disable react/prop-types -- project uses plain JSX props, matching existing codebase convention */
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ImageReveal = ({ children, className = "" }) => (
  <motion.div
    initial={{ clipPath: "inset(0 0 100% 0)" }}
    whileInView={{ clipPath: "inset(0 0 0% 0)" }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, ease }}
    className={className}
  >
    {children}
  </motion.div>
);

// One editorial project row: large image left/right (alternating), content
// beside it. `num` keeps the original catalog numbering stable.
export const ProjectRow = ({ project, index, num, onOpen }) => {
  const flip = index % 2 === 1;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.985 }}      transition={{ duration: 0.45, ease }}
      className="border-t border-ink/10 py-8 md:py-12"
    >
      <div
        className={`flex flex-col gap-6 md:gap-10 ${
          flip ? "md:flex-row-reverse" : "md:flex-row"
        } md:items-center`
      }>
        <ImageReveal
          className={`w-full md:w-[44%] ${flip ? "md:pl-4" : "md:pr-4"}`}
        >
          <button
            onClick={onOpen}
            className="zoom-frame group relative block w-full cursor-pointer overflow-hidden rounded-xl border border-ink/10 bg-paper-deep"
            aria-label={`Open ${project.title} gallery`}
          >
            <motion.div
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease }}
            >
              <img
                src={project.images[0]}
                alt={`${project.title} preview`}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </motion.div>
            <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-ink/85 px-3 py-1 text-xs text-paper opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
              {project.category === "IT Support" && project.demoType === "linkedin-video"
                ? "🎬 Video demo on LinkedIn — click to open"
                : `+${project.images.length} screenshots`}
            </span>
          </button>
        </ImageReveal>

        <Reveal
          delay={0.1}
          className={`w-full md:w-[56%] ${flip ? "md:pr-2" : "md:pl-2"}`}
        >
          <p className="micro-label text-mute">
            {num} — {project.category}
          </p>
          <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-ink-soft">
            {project.description}
          </p>

          <div className="mt-3.5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink-soft"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-5">
            {project.category === "IT Support" && project.demoType === "linkedin-video" ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium"
              >
                Live Demo on LinkedIn 🎬
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-paper transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </span>
              </a>
            ) : project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium"
              >
                Live Demo
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-paper transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </span>
              </a>
            ) : (
              <button
                onClick={onOpen}
                className="group inline-flex items-center gap-2 text-sm font-medium"
              >
                View Screenshots ↗
              </button>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep text-sm text-ink-soft hover:text-ink"
              >
                {project.url.includes("github.com") ? "GitHub" : "Open Site"} ↗
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </motion.article>
  );
};

// Full-screen screenshot gallery modal with keyboard navigation and thumbs.
export const GalleryModal = ({ project, onClose }) => {
  const [current, setCurrent] = useState(0);
  const images = project ? project.images : [];

  const close = useCallback(() => onClose(), [onClose]);

  const next = useCallback(() => {
    setCurrent((c) => (images.length ? (c + 1) % images.length : 0));
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((c) =>
      images.length ? (c - 1 + images.length) % images.length : 0
    );
  }, [images.length]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [project, close, next, prev]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col bg-ink/95 p-4 md:p-10"
          onClick={close}
        >
          <div
            className="flex items-center justify-between text-paper"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="micro-label text-paper/50">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-1 text-xl font-medium">
                {project.title}
              </h3>
            </div>
            <button
              onClick={close}
              aria-label="Close gallery"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 text-lg transition-colors hover:bg-paper hover:text-ink"
            >
              ×
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={project.title + current}
                src={images[current]}
                alt={`${project.title} screenshot ${current + 1}`}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.25 }}
                className="max-h-[68vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-0 flex h-11 w-11 items-center justify-center rounded-full border border-paper/30 bg-ink/60 text-paper backdrop-blur transition-colors hover:bg-paper hover:text-ink md:-left-2"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-0 flex h-11 w-11 items-center justify-center rounded-full border border-paper/30 bg-ink/60 text-paper backdrop-blur transition-colors hover:bg-paper hover:text-ink md:-right-2"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div
              className="mt-5 flex gap-2 overflow-x-auto pb-1"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setCurrent(i)}
                  className={`h-14 w-24 shrink-0 overflow-hidden rounded-md border transition-opacity ${
                    i === current
                      ? "border-paper opacity-100"
                      : "border-transparent opacity-40 hover:opacity-80"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
