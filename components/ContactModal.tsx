import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils.ts';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [step, setStep] = useState<'form' | 'submitting' | 'success'>('form');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('submitting');
    // Simulate network request
    setTimeout(() => {
      setStep('success');
    }, 1500);
  };

  const reset = () => {
    setStep('form');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={reset}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="w-full max-w-md bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto relative"
            >
              {/* Close Button */}
              <button 
                onClick={reset}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-8">
                {step === 'form' && (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="mb-2">
                      <h2 className="text-2xl font-display font-bold text-white mb-2">Request Audit</h2>
                      <p className="text-sm text-gray-400">
                        We limit partners to 3 per region. Enter your details to check availability for your area.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Business URL</label>
                      <input 
                        required 
                        type="url" 
                        placeholder="https://example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Work Email</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="you@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="mt-2 w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group"
                    >
                      Run Analysis
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}

                {step === 'submitting' && (
                  <div className="py-12 flex flex-col items-center justify-center text-center">
                    <Loader2 className="w-10 h-10 text-amber-500 animate-spin mb-4" />
                    <p className="text-white font-medium">Connecting to Engine...</p>
                    <p className="text-sm text-gray-500 mt-1">Analyzing traffic patterns</p>
                  </div>
                )}

                {step === 'success' && (
                  <div className="py-8 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">Request Received</h3>
                    <p className="text-gray-400 mb-6 max-w-[280px]">
                      Your site has been queued for analysis. A senior strategist will reach out within 24 hours.
                    </p>
                    <button 
                      onClick={reset}
                      className="text-sm text-white hover:text-amber-400 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
              
              {/* Bottom decorative line */}
              <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 opacity-20" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};