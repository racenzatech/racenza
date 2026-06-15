
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Globe, 
  Database, 
  Smartphone, 
  Users, 
  Layers, 
  Building,
  Palette,
  CheckCircle2
} from 'lucide-react';

const SolutionsPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const solutions = [
    {
      title: "Artificial Intelligence Solutions",
      description: "Custom AI chatbots, AI automation, AI assistants, workflow intelligence, predictive systems, smart recommendation engines, NLP, and AI business automation.",
      icon: Cpu
    },
    {
      title: "Website Development Solutions",
      description: "Premium business websites, corporate websites, landing pages, ecommerce platforms, portfolio sites, and scalable custom web development.",
      icon: Globe
    },
    {
      title: "Web Application Development",
      description: "Custom SaaS dashboards, CRM systems, ERP systems, portals, enterprise workflow tools, admin panels, and secure scalable web applications.",
      icon: Database
    },
    {
      title: "Android App Development",
      description: "Custom Android applications, business apps, ecommerce apps, enterprise mobility solutions, booking apps, and scalable app ecosystems.",
      icon: Smartphone
    },
    {
      title: "HRMS & Workforce Solutions",
      description: "Attendance systems, payroll solutions, shift management, biometric integration, employee self-service portals, workforce analytics, and HR automation.",
      icon: Users
    },
    {
      title: "SaaS Product Development",
      description: "Build premium SaaS platforms from idea to launch with secure architecture, subscription systems, dashboards, APIs, and scalable deployment.",
      icon: Layers
    },
    {
      title: "Enterprise Digital Transformation",
      description: "Custom ERP, CRM, process automation, workflow systems, internal enterprise tools, data management, and digital modernization.",
      icon: Building
    },
    {
      title: "UI/UX Design Solutions",
      description: "Premium user interfaces, product design systems, user journey optimization, wireframing, prototypes, and conversion-focused experiences.",
      icon: Palette
    }
  ];

  const whyChooseUsPoints = [
    "USA-focused service delivery",
    "Powered by Macenza technology expertise",
    "AI-first innovation",
    "Premium enterprise quality",
    "Scalable secure architecture",
    "Dedicated technical support"
  ];

  const techStack = [
    "React", "Next.js", "Node.js", "Python", "AI APIs", "Flutter",
    "Android", "MongoDB", "PostgreSQL", "AWS", "Docker", "Tailwind CSS"
  ];

  return (
    <div className="w-full flex flex-col justify-start overflow-x-hidden bg-transparent pt-24 pb-12">
      
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Full Hero Image Background (No blur, 100% native clarity) */}
        <img
          src="/Video/Image.png"
          alt="Racenza Solutions Backdrop"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Soft elegant translucent overlay (unblurred, subtle tint) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FCE4EC]/40 via-[#F8D7E8]/25 to-[#FFF0F5]/50 z-[1]" />

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
                <span>Elite Technology Offerings</span>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } }
                }}
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-playfair font-bold text-gray-900 leading-tight tracking-tight mb-6 drop-shadow-sm"
              >
                Smart Digital Solutions for <br />
                <span className="text-gold-gradient font-playfair italic">Future-Ready Businesses</span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 0.8, transition: { delay: 0.3 } }
                }}
                className="text-base sm:text-lg text-gray-700 leading-relaxed font-inter mb-10 max-w-2xl"
              >
                Racenza delivers premium AI-powered software, enterprise technology, and digital transformation solutions across the USA.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.5 } }
                }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="btn-luxury-gold px-8 py-3.5 rounded-full text-base font-bold flex items-center justify-center gap-2 w-full sm:w-auto text-center"
                >
                  Book Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#overview"
                  className="btn-glass-luxury px-8 py-3.5 rounded-full text-base font-bold flex items-center justify-center w-full sm:w-auto text-center"
                >
                  Explore Solutions
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SOLUTIONS OVERVIEW */}
      <section id="overview" className="scroll-mt-20 w-full py-20 px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="font-playfair text-sm text-racenza-gold font-semibold tracking-widest uppercase italic mb-2">
            Solutions Overview
          </span>
          <div className="w-12 h-[1px] bg-racenza-gold mb-6"></div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6 tracking-tight"
          >
            Technology Solutions That Drive Growth
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-inter text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl"
          >
            Racenza, powered by Macenza, provides advanced digital solutions tailored for startups, enterprises, and growing businesses across the USA.
          </motion.p>
        </div>
      </section>

      {/* 3. CORE SOLUTIONS GRID */}
      <section className="w-full py-12 px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <motion.div
                  key={sol.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="glass-panel p-8 rounded-3xl border border-white/20 text-left flex flex-col justify-between items-start hover:border-racenza-gold/50 hover:bg-white/20 transition-all duration-300 shadow-sm relative group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-racenza-gold/30 to-transparent" />
                  
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/30 border border-white/45 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-racenza-gold" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-gray-800 mb-4">
                      {sol.title}
                    </h3>
                    <p className="font-inter text-sm text-gray-600 leading-relaxed mb-6">
                      {sol.description}
                    </p>
                  </div>

                  <Link 
                    to="/contact" 
                    className="font-inter text-xs font-semibold text-racenza-gold hover:text-racenza-gold-dark flex items-center gap-1.5 mt-auto group/btn"
                  >
                    <span>Request Brief</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US & TECH STACK (Side by Side) */}
      <section className="w-full py-16 px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Why Choose Us */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="font-playfair text-sm text-racenza-gold font-semibold tracking-widest uppercase italic mb-2">
              Value Advantage
            </span>
            <div className="w-12 h-[1px] bg-racenza-gold mb-6"></div>
            
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-8 tracking-tight">
              Why Businesses Choose Racenza
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {whyChooseUsPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-panel p-4 rounded-2xl border border-white/20 flex items-center gap-3 text-left shadow-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-racenza-gold/10 border border-racenza-gold/30 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-racenza-gold" />
                  </div>
                  <span className="font-inter text-sm font-semibold text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="font-playfair text-sm text-racenza-gold font-semibold tracking-widest uppercase italic mb-2">
              Our Capabilities
            </span>
            <div className="w-12 h-[1px] bg-racenza-gold mb-6"></div>
            
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-8 tracking-tight">
              Technologies We Work With
            </h2>

            <div className="flex flex-wrap items-center gap-3 w-full">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-panel px-4 py-2.5 rounded-full border border-white/30 shadow-sm font-inter text-xs sm:text-sm font-semibold text-gray-700 hover:border-racenza-gold hover:text-gray-900 cursor-default"
                >
                  ⚙️ {tech}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="w-full py-16 px-6 sm:px-8 lg:px-12 relative z-20 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/30 backdrop-blur-lg shadow-glass-glow flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-racenza-gold/60 to-transparent" />
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4 tracking-tight leading-snug">
              Need a Custom Solution?
            </h2>
            
            <p className="font-inter text-sm sm:text-base text-gray-600 max-w-xl mb-8 leading-relaxed">
              Let Racenza build intelligent technology tailored to your business goals.
            </p>

            <Link
              to="/contact"
              className="btn-luxury-gold px-8 py-3.5 rounded-full text-base font-bold flex items-center gap-2 cursor-pointer"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default SolutionsPage;
