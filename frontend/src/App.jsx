import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CollaborationPage from './pages/CollaborationPage';
import ContactPage from './pages/ContactPage';
import SolutionsPage from './pages/SolutionsPage';
import ScrollToHashElement from './components/ScrollToHashElement';

// Homepage Component assembling all scrollable sections in standard scroll sequence
const Home = () => {
  return (
    <main className="w-full flex flex-col justify-start">
      {/* Fold 1 (Video) + Fold 2 (Intro Headline) + Fold 3 (Services natural grid) */}
      <HeroSection />
      
      {/* Fold 4: Corporate Collaboration Synergy */}
      <AboutSection />

      {/* Fold 5: Why Enterprise Chooses Us Features Grid */}
      <FeaturesSection />

      {/* Fold 6: Consultation Booking Form */}
      <ContactSection />
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-[#FCE4EC] via-[#F8D7E8] to-[#FFF0F5] select-none">
        
        {/* Global Page Transition & Hash Section Scroller */}
        <ScrollToHashElement />

        {/* Elegant Sticky Glass Navbar (Visible across all routes) */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/collaboration" element={<CollaborationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
        </Routes>

        {/* Sleek dark-themed corporate Footer (Visible across all routes) */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
