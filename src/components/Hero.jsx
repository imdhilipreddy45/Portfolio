import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Mail, Code } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (index >= words.length) {
      setIndex(0);
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      !reverse
    ) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, parseInt(Math.random() * 150)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-xl md:text-3xl font-light text-cyan h-[40px] inline-block">
      {`${words[index]?.substring(0, subIndex) || ''}${blink ? '|' : ' '}`}
    </span>
  );
};

const AnimatedSphere = () => {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={1.5}>
        <MeshDistortMaterial
          color="#3a0ca3"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Hero = () => {
  const roles = [
    "AI/ML Engineer",
    "Full Stack Developer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00f2fe" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center md:items-start text-center md:text-left pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent text-lg md:text-xl mb-2 font-mono tracking-wide"
          >
            Welcome to my universe
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold font-sans mb-4 leading-tight"
          >
            Hi, I'm <br className="md:hidden" />
            <span className="text-gradient">Dileep Reddy Devaram</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <TypeWriter words={roles} />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 max-w-xl text-sm md:text-base leading-relaxed mb-10 mx-auto md:mx-0"
          >
            B.Tech CSE-AIML student at Parul University passionate about building scalable web applications and intelligent AI/ML models.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-12"
          >
            <Link to="projects" smooth={true} duration={500} className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan to-accent text-primary font-semibold hover:shadow-neon transition-all duration-300 cursor-pointer">
              View Projects
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-cyan text-cyan hover:bg-cyan/10 transition-all duration-300">
              Download Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-6 justify-center md:justify-start"
          >
            <SocialIcon href="https://github.com/imdhilipreddy45" icon={<Github />} />
            <SocialIcon href="https://www.linkedin.com/in/dileep-reddy-devaram-b66933375/" icon={<Linkedin />} />
            <SocialIcon href="mailto:dileeprddy729@gmail.com" icon={<Mail />} />
            <SocialIcon href="https://leetcode.com/u/dileepreddy_29/" icon={<Code />} />
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-gray-400 tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-accent absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-300 hover:text-cyan hover:border-cyan hover:shadow-neon transition-all duration-300 hover:-translate-y-1"
  >
    {React.cloneElement(icon, { size: 20 })}
  </a>
);

export default Hero;
