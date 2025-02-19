import { motion } from "framer-motion";
import { useState } from "react";
import photo_nametag from "/public/pp2.jpg";

const Contact = () => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      id="contact"
      className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-16 md:flex-row md:gap-20"
    >
      {/* Bagian Kiri - Text dan Tombol */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h1 className="text-4xl font-bold md:text-6xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        <p className="mt-3 text-lg font-semibold text-gray-400 md:text-xl">
          Send me a message
        </p>

        <a
          href="mailto:chyonatan@gmail.com"
          className="mt-6 rounded-lg border border-indigo-600 bg-black px-6 py-3 text-lg font-bold text-white
        shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-500"
        >
          Contact Me
        </a>
      </div>

      {/* Bagian Kanan - Kartu ID */}
      <motion.div
        drag
        dragConstraints={{ left: -80, right: 80, top: -80, bottom: 80 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        className="relative mt-10 cursor-grab active:cursor-grabbing md:mt-0"
      >
        {/* Simulasi tali kartu */}
        <div className="mx-auto h-16 w-1 bg bg-gradient-to-b from-black via-black to-sky-700"></div>

        {/* Kartu ID */}
        <motion.div
          className="flex w-44 flex-col items-center justify-center rounded-xl bg-gradient-to-b from-sky-700 via-black to-black p-4 text-white shadow-lg md:w-52"
          animate={{ rotate: isDragging ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <img
            src={photo_nametag}
            alt="Profile"
            draggable={false}
            className="w-full rounded-md shadow-md"
          />
          <p className="mt-3 text-lg font-bold">Yonathan Christianto</p>
          <p className="text-sm text-gray-400">Web Developer</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
