'use client'
import CertificationsSection from './components/CertificationsSection';
import AboutSection from './components/AboutSection';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
       <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <CertificationsSection />
      <Footer />
    </div>
  );
};

export default HomePage;