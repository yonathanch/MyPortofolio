// import photo from "/public/pp_pencils.jpeg";
// import { motion } from "framer-motion";
// const Hero = () => {
//   return (
//     <>
//       <div
//         id="home"
//         className="px-16 flex min-h-screen w-full
//         item-center justify-center py-28 md:px-32"
//       >
//         <div
//           className="flex flex-col items-center justify-center
//         gap-10 text-white"
//         >
//           <motion.div
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.9, delay: 0.3 }}
//           >
//             <div></div>
//             <img
//               src={photo}
//               alt="PP"
//               className="w-[300px] cursor-pointer
//                 rounded-full shadow-xl shadow-indigo-900 transition-all
//                 duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl
//                 hover:shadow-indigo-600 md:w-[300px]"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.9, delay: 0.3 }}
//             className="flex- max-w-[600px] flex-col items-center
//             justify-center gap-3 text-center"
//           >
//             <h1
//               className="bg-gradient-to-r from-blue-500 to-sky-600 bg-clip-text text-transparent text-5xl font-light
//               md:text-5xl "
//             >
//               Yonathan Christianto
//             </h1>
//             <h3
//               className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl
//               md:text-3xl m-3"
//             >
//               About Me
//             </h3>
//             <p
//               className="md:text-base text-pretty text-sm text-gray-400 text-left
//                 "
//             >
//               I’m a freshgraduate of Informatics at Gunadarma University. I’m a
//               junior web programmer. In the 6th semester, I participated in the
//               MSIB Batch 4 program, which is a certified independent study with
//               the lesson “2023 Complete Front-End Engineer Career With ReactJS”
//               at Alterra Academy. There, I learned about React JS. In the 7th
//               semester, I participated in the MSIB Batch 5 program, which is a
//               certified independent study with the lesson “Front-End Web and
//               Back-End Developer” at Dicoding Indonesia.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;

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

  // Nama yang diubah jadi array per huruf
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
            src="/pp_pencils.jpeg"
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
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold flex flex-wrap justify-center gap-[2px]">
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

          <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-sm md:text-base text-pretty max-w-[600px] text-left text-gray-400">
            I’m a fresh graduate of Informatics at Gunadarma University. I’m a
            junior web programmer. In the 6th semester, I participated in the
            MSIB Batch 4 program, which is a certified independent study with
            the lesson “2023 Complete Front-End Engineer Career With ReactJS” at
            Alterra Academy. There, I learned about React JS. In the 7th
            semester, I participated in the MSIB Batch 5 program, which is a
            certified independent study with the lesson “Front-End Web and
            Back-End Developer” at Dicoding Indonesia.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
