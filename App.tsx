import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { BentoGrid } from './components/BentoGrid.tsx';
import { Process } from './components/Process.tsx';
import { Results } from './components/Results.tsx';
import { Footer } from './components/Footer.tsx';
import { ContactModal } from './components/ContactModal.tsx';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-amber-500/30">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <BentoGrid />
        <Process />
        <Results />
        
        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-background to-amber-950/20" />
             <div className="container px-4 mx-auto relative z-10 text-center">
                 <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight">
                     Ready to install the <br/>
                     <span className="text-accent">Growth Engine?</span>
                 </h2>
                 <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">
                     We only partner with 3 businesses per region to ensure exclusive dominance. Check availability for your area.
                 </p>
                 <button 
                   onClick={() => setIsModalOpen(true)}
                   className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                 >
                     Check Availability
                 </button>
             </div>
        </section>
      </main>
      
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;