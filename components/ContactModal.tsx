import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'audit' | 'apply';
}

export const ContactModal = ({ isOpen, onClose, mode }: ContactModalProps) => {
  const [step, setStep] = useState<'form' | 'submitting' | 'success'>('form');
  const [loadingIndex, setLoadingIndex] = useState(0);
  const [protocolId, setProtocolId] = useState("");

  const loadingMessages = [
    "Scanning Domain Infrastructure...",
    "Mapping Local Competitor Rankings...",
    "Quantifying Conversion Leakage...",
    "Finalizing Growth Protocol..."
  ];

  const content = {
    audit: {
      title: "Request Audit",
      sub: "We limit partners to 3 per region. Enter your details to check availability.",
      btn: "Run Analysis",
      subject: "New LocalLeadBot Audit Request (localleadbot.com)"
    },
    apply: {
      title: "Partnership Intake",
      sub: "Exclusivity guaranteed for selected firms. Apply for territory dominance.",
      btn: "Submit Application",
      subject: "New Partnership Application (localleadbot.com)"
    }
  };

  useEffect(() => {
    if (step === 'submitting') {
      const interval = setInterval(() => {
        setLoadingIndex((prev) => (prev + 1) % loadingMessages.length);
      }, 800);
      return () => clearInterval(interval);
    }
  }, [step]);

  const generateId = () => {
    const random = Math.floor(1000 + Math.random() * 9000);
    setProtocolId(`PX-${random}-LLM`);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep('submitting');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mvgqyrkg", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        generateId();
        setStep('success');
      } else {
        alert("The Engine encountered an error. Please try again.");
        setStep('form');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStep('form');
    }
  };

  const reset = () => {
    setStep('form');
    setLoadingIndex(0);
    onClose();
  };

  // Force redirect to .com to solidify the brand move
  const handleFinalRedirect = () => {
    window.location.href = "https://localleadbot.com";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={reset}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="w-full max-w-md bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto relative"
            >
              <button onClick={reset} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
                <X size={20} />
              </button>

              <div className="p-8">
                {step === 'form' && (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="mb-2">
                      <h2 className="text-2xl font-display font-bold text-white mb-2">{content[mode].title}</h2>
                      <p className="text-sm text-gray-400">{content[mode].sub}</p>
                    </div>

                    <input type="hidden" name="_subject" value={content[mode].subject} />
                    <input type="hidden" name="intent_mode" value={mode} />

                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider font-mono">Business URL</label>
                      <input 
                        name="website"
                        required 
                        type="url" 
                        placeholder="https://example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider font-mono">Work Email</label>
                      <input 
                        name="email"
                        required 
                        type="email" 
                        placeholder="you@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="mt-2 w-full bg-gradient-to-r from-[#D4AF37] to-[#8A6D3B] text-black font-bold py-3 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                    >
                      {content[mode].btn}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}

                {step === 'submitting' && (
                  <div className="py-12 flex flex-col items-center justify-center text-center">
                    <Loader2 className="w-10 h-10 text-amber-500 animate-spin mb-4" />
                    <p className="text-white font-medium">Connecting to Engine...</p>
                    <motion.p 
                      key={loadingIndex}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-amber-500/70 mt-2 font-mono uppercase tracking-widest"
                    >
                      {loadingMessages[loadingIndex]}
                    </motion.p>
                  </div>
                )}

                {step === 'success' && (
                  <div className="py-8 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">Request Received</h3>
                    <p className="text-gray-400 mb-4 max-w-[280px]">
                      Your site has been queued for analysis. A strategist will contact you within 24 hours.
                    </p>
                    
                    <div className="mb-6 px-3 py-1 bg-white/5 rounded border border-white/10 flex items-center gap-2">
                       <ShieldCheck className="w-3 h-3 text-amber-500" />
                       <span className="text-[10px] font-mono text-gray-500 tracking-tighter">PROTOCOL ID: {protocolId}</span>
                    </div>

                    <button 
                      onClick={handleFinalRedirect}
                      className="text-sm text-[#D4AF37] hover:text-white transition-colors underline underline-offset-4"
                    >
                      Return to Command Center
                    </button>
                  </div>
                )}
              </div>
              
              <div className="h-1.5 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 opacity-30" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};