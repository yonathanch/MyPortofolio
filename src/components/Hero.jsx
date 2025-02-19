import photo from "/public/pplink.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="px-16 flex min-h-screen w-full
        item-center justify-center py-28 md:px-32"
      >
        <div
          className="flex flex-col items-center justify-center 
        gap-10 text-white"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div></div>
            <img
              src={photo}
              alt="PP"
              className="w-[300px] cursor-pointer
                rounded-full shadow-xl shadow-indigo-900 transition-all
                duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl
                hover:shadow-indigo-600 md:w-[350px]"
            />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex- max-w-[600px] flex-col items-center
            justify-center gap-3 text-center"
          >
            <h1
              className="bg-gradient-to-r from-blue-500 to-sky-600 bg-clip-text text-transparent text-5xl font-light
              md:text-7xl "
            >
              Yonathan Christianto
            </h1>
            <h3
              className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl 
              md:text-3xl"
            >
              Web Developer
            </h3>
            <p
              className="md:text-base text-pretty text-sm text-gray-400
                "
            >
              I’m a freshgraduate of Informatics at Gunadarma University. I’m a
              junior web programmer. In the 6th semester, I participated in the
              MSIB Batch 4 program, which is a certified independent study with
              the lesson “2023 Complete Front-End Engineer Career With ReactJS”
              at Alterra Academy. There, I learned about React JS. In the 7th
              semester, I participated in the MSIB Batch 5 program, which is a
              certified independent study with the lesson “Front-End Web and
              Back-End Developer” at Dicoding Indonesia.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
