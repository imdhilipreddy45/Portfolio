import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Sharma",
    role: "Project Guide, Parul University",
    text: "Dileep demonstrated exceptional problem-solving skills during the development of FarmIQ. His understanding of CNNs and full-stack integration is highly commendable.",
    image: "https://ui-avatars.com/api/?name=Dr+Sharma&background=0D8ABC&color=fff"
  },
  {
    name: "Rahul Mehta",
    role: "Team Member",
    text: "Working with Dileep was great. He easily handled the complex backend architecture while keeping the codebase clean and maintainable. A great team player.",
    image: "https://ui-avatars.com/api/?name=Rahul+Mehta&background=8B008B&color=fff"
  }
];

const Testimonials = () => {
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
            Words of <span className="text-gradient">Appreciation</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-panel p-8 relative"
            >
              <Quote className="absolute top-6 right-6 text-white/5" size={64} />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img src={test.image} alt={test.name} className="w-14 h-14 rounded-full border-2 border-cyan" />
                <div>
                  <h4 className="text-lg font-bold text-white">{test.name}</h4>
                  <p className="text-sm text-cyan">{test.role}</p>
                </div>
              </div>
              <p className="text-gray-400 italic relative z-10">"{test.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
