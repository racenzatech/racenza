import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Globe, 
  Terminal, 
  Smartphone, 
  UsersRound, 
  Layers, 
  Cpu, 
  Sliders, 
  Compass, 
  HelpCircle 
} from 'lucide-react';

const services = [
  { 
    name: "Artificial Intelligence Solutions", 
    icon: BrainCircuit, 
    color: "rgba(212, 175, 55, 0.25)",
    description: "Leverage cutting-edge machine learning, custom LLMs, and neural networks to automate decisions and unlock deep insights."
  },
  { 
    name: "Website Development", 
    icon: Globe, 
    color: "rgba(248, 215, 232, 0.25)",
    description: "Design and build fast, secure, SEO-optimized marketing websites that elevate your digital brand presence and engagement."
  },
  { 
    name: "Web Application Development", 
    icon: Terminal, 
    color: "rgba(248, 215, 232, 0.25)",
    description: "Engineer robust, interactive web apps and customer portals with modern frontends and powerful backend APIs."
  },
  { 
    name: "Android/iOS App Development", 
    icon: Smartphone, 
    color: "rgba(248, 215, 232, 0.25)",
    description: "Craft high-performance, native-feeling mobile applications with clean interfaces for iOS and Android platforms."
  },
  { 
    name: "HRMS Development", 
    icon: UsersRound, 
    color: "rgba(248, 215, 232, 0.25)",
    description: "Streamline workforce coordination, payroll integration, employee onboarding, and performance tracking."
  },
  { 
    name: "SaaS Product Development", 
    icon: Layers, 
    color: "rgba(212, 175, 55, 0.25)",
    description: "Build scalable, multi-tenant cloud products with integrated subscriptions, analytics, and tenant management."
  },
  { 
    name: "Custom Software Development", 
    icon: Cpu, 
    color: "rgba(248, 215, 232, 0.25)",
    description: "Tailor-made software solutions designed specifically around your unique workflow processes and business logic."
  },
  { 
    name: "Business Automation", 
    icon: Sliders, 
    color: "rgba(248, 215, 232, 0.25)",
    description: "Connect fragmented workflows, build API integrations, and automate repetitive tasks to boost efficiency."
  },
  { 
    name: "UI/UX Design", 
    icon: Compass, 
    color: "rgba(212, 175, 55, 0.25)",
    description: "Create beautiful, user-centered design systems, interactive prototypes, and modern, high-fidelity interfaces."
  },
  { 
    name: "IT Consulting", 
    icon: HelpCircle, 
    color: "rgba(248, 215, 232, 0.25)",
    description: "Get expert strategic advice on cloud infrastructure, system scalability, and technical stack selection."
  }
];

const ServicesDisplay = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 80, 
        damping: 16
      }
    }
  };

  return (
    <div id="services" className="w-full py-8 z-20 scroll-mt-20">
      
      {/* Decorative luxury section tag */}
      <div className="mb-8 text-center flex flex-col items-center">
        <span className="font-playfair text-lg text-racenza-gold font-semibold tracking-widest uppercase italic">
          Our Suite of Offerings
        </span>
        <div className="w-16 h-[1.5px] bg-racenza-gold mt-2"></div>
        <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mt-4 tracking-tight">
          AI-Powered Services Designed for Growth
        </h2>
      </div>

      {/* Full Grid flowing naturally (Excellent responsive mobile resolution fixes) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          const floatDelay = index * 0.3;
          
          return (
            <motion.div
              key={service.name}
              variants={cardVariants}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: floatDelay
              }}
              whileHover={{
                scale: 1.025,
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col items-start text-left cursor-pointer relative group overflow-hidden"
            >
              {/* Soft luxury gold gradient hover highlight */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 10% 10%, ${service.color}, transparent 65%)`
                }}
              />
              
              {/* Premium rounded container for icon */}
              <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/45 flex items-center justify-center mb-4 shadow-sm group-hover:bg-white/40 group-hover:border-racenza-pink-medium/60 group-hover:scale-105 transition-all duration-300">
                <Icon className="w-6 h-6 text-gray-700 group-hover:text-racenza-gold transition-colors duration-300" />
              </div>
              
              <h3 className="font-playfair text-lg font-bold text-gray-800 tracking-wide leading-snug group-hover:text-gray-900 transition-colors duration-300">
                {service.name}
              </h3>
              
              <p className="text-xs text-gray-500 font-inter font-normal mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-24 overflow-hidden">
                {service.description}
              </p>
              
              <div className="w-0 h-[1.5px] bg-racenza-gold mt-3 group-hover:w-8 transition-all duration-300" />
            </motion.div>
          );
        })}
      </motion.div>

    </div>
  );
};

export default ServicesDisplay;
