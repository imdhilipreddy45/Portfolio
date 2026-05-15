import React from 'react';
import { Mail, Code, ArrowUp } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-16 pb-8 border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          <div className="md:col-span-2">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-3xl font-bold cursor-pointer text-gradient inline-block mb-6"
            >
              DRD<span className="text-white">.</span>
            </Link>
            <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
              A passionate Full-Stack Developer and AI/ML Enthusiast dedicated to building scalable, intelligent, and user-centric applications. Let's create something amazing together.
            </p>
            <div className="flex gap-4">
              <SocialIcon href="https://github.com/imdhilipreddy45" icon={<Github />} />
              <SocialIcon href="https://www.linkedin.com/in/dileep-reddy-devaram-b66933375/" icon={<Linkedin />} />
              <SocialIcon href="mailto:dileeprddy729@gmail.com" icon={<Mail />} />
              <SocialIcon href="https://leetcode.com/u/dileepreddy_29/" icon={<Code />} />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <FooterLink to="home" text="Home" />
              <FooterLink to="about" text="About" />
              <FooterLink to="projects" text="Projects" />
              <FooterLink to="experience" text="Experience" />
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 hover:text-cyan transition-colors cursor-default">AI/ML Solutions</li>
              <li className="text-gray-400 hover:text-cyan transition-colors cursor-default">Full Stack Development</li>
              <li className="text-gray-400 hover:text-cyan transition-colors cursor-default">UI/UX Design</li>
              <li className="text-gray-400 hover:text-cyan transition-colors cursor-default">Automation</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Dileep Reddy Devaram. All rights reserved.
          </p>
          
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan hover:border-cyan hover:shadow-neon transition-all cursor-pointer"
          >
            <ArrowUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan/10 hover:text-cyan hover:shadow-[0_0_10px_rgba(0,210,255,0.3)] transition-all duration-300"
  >
    {React.cloneElement(icon, { size: 18 })}
  </a>
);

const FooterLink = ({ to, text }) => (
  <li>
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="text-gray-400 hover:text-cyan hover:pl-2 transition-all duration-300 cursor-pointer block"
    >
      {text}
    </Link>
  </li>
);

export default Footer;
