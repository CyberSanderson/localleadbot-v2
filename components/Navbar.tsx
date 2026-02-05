import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '../lib/utils.ts';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar = ({ onOpenModal }: NavbarProps) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center pt-6 px-4"
      >
        <div className="relative w-full max-w-4xl glass rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/40">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center">
              <span className="font-display font-bold text-lg text-black">L</span>
            </div>
            <span className="font-display font-semibold text-white tracking-wide hidden sm:block">
              LocalLeadBot
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#services" className="hover:text-white transition-colors duration-200">Capabilities</a>
            <a href="#process" className="hover:text-white transition-colors duration-200">The Engine</a>
            <a href="#results" className="hover:text-white transition-colors duration-200">Results</a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
             <button 
               onClick={onOpenModal}
               className="hidden md:flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium transition-all group"
             >
               Start Engine
               <ArrowRight className="w-3 h-3 text-accent group-hover:translate-x-0.5 transition-transform" />
             </button>
             
             {/* Mobile Toggle */}
             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white/80">
               {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
             </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-6 text-xl font-display text-gray-300">
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Capabilities</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)}>The Engine</a>
            <a href="#results" onClick={() => setMobileMenuOpen(false)}>Results</a>
            <hr className="border-white/10"/>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full py-4 bg-white text-black font-semibold rounded-lg"
            >
              Start Your Growth
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};