import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UploadCloud, FileText, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const ApplyModal = ({ isOpen, onClose, jobTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestReason: '',
    resume: null
  });

  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Submitting Application...');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const fileInputRef = useRef(null);

  const handleClose = useCallback(() => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      interestReason: '',
      resume: null
    });
    setError('');
    setSuccess(false);
    setDragActive(false);
    setLoadingText('Submitting Application...');
    onClose();
  }, [onClose]);

  // Focus trap and escape key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFile = (file) => {
    if (!file) return null;
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    if (!allowedTypes.includes(file.type) && !file.name.endsWith('.pdf') && !file.name.endsWith('.doc') && !file.name.endsWith('.docx')) {
      return 'Unsupported file format. Please upload PDF, DOC, or DOCX.';
    }
    if (file.size > 5 * 1024 * 1024) {
      return 'File size is too large. Maximum size is 5MB.';
    }
    return null;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const fileError = validateFile(file);
      if (fileError) {
        setError(fileError);
      } else {
        setFormData(prev => ({ ...prev, resume: file }));
        setError('');
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileError = validateFile(file);
      if (fileError) {
        setError(fileError);
      } else {
        setFormData(prev => ({ ...prev, resume: file }));
        setError('');
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validations
    if (!formData.name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Please enter your phone number.');
      return;
    }
    if (!formData.interestReason.trim()) {
      setError('Please tell us why you are interested in this role.');
      return;
    }
    if (!formData.resume) {
      setError('Please upload your resume.');
      return;
    }

    setLoading(true);
    setError('');
    setLoadingText('Uploading Resume...');

    try {
      // Prepare file upload payload
      const fileData = new FormData();
      fileData.append('file', formData.resume);

      let resumeUrl = '';

      // Attempt 1: Upload to tmpfiles.org
      try {
        const fileUploadResponse = await fetch('https://tmpfiles.org/api/v1/upload', {
          method: 'POST',
          body: fileData
        });
        if (fileUploadResponse.ok) {
          const uploadResult = await fileUploadResponse.json();
          if (uploadResult.status === 'success' && uploadResult.data && uploadResult.data.url) {
            resumeUrl = uploadResult.data.url.replace('tmpfiles.org/', 'tmpfiles.org/dl/');
          }
        }
      } catch (err) {
        console.warn('tmpfiles.org upload failed, trying file.io...', err);
      }

      // Attempt 2: Fallback upload to file.io
      if (!resumeUrl) {
        try {
          const backupFileData = new FormData();
          backupFileData.append('file', formData.resume);
          const fileUploadResponse = await fetch('https://file.io', {
            method: 'POST',
            body: backupFileData
          });
          if (fileUploadResponse.ok) {
            const uploadResult = await fileUploadResponse.json();
            if (uploadResult.success && uploadResult.link) {
              resumeUrl = uploadResult.link;
            }
          }
        } catch (err) {
          console.error('file.io upload failed:', err);
        }
      }

      if (!resumeUrl) {
        setError('Failed to upload resume. Please try again or check your internet connection.');
        setLoading(false);
        return;
      }

      setLoadingText('Sending Application...');

      // Construct standard JSON request for Web3Forms (does not trigger Pro file attachments check)
      const web3FormsData = {
        access_key: 'c0bc1374-8f70-4383-84bc-02fade754efe',
        subject: `[Racenza Careers] Job Application: ${jobTitle} - ${formData.name}`,
        from_name: 'Racenza Careers Portal',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Applicant has applied for the position of: ${jobTitle}.\n\nCandidate Details:\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Phone: ${formData.phone}\n\nWhy are you interested in this role?\n${formData.interestReason}\n\nResume Download Link:\n${resumeUrl}`
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(web3FormsData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
      } else {
        setError(data.message || 'Failed to submit application. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#1A0F14]/75 backdrop-blur-sm"
          />

          {/* Modal Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg bg-[#FFF0F5] border border-white/40 rounded-3xl backdrop-blur-xl shadow-glass-glow overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Elegant top line decoration */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-racenza-gold/80 to-transparent z-10" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/40 hover:bg-white/70 border border-white/20 transition-all duration-300 group cursor-pointer z-10"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 text-gray-700 group-hover:scale-110 transition-transform" />
            </button>

            {/* Scrollable Container Wrapper */}
            <div className="w-full overflow-y-auto p-5 sm:p-6 pr-4 sm:pr-5 flex-1">
              {!success ? (
                <div className="flex flex-col text-left">
                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900 mb-1 tracking-tight">
                    Apply for Position
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-racenza-gold-dark font-medium tracking-wide mb-4 uppercase">
                    {jobTitle}
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Name Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="modal-name" className="font-inter text-xs font-bold uppercase tracking-wider text-gray-600">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="modal-name"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/80 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none font-inter text-sm text-gray-800 transition-all duration-300 shadow-sm"
                      />
                    </div>

                    {/* Email & Phone grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email Input */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="modal-email" className="font-inter text-xs font-bold uppercase tracking-wider text-gray-600">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="modal-email"
                          required
                          placeholder="jane@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/80 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none font-inter text-sm text-gray-800 transition-all duration-300 shadow-sm"
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="modal-phone" className="font-inter text-xs font-bold uppercase tracking-wider text-gray-600">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="modal-phone"
                          required
                          placeholder="Phone No."
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/80 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none font-inter text-sm text-gray-800 transition-all duration-300 shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Why are you interested in this role? */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="modal-interest" className="font-inter text-xs font-bold uppercase tracking-wider text-gray-600">
                        Why are you interested in this role? *
                      </label>
                      <textarea
                        id="modal-interest"
                        required
                        rows={2}
                        placeholder="Please share what makes you a great fit for this position..."
                        value={formData.interestReason}
                        onChange={(e) => setFormData(prev => ({ ...prev, interestReason: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/80 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none font-inter text-sm text-gray-800 transition-all duration-300 shadow-sm resize-none"
                      />
                    </div>

                    {/* Drag-and-drop Resume upload */}
                    <div className="flex flex-col gap-2">
                      <span className="font-inter text-xs font-bold uppercase tracking-wider text-gray-600">
                        Resume Upload *
                      </span>
                      
                      <div
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleDrag}
                        onDrop={handleDrop}
                        onClick={triggerFileInput}
                        className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-4 sm:p-5 transition-all duration-300 cursor-pointer ${
                          dragActive
                            ? 'border-racenza-gold bg-white/70 shadow-inner'
                            : formData.resume
                            ? 'border-green-400 bg-white/55'
                            : 'border-white/80 bg-white/35 hover:bg-white/50'
                        }`}
                      >
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          className="hidden"
                        />

                        {!formData.resume ? (
                          <>
                            <UploadCloud className={`w-8 h-8 mb-2 transition-colors ${dragActive ? 'text-racenza-gold' : 'text-gray-400'}`} />
                            <p className="font-inter text-sm font-semibold text-gray-700 mb-0.5">
                              Drag & drop your resume here
                            </p>
                            <p className="font-inter text-xs text-gray-400">
                              or click to browse files (PDF, DOC, DOCX up to 5MB)
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-2">
                              <FileText className="w-5 h-5 text-green-600" />
                            </div>
                            <p className="font-inter text-sm font-semibold text-green-700 mb-0.5 truncate max-w-xs">
                              {formData.resume.name}
                            </p>
                            <p className="font-inter text-xs text-gray-500">
                              {((formData.resume.size) / (1024 * 1024)).toFixed(2)} MB • Click to replace file
                            </p>
                          </>
                        )}
                      </div>
                    </div>

                    {error && (
                      <div className="flex items-start gap-2.5 text-red-500 font-inter text-xs sm:text-sm bg-red-50/50 p-3 rounded-xl border border-red-200">
                        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-luxury-gold py-3.5 rounded-full text-base font-bold flex items-center justify-center gap-2 mt-2 w-full cursor-pointer disabled:opacity-75"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          {loadingText}
                        </>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center p-6 w-full"
                >
                  <div className="w-16 h-16 rounded-2xl bg-racenza-gold/10 border border-racenza-gold/30 flex items-center justify-center mb-6 shadow-premium-glow">
                    <CheckCircle2 className="w-8 h-8 text-racenza-gold" />
                  </div>

                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                    Application Submitted
                  </h3>

                  <p className="font-inter text-sm text-gray-600 max-w-sm leading-relaxed mb-8">
                    Thank you, <strong>{formData.name}</strong>! Your application for <strong>{jobTitle}</strong> has been received successfully. Our recruitment team will review your resume and contact you soon.
                  </p>

                  <button
                    onClick={handleClose}
                    className="btn-glass-luxury px-8 py-2.5 rounded-full text-sm font-semibold cursor-pointer"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;
