import { useState } from "react";
import { BiMenu, BiX, BiDownload } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 z-10 flex w-full item-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-lg md:justify-evenly ">
        <a
          href="/CV.pdf" // Ganti dengan path CV-mu
          download
          className="px-4 py-2 rounded-lg border border-gray-300 text-white text-lg font-medium transition-all duration-300 hover:bg-white hover:text-black hover:border-white flex items-center gap-2"
        >
          <BiDownload className="text-xl" />
          Resume
        </a>

        <ul className="hidden md:flex gap-10">
          <a
            href="#home"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Home</li>
          </a>
          <a
            href="#projects"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Project</li>
          </a>

          <a
            href="#skills"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Skills</li>
          </a>

          <a
            href="#contact"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Contact</li>
          </a>
        </ul>

        <ul className="hidden md:flex gap-5">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-indigo-700 hover:opacity-100">
            <a href="https://github.com/yonathanch" target="_blank">
              <BsGithub />
            </a>
          </li>

          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-indigo-700 hover:opacity-100">
            <a
              href="https://www.linkedin.com/in/yonathan-christianto/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </li>

          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-indigo-700 hover:opacity-100">
            <a href="https://www.instagram.com/natann.ch/" target="_blank">
              <BsInstagram />
            </a>
          </li>
        </ul>

        {isOpen ? (
          <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
        ) : (
          <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
        )}

        {isOpen && (
          <div
            className={`fixed right-0 top-[84px] flex h-screen
                     w-1/2 flex-col items-start justify-start gap-10 border-1 
                    border-gray-800 bg-black/90 p-12 ${
                      isOpen ? "block" : "hidden"
                    }`}
          >
            <ul className="flex flex-col gap-8">
              <a
                href="#home"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <li>Home</li>
              </a>
              <a
                href="#projects"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <li>Project</li>
              </a>

              <a
                href="#skills"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <li>Skills</li>
              </a>

              <a
                href="#contact"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <li>Contact</li>
              </a>
            </ul>

            <ul className="flex flex-wrap gap-5">
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                <a href="https://github.com/yonathanch" target="_blank">
                  <BsGithub />
                </a>
              </li>

              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                <a
                  href="https://www.linkedin.com/in/yonathan-christianto/"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </li>

              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                <a href="https://www.instagram.com/natann.ch/" target="_blank">
                  <BsInstagram />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
