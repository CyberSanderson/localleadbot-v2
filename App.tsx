import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Process } from './components/Process';
import { Results } from './components/Results';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Layout } from './components/layout';
import { SolutionsLawFirms } from './components/solutions/SolutionsLawFirms';
import { SolutionsMedicalPractices } from './components/solutions/SolutionsMedicalPractices';
import { SolutionsHomeServices } from './components/solutions/SolutionsHomeServices';
import { BlogLeadGeneration } from './components/blog/BlogLeadGeneration';
import { BlogAIvTraditional } from './components/blog/BlogAIvTraditional';
import { ResourcesHub } from './components/pages/ResourcesHub';
import { ScrollToTop } from './components/ScrollToTop';

// Home Page Component
function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'audit' | 'apply'>('audit');

  const openModal = (mode: 'audit' | 'apply') => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-amber-500/30">
      <Navbar onOpenModal={() => openModal('audit')} />
      
      <main>
        <Hero onOpenModal={() => openModal('apply')} />
        <BentoGrid />
        <Process />
        <Results />
        
        <section className="py-24 relative overflow-hidden">
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

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        mode={modalMode}
      />
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'audit' | 'apply'>('audit');

  const openModal = (mode: 'audit' | 'apply') => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Navbar onOpenModal={() => openModal('audit')} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions/law-firms" element={<SolutionsLawFirms onOpenModal={() => openModal('apply')} />} />
          <Route path="/solutions/medical-practices" element={<SolutionsMedicalPractices onOpenModal={() => openModal('apply')} />} />
          <Route path="/solutions/home-services" element={<SolutionsHomeServices onOpenModal={() => openModal('apply')} />} />
          <Route path="/resources" element={<ResourcesHub />} />
          <Route path="/resources/guide-lead-generation" element={<BlogLeadGeneration />} />
          <Route path="/resources/ai-vs-traditional-sales" element={<BlogAIvTraditional />} />
        </Routes>

        <ContactModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          mode={modalMode}
        />
      </Layout>
    </Router>
  );
}

export default App;