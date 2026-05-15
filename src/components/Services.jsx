import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BrainCircuit, Code2, Globe, Server, Smartphone } from 'lucide-react';

const services = [
  {
    title: "AI/ML Solutions",
    description: "Developing intelligent predictive models, NLP solutions, and computer vision applications tailored to business needs.",
    icon: <BrainCircuit size={32} />,
  },
  {
    title: "Full Stack Development",
    description: "Building scalable and responsive web applications using modern MERN/MEAN stacks with optimized databases.",
    icon: <Code2 size={32} />,
  },
  {
    title: "UI/UX Development",
    description: "Creating highly interactive, aesthetic, and user-centric frontend experiences using React and Framer Motion.",
    icon: <Globe size={32} />,
  },
  {
    title: "Automation Solutions",
    description: "Streamlining workflows by automating repetitive tasks using Python scripting and intelligent bots.",
    icon: <Server size={32} />,
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-secondary/10 relative">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full blur-[40px] -mr-16 -mt-16 group-hover:bg-cyan/20 transition-colors duration-500" />
              <div className="text-cyan mb-6 group-hover:scale-110 transition-transform duration-300 transform-origin-left">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
