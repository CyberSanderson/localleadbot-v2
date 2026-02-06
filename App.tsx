import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Process } from './components/Process';
import { Results } from './components/Results';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Layout } from './components/layout'; // <--- The SEO & Infrastructure Wrapper

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'audit' | 'apply'>('audit');

  // Helper to open modal with specific intent (Audit vs Partnership)
  const openModal = (mode: 'audit' | 'apply') => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-amber-500/30">
        
        {/* Navbar: Low-friction touchpoint for Availability Checks */}
        <Navbar onOpenModal={() => openModal('audit')} />
        
        <main>
          {/* Hero: High-intent "Apply for Partnership" hook */}
          <Hero onOpenModal={() => openModal('apply')} />
          
          <BentoGrid />
          
          <Process />
          
          <Results />
          
          {/* CTA Section: Final Territory Dominance Push */}
          <section className="py-24 relative overflow-hidden">
            {/* Executive Gold Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/5 to-transparent" />
            
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
                  className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-black transition-all duration-200 bg-white rounded-full hover:bg-gray-200 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                >
                  Check Availability
                </button>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />

        {/* The Dynamic Modal: Switches between "Audit" and "Apply" modes */}
        <ContactModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          mode={modalMode}
        />
        
      </div>
    </Layout>
  );
}

export default App;