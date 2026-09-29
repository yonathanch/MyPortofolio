import { projects, skillCategories, experience, profile, socials } from "../data/portfolio";

// ============================================================
// KNOWLEDGE BASE — built 100% from existing portfolio data.
// The assistant never invents facts; anything not present here
// is answered with an explicit "not available" response.
// ============================================================

export const knowledge = {
  profile,
  projects,
  skillCategories,
  experience,
  socials,
  categories: [...new Set(projects.map((p) => p.category))],
  stats: {
    projectCount: projects.length,
    techCount: skillCategories.reduce((a, c) => a + c.skills.length, 0),
  },
};

// Whitelisted navigation targets (the ONLY scroll targets the assistant
// can produce — enforced in the action handler too).
export const NAV_TARGETS = {
  projects: "work", // home section id
  "it-support": "work",
  about: "about",
  skills: "skills",
  experience: "experience",
  contact: "contact",
  home: "home",
};

export const itSupportProjects = projects.filter(
  (p) => p.category === "IT Support"
);

// ============================================================
// INTENT ENGINE — local, rule-based retrieval. No API key, no
// network. Structured actions only (never arbitrary JS).
// ============================================================

const has = (text, ...words) => words.some((w) => text.includes(w));

const findProject = (text) => {
  const t = text.toLowerCase();
  const alias = {
    "medical record": "Rekam Medis",
    "rekam medis": "Rekam Medis",
    clinic: "Rekam Medis",
    pos: "Point Of Sale",
    "point of sale": "Point Of Sale",
    "cashier": "Point Of Sale",
    inventory: "Inventory App",
    ticketing: "api-ticketing-system",
    ticket: "api-ticketing-system",
    blog: "BlogsApp-Laravel",
    "movie": "Movie App",
    "chat": "Realtime Chat App",
    "realtime": "Realtime Chat App",
    massage: "Massage-website",
    emading: "Emading-jwp",
    "e-mading": "Emading-jwp",
    balink: "admin-balink",
    "jessy": "Jessyfood-website",
    "restaurant": "Jessyfood-website",
    todolist: "Laravel-Todolist-Api",
    "to-do": "Laravel-Todolist-Api",
  };
  for (const [key, title] of Object.entries(alias)) {
    if (t.includes(key)) return projects.find((p) => p.title === title);
  }
  return projects.find((p) => t.includes(p.title.toLowerCase()));
};

const techMatches = (t, project) =>
  project.technologies.some((tech) => t.includes(tech.toLowerCase()));

const projectActions = (project) => {
  const actions = [];
  if (project.demoType === "linkedin-video" && project.demo) {
    actions.push({
      type: "external_link",
      url: project.demo,
      label: "Watch Demo on LinkedIn ↗",
    });
  } else if (project.demo) {
    actions.push({
      type: "external_link",
      url: project.demo,
      label: "Open Live Demo ↗",
    });
  }
  if (project.url?.includes("github.com")) {
    actions.push({
      type: "external_link",
      url: project.url,
      label: "GitHub Repo ↗",
    });
  }
  return actions;
};

// ---------------- Intent handlers ----------------// Is the question written in Indonesian? Simple heuristic over common ID
// words — used to mirror the visitor's language in the reply.
const isIndonesian = (t) =>
  has(
    t,
    "apa", "siapa", "bagaimana", "gimana", "yang", "adalah", "dia", "punya", "bisa",
    "projek", "proyek", "keahlian", "kemampuan", "pengalaman", "kontak", "hubungi",
    "caranya", "dimana", "di mana", "berapa", "apakah", "tolong", "buat", "pakai",
    "pernah", "suka", "ceritakan", "jelasin", "jelaskan", "tentang", "nya"
  );

