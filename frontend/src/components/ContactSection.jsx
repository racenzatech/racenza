import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Sparkles, CheckCircle2, Send, Loader2 } from 'lucide-react';

const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Artificial Intelligence Solutions',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://racenza.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Artificial Intelligence Solutions',
          message: ''
        });
      } else {
        setError(data.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please make sure the backend server is running and try again.');
    } finally {
      setLoading(false);
    }
  };

  const projectTypes = [
    "Artificial Intelligence Solutions",
    "Website Development",
    "Web Application Development",
    "SaaS Product Development",
    "Custom Software Development",
    "IT Consulting"
  ];

  return (
    <section id="contact" className="w-full py-20 sm:py-24 bg-[#FFF0F5]/85 relative z-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

        {/* Left Side: Contact details & Corporate Information */}
        <div className="lg:col-span-5 flex flex-col justify-between items-start text-left bg-white/10 border border-white/20 p-8 sm:p-10 rounded-3xl backdrop-blur-md shadow-sm">
          <div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/30 border border-white/40 shadow-sm text-gray-800 text-xs font-semibold tracking-wider uppercase mb-5 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-racenza-gold" />
              <span>Book Consultation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-6 tracking-tight">
              Start Your Journey <br />
              <span className="text-gold-gradient font-playfair italic">With Racenza</span>
            </h2>

            <p className="font-inter text-sm sm:text-base text-gray-600 leading-relaxed mb-10">
              Ready to automate your workflows, scale your SaaS products, or build advanced artificial intelligence systems? Get in touch with our USA consulting team.
            </p>
          </div>

          {/* Quick contact list */}
          <div className="flex flex-col gap-6 w-full mt-4">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/30 border border-white/45 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Mail className="w-5 h-5 text-racenza-gold" />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 font-inter">Email us</span>
                <p className="font-inter text-sm font-semibold text-gray-700">racenza.tech@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/30 border border-white/45 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Phone className="w-5 h-5 text-racenza-gold" />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 font-inter">Call us</span>
                <p className="font-inter text-sm font-semibold text-gray-700">Phone No.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/30 border border-white/45 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-racenza-gold" />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 font-inter">USA HQ</span>
                <p className="font-inter text-sm font-semibold text-gray-700">Address</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Booking Form */}
        <div className="lg:col-span-7 flex flex-col justify-center bg-white/20 border border-white/30 p-8 sm:p-10 rounded-3xl backdrop-blur-lg shadow-glass-glow relative overflow-hidden">

          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form
                key="booking-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col gap-6 w-full text-left"
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-inter text-xs font-bold uppercase tracking-wider text-gray-600">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/60 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none font-inter text-sm text-gray-800 transition-all duration-300 shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-inter text-xs font-bold uppercase tracking-wider text-gray-600">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/60 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none font-inter text-sm text-gray-800 transition-all duration-300 shadow-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-inter text-xs font-bold uppercase tracking-wider text-gray-600">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone No."
                      className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/60 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none font-inter text-sm text-gray-800 transition-all duration-300 shadow-sm"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="projectType" className="font-inter text-xs font-bold uppercase tracking-wider text-gray-600">
                    Required Service *
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/60 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none font-inter text-sm text-gray-700 transition-all duration-300 shadow-sm appearance-none cursor-pointer"
                  >
                    {projectTypes.map(type => (
                      <option key={type} value={type} className="bg-[#FFF0F5]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-inter text-xs font-bold uppercase tracking-wider text-gray-600">
                    Project Brief & Goals *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your timeline, goals, and budget..."
                    className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/60 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none font-inter text-sm text-gray-800 transition-all duration-300 shadow-sm resize-none"
                  />
                </div>

                {error && (
                  <div className="text-red-500 font-inter text-sm bg-red-50/50 p-3 rounded-xl border border-red-200">
                    {error}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-luxury-gold px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 mt-2 w-full sm:w-fit cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Book Consultation Now
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              /* Success State */
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center text-center p-8 w-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-racenza-gold/10 border border-racenza-gold/30 flex items-center justify-center mb-6 shadow-premium-glow">
                  <CheckCircle2 className="w-8 h-8 text-racenza-gold" />
                </div>

                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                  Consultation Request Received
                </h3>

                <p className="font-inter text-sm sm:text-base text-gray-600 max-w-md leading-relaxed mb-6">
                  Thank you! Our USA account strategy director will review your details and call you within 1 business hour.
                </p>

                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-glass-luxury px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer"
                >
                  Send another request
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
