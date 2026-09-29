import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { Reveal, ProjectRow, GalleryModal } from "./shared";

const PAGE_SIZE = 5;

const ProjectsPage = () => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("Project");
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  // Deep-link support: /projects?filter=IT+Support (used by the AI assistant's
  // "View IT Support →" action).
  useEffect(() => {
    const f = searchParams.get("filter");
    if (f) setFilter(f);
  }, [searchParams]);

  // Only two buckets: Project (everything non-IT-Support) and IT Support.
  const categories = ["Project", "IT Support"];
  const inCategory =
    filter === "IT Support"
      ? projects.filter((p) => p.category === "IT Support")
      : projects.filter((p) => p.category !== "IT Support");
  const totalPages = Math.max(1, Math.ceil(inCategory.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const visible = inCategory.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  const switchFilter = (cat) => {
    setFilter(cat);
    setPage(1);
    if (searchParams.get("filter")) setSearchParams({}, { replace: true });
  };

  const goToPage = (p) => {
    setPage(p);
    document
      .getElementById("work")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="px-5 pb-24 pt-32 md:px-8 md:pt-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="micro-label text-mute">
              <Link to="/" className="link-sweep hover:text-ink">
                Home
              </Link>{" "}
              / Projects
            </p>
            <h1 className="font-display mt-4 break-words text-4xl font-semibold tracking-tight sm:text-5xl md:text-7xl">
              ALL PROJECTS<span className="text-accent">.</span>
            </h1>
          </div>
        </Reveal>

        {/* Category filter — 2 buckets */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const count =
              cat === "IT Support"
                ? projects.filter((p) => p.category === "IT Support").length
                : projects.filter((p) => p.category !== "IT Support").length;
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => switchFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors duration-300 ${
                  active
                    ? "bg-ink text-paper"
                    : "border border-ink/15 text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                {cat}
                <span
                  className={`ml-1.5 text-xs ${
                    active ? "text-paper/60" : "text-mute"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Rows */}
        <motion.div layout className="mt-8 md:mt-14">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectRow
                key={project.title}
                project={project}
                index={i}
                num={String(projects.indexOf(project) + 1).padStart(2, "0")}
                onOpen={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => goToPage(Math.max(1, safePage - 1))}
              disabled={safePage === 1}
              aria-label="Previous page"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-sm transition-colors hover:border-ink disabled:opacity-30 disabled:hover:border-ink/15"
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goToPage(p)}
                aria-label={`Page ${p}`}
                aria-current={p === safePage ? "page" : undefined}
                className={`h-9 w-9 rounded-full text-sm transition-colors ${
                  p === safePage
                    ? "bg-ink text-paper"
                    : "border border-ink/15 text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => goToPage(Math.min(totalPages, safePage + 1))}
              disabled={safePage === totalPages}
              aria-label="Next page"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-sm transition-colors hover:border-ink disabled:opacity-30 disabled:hover:border-ink/15"
            >
              ›
            </button>
          </div>
        )}

        {/* Back home */}
        <Reveal className="mt-4 flex justify-center border-t border-ink/10 pt-14">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 rounded-full border border-ink/20 px-8 py-4 text-sm font-medium transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-paper transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Home
          </Link>
        </Reveal>
      </div>

      <GalleryModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default ProjectsPage;
