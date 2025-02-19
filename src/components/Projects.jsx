import massageWebsite from "/public/massage-website.jpg";
import emading from "/public/e-mading2.jpg";
import adminBalink from "/public/admin-balink.png";
import moneyMingle from "/public/moneyMingle.jpg";
import jessyFood from "/public/jesyfood1.png";
import cryptoSearch from "/public/cryptosearch1.png";
import bookShelf from "/public/bookshelf.png";
import yejiStore from "/public/yeji_store.png";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: massageWebsite,
    title: "Massage-website",
    description:
      "The Massage GI website is a sanctuary of relaxation and body care, inspired by traditional Balinese massage",
    technologies: ["React", "Tailwind", "Framer-motion"],
    url: "https://massage-website-one.vercel.app/",
  },
  {
    image: emading,
    title: "Emading-jwp",
    description:
      "JeWePe e-mading website is a communication media to provide information to its students in a less formal way, This e-Mading website was created using PHP and MySQL as its database, Error handling was also added. The online magazine (e-mading) will be managed by an admin and can be read by all students. Currently, readers can only read articles.Admins can manage the magazine by logging in. They can input, edit, and delete articles.",
    technologies: ["Php", "Mysql", "Bootstrap", "Deployment"],
    url: "https://emadingjewepe.000webhostapp.com/",
  },
  {
    image: adminBalink,
    title: "admin-balink",
    description:
      "The Balink admin website functions to manage various data within it, starting from adding, editing, and deleting data in the Balink application",
    technologies: [
      "React",
      "Javascript",
      "Bootstrap",
      "Global state Management and Data Fetching ",
    ],
    url: "https://admin-balink.vercel.app/",
  },
  {
    image: moneyMingle,
    title: "Money-Mingle",
    description:
      "MoneyMingle is a revolutionary step in responding to personal financial challenges faced by many individuals in this digital era. The website is designed to manage simple financial data digitally",
    technologies: [
      "Html5",
      "css",
      "Javascript",
      "Node Js",
      "Hapi.js",
      "MySql",
      "Bootstrap",
    ],
  },
  {
    image: jessyFood,
    title: "Jessyfood-website",
    description:
      "a Restaurant Catalog website using HTML, CSS, JavaScript by implementing PWA,testing, and optimized",
    technologies: ["Html5", "Css", "Javascript", "PWAs", "Testing Optimized"],
    url: "https://katalog-restaurant-pwa-testing-and-optimized.vercel.app/",
  },
  {
    image: cryptoSearch,
    title: "CryptoSearch-website",
    description:
      "Web Application CryptoSearch with ES6, Custom Element, NPM, Module Bundler, and AJAX",
    technologies: [
      "Html5",
      "Css",
      "Javascript",
      "ECMAScript",
      "Package Manager",
      "Module Bundler",
      "AJAX",
    ],
    url: "https://crypto-finder-sage.vercel.app/",
  },
  {
    image: bookShelf,
    title: "bookshelf-website",
    description: "Website Bookshelf Data Management Using DOM and Web Storage",
    technologies: ["Html5", "Css", "DOM", "Web Storage"],
    url: "https://bookshelf-app-eight.vercel.app/",
  },
  {
    image: yejiStore,
    title: "YejiStore-website",
    description:
      "YEJI STORE is an e-commerce website that sells electronics online.-MVP Product :1.Landing Page 2.Cart 3.Deleted Products 4.Added Products",
    technologies: [
      "React",
      "Bootstrap",
      "Javascript",
      "Global State Management",
    ],
    url: "https://mini-project-ecommerce-yeji-store.vercel.app/",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-20 text-white">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <img
            src={project.image}
            alt=""
            className="w-full cursor-pointer rounded-2xl
      transition-all duration-300 hover:scale-105 md:w-[300px]"
          />
        </a>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-slate-800 p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className="flex min-h-screen w-full flex-col items-center
      justify-center gap-16 p-4 md:px-14 md:py-24"
      >
        <ScrollReveal>
          <h1 className="text-4xl font-light text-white md:text-6xl">
            My Projects
          </h1>
        </ScrollReveal>

        <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
