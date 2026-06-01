import React from 'react';
import { Mail, Phone, Globe, Compass, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#1A0F14] text-gray-400 py-16 px-6 sm:px-8 lg:px-12 relative z-20 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Top Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand description */}
          <div className="lg:col-span-4 flex flex-col items-start text-left gap-4">
            <a href="#home" className="flex items-center gap-2 group focus:outline-none">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-racenza-pink-medium to-white/10 flex items-center justify-center border border-white/20">
                <span className="text-sm">🌸</span>
              </div>
              <span className="font-playfair font-bold text-xl tracking-wide text-white group-hover:text-racenza-gold transition-colors duration-300">
                Racena
              </span>
            </a>
            
            <p className="font-inter text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
              Racena is the premium USA branch of Macenza Global Technology, delivering elite AI-powered IT consulting, custom software, and digital transformation.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col items-start text-left gap-3">
            <span className="font-playfair text-sm text-white font-bold tracking-widest uppercase mb-1">
              Company
            </span>
            <a href="#home" className="font-inter text-xs sm:text-sm hover:text-white transition-colors duration-300">Home</a>
            <a href="#about" className="font-inter text-xs sm:text-sm hover:text-white transition-colors duration-300">About Synergy</a>
            <a href="#features" className="font-inter text-xs sm:text-sm hover:text-white transition-colors duration-300">Why Choose Us</a>
            <a href="#contact" className="font-inter text-xs sm:text-sm hover:text-white transition-colors duration-300">Book Briefing</a>
          </div>

          {/* Column 3: Services Links */}
          <div className="lg:col-span-3 flex flex-col items-start text-left gap-3">
            <span className="font-playfair text-sm text-white font-bold tracking-widest uppercase mb-1">
              IT Offerings
            </span>
            <a href="#services" className="font-inter text-xs sm:text-sm hover:text-white transition-colors duration-300">AI Frameworks</a>
            <a href="#services" className="font-inter text-xs sm:text-sm hover:text-white transition-colors duration-300">SaaS Products</a>
            <a href="#services" className="font-inter text-xs sm:text-sm hover:text-white transition-colors duration-300">Web App Architecture</a>
            <a href="#services" className="font-inter text-xs sm:text-sm hover:text-white transition-colors duration-300">Custom Automation</a>
          </div>

          {/* Column 4: Contact links info */}
          <div className="lg:col-span-3 flex flex-col items-start text-left gap-3">
            <span className="font-playfair text-sm text-white font-bold tracking-widest uppercase mb-1">
              Get in Touch
            </span>
            <div className="flex items-center gap-2 font-inter text-xs sm:text-sm">
              <Mail className="w-4 h-4 text-racenza-gold" />
              <span>racenza.tech@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 font-inter text-xs sm:text-sm">
              <Phone className="w-4 h-4 text-racenza-gold" />
              <span>Phone No.</span>
            </div>
            <div className="flex items-center gap-2 font-inter text-xs sm:text-sm">
              <Compass className="w-4 h-4 text-racenza-gold" />
              <span>Address</span>
            </div>
          </div>

        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-white/10" />

        {/* Bottom copyright & Branding watermarks */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs font-inter text-gray-500">
            <span>© {currentYear} Racena. All rights reserved.</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Corporate Partnership Watermark */}
          <div className="flex items-center gap-1.5 font-playfair text-xs sm:text-sm font-semibold text-gray-400">
            <span>Powered by</span>
            <span className="text-racenza-gold font-playfair font-black tracking-widest text-base">MACENZA</span>
            <span className="text-[10px] text-gray-500 font-inter uppercase tracking-widest ml-1 bg-white/5 px-2 py-0.5 border border-white/10 rounded">Global</span>
          </div>

          {/* Back to top clicker */}
          <button
            onClick={handleScrollTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-racenza-gold hover:text-white hover:border-racenza-gold transition-all duration-300 cursor-pointer shadow-sm"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
