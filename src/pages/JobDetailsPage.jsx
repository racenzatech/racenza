import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, MapPin, Building2, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import ApplyModal from '../components/ApplyModal';

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch('/jobs.json')
      .then(res => {
        if (!res.ok) throw new Error('Network response not ok');
        return res.json();
      })
      .then(data => {
        const foundJob = data.find(j => j.id === jobId);
        if (foundJob) {
          setJob(foundJob);
          // Set dynamic page title
          document.title = `${foundJob.title} | Careers at Racenza`;
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching job details:', err);
        setError(true);
        setLoading(false);
      });

    // Reset title on unmount
    return () => {
      document.title = 'Racenza | Premium AI-Powered IT Services & Digital Excellence';
    };
  }, [jobId]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center pt-24 gap-4 bg-transparent">
        <Loader2 className="w-10 h-10 text-racenza-gold animate-spin" />
        <p className="font-inter text-sm text-gray-500">Loading position details...</p>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 text-center pt-24 bg-transparent">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/30 shadow-glass-glow max-w-md w-full"
        >
          <AlertCircle className="w-12 h-12 text-red-400 mb-4 mx-auto" />
          <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-2">Position Not Found</h3>
          <p className="font-inter text-sm text-gray-500 leading-relaxed mb-6">
            The job listing you are looking for does not exist or has already been filled.
          </p>
          <Link
            to="/careers"
            className="btn-luxury-gold px-8 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-start overflow-x-hidden bg-transparent pt-24 min-h-screen">
      
      {/* Dynamic light accents */}
      <div className="bg-ambient-light-1 top-10 left-10" />
      <div className="bg-ambient-light-2 top-1/2 right-10" />

      {/* Main Job Details Layout */}
      <section className="w-full py-12 px-6 sm:px-8 lg:px-12 relative z-20 pb-28">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 text-left">
          
          {/* Back button */}
          <Link
            to="/careers"
            className="font-inter text-xs sm:text-sm font-semibold text-gray-500 hover:text-racenza-gold transition-colors duration-300 flex items-center gap-1.5 w-fit group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Careers
          </Link>

          {/* Job Info Header Panel */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-8 rounded-3xl border border-white/35 shadow-glass-glow"
          >
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-2.5 py-0.5 rounded-md bg-racenza-gold/10 border border-racenza-gold/30 text-racenza-gold-dark text-[10px] font-bold uppercase tracking-wider">
                {job.department}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/30 border border-white/45 text-gray-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <Building2 className="w-3 h-3" />
                {job.workplace}
              </span>
            </div>

            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {job.title}
            </h1>

            {/* Quick Meta details list */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/20 pt-6">
              <div className="flex flex-col">
                <span className="font-inter text-[10px] font-bold uppercase tracking-wider text-gray-400">Location</span>
                <span className="font-inter text-sm font-semibold text-gray-700 mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-racenza-gold" />
                  {job.location}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-inter text-[10px] font-bold uppercase tracking-wider text-gray-400">Job Type</span>
                <span className="font-inter text-sm font-semibold text-gray-700 mt-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-racenza-gold" />
                  {job.type}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-inter text-[10px] font-bold uppercase tracking-wider text-gray-400">Department</span>
                <span className="font-inter text-sm font-semibold text-gray-700 mt-1 flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-racenza-gold" />
                  {job.department}
                </span>
              </div>
              <div className="flex flex-col sm:items-end justify-center pt-2 sm:pt-0">
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-luxury-gold px-6 py-2.5 rounded-full text-xs font-semibold w-full sm:w-auto text-center"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* Job Requirements & Information */}
          <div className="grid grid-cols-1 gap-8">
            {/* 1. Job Description */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl border border-white/20 hover:border-racenza-pink-medium/40 transition-colors shadow-sm"
            >
              <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
                Role Overview
              </h2>
              <p className="font-inter text-sm sm:text-base text-gray-600 leading-relaxed">
                {job.description}
              </p>
            </motion.div>

            {/* 2. Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl border border-white/20 hover:border-racenza-pink-medium/40 transition-colors shadow-sm"
            >
              <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
                Core Responsibilities
              </h2>
              <ul className="flex flex-col gap-3">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm sm:text-base text-gray-600 leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-racenza-gold/10 border border-racenza-gold/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-racenza-gold" />
                    </div>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 3. Qualifications */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl border border-white/20 hover:border-racenza-pink-medium/40 transition-colors shadow-sm"
            >
              <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
                Qualifications & Skills
              </h2>
              <ul className="flex flex-col gap-3">
                {job.qualifications.map((qual, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm sm:text-base text-gray-600 leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-racenza-gold/10 border border-racenza-gold/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-racenza-gold" />
                    </div>
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 4. Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl border border-white/20 hover:border-racenza-pink-medium/40 transition-colors shadow-sm"
            >
              <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
                What We Offer (Benefits)
              </h2>
              <ul className="flex flex-col gap-3">
                {job.benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm sm:text-base text-gray-600 leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-racenza-gold/10 border border-racenza-gold/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-racenza-gold" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Call To Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/30 shadow-glass-glow flex flex-col items-center text-center relative overflow-hidden mt-6"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-racenza-gold/60 to-transparent" />
            
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4 tracking-tight">
              Ready to Shape the Future?
            </h2>
            <p className="font-inter text-sm sm:text-base text-gray-600 max-w-md mb-8 leading-relaxed">
              If your background aligns with this specification, we would love to schedule a briefing with our director.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="btn-luxury-gold px-8 py-3.5 rounded-full text-base font-bold flex items-center justify-center cursor-pointer"
            >
              Submit Application
            </button>
          </motion.div>

        </div>
      </section>

      {/* Application Modal */}
      <ApplyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        jobTitle={job.title}
      />

    </div>
  );
};

export default JobDetailsPage;
