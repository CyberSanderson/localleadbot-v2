import React, { useState } from 'react';
import { motion } from 'framer-motion'; // <--- MAKE SURE THIS IS HERE
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { BentoGrid } from './components/BentoGrid.tsx';
import { Process } from './components/Process.tsx';
import { Results } from './components/Results.tsx';
import { Footer } from './components/Footer.tsx';
import { ContactModal } from './components/ContactModal.tsx';

// Rest of your App code...

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'audit' | 'apply'>('audit');

  // Helper to open modal with specific intent
  const openModal = (mode: 'audit' | 'apply') => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-amber-500/30">
      
      {/* Navbar: Usually the first low-friction touchpoint (Audit) */}
      <Navbar onOpenModal={() => openModal('audit')} />
      
      <main>
        {/* Hero: High-intent "Apply for Partnership" */}
        <Hero onOpenModal={() => openModal('apply')} />
        
        <BentoGrid />
        
        <Process />
        
        <Results />
        
        {/* CTA Section: Re-engaging with Territory Dominance */}
        <section className="py-24 relative overflow-hidden">
          {/* Subtle gold glow background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-amber-950/5 to-background" />
          
          <div className="container px-4 mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight">
                Ready to install the <br/>
                <span className="text-accent">Growth Engine?</span>
              </h2>
              
              <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">
                We only partner with 3 businesses per region to ensure exclusive dominance. 
                Check availability for your area.
              </p>
              
              <button 
                onClick={() => openModal('audit')}
                className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-black transition-all duration-200 bg-white font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-200 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                Check Availability
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* The Dynamic Modal: Now reacts to the button that triggered it */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        mode={modalMode}
      />
      
    </div>
  );
}

export default App;