import React from 'react';
import { motion } from 'framer-motion';

const Stat = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex flex-col items-center p-6 border-r border-white/5 last:border-r-0"
  >
    <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
      {value}
    </div>
    <div className="text-sm text-gray-400 uppercase tracking-widest font-medium">
      {label}
    </div>
  </motion.div>
);

export const Results = () => {
  return (
    <section id="results" className="py-24 border-y border-white/5 bg-white/[0.02]">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/5">
           <Stat value="$42M+" label="Client Revenue Generated" delay={0} />
           <Stat value="340%" label="Average ROI" delay={0.2} />
           <Stat value="24/7" label="Automated Response Time" delay={0.4} />
        </div>
      </div>
    </section>
  );
};