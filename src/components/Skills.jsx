import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "C++"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    color: "from-pink-500 to-purple-400"
  },
  {
    title: "Backend & DB",
    skills: ["Flask", "Node.js", "SQL", "Firebase"],
    color: "from-green-500 to-emerald-400"
  },
  {
    title: "AI & ML",
    skills: ["Machine Learning", "Deep Learning", "CNN", "TensorFlow (Basics)"],
    color: "from-orange-500 to-yellow-400"
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker (Basics)", "APIs"],
    color: "from-indigo-500 to-blue-400"
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></span>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => {
                  const level = 30 + ((skill.length * 7 + sIdx * 13) % 16);
                  return (
                    <div key={sIdx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{skill}</span>
                        <span className="text-cyan">{level}%</span>
                      </div>
                      <div className="h-2 w-full bg-primary/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + sIdx * 0.1 }}
                          className={`h-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
