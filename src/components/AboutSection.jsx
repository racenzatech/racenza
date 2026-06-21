import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Milestone, Cpu, Layers } from 'lucide-react';

const AboutSection = () => {
  const points = [
    {
      title: "USA-Local Operations",
      description: "Based in the USA, providing high-touch local consulting, solution design, and rapid response delivery.",
      icon: Milestone
    },
    {
      title: "Macenza Global Core",
      description: "Backed by the global software engineering capabilities of Macenza Technology, enabling massive enterprise scale.",
      icon: Layers
    },
    {
      title: "AI-First Hybrid R&D",
      description: "Co-developed artificial intelligence frameworks utilizing the latest technologies for high-speed business automation.",
      icon: Cpu
    }
  ];

  return (
    <section id="about" className="w-full py-20 sm:py-24 bg-[#FFF0F5]/85 relative z-20 px-6 sm:px-8 lg:px-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Elegant Editorial Content */}
        <div className="lg:col-span-6 text-left flex flex-col items-start">
          <div className="flex items-center px-4 py-1.5 rounded-full bg-white/30 border border-white/40 shadow-sm text-gray-800 text-xs font-semibold tracking-wider uppercase mb-5">
            <span>Corporate Partnership</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6 tracking-tight">
            The Synergy: <br />
            <span className="text-gold-gradient font-playfair italic">Racenza & Macenza</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-inter mb-6">
            Racenza operates as the dedicated USA branch of **Macenza Global Technology**, translating high-end complex engineering into hyper-intuitive digital products.
          </p>
          
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-inter mb-8">
            Through this elite partnership, our clients gain access to local USA architects, dedicated account management, and round-the-clock enterprise backing from hundreds of engineers globally. We bring the dream of luxurious, feminine, and futuristic SaaS interfaces to life.
          </p>

          <Link 
            to="/#contact" 
            className="btn-luxury-gold px-8 py-3.5 rounded-full text-base font-semibold"
          >
            Learn Collaboration Details
          </Link>
        </div>

        {/* Right Side: High-Fidelity Synergy Timeline Cards */}
        <div className="lg:col-span-6 w-full flex flex-col gap-6">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-panel p-6 rounded-2xl flex gap-4 items-start text-left hover:border-racenza-pink-medium/50 hover:bg-white/20 transition-all duration-300 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-white/35 border border-white/45 flex items-center justify-center shadow-sm">
                  <Icon className="w-5 h-5 text-racenza-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-lg font-bold text-gray-800 mb-1">
                    {point.title}
                  </h3>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
