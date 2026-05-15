import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: "B.Tech CSE-AIML",
    company: "Parul University",
    date: "2023 - 2027",
    type: "education",
    description: "Specializing in Artificial Intelligence and Machine Learning, with core focus on algorithms, data structures, and advanced ML topics.",
    icon: <GraduationCap size={20} />
  }
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-ml-[1px]">
            <motion.div 
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-cyan via-accent to-purple-500"
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Icon */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.2 }}
                  className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary border-2 border-cyan flex items-center justify-center text-cyan md:-ml-4 z-10"
                >
                  {exp.icon}
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
                  className="ml-12 md:ml-0 md:w-5/12"
                >
                  <div className={`glass-panel p-6 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'} hover:-translate-y-1 transition-transform duration-300`}>
                    <span className="inline-block py-1 px-3 rounded bg-cyan/10 text-cyan text-xs font-medium mb-3">
                      {exp.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-gray-400 text-sm mb-4 font-medium">{exp.company}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
