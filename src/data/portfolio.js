// ============================================================
// PORTFOLIO DATA — YONATHAN CHRISTIANTO
// All data below is migrated 1:1 from the existing portfolio.
// Nothing invented, nothing removed.
// ============================================================

// ---------- Profile ----------
export const profile = {
  firstName: "Yonathan",
  lastName: "Christianto",
  role: "Fullstack Developer & IT Support",
  tagline: "React · Laravel · Node.js",
  about:
    "Informatics graduate with hands-on experience in Full-Stack Development, IT support, and computer networking. Experienced in web application development, database management, hardware and network troubleshooting, and technical support. Proficient in modern web technologies and familiar with network configuration, IP addressing, subnetting, and system deployment.",
  photo: "/ghibli.png",
  photoCard: "/pp2.jpg",
  cv: "/Yonathan_Christianto-CV.pdf",
  email: "chyonatan@gmail.com",
};

// ---------- Social links (existing) ----------
export const socials = [
  { name: "GitHub", url: "https://github.com/yonathanch" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yonathan-christianto/",
  },
  { name: "Instagram", url: "https://www.instagram.com/natann.ch/" },
];

// ---------- Navigation ----------
// "Project" routes to the dedicated all-projects page; the rest scroll to
// sections on the home page.
export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Project", to: "/projects" },
  { label: "About", to: "/", hash: "#about" },
  { label: "Experience", to: "/", hash: "#experience" },
  { label: "Contact", to: "/", hash: "#contact" },
];

// ---------- Experience (existing background only — no invented data) ----------
export const experience = [
  {
    period: "Jun 2026 - Sep 2026",
    title: " The Computer and Network Technician Training Program",
    org: "Pusat Pelatihan Kerja Daerah Jakarta Utara",
    description:
      "I attended training at PPKD North Jakarta, covering modules on troubleshooting and maintaining computer systems and networks, operating system and software installation, LAN/WAN, data recovery, printer usage, IP addressing and subnetting, wireless networking, switch and VLAN configuration, and routing using OSPF, RIP, and BGP.",
  },
  {
    period: "Dec 2025 - Mar 2026",
    title: "Fullstack Website Developer",
    org: "Best Master Ware",
    description: "I work as a full-stack developer and IT support.",
  },
  {
    period: "Agt 2023 - Des 2023 ",
    title: "Pengembang Front-End Web Dan Back-End ",
    org: "Dicoding Indonesia",
    description:
      "I was a student in the MSIB program Pengembang Front-End Web Dan Back-End at Dicoding Indonesia SIB Cycle 5",
  },

  {
    period: "Feb 2023 - Jun 2023",
    title: "2023 Complete Front-End Engineer Career with ReactJS",
    org: "Alterra Academy",
    description:
      "I  was a student in the MSIB program 2023 Complete Front-End Engineer Career with ReactJS at Alterra (SIB cycle 4)",
  },
];

