'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image'


const HomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Experience', 'Certifications', 'Contact'];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    const navHeight = 80; // height of navbar
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - navHeight,
      behavior: 'smooth'
    });
    setIsNavOpen(false);
  };

  // Sample certification data - replace with your actual certifications
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456", // Optional: Add if available
      verificationUrl: "https://aws.amazon.com/verify/...", // Optional: Add if available
      image: "/certificates/Data Driven Decision Making.webp", // Path to your image in public folder
      color: "bg-blue-50",
      skills: ["Cloud Computing", "AWS Services"] // Optional: Related skills
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "MS-789012",
      verificationUrl: "https://learn.microsoft.com/verify/...",
      image: "/certificates/azure-cert.png",
      color: "bg-red-50",
      skills: ["Cloud Computing", "Azure Services"]
    }
  ];

  const CertificationCard = ({ cert }) => (
    <div className={`${cert.color} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex items-start space-x-4">
        <Image
          src={cert.image}
          alt={cert.title}
          width={64}
          height={64}
          className="rounded-lg"
          />
        <div>
          <h3 className="font-semibold text-gray-800">{cert.title}</h3>
          <p className="text-gray-600 text-sm">{cert.issuer}</p>
          <p className="text-gray-500 text-sm mt-2">{cert.date}</p>
          {cert.credentialId && (
            <p className="text-gray-500 text-sm">ID: {cert.credentialId}</p>
          )}
          {cert.verificationUrl && (
            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
            >
              Verify Certificate
            </a>
          )}
          {cert.skills && cert.skills.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {cert.skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs bg-white/50 px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const CertificationImage = ({ src, alt }) => {
    const [imgError, setImgError] = useState(false);
    
    return imgError ? (
      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-400 text-xs text-center">No Image</span>
      </div>
    ) : (
      <Image
        src={src}
        alt={alt}
        width={64}
        height={64}
        className="rounded-lg"
        onError={() => setImgError(true)}
      />
    );
  };
  
  

  

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Tarreq Maulana</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="text-gray-500 hover:text-gray-700"
              >
                {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isNavOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Generalist • Computer Science • Organizational Growth 
          </p>
          <div className="flex space-x-4 justify-center mb-8">
            <Github className="w-6 h-6 cursor-pointer hover:text-blue-600 transition-colors" />
            <Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-600 transition-colors" />
            <Mail className="w-6 h-6 cursor-pointer hover:text-red-500 transition-colors" />
          </div>
        </motion.div>
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen p-8 md:p-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Tarreq Maulana</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
            A final-year Computer Science student at Universitas Indonesia.
            Passionate about leveraging technology to solve real-world problems 💻⚙️            </p>
            <p>
              Currently drives organizational growth at Fasilkom UI's Student Body Organization (BEM FASILKOM UI), managing a team of 162 people, driving
              initiatives that matter to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen p-8 md:p-16 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Leadership Experience</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-200 pl-4 hover:border-blue-400 transition-colors bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Chairman - BEM Fasilkom UI</h3>
              <p className="text-gray-600 mb-2">2023 - Present</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Leading a 162-person organization</li>
                <li>Developing and executing strategic initiatives</li>
                <li>Fostering collaboration between different departments</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-200 pl-4 hover:border-red-400 transition-colors bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">NovoClub</h3>
              <p className="text-gray-600 mb-2">CSR Program Manager</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Successfully planned and executed community service programs</li>
                <li>Coordinated with stakeholders to maximize impact</li>
                <li>Managed program budget and resources effectively</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen p-8 md:p-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8 md:p-16 text-center bg-gradient-to-br from-blue-50 to-red-50">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Let's Connect</h2>
        <p className="text-gray-600 mb-8">
          I'm always open to new opportunities and collaborations
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-red-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default HomePage;