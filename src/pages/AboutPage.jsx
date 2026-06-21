import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cpu, Eye, Award, Globe, Smartphone, Cloud, Zap, Brain, ChevronRight, Target } from 'lucide-react';

const AboutPage = () => {
  const servicesList = [
    {
      title: "Software Development",
      icon: Cpu,
      description: "Custom enterprise-grade software and SaaS platforms designed to automate operations and drive scalability.",
      color: "rgba(212, 175, 55, 0.15)",
      items: [
        "Custom SaaS Platforms",
        "Enterprise Software",
        "CRM Development",
        "ERP Systems",
        "Business Dashboards",
        "Admin Panels"
      ]
    },
    {
      title: "Web Solutions",
      icon: Globe,
      description: "High-performance corporate websites and feature-rich portals with premium, engaging interfaces.",
      color: "rgba(232, 180, 200, 0.2)",
      items: [
        "Corporate Websites",
        "Landing Pages",
        "Web Applications",
        "E-commerce Stores",
        "Progressive Web Apps",
        "Customer Portals"
      ]
    },
    {
      title: "Mobile Applications",
      icon: Smartphone,
      description: "Native and cross-platform mobile apps offering flawless, immersive interactive user experiences.",
      color: "rgba(212, 175, 55, 0.15)",
      items: [
        "iOS Apps",
        "Android Apps",
        "Cross-platform Apps",
        "Startup MVP Apps",
        "On-demand Apps"
      ]
    },
    {
      title: "Automation Solutions",
      icon: Zap,
      description: "Intelligent workflow automation and integration systems that eliminate repetitive operational tasks.",
      color: "rgba(232, 180, 200, 0.2)",
      items: [
        "Workflow Automation",
        "Business Process Automation",
        "CRM Automation",
        "AI Automation",
        "Email Automation",
        "RPA Solutions"
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      description: "Secure cloud deployments, server management, and automated CI/CD pipelines built to scale.",
      color: "rgba(212, 175, 55, 0.15)",
      items: [
        "AWS Deployment",
        "Azure Cloud",
        "CI/CD Pipelines",
        "Cloud Migration",
        "Scalable Infrastructure",
        "Server Management"
      ]
    },
    {
      title: "AI Agents Built by Macenza",
      icon: Brain,
      description: "Our custom-trained autonomous agents handle everything from high-volume sales outreach to real-time customer support.",
      color: "rgba(232, 180, 200, 0.25)",
      items: [
        "Sales AI Agent",
        "Customer Support AI",
        "Voice AI Assistant",
        "Recruitment AI Agent",
        "Lead Generation AI",
        "Business Intelligence AI"
      ]
    }
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
          alt="Racenza Corporate Office Background"
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
                className="flex items-center px-4 py-1.5 rounded-full bg-white/30 border border-white/40 shadow-sm text-gray-800 text-xs font-semibold tracking-wider uppercase mb-6"
              >
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
                About <span className="text-gold-gradient font-playfair italic">Racenza</span>
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
      <section id="who-we-are" className="w-full py-16 px-6 sm:px-8 lg:px-12 relative z-20 scroll-mt-20">
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
              Racenza is the USA-based collaboration of Macenza, created to deliver premium IT services and cutting-edge digital solutions to businesses across the United States. We specialize in artificial intelligence, software development, enterprise automation, web applications, mobile applications, HRMS solutions, SaaS product development, cloud technologies, and complete IT transformation services. Backed by Macenza’s innovation and technical expertise, Racenza helps businesses scale with smart, modern, and reliable technology solutions.
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
              <Target className="w-5 h-5 text-racenza-gold" />
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

      {/* 4. WHAT WE DELIVER (Services Grid Cards) */}
      <section className="w-full py-16 px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          
          <span className="font-playfair text-sm text-racenza-gold font-semibold tracking-widest uppercase italic mb-2">
            IT Offerings
          </span>
          <div className="w-12 h-[1px] bg-racenza-gold mb-6"></div>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-10 tracking-tight">
            What We Deliver
          </h2>

          {/* 3-in-a-row Luxury Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-6 items-start">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                  className="glass-panel p-8 rounded-[2rem] border border-white/20 text-left flex flex-col justify-between items-start hover:border-racenza-gold/50 transition-[border-color,background-color,box-shadow] duration-200 shadow-sm relative group overflow-hidden min-h-[440px]"
                >
                  {/* Radial Glow on Hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${service.color}, transparent 70%)`
                    }}
                  />

                  {/* Top gold line accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-racenza-gold/0 to-transparent group-hover:via-racenza-gold/60 transition-all duration-200" />
                  
                  <div className="w-full z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Icon Badge */}
                      <div className="w-12 h-12 rounded-2xl bg-white/30 border border-white/50 flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/55 group-hover:border-racenza-gold/40 group-hover:scale-105 transition-all duration-200">
                        <Icon className="w-6 h-6 text-gray-700 group-hover:text-racenza-gold transition-colors duration-200" />
                      </div>

                      {/* Title */}
                      <h3 className="font-playfair text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-racenza-gold-dark transition-colors duration-200">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="font-inter text-sm text-gray-500 leading-relaxed max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-out group-hover:max-h-28 group-hover:opacity-100 group-hover:mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div>
                      {/* Divider */}
                      <div className="w-full h-[1px] bg-black/5 mb-6 group-hover:bg-racenza-gold/20 transition-colors duration-200" />

                      {/* Deliverables List */}
                      <ul className="space-y-3.5 w-full">
                        {service.items.map((item, itemIdx) => (
                          <li 
                            key={itemIdx} 
                            className="flex items-start gap-3 font-inter text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors duration-150 group/item"
                          >
                            <ChevronRight className="w-4 h-4 text-racenza-gold mt-0.5 flex-shrink-0 transition-transform duration-200 group-hover/item:translate-x-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              Why Choose Racenza
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
              Partner with Racenza to transform your business with innovative digital solutions and high-end software development.
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
