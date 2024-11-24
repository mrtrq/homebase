'use client'
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default HomePage;