// ---------- Projects (14 existing projects, 1:1) ----------
export const projects = [
  {
    title: "Inventory App",
    description:
      "Inventory App is a web-based application used to manage product stock, incoming and outgoing transactions, stock cards, return transactions, stock opname, price increase reports, and stock change monitoring.",
    technologies: ["Laravel", "Jquery", "Ajax"],
    category: "Fullstack",
    url: "https://github.com/yonathanch/Laravel_inventory_app",
    demo: null,
    images: [
      "/output_inventoryApp/1.png",
      "/output_inventoryApp/2.png",
      "/output_inventoryApp/3.png",
      "/output_inventoryApp/4.png",
      "/output_inventoryApp/5.png",
      "/output_inventoryApp/6.png",
      "/output_inventoryApp/7.png",
      "/output_inventoryApp/8.png",
      "/output_inventoryApp/9.png",
      "/output_inventoryApp/10.png",
      "/output_inventoryApp/11.png",
      "/output_inventoryApp/12.png",
      "/output_inventoryApp/13.png",
      "/output_inventoryApp/14.png",
      "/output_inventoryApp/15.png",
      "/output_inventoryApp/16.png",
    ],
  },
  {
    title: "Rekam Medis",
    description:
      "Medical record management app for clinics built with Laravel, Inertia.js, React, and TypeScript, designed to manage patient data and record diagnoses.",
    technologies: [
      "Laravel",
      "Inertia JS",
      "Tailwind Css",
      "Axios",
      "React Select",
    ],
    category: "Fullstack",
    url: "https://github.com/yonathanch/rekam-medis-laravel-react",
    demo: null,
    images: [
      "/output_rekammedis_laravelInertiaReact/1.png",
      "/output_rekammedis_laravelInertiaReact/2.png",
      "/output_rekammedis_laravelInertiaReact/3.png",
      "/output_rekammedis_laravelInertiaReact/4.png",
      "/output_rekammedis_laravelInertiaReact/5.png",
      "/output_rekammedis_laravelInertiaReact/6.png",
      "/output_rekammedis_laravelInertiaReact/7.png",
      "/output_rekammedis_laravelInertiaReact/8.png",
      "/output_rekammedis_laravelInertiaReact/9.png",
    ],
  },
  {
    title: "Point Of Sale",
    description:
      "Point of Sale (POS) System — A web-based sales and inventory management application with real-time transaction processing, financial reporting, and automated stock control features.",
    technologies: ["Laravel", "Jquery", "Ajax"],
    category: "Fullstack",
    url: "https://github.com/yonathanch/point-of-sale",
    demo: null,
    images: [
      "/output_point_of_sale/1.png",
      "/output_point_of_sale/2.png",
      "/output_point_of_sale/3.png",
      "/output_point_of_sale/4.png",
      "/output_point_of_sale/5.png",
      "/output_point_of_sale/6.png",
      "/output_point_of_sale/7.png",
      "/output_point_of_sale/8.png",
      "/output_point_of_sale/9.png",
      "/output_point_of_sale/10.png",
      "/output_point_of_sale/11.png",
      "/output_point_of_sale/12.png",
    ],
  },
  {
    title: "api-ticketing-system",
    description:
      "Managed, processed, and transformed customer or internal requests into structured digital 'tickets' to resolve issues.",
    technologies: ["Laravel"],
    category: "Backend",
    url: "https://github.com/yonathanch/api-ticketing-system",
    demo: null,
    images: [
      "/output_api_ticketing_system/1.login.png",
      "/output_api_ticketing_system/2.get_profile.png",
      "/output_api_ticketing_system/3.getall_ticket.png",
      "/output_api_ticketing_system/4.dashboardstatistic.png",
      "/output_api_ticketing_system/5.register_user.png",
      "/output_api_ticketing_system/6.login_user.png",
      "/output_api_ticketing_system/7.getprofile_user.png",
      "/output_api_ticketing_system/8.createticket_user.png",
      "/output_api_ticketing_system/9.admincreate-reply.png",
      "/output_api_ticketing_system/10.result.png",
      "/output_api_ticketing_system/11.ticketsDB.png",
      "/output_api_ticketing_system/12.tickets-replyDB.png",
    ],
  },
  {
    title: "BlogsApp-Laravel",
    description:
      "Full-featured blog application: Laravel Eloquent, Attach/Detach, Eager Loading, Polymorphic, Authentication, Middleware, Policy & Gates, and File Upload.",
    technologies: ["Laravel"],
    category: "Backend",
    url: "https://github.com/yonathanch/blogs-app-laravel",
    demo: null,
    images: [
      "/output_blogsapp_laravel/1.png",
      "/output_blogsapp_laravel/2.png",
      "/output_blogsapp_laravel/3.png",
      "/output_blogsapp_laravel/4.png",
      "/output_blogsapp_laravel/5.png",
    ],
  },
  {
    title: "InventoryApp-Laravel-Inertia-Vue",
    description: "Create a Inventory app CRUD, dan using authentication breeze",
    technologies: ["Laravel-Inertia-Vue", "Laravel Breeze"],
    category: "Fullstack",
    url: "https://github.com/yonathanch/InventoryApp-LaravelInertiaVue",
    demo: null,
    images: [
      "/output_inventoryapp_laravelinertiavue/1.items.png",
      "/output_inventoryapp_laravelinertiavue/2.items_db.png",
      "/output_inventoryapp_laravelinertiavue/3.create.png",
      "/output_inventoryapp_laravelinertiavue/4.create.png",
      "/output_inventoryapp_laravelinertiavue/5.create_db.png",
      "/output_inventoryapp_laravelinertiavue/6.edit_sctock.png",
      "/output_inventoryapp_laravelinertiavue/7.edit_sctock.png",
      "/output_inventoryapp_laravelinertiavue/8.stock_card.png",
      "/output_inventoryapp_laravelinertiavue/9.delete.png",
      "/output_inventoryapp_laravelinertiavue/10.delete.png",
      "/output_inventoryapp_laravelinertiavue/11.soft_delete.png",
      "/output_inventoryapp_laravelinertiavue/12.delete.png",
    ],
  },
  {
    title: "Laravel-Todolist-Api",
    description:
      "Create a Laravel API on a Todolist project with CRUD features, API resources, authentication login and logout and authorization gates.",
    technologies: ["Laravel", "Sanctum"],
    category: "Backend",
    url: "https://github.com/yonathanch/laravel-todolist-api",
    demo: null,
    images: [
      "/output_laraveltodolist_api/1.get(all).png",
      "/output_laraveltodolist_api/2.get(id).png",
      "/output_laraveltodolist_api/3.users_db.png",
      "/output_laraveltodolist_api/4.creatorLogin.png",
      "/output_laraveltodolist_api/5.personal_acces_token_creator.png",
      "/output_laraveltodolist_api/6.add_token_creator_to_create_data.png",
      "/output_laraveltodolist_api/7.create_data_todos.png",
      "/output_laraveltodolist_api/8.create_data_todos.png",
      "/output_laraveltodolist_api/9.gates_todo_update.png",
      "/output_laraveltodolist_api/10.gates_todo_delete.png",
      "/output_laraveltodolist_api/11.logout_creator.png",
      "/output_laraveltodolist_api/12.adminLogin_to_delete_data.png",
      "/output_laraveltodolist_api/13.adminDelete_todos_id31.png",
      "/output_laraveltodolist_api/14.succes_delete.png",
    ],
  },
  {
    title: "Laravel-Blogs",
    description:
      "Created a blog website using Laravel and sql lite by implementing Eloquent ORM, Database Seeder, N+1, Searching and pagination.",
    technologies: ["Laravel", "Sql Lite"],
    category: "Backend",
    url: "https://github.com/yonathanch/Laravel-blogs",
    demo: null,
    images: ["/1-laravelblog.png", "/2-laravelblog.png"],
  },
  {
    title: "Movie App",
    description: "Movie App with firebase and fetch Api",
    technologies: ["React", "Tailwind", "Firebase", "Axios", "API"],
    category: "Frontend",
    url: "https://movie-app-pi-blue.vercel.app/",
    demo: "https://movie-app-pi-blue.vercel.app/",
    images: ["/movie_app.png"],
  },
  {
    title: "Realtime Chat App",
    description:
      "MERN STACK Project [realtimeChat-app (InstaApp)], Highlight: Tech Stack: Mern + Socket Io + Talwindcss and daisy UI, Zustand (global state management), Authentication & Authorizanation JWT, error handling, Deployment and Responsive design (dekstop/mobile).",
    technologies: [
      "React",
      "Tailwind",
      "Node js",
      "Express.js",
      "Mongo Db",
      "Socket Io",
      "Daisy UI",
    ],
    category: "Fullstack",
    url: "https://realtimechat-app-zfkx.onrender.com/",
    demo: "https://realtimechat-app-zfkx.onrender.com/",
    images: ["/realtime_app.png"],
  },
  {
    title: "Massage-website",
    description:
      "The Massage GI website is a sanctuary of relaxation and body care, inspired by traditional Balinese massage.",
    technologies: ["React", "Tailwind", "Framer-motion"],
    category: "Frontend",
    url: "https://massage-website-one.vercel.app/",
    demo: "https://massage-website-one.vercel.app/",
    images: ["/massage-website.jpg"],
  },
  {
    title: "Emading-jwp",
    description:
      "JeWePe e-mading website is a communication media to provide information to its students in a less formal way. This e-Mading website was created using PHP and MySQL as its database, Error handling was also added. The online magazine (e-mading) will be managed by an admin and can be read by all students. Currently, readers can only read articles. Admins can manage the magazine by logging in. They can input, edit, and delete articles.",
    technologies: ["Php", "Mysql", "Bootstrap", "Deployment"],
    category: "Fullstack",
    url: "https://emadingjewepe.000webhostapp.com/",
    demo: "https://emadingjewepe.000webhostapp.com/",
    images: ["/e-mading2.jpg"],
  },
  {
    title: "admin-balink",
    description:
      "The Balink admin website functions to manage various data within it, starting from adding, editing, and deleting data in the Balink application.",
    technologies: [
      "React",
      "Javascript",
      "Bootstrap",
      "Global state Management and Data Fetching",
    ],
    category: "Frontend",
    url: "https://admin-balink.vercel.app/",
    demo: "https://admin-balink.vercel.app/",
    images: ["/admin-balink.png"],
  },
  {
    title: "Jessyfood-website",
    description:
      "a Restaurant Catalog website using HTML, CSS, JavaScript by implementing PWA, testing, and optimized.",
    technologies: ["Html5", "Css", "Javascript", "PWAs", "Testing Optimized"],
    category: "Frontend",
    images: ["/jesyfood1.png"],
    url: "https://katalog-restaurant-pwa-testing-and-optimized.vercel.app/",
    demo: "https://katalog-restaurant-pwa-testing-and-optimized.vercel.app/",
  },

  // ---------------------------------------------------------------------
  // IT SUPPORT — TODO: replace with real data (currently dummy samples).
  // Video-based demos link to a LinkedIn post; non-video ones show
  // screenshots like regular projects.
  // ---------------------------------------------------------------------
  {
    title:
      "The most basic configuration to connect the ISP link to a PC or LAN",
    description: "Using MikroTik and Winbox.",
    technologies: ["Networking"],
    category: "IT Support",
    demoType: "linkedin-video",
    demo: "https://lnkd.in/p/gKQ-v8TF",
    url: "https://lnkd.in/p/gKQ-v8TF",
    images: [
      "/IT_Support/MikroTik_ISP_Basic_Setup/1.MikroTik_ISP_Basic_Setup.png",
    ],
  },
  {
    title:
      "Install Windows, disassemble the PC, and apply thermal paste to the processor.",
    description:
      "The function of thermal paste on a processor is to: Transfer heat generated by the processor, Prevent overheating and thermal throttling, and Maintain component stability and longevity.",
    technologies: ["Software", "Hardware"],
    category: "IT Support",
    demoType: "screenshots",
    demo: null,
    url: "https://lnkd.in/p/giysQFum",
    images: [
      "/IT_Support/Install_Windows/1.output_install_windows.jpg",
      "/IT_Support/Install_Windows/2.output_install_windows.jpg",
      "/IT_Support/Install_Windows/3.output_install_windows.jpg",
      "/IT_Support/Install_Window/4.output_install_windows.jpg",
      "/IT_Support/Install_Windows/5.output_install_windows.jpg",
      "/IT_Support/Install_Windos/6.output_install_windows.jpg",
    ],
  },
];

// ---------- Skills (existing skills, 1:1) ----------
export const skillCategories = [
  {
    category: "DEVELOPMENT",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.Js",
      "TypeScript",
      "Vue.js",
      "PHP",
      "Laravel",
      "Node.js",
      "Express.js",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
      "Bootstrap",
      "Git / GitHub",
      "WordPress",
    ],
  },
  {
    category: "IT SUPPORT & NETWORKING",
    skills: [
      "Computer Hardware Troubleshooting",
      "Network Troubleshooting",
      "Network Configuration",
      "IP Addressing & Subnetting",
      "Windows & Linux Installation",
      "Printer Setup & Operation",
      "CCTV Setup & Operation",
      "Microsoft Office (Excel, Word, PowerPoint, OneNote)",
    ],
  },
];

// Flat list for the marquee (existing skills only)
export const skillsMarquee = [
  "React",
  "Laravel",
  "JavaScript",
  "PHP",
  "Node Js",
  "Vue JS",
  "Tailwind",
  "Mongo Db",
  "Express",
  "Bootstrap",
  "Wordpress",
  "HTML",
  "CSS",
  "MySQL",
];
