import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ServicesDisplay from './ServicesDisplay';

const HeroSection = () => {
  const videoRefA = useRef(null);
  const videoRefB = useRef(null);
  const [activeVideo, setActiveVideo] = useState('A');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videoLoadedA, setVideoLoadedA] = useState(false);
  const [videoLoadedB, setVideoLoadedB] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const transitionTriggered = useRef(false);

  useEffect(() => {
    if (videoRefA.current) {
      videoRefA.current.play().catch(() => {
        console.log("Autoplay prevented or video missing, gracefully showing fallback.");
        setVideoError(true);
      });
    }
  }, []);

  const handleTimeUpdateA = () => {
    if (activeVideo !== 'A' || transitionTriggered.current) return;
    const videoA = videoRefA.current;
    const videoB = videoRefB.current;
    if (videoA && videoB && videoA.duration) {
      // Trigger crossfade 0.8 seconds before the end
      if (videoA.currentTime >= videoA.duration - 0.8) {
        transitionTriggered.current = true;
        videoB.currentTime = 2.9;
        videoB.play()
          .then(() => {
            setActiveVideo('B');
            setIsTransitioning(true);
            setTimeout(() => {
              videoA.pause();
              setIsTransitioning(false);
              transitionTriggered.current = false;
            }, 1000); // match transition duration
          })
          .catch((err) => {
            console.error("Failed to transition to Video B:", err);
            transitionTriggered.current = false;
          });
      }
    }
  };

  const handleTimeUpdateB = () => {
    if (activeVideo !== 'B' || transitionTriggered.current) return;
    const videoA = videoRefA.current;
    const videoB = videoRefB.current;
    if (videoA && videoB && videoB.duration) {
      // Trigger crossfade 0.8 seconds before the end
      if (videoB.currentTime >= videoB.duration - 0.8) {
        transitionTriggered.current = true;
        videoA.currentTime = 2.9;
        videoA.play()
          .then(() => {
            setActiveVideo('A');
            setIsTransitioning(true);
            setTimeout(() => {
              videoB.pause();
              setIsTransitioning(false);
              transitionTriggered.current = false;
            }, 1000); // match transition duration
          })
          .catch((err) => {
            console.error("Failed to transition to Video A:", err);
            transitionTriggered.current = false;
          });
      }
    }
  };

  const handleEndedA = () => {
    if (activeVideo === 'A') {
      const videoA = videoRefA.current;
      const videoB = videoRefB.current;
      if (videoA && videoB) {
        videoB.currentTime = 2.9;
        videoB.play().then(() => {
          setActiveVideo('B');
          setIsTransitioning(true);
          setTimeout(() => {
            videoA.pause();
            setIsTransitioning(false);
            transitionTriggered.current = false;
          }, 1000);
        }).catch(err => console.error(err));
      }
    }
  };

  const handleEndedB = () => {
    if (activeVideo === 'B') {
      const videoA = videoRefA.current;
      const videoB = videoRefB.current;
      if (videoA && videoB) {
        videoA.currentTime = 2.9;
        videoA.play().then(() => {
          setActiveVideo('A');
          setIsTransitioning(true);
          setTimeout(() => {
            videoB.pause();
            setIsTransitioning(false);
            transitionTriggered.current = false;
          }, 1000);
        }).catch(err => console.error(err));
      }
    }
  };

  const getVideoClassA = () => {
    let zClass = 'z-0';
    let opacityClass = 'opacity-0 pointer-events-none';
    if (activeVideo === 'A') {
      zClass = isTransitioning ? 'z-20' : 'z-10';
      opacityClass = videoLoadedA ? 'opacity-100' : 'opacity-0';
    } else {
      zClass = isTransitioning ? 'z-10' : 'z-0';
      opacityClass = isTransitioning && videoLoadedA ? 'opacity-100' : 'opacity-0 pointer-events-none';
    }
    return `w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${zClass} ${opacityClass}`;
  };

  const getVideoClassB = () => {
    let zClass = 'z-0';
    let opacityClass = 'opacity-0 pointer-events-none';
    if (activeVideo === 'B') {
      zClass = isTransitioning ? 'z-20' : 'z-10';
      opacityClass = videoLoadedB ? 'opacity-100' : 'opacity-0';
    } else {
      zClass = isTransitioning ? 'z-10' : 'z-0';
      opacityClass = isTransitioning && videoLoadedB ? 'opacity-100' : 'opacity-0 pointer-events-none';
    }
    return `w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${zClass} ${opacityClass}`;
  };

  return (
    <div className="w-full flex flex-col justify-start overflow-x-hidden bg-transparent">

      {/* FOLD 1: Full-Screen Cover Video Backdrop & Centered Brand Text */}
      <div className="w-full h-screen flex items-center justify-center overflow-hidden relative bg-[#FFF0F5]">

        {/* Soft elegant ambient glows */}
        <div className="bg-ambient-light-1 top-[-10%] left-[-10%] z-0" />
        <div className="bg-ambient-light-2 bottom-[-10%] right-[-10%] z-0" />

        {!videoError ? (
          <>
            <video
              ref={videoRefA}
              src="/Video/Hero_video.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              onTimeUpdate={handleTimeUpdateA}
              onEnded={handleEndedA}
              onCanPlay={() => setVideoLoadedA(true)}
              onError={() => setVideoError(true)}
              className={getVideoClassA()}
            />
            <video
              ref={videoRefB}
              src="/Video/Hero_video.mp4"
              muted
              playsInline
              preload="auto"
              onTimeUpdate={handleTimeUpdateB}
              onEnded={handleEndedB}
              onCanPlay={() => setVideoLoadedB(true)}
              onError={() => setVideoError(true)}
              className={getVideoClassB()}
            />
          </>
        ) : (
          /* High-Fidelity Fallback Gradient Decor */
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-[#FCE4EC] via-[#F8D7E8] to-[#FFF0F5] z-0">
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.35, 0.5, 0.35],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-white/20 to-racenza-pink-medium/35 rounded-full blur-[100px]"
            />
          </div>
        )}

        {/* Absolute Centered Logo overlaying the video (Fluid typography scaling) */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center px-4 py-1.5 rounded-full bg-white/25 border border-white/40 backdrop-blur-md text-gray-700 text-xs font-semibold tracking-[0.2em] uppercase mb-4 shadow-sm"
          >
            <span>Macenza Partnership</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
            className="text-[13vw] sm:text-[10vw] md:text-[9.5rem] font-playfair font-bold text-gray-900 leading-none tracking-tight mb-2 drop-shadow-md"
          >
            <span className="text-gold-gradient font-playfair italic">Racenza</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 96 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="h-[2px] bg-racenza-gold mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xs sm:text-sm font-inter tracking-[0.3em] text-gray-600 uppercase"
          >
            AI-Powered Digital Excellence
          </motion.p>

          {/* Dynamic scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-10 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] text-gray-500 tracking-[0.3em] uppercase">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-lg text-racenza-gold font-bold"
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 2. FOLD 2: Spacious Copywriting Intro Block */}
      <div className="w-full flex flex-col items-center text-center justify-center py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#FFF0F5]/85 border-t border-white/20 backdrop-blur-md relative z-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          {/* Tagline pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center px-4 py-1.5 rounded-full bg-white/30 border border-white/40 shadow-sm text-gray-800 text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <span>USA Branch of Macenza</span>
          </motion.div>

          {/* Majestic Centered Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-gray-900 mb-6 tracking-tight leading-[1.08]"
          >
            AI-Powered <span className="text-gold-gradient font-playfair italic">Digital</span> <br />
            <span className="text-gold-gradient font-playfair italic">Excellence</span> <br />
            for Modern Businesses
          </motion.h2>

          {/* Luxury Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-10 leading-relaxed font-inter font-normal"
          >
            Racenza, powered by Macenza, delivers world-class AI solutions, enterprise software, and digital transformation services across the USA.
          </motion.p>

          {/* Actions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              to="/#contact"
              className="btn-luxury-gold px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 text-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/#services"
              className="btn-glass-luxury px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 text-center"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* 3. FOLD 3: Responsive full Services grid */}
      <div className="w-full bg-[#FFF0F5]/85 pb-20 sm:pb-24 lg:pb-28 px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <ServicesDisplay />
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