const intents = [
  // Identity — works in Indonesian too ("siapa nama pembuat ini")
  {
    match: (t) =>
      has(t, "who is", "who made", "who built", "pembuat", "pemilik", "siapa nama", "siapa yang", "fullname", "nama lengkap", "nama dia", "namanya"),
    respond: () => ({
      message: `The portfolio owner is ${profile.firstName} ${profile.lastName}, a ${profile.role}.`,
      actions: [{ type: "navigate", target: "about", label: "About Me →" }],
    }),
  },

  // Home navigation ("home", "back to home", "ke halaman utama", dll)
  {
    match: (t) =>
      /^(home|beranda|halaman utama)$/.test(t.trim()) ||
      has(t, "go home", "go to home", "back to home", "ke home", "halaman home", "ke halaman utama", "halaman beranda", "kembali ke home"),
    respond: (t) => ({
      message: isIndonesian(t)
        ? "Baik, mengarahkan Anda kembali ke halaman utama."
        : "Sure, taking you back to the home page.",
      actions: [
        { type: "navigate", target: "home", label: isIndonesian(t) ? "Ke Home →" : "Go Home →" },
      ],
    }),
  },

  // Resume / CV — download link from existing data
  {
    match: (t) => has(t, "resume", "cv", "curriculum vitae", "download cv", "riwayat hidup"),
    respond: (t) => ({
      message: isIndonesian(t)
        ? `Resume/CV Yonathan bisa Anda unduh di sini: ${profile.cv}`
        : `You can download Yonathan's resume here: ${profile.cv}`,
      actions: [
        { type: "external_link", url: profile.cv, label: isIndonesian(t) ? "Download Resume ↓" : "Download Resume ↓" },
      ],
    }),
  },

  // Language meta — user asks the assistant to switch languages
  {
    match: (t) => has(t, "bahasa indonesia", "pakai bahasa", "ganti bahasa", "indonesian", "indo aja"),
    respond: () => ({
      message: `Tentu, saya bisa menjawab dalam Bahasa Indonesia. Nama pemilik portfolio ini adalah ${profile.firstName} ${profile.lastName}, seorang ${profile.role}. Silakan tanya tentang project, skills, experience, IT Support, atau kontak.`,
      actions: [{ type: "navigate", target: "projects", label: "Lihat Project →" }],
    }),
  },

  // Greetings
  {
    match: (t) =>
      /^(hi|hello|hey|halo|hai)\b/.test(t) || has(t, "good morning", "good afternoon"),
    respond: () => ({
      message:
        "Hi! I'm the portfolio assistant. I can help you learn about Yonathan's projects, skills, experience, and IT Support work. What would you like to know?",
      actions: [],
    }),
  },

  // Contact / hiring
  {
    match: (t) =>
      has(t, "contact", "email", "hire", "reach", "linkedin", "github", "instagram", "hubungi", "menghubungi", "menghub"),
    respond: (t) => ({
      message: isIndonesian(t)
        ? `Anda bisa menghubungi Yonathan melalui email ${profile.email}, atau lewat profil LinkedIn dan GitHub miliknya.`
        : `You can reach Yonathan via email at ${profile.email}, or through his LinkedIn and GitHub profiles.`,
      actions: [
        { type: "navigate", target: "contact", label: isIndonesian(t) ? "Hubungi Saya →" : "Contact Me →" },
        {
          type: "external_link",
          url: socials.find((s) => s.name === "LinkedIn")?.url,
          label: "LinkedIn ↗",
        },
        {
          type: "external_link",
          url: socials.find((s) => s.name === "GitHub")?.url,
          label: "GitHub ↗",
        },
      ],
    }),
  },

  // IT Support / networking
  {
    match: (t) =>
      has(t, "it support", "itsupport", "networking", "network", "hardware", "troubleshoot"),
    respond: (t) => {
      const it = itSupportProjects;
      if (!it.length)
        return {
          message: "There is no IT Support information available in the portfolio yet.",
          actions: [],
        };
      const names = it.map((p) => p.title.replace("IT Support — ", "")).join(" and ");
      const id = isIndonesian(t);
      const video = it.find((p) => p.demoType === "linkedin-video");
      const actions = [
        {
          type: "navigate",
          target: "it-support",
          label: id ? "Lihat IT Support →" : "View IT Support →",
          route: "/projects?filter=IT Support",
        },
      ];
      if (video?.demo)
        actions.push({
          type: "external_link",
          url: video.demo,
          label: id ? "Lihat Demo di LinkedIn ↗" : "Watch Demo on LinkedIn ↗",
        });
      return {
        message: id
          ? `Yonathan memiliki project IT Support & Networking yang mencakup ${names}. Demo untuk project berbasis video tersedia di LinkedIn; sisanya didokumentasikan dengan screenshot.`
          : `Yonathan has IT Support & Networking projects covering ${names}. The demo for the video-based project is available on LinkedIn; the rest is documented with screenshots.`,
        actions,
      };
    },
  },

  // Skills / technologies
  {
    match: (t) =>
      has(t, "skill", "technolog", "tech stack", "stack", "tools", "bahasa pemrograman", "framework", "keahlian", "kemampuan", "menguasai"),
    respond: (t) => {
      const id = isIndonesian(t);
      // Specific tech check, e.g. "does he know react?" / "apakah dia bisa react"
      const flat = skillCategories.flatMap((c) => c.skills);
      const check = flat.find((s) => t.includes(s.toLowerCase()));
      if (check && (has(t, "know", "use", "does he", "can he") || id)) {
        return {
          message: id
            ? `Ya — ${check} adalah bagian dari keahlian Yonathan, dalam kategori ${skillCategories.find((c) => c.skills.includes(check))?.category}.`
            : `Yes — ${check} is part of Yonathan's toolkit. It appears in his ${skillCategories.find((c) => c.skills.includes(check))?.category} skills.`,
          actions: [{ type: "navigate", target: "skills", label: id ? "Lihat Skills →" : "View Skills →" }],
        };
      }
      const backend = skillCategories.find((c) => c.category.includes("Backend"))?.skills;
      const frontend = skillCategories.find((c) => c.category.includes("Frontend"))?.skills;
      if (has(t, "backend"))
        return {
          message: id ? `Teknologi backend: ${backend?.join(", ")}.` : `Backend technologies: ${backend?.join(", ")}.`,
          actions: [{ type: "navigate", target: "skills", label: id ? "Lihat Skills →" : "View Skills →" }],
        };
      if (has(t, "frontend", "front end"))
        return {
          message: id ? `Teknologi frontend: ${frontend?.join(", ")}.` : `Frontend technologies: ${frontend?.join(", ")}.`,
          actions: [{ type: "navigate", target: "skills", label: id ? "Lihat Skills →" : "View Skills →" }],
        };
      return {
        message: id
          ? `Yonathan menggunakan ${flat.slice(0, 6).join(", ")} dan ${flat.length - 6} teknologi lain di bidang frontend, backend, dan produktivitas.`
          : `Yonathan works with ${flat.slice(0, 6).join(", ")} and ${flat.length - 6} other technologies across frontend, backend, and productivity tools.`,
        actions: [{ type: "navigate", target: "skills", label: id ? "Lihat Skills →" : "View Skills →" }],
      };
    },
  },

  // Experience / education / training
  {
    match: (t) => has(t, "experience", "work", "career", "education", "training", "certificat", "bootcamp", "msib", "alterra", "dicoding", "pengalaman", "pendidikan", "pelatihan", "sertifikat", "karir", "bekerja"),
    respond: (t) => {
      const id = isIndonesian(t);
      if (has(t, "education", "training", "certificat", "bootcamp", "msib", "alterra", "dicoding", "pendidikan", "pelatihan", "sertifikat")) {
        return {
          message: id
            ? "Yonathan berlatih di Alterra Academy (ReactJS, MSIB batch 4) dan Dicoding Indonesia (Full-stack Development, MSIB batch 5)."
            : "Yonathan trained at Alterra Academy (ReactJS, MSIB batch 4) and Dicoding Indonesia (Full-stack Development, MSIB batch 5).",
          actions: [{ type: "navigate", target: "experience", label: id ? "Lihat Experience →" : "View Experience →" }],
        };
      }
      const items = experience
        .map((e) => `${e.title} (${e.org})`)
        .slice(0, 3)
        .join(", ");
      return {
        message: id
          ? `Latar belakangnya antara lain: ${items}. Detail lengkapnya ada di timeline experience.`
          : `His background includes ${items}, among others. Details are on the experience timeline.`,
        actions: [{ type: "navigate", target: "experience", label: id ? "Lihat Experience →" : "View Experience →" }],
      };
    },
  },

  // Recommendation: "I'm looking for a React developer"
  {
    match: (t) => has(t, "looking for", "need someone", "need a developer", "recommend", "mencari", "butuh", "cari developer"),
    respond: (t) => {
      const techs = ["React", "Laravel", "Node", "Php", "Vue", "Mongo"];
      const wanted = techs.filter((tech) => t.includes(tech.toLowerCase()));
      const pool = wanted.length
        ? projects.filter((p) => p.technologies.some((tech) => wanted.some((w) => tech.toLowerCase().includes(w.toLowerCase()))))
        : projects.slice(0, 3);
      const list = pool
        .slice(0, 3)
        .map((p) => `• ${p.title} — ${p.technologies.slice(0, 3).join(" · ")}`)
        .join("\n");
      const id = isIndonesian(t);
      return {
        message: id
          ? `Mungkin project-project ini relevan untuk Anda:\n${list}`
          : `You may want to check these projects:\n${list}`,
        actions: [{ type: "navigate", target: "projects", label: id ? "Lihat Project →" : "View Projects →" }],
      };
    },
  },

  // Projects listing
  {
    match: (t) => has(t, "project", "portfolio", "built", "build", "made", "work sample", "showcase", "projek", "proyek", "membuat", "dibuat", "karya"),
    respond: (t) => {
      const id = isIndonesian(t);
      const project = findProject(t);
      if (project) {
        return {
          message: id
            ? `${project.title} — ${project.description.slice(0, 220)}${project.description.length > 220 ? "…" : ""} Dibangun dengan ${project.technologies.join(",")}.`
            : `${project.title} — ${project.description.slice(0, 220)}${project.description.length > 220 ? "…" : ""} Built with ${project.technologies.join(", ")}.`,
          actions: projectActions(project),
        };
      }
      const reactOnly = has(t, "react") &&
        !has(t, "laravel", "php");
      const pool = reactOnly
        ? projects.filter((p) => p.technologies.some((x) => x.toLowerCase().includes("react")))
        : projects;
      return {
        message: id
          ? `Yonathan telah membangun ${projects.length} project di bidang ${knowledge.categories.join(", ")}. Beberapa di antaranya: ${pool.slice(0, 3).map((p) => p.title).join(", ")}.`
          : `Yonathan has built ${projects.length} projects across ${knowledge.categories.join(", ")}. Notable ones: ${pool.slice(0, 3).map((p) => p.title).join(", ")}.`,
        actions: [{ type: "navigate", target: "projects", label: id ? "Lihat Project →" : "View Projects →" }],
      };
    },
  },

  // Fallback
  {
    match: () => true,
    respond: (t) => ({
      message: isIndonesian(t)
        ? "Saya tidak memiliki informasi tersebut di portfolio. Saya bisa menjelaskan tentang project, skills, pengalaman, IT Support, atau cara menghubungi Yonathan."
        : "I don't have that information in the portfolio. I can tell you about Yonathan's projects, skills, experience, IT Support work, or how to contact him.",
      actions: [{ type: "navigate", target: "contact", label: isIndonesian(t) ? "Hubungi Saya →" : "Contact Me →" }],
    }),
  },
];

export const answer = (question) => {
  const t = (question || "").toLowerCase().trim();
  if (!t) return null;
  // Try specific-project match first when the question names a technology
  // present in a project, e.g. "POS system technologies".
  const named = findProject(t);
  if (named && techMatches(t, named)) {
    return {
      message: isIndonesian(t)
        ? `${named.title} dibangun dengan ${named.technologies.join(", ")}.`
        : `${named.title} was built with ${named.technologies.join(", ")}.`,
      actions: projectActions(named),
    };
  }
  const intent = intents.find((i) => i.match(t));
  return intent.respond(t);
};
