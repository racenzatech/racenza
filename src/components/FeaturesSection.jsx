import { motion } from 'framer-motion';
import { Cpu, Zap, HeartHandshake, Compass } from 'lucide-react';

const features = [
  {
    title: "AI-First Infrastructure",
    description: "Integrating custom models, advanced analytics, and automated RAG systems designed for rapid scaling.",
    icon: Cpu,
    color: "rgba(212, 175, 55, 0.2)"
  },
  {
    title: "Industry-Standard UI/UX",
    description: "High-fidelity premium luxury interfaces designed to wow your users and deliver high-premium conversion.",
    icon: Compass,
    color: "rgba(248, 215, 232, 0.25)"
  },
  {
    title: "Hyper-Scalable Cloud",
    description: "Enterprise SaaS software designed on AWS, GCP, and Azure for bank-grade security and scale.",
    icon: Zap,
    color: "rgba(248, 215, 232, 0.25)"
  },
  {
    title: "Elite USA Support",
    description: "Dedicated account managers and local engineers available 24/7 to support your operations.",
    icon: HeartHandshake,
    color: "rgba(212, 175, 55, 0.2)"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full py-20 sm:py-24 bg-[#FFF0F5]/85 relative z-20 px-6 sm:px-8 lg:px-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 text-center flex flex-col items-center">
          <span className="font-playfair text-lg text-racenza-gold font-semibold tracking-widest uppercase italic mb-2">
            Why Choose Us
          </span>
          <div className="w-12 h-[1px] bg-racenza-gold mb-6"></div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 tracking-tight">
            Designed for Enterprise. Built for Scale.
          </h2>
        </div>

        {/* Features 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl text-left hover:border-racenza-pink-medium/50 hover:bg-white/20 transition-all duration-300 relative group overflow-hidden shadow-sm"
              >
                {/* Custom gradient backplate on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 10% 10%, ${feature.color}, transparent 65%)`
                  }}
                />
                
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/45 flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/40 group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-6 h-6 text-gray-700 group-hover:text-racenza-gold transition-colors duration-300" />
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="font-inter text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {feature.description}
                </p>
                
                <div className="w-0 h-[1.5px] bg-racenza-gold mt-4 group-hover:w-10 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
