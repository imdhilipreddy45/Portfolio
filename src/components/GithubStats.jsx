import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GithubStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Coding <span className="text-gradient">Stats</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">GitHub Activity</h3>
            <img 
              src="https://streak-stats.demolab.com?user=imdhilipreddy45&theme=radical&background=0a0a0a&border=333333&ring=00d2ff&fire=00d2ff&currStreakNum=ffffff&sideNums=ffffff&currStreakLabel=00d2ff&sideLabels=ffffff&dates=ffffff&hide_border=true" 
              alt="GitHub Stats" 
              className="w-full rounded-xl h-[165px] object-cover"
            />
          </motion.div>

          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">GitHub Trophies</h3>
            <img 
              src="https://github-profile-trophy.vercel.app/?username=imdhilipreddy45&theme=radical&row=1&column=3&margin-w=15&margin-h=15&no-frame=true&no-bg=true" 
              alt="GitHub Trophies" 
              className="w-full rounded-xl h-[165px] object-contain"
            />
          </motion.div>

          {/* LeetCode Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">LeetCode Stats</h3>
            <img 
              src="https://leetcard.jacoblin.cool/dileepreddy_29?theme=dark&font=Inter&ext=activity" 
              alt="LeetCode Stats" 
              className="w-full rounded-xl object-cover h-[165px] border border-[#333333]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
