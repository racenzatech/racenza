import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, Clock, ArrowRight, Loader2 } from 'lucide-react';
import ApplyModal from '../components/ApplyModal';

const CareersPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeJobTitle, setActiveJobTitle] = useState('');

  // Fetch jobs dynamically on mount
  useEffect(() => {
    fetch('/jobs.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch jobs');
        return res.json();
      })
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching jobs:', err);
        setLoading(false);
      });
  }, []);

  const handleApplyClick = (jobTitle) => {
    setActiveJobTitle(jobTitle);
    setModalOpen(true);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full flex flex-col justify-start overflow-x-hidden bg-transparent pt-24 min-h-screen">
      
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Full Hero Image Background (No blur, 100% native clarity) */}
        <img
          src="/Video/Image.png"
          alt="Racenza Careers Background"
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
                <span>Join Our Growth Phase</span>
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
                Build the Future <br />
                <span className="text-gold-gradient font-playfair italic">with Racenza</span>
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
                We are looking for elite sales professionals to expand our partnerships and drive digital transformation and enterprise AI services across the USA.
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
                  href="#openings"
                  className="btn-luxury-gold px-8 py-3.5 rounded-full text-base font-bold flex items-center justify-center gap-2"
                >
                  Explore Sales Roles
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ACTIVE OPENINGS SECTION */}
      <section id="openings" className="w-full py-20 px-6 sm:px-8 lg:px-12 relative z-20 pb-32 scroll-mt-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          
          <div className="text-center flex flex-col items-center mb-4">
            <span className="font-playfair text-sm text-racenza-gold font-semibold tracking-widest uppercase italic mb-2">
              Opportunities
            </span>
            <div className="w-12 h-[1px] bg-racenza-gold mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 tracking-tight">
              Active Job Openings
            </h2>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="w-10 h-10 text-racenza-gold animate-spin" />
              <p className="font-inter text-sm text-gray-500">Retrieving active positions...</p>
            </div>
          ) : jobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/20 hover:border-racenza-pink-medium/50 hover:bg-white/20 transition-all duration-300 shadow-sm flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Department and workplace tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-2.5 py-0.5 rounded-md bg-racenza-gold/10 border border-racenza-gold/30 text-racenza-gold-dark text-[10px] font-bold uppercase tracking-wider">
                        {job.department}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-white/30 border border-white/45 text-gray-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {job.workplace}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h3 className="font-playfair text-xl sm:text-2xl font-bold text-gray-800 mb-3 group-hover:text-racenza-gold transition-colors duration-300">
                      {job.title}
                    </h3>

                    {/* Summary Description */}
                    <p className="font-inter text-sm text-gray-600 leading-relaxed mb-6">
                      {job.summary}
                    </p>

                    {/* Meta info: Location / Time */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-inter mb-8">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-racenza-gold" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-racenza-gold" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center justify-between gap-4 mt-auto">
                    <Link
                      to={`/careers/${job.id}`}
                      className="font-inter text-xs sm:text-sm font-semibold text-gray-700 hover:text-racenza-gold transition-colors duration-300 flex items-center gap-1.5 group/link cursor-pointer"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={() => handleApplyClick(job.title)}
                      className="btn-luxury-gold px-5 py-2.5 rounded-full text-xs font-semibold"
                    >
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-panel p-12 rounded-3xl border border-white/30 shadow-sm text-center flex flex-col items-center justify-center max-w-lg mx-auto"
            >
              <Briefcase className="w-12 h-12 text-gray-300 mb-4 animate-pulse" />
              <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">No positions found</h3>
              <p className="font-inter text-sm text-gray-500 leading-relaxed mb-6">
                There are currently no active openings. Please check back later.
              </p>
            </motion.div>
          )}

        </div>
      </section>

      {/* Dynamic Apply Modal */}
      <ApplyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        jobTitle={activeJobTitle}
      />

    </div>
  );
};

export default CareersPage;
