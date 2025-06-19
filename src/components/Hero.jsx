import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: false, margin: "-100px" });

  // Animasi huruf dilempar satu per satu
  const letterAnimation = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05, // Setiap huruf delay 0.05 detik
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  const name = "Yonathan Christianto".split("");

  return (
    <div
      id="home"
      className="px-4 md:px-12 flex min-h-screen w-full items-center justify-center py-28"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        {/* Foto Profil */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <img
            src="/ghibli.png"
            alt="Profile Picture"
            className="w-[300px] md:w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600"
          />
        </motion.div>

        {/* About Me */}
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-[600px] flex flex-col items-center justify-center gap-3 text-center"
        >
          {/* Animasi Nama */}
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold flex flex-wrap justify-center gap-[2px]  bg-gradient-to-r from-slate-200 to-gray-500 text-transparent bg-clip-text">
            {name.map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterAnimation}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-gray-400 to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-sm md:text-base text-pretty max-w-[600px] text-left text-gray-400">
            I’m Informatics fresh graduate with expertise in ReactJS at Alterra
            Academy (training in the MSIB batch 4 program) and Full-stack
            Development at Dicoding Indonesia (training in the MSIB batch 5
            program). I have successfully developed website projects from side
            jobs, namely wedding website and the latest boarding house rental
            website using React Js and have worked as a logistics staff. Proven
            ability to deliver end-to-end web solutions through certified
            training and project experience.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
