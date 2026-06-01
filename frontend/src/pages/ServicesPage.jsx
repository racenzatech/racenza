import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import ServicesDisplay from '../components/ServicesDisplay';
import FeaturesSection from '../components/FeaturesSection';
const ServicesPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full flex flex-col justify-start overflow-x-hidden bg-transparent pt-24 pb-12">
      
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Full Hero Image Background (No blur, 100% native clarity) */}
        <img
          src="/Video/Image.png"
          alt="Racena IT Offerings Backdrop"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Centered Glass Panel Content */}
        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/30 backdrop-blur-md shadow-glass-glow relative overflow-hidden w-full max-w-3xl"
          >
            {/* Top gold line accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-racenza-gold/60 to-transparent" />
            
            <div className="flex flex-col items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/30 border border-white/40 shadow-sm text-gray-800 text-xs font-semibold tracking-wider uppercase mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-racenza-gold" />
                <span>Elite SaaS Capabilities</span>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } }
                }}
                className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight drop-shadow-sm"
              >
                Our Premium <br />
                <span className="text-gold-gradient font-playfair italic">IT Offerings</span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 0.8, transition: { delay: 0.3 } }
                }}
                className="text-base sm:text-lg text-gray-700 leading-relaxed font-inter mb-10 max-w-xl"
              >
                Accelerate your digital trajectory with custom-engineered software, automated artificial intelligence models, secure scalability, and industry-standard interfaces.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.5 } }
                }}
                className="flex gap-4 w-full sm:w-auto justify-center"
              >
                <Link
                  to="/contact"
                  className="btn-luxury-gold px-8 py-3.5 rounded-full text-base font-bold flex items-center justify-center gap-2"
                >
                  Start A Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES FULL-HEIGHT RESPONSIVE GRID */}
      <section className="w-full py-12 px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <ServicesDisplay />
        </div>
      </section>

      {/* 3. CORE BENEFITS SECTION */}
      <section className="w-full py-12 px-6 sm:px-8 lg:px-12 relative z-20 pb-20">
        <div className="max-w-7xl mx-auto border-t border-white/25 pt-12">
          <FeaturesSection />
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
