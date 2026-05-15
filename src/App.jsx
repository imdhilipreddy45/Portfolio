import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import GithubStats from './components/GithubStats';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cinematic loading screen simulation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-primary z-50 fixed top-0 left-0">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-accent animate-pulse">
            DILEEP REDDY
          </h1>
          <p className="mt-4 text-gray-400 tracking-[0.3em] uppercase text-sm animate-bounce">
            Initializing...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-primary min-h-screen text-white overflow-hidden selection:bg-accent/30">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GithubStats />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
