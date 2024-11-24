'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (!element) return
    const navHeight = 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - navHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center p-4 relative bg-gradient-to-br from-blue-50 to-red-50">
      <motion.div 
        className="text-center"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-500">
          Tarreq Maulana
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-2">
          A final-year <span className="underline"><a target="_blank" rel="noopener noreferrer" href="https://cs.ui.ac.id">computer science</a></span> student at <span className="underline"><a target="_blank" rel="noopener noreferrer" href="https://ui.ac.id">Universitas Indonesia.</a></span>
        </p>
        <p className="text-l md:text-xl text-gray-600 mb-8">
          Passionate in empowering iniatives and driving organizational growth 💻⚙️
        </p>
        {/* <div className="flex space-x-4 justify-center mb-8">
          <Github className="w-6 h-6 cursor-pointer hover:text-blue-600 transition-colors" />
          <Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-600 transition-colors" />
          <Mail className="w-6 h-6 cursor-pointer hover:text-red-500 transition-colors" />
        </div> */}
      </motion.div>
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
