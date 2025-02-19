import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full bg-gradient-to-b from-black via-black to-sky-700 "></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact></Contact>
      </main>
    </>
  );
}

export default App;
