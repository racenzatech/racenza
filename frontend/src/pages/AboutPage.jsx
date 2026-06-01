import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, ShieldAlert, Cpu, HeartHandshake, Eye, Award } from 'lucide-react';

const AboutPage = () => {
  const servicesList = [
    "Artificial Intelligence Solutions",
    "Website Development",
    "Web Application Development",
    "Android App Development",
    "HRMS Development",
    "SaaS Product Development",
    "Custom Software Development",
    "Business Automation",
    "UI/UX Design",
    "Enterprise IT Services"
  ];

  const chooseUsPoints = [
    {
      title: "USA-Focused IT Delivery",
      description: "Local USA architects, consulting strategists, and account teams designed for elite client support."
    },
    {
      title: "Powered by Macenza Innovation",
      description: "Backed by the software development powerhouse Macenza Global Technology with massive engineering bandwidth."
    },
    {
      title: "AI-First Development Approach",
      description: "Integrating custom models, automated agents, and smart algorithms from day one."
    },
    {
      title: "Enterprise-Grade Solutions",
      description: "Bank-grade infrastructure, robust RAG pipelines, and hyper-scalable SaaS engineering."
    },
    {
      title: "Premium Design & UX",
      description: "Breathtaking premium luxury interfaces built with industry-leading aesthetic refinement."
    },
    {
      title: "Dedicated Expert Support",
      description: "High-touch local consultation backed by 24/7 technical oversight."
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full flex flex-col justify-start overflow-x-hidden bg-transparent pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Full Hero Image Background */}
        <img
          src="/Video/Image.png"
          alt="Racena Corporate Office Background"
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
                <span>Corporate Background</span>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } }
                }}
                className="text-4xl sm:text-6xl lg:text-7xl font-playfair font-bold text-gray-900 tracking-tight leading-none mb-6"
              >
                About <span className="text-gold-gradient font-playfair italic">Racena</span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 0.8, transition: { delay: 0.3 } }
                }}
                className="text-base sm:text-xl text-gray-700 leading-relaxed font-inter mb-10 max-w-xl"
              >
                Empowering businesses in the USA with premium AI-driven digital solutions. Backed by global technological excellence, we build the future of software.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.5 } }
                }}
                className="flex gap-4"
              >
                <a
                  href="#who-we-are"
                  className="btn-luxury-gold px-8 py-3.5 rounded-full text-base font-bold flex items-center justify-center gap-2"
                >
                  Learn More Below
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION */}
      <section className="w-full py-16 px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/30 backdrop-blur-md shadow-glass-glow text-left relative group overflow-hidden"
          >
            {/* Top gold line accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-racenza-gold/60 to-transparent" />
            
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-6 tracking-tight flex items-center gap-3">
              <Award className="w-8 h-8 text-racenza-gold" />
              Who We Are
            </h2>
            
            <p className="font-inter text-base sm:text-lg text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-playfair first-letter:font-bold first-letter:text-racenza-gold first-letter:mr-3 first-letter:float-left">
              Racena is the USA-based collaboration of Macenza, created to deliver premium IT services and cutting-edge digital solutions to businesses across the United States. We specialize in artificial intelligence, software development, enterprise automation, web applications, mobile applications, HRMS solutions, SaaS product development, cloud technologies, and complete IT transformation services. Backed by Macenza’s innovation and technical expertise, Racena helps businesses scale with smart, modern, and reliable technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. MISSION & VISION SECTION (Side-by-Side) */}
      <section className="w-full py-12 px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-panel p-8 rounded-3xl border border-white/30 backdrop-blur-md text-left flex flex-col justify-start items-start hover:border-racenza-pink-medium/50 hover:bg-white/20 transition-all duration-300 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-white/35 border border-white/45 flex items-center justify-center mb-6 shadow-sm">
              <Cpu className="w-5 h-5 text-racenza-gold" />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="font-inter text-sm sm:text-base text-gray-600 leading-relaxed">
              To empower businesses with intelligent, scalable, and future-ready technology solutions that accelerate growth, improve efficiency, and drive digital transformation through innovation, quality, and trust.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-panel p-8 rounded-3xl border border-white/30 backdrop-blur-md text-left flex flex-col justify-start items-start hover:border-racenza-pink-medium/50 hover:bg-white/20 transition-all duration-300 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-white/35 border border-white/45 flex items-center justify-center mb-6 shadow-sm">
              <Eye className="w-5 h-5 text-racenza-gold" />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="font-inter text-sm sm:text-base text-gray-600 leading-relaxed">
              To become a globally trusted technology partner recognized for delivering innovative AI-powered digital solutions that redefine how businesses operate, grow, and succeed.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 4. WHAT WE DELIVER (Services Highlight Tags) */}
      <section className="w-full py-16 px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          <span className="font-playfair text-sm text-racenza-gold font-semibold tracking-widest uppercase italic mb-2">
            IT Offerings
          </span>
          <div className="w-12 h-[1px] bg-racenza-gold mb-6"></div>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-10 tracking-tight">
            What We Deliver
          </h2>

          {/* Staggered Tag Cloud */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl">
            {servicesList.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="glass-panel px-5 py-3 rounded-full border border-white/30 shadow-sm font-inter text-sm sm:text-base font-semibold text-gray-700 hover:border-racenza-gold hover:text-gray-900 cursor-default"
              >
                🌸 {service}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE SECTION */}
      <section className="w-full py-16 px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="max-w-5xl mx-auto">
          
          {/* Section tag */}
          <div className="mb-12 text-center flex flex-col items-center">
            <span className="font-playfair text-sm text-racenza-gold font-semibold tracking-widest uppercase italic mb-2">
              Value Advantage
            </span>
            <div className="w-12 h-[1px] bg-racenza-gold mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-2 tracking-tight">
              Why Choose Racena
            </h2>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {chooseUsPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-panel p-6 rounded-2xl border border-white/20 backdrop-blur-sm text-left flex gap-4 items-start shadow-sm hover:border-racenza-pink-medium/40 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-racenza-gold/10 border border-racenza-gold/30 flex items-center justify-center mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-racenza-gold" />
                </div>
                <div>
                  <h4 className="font-playfair text-base sm:text-lg font-bold text-gray-800 mb-1">
                    {point.title}
                  </h4>
                  <p className="font-inter text-sm text-gray-500 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="w-full py-16 px-6 sm:px-8 lg:px-12 relative z-20 pb-28">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/30 backdrop-blur-lg shadow-glass-glow flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-racenza-gold/60 to-transparent" />
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4 tracking-tight leading-snug">
              Let’s Build Something Exceptional
            </h2>
            
            <p className="font-inter text-sm sm:text-base text-gray-600 max-w-xl mb-8 leading-relaxed">
              Partner with Racena to transform your business with innovative digital solutions and high-end software development.
            </p>

            <Link
              to="/#contact"
              className="btn-luxury-gold px-8 py-3.5 rounded-full text-base font-bold flex items-center gap-2 cursor-pointer"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
