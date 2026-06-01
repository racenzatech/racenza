import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const ContactPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full flex flex-col justify-start overflow-x-hidden bg-transparent pt-24">
      
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Full Hero Image Background (No blur, 100% native clarity) */}
        <img
          src="/Video/Image.png"
          alt="Racenza Contact Support Background"
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
                <span>Direct Strategic Connection</span>
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
                Connect with <br />
                <span className="text-gold-gradient font-playfair italic">Our Visionaries</span>
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
                Get in touch with Racenza's elite USA solutions office. Book your design workshop, pitch a custom AI integration, or map out enterprisewide scale with ease.
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
                <a
                  href="#contact"
                  className="btn-luxury-gold px-8 py-3.5 rounded-full text-base font-bold flex items-center justify-center gap-2"
                >
                  Go to Booking Form
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE ACTIVE BOOKING FORM BLOCK */}
      <div id="contact" className="scroll-mt-20 relative z-20 pb-20">
        <ContactSection />
      </div>

    </div>
  );
};

export default ContactPage;
