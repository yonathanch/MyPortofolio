import { motion } from "framer-motion";
import {
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPhp,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";

import {
  FaFileExcel,
  FaFileWord,
  FaFilePowerpoint,
  FaLaravel,} from "react-icons/fa";
import {
  SiGoogledocs,
  SiGooglesheets,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

// Data untuk kategori skills
const skillsData = [
  {
    category: "Web Developer",
    skills: [
      { name: "HTML", icon: BiLogoHtml5 },
      { name: "CSS", icon: BiLogoCss3 },
      { name: "JavaScript", icon: BiLogoJavascript },
      { name: "React", icon: BiLogoReact },
      { name: "Laravel", icon: FaLaravel},
      { name: "Tailwind", icon: BiLogoTailwindCss },
      { name: "Bootstrap", icon: BiLogoBootstrap },
      { name: "Php", icon: BiLogoPhp },
      { name: "Node Js", icon: BiLogoNodejs },
      { name: "Express", icon: SiExpress },
      { name: "Mongo Db", icon: SiMongodb },
    ],
  },
  {
    category: "Microsoft Office",
    skills: [
      { name: "Word", icon: FaFileWord },
      { name: "Docs", icon: SiGoogledocs },
      { name: "Excel", icon: FaFileExcel },
      { name: "Sheets", icon: SiGooglesheets },
      { name: "PowerPoint", icon: FaFilePowerpoint },
    ],
  },
];

// Data untuk logo skills slider
const skills = [
  { icon: BiLogoHtml5, color: "text-orange-500" },
  { icon: BiLogoCss3, color: "text-blue-500" },
  { icon: BiLogoJavascript, color: "text-yellow-500" },
  { icon: BiLogoReact, color: "text-sky-500" },
  { icon: FaLaravel, color: "text-red-500" },
  { icon: BiLogoTailwindCss, color: "text-sky-400" },
  { icon: BiLogoBootstrap, color: "text-purple-500" },
  { icon: BiLogoPhp, color: "text-purple-300" },
  { icon: BiLogoNodejs, color: "text-green-500" },
  { icon: SiExpress, color: "text-green-500" },
  { icon: SiMongodb, color: "text-green-500" },
];

const Skills = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="skills" className="w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center gap-16 md:gap-32">
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="text-4xl font-light text-white md:text-6xl pb-8"
        >
          Skills
        </motion.h1>
      </div>

      <div className="max-w-4xl mx-auto">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="mb-10 p-6 rounded-lg bg-black/50 border border-gray-700 shadow-md"
          >
            <h2 className="text-2xl font-semibold text-gray-300 text-center mb-5">
              {category.category}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {skill.icon && (
                    <skill.icon className="text-gray-300 text-3xl" />
                  )}
                  <p className="text-lg font-medium text-gray-300">
                    {skill.name}
                  </p>        
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden py-5">
        <motion.div
          className="flex w-max gap-10 px-5"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {/* Duplikasi agar efek looping seamless */}
          {[...skills, ...skills].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6 }}
              >
                <Icon
                  className={`cursor-pointer text-[80px] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] ${skill.color}`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
