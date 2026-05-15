import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Database, Terminal } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { icon: <Code size={24} />, count: "1", label: "Project Completed" },
    { icon: <Terminal size={24} />, count: "10+", label: "Problems Solved" },
    { icon: <Brain size={24} />, count: "10+", label: "Technologies" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Who am I?</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I am a dedicated <span className="text-cyan font-medium">B.Tech CSE-AIML student</span> at Parul University. 
              My journey in tech is driven by an insatiable curiosity for Artificial Intelligence, Machine Learning, and building 
              robust Full-Stack applications. I thrive on solving complex problems and turning innovative ideas into reality.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              With a strong foundation in Python, Java, and modern web frameworks, I enjoy bridging the gap between intelligent 
              algorithms and user-friendly interfaces. My goal is to develop scalable systems that make a tangible impact.
            </p>
            <div className="flex gap-4">
              <div className="w-1/2 p-4 bg-primary/50 rounded-xl border border-white/5">
                <span className="block text-accent text-xl font-bold mb-1">Education</span>
                <span className="text-sm text-gray-400">B.Tech CSE (AI & ML)</span><br/>
                <span className="text-xs text-gray-500">Parul University (2023-2027)</span>
              </div>
              <div className="w-1/2 p-4 bg-primary/50 rounded-xl border border-white/5">
                <span className="block text-accent text-xl font-bold mb-1">Location</span>
                <span className="text-sm text-gray-400">India</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:w-1/2 w-full">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                className="glass-panel p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center text-cyan mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,210,255,0.4)] transition-all duration-300">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">{stat.count}</h4>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
