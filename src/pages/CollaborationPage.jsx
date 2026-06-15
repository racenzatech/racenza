import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Landmark, Network, ShieldCheck } from 'lucide-react';
import AboutSection from '../components/AboutSection';

const CollaborationPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const steps = [
    {
      title: "USA-Based Synergy",
      description: "Racenza acts as your local strategic partner in the USA, providing high-touch consultancy, agile project management, and seamless communication.",
      icon: Landmark
    },
    {
      title: "Backed by Macenza",
      description: "We leverage Macenza's massive global engineering infrastructure to scale your digital products with hundreds of specialized AI and software experts.",
      icon: Network
    },
    {
      title: "Enterprise-Grade Delivery",
      description: "Together, we ensure rapid development cycles, rigorous QA standards, and SOC2-compliant secure deployments tailored for the American market.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="w-full flex flex-col justify-start overflow-x-hidden bg-transparent pt-24 pb-12">
      
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Full Hero Image Background (No blur, 100% native clarity) */}
        <img
          src="/Video/Image.png"
          alt="Macenza Global Synergy"
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
                <span>Global Powerhouse</span>
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
                Empowered by <br />
                <span className="text-gold-gradient font-playfair italic">Macenza</span>
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
                Racenza unites premium USA-based strategic leadership with the immense technological backing of Macenza’s global engineering workforce. We deliver unparalleled AI and IT solutions at scale.
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
                  Discover the Synergy
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE DYNAMIC TIMELINE FLOW */}
      <section className="w-full py-20 px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          <div className="mb-14 text-center flex flex-col items-center">
            <span className="font-playfair text-sm text-racenza-gold font-semibold tracking-widest uppercase italic mb-2">
              How We Work
            </span>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-racenza-gold to-transparent mb-6"></div>
            <h2 className="text-3xl sm:text-5xl font-playfair font-bold text-gray-900 tracking-tight">
              The Racenza & Macenza Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full mt-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="glass-panel p-8 sm:p-10 rounded-[2.5rem] border border-white/40 text-center relative overflow-hidden shadow-glass-glow hover:-translate-y-2 hover:shadow-lg transition-all duration-500 bg-white/30 group"
                >
                  {/* Decorative background curve */}
                  <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-gradient-to-bl from-racenza-pink-light/60 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

                  <div className="absolute top-4 left-6 font-playfair text-6xl font-black text-gray-800/5 pointer-events-none select-none">
                    0{index + 1}
                  </div>
                  
                  <div className="w-16 h-16 mx-auto rounded-3xl bg-white/50 border border-white/60 flex items-center justify-center mb-6 shadow-sm relative z-10 group-hover:rotate-6 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-racenza-gold" />
                  </div>
                  
                  <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4 relative z-10">
                    {step.title}
                  </h3>
                  
                  <p className="font-inter text-base text-gray-700 leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. INCORPORATE TIMELINE DETAILS & COLLABORATION Timelines */}
      <section className="w-full py-12 px-6 sm:px-8 lg:px-12 relative z-20 pb-20">
        <div className="max-w-7xl mx-auto border-t border-white/25 pt-12">
          <AboutSection />
        </div>
      </section>

    </div>
  );
};

export default CollaborationPage;
