import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import ProjectsPage from "./components/ProjectsPage";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import {
  peekPendingHash,
  scrollToIdWhenReady,
} from "./utils/scroll";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const pending = peekPendingHash();
    if (pending) {
      // A nav click is waiting for this route to mount — jump to it instead
      // of resetting to the top. The pending hash self-expires, so this also
      // tolerates StrictMode double-invoking the effect.
      scrollToIdWhenReady(pending, 0, true);
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Marquee />
              <Projects />
              <About />
              <Experience />
              <Skills />
              <Contact />
            </main>
          }
        />
        <Route
          path="/projects"
          element={
            <main>
              <ProjectsPage />
              <Contact />
            </main>
          }
        />
      </Routes>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
