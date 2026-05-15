import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, X } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const projects = [
  {
    title: "FarmIQ",
    description: "AI-powered agriculture decision support system.",
    longDescription: "FarmIQ is an advanced AI-powered system designed to assist farmers. It provides accurate crop recommendations, detects plant diseases using CNNs, offers weather alerts, predicts yields, and curates relevant government schemes. The system aims to revolutionize modern farming by providing data-driven insights.",
    tech: ["Python", "Flask", "ML", "CNN", "APIs", "Database"],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/imdhilipreddy45",
    demo: "https://farmiq-agrovisionai.firebaseapp.com/"
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-secondary/20 relative">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Project</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="glass-panel group overflow-hidden cursor-pointer flex flex-col h-full transform-gpu transition-all duration-300 hover:scale-[1.02] hover:shadow-neon"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-cyan">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel max-w-3xl w-full overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="relative h-64 sm:h-80 w-full shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-primary/50 hover:bg-primary rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan to-accent text-primary font-medium hover:shadow-neon transition-all">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
