import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle solid background shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Macenza Collaboration", href: "/collaboration" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Elegant Serif Logo with Soft Pink Glow */}
        <motion.div
          className="flex items-center gap-2 group focus:outline-none"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-racenza-pink-medium to-white/5 flex items-center justify-center border border-white/30 shadow-premium-glow group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img src="/favicon.png" alt="Racenza Logo" className="w-8 h-8 rounded-full object-cover" />
            </div>
            <span className="font-playfair font-bold text-2xl tracking-wide text-gray-800 group-hover:text-racenza-gold transition-colors duration-300 relative">
              Racenza
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-racenza-gold group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link
                to={item.href}
                className="relative font-inter text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-racenza-pink-medium transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Premium Book Consultation CTA Button */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link
            to="/#contact"
            className="btn-luxury-gold px-6 py-2.5 rounded-full text-sm tracking-wide font-medium flex items-center gap-2"
          >
            Book Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Mobile Hamburguer Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-700 hover:text-gray-900 focus:outline-none glass-panel"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-[60px] w-full h-[calc(100vh-60px)] z-40 lg:hidden flex flex-col bg-white/75 backdrop-blur-xl border-t border-white/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-6 p-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="py-2"
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-playfair text-2xl font-semibold text-gray-800 hover:text-racenza-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <Link
                  to="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-luxury-gold px-8 py-3.5 rounded-full text-base tracking-wide font-semibold flex items-center gap-2"
                >
                  Book Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
            
            {/* Soft branding in mobile view */}
            <div className="py-8 text-center text-xs tracking-wider text-gray-400 font-inter border-t border-gray-100 w-full">
              Powered by MACENZA
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
