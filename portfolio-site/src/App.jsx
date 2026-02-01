import { useEffect } from 'react';
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <main className="bg-slate-900 text-slate-50 min-h-screen selection:bg-accent/30 selection:text-white">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
