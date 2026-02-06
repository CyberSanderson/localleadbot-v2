import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck } from 'lucide-react';

export const RevenueLedger = () => {
  const transactions = [
    { id: 'TX-992', industry: 'Legal', amount: '$14,200', status: 'Verified' },
    { id: 'TX-991', industry: 'Medical', amount: '$6,800', status: 'Verified' },
    { id: 'TX-990', industry: 'Home Services', amount: '$3,950', status: 'Verified' },
  ];

  return (
    // Fixed: Added h-full/w-full to ensure it fills the container in the Bento grid
    <div className="w-full h-full flex flex-col gap-4 p-4 bg-[#050505] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
      {/* Header Stat */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-mono text-amber-500/70 uppercase tracking-[0.2em]">Total Attributed</p>
          <h4 className="text-2xl font-display font-bold text-white">$42.8M</h4>
        </div>
        <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
          <TrendingUp className="w-5 h-5 text-amber-500" />
        </div>
      </div>

      {/* Animated Growth Chart */}
      <div className="flex-1 flex items-end gap-2 min-h-[60px] px-1">
        {[35, 60, 40, 85, 55, 75, 95, 65, 88].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: `${height}%`, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
            className="flex-1 bg-gradient-to-t from-amber-900/40 via-amber-600/40 to-amber-400/80 rounded-t-sm"
          />
        ))}
      </div>

      {/* Live Attribution Feed */}
      <div className="space-y-2">
        <p className="text-[9px] font-mono text-gray-600 uppercase tracking-widest mb-1">Live Attribution Feed</p>
        {transactions.map((tx, i) => (
          <motion.div
            key={tx.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + (i * 0.1) }}
            className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/5"
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-gray-500">{tx.id}</span>
                <span className="text-[10px] font-bold text-white tracking-tight">{tx.industry}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono text-amber-500 font-bold block">{tx.amount}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* System Status Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
        <div className="flex items-center gap-2 text-[9px] text-gray-500 font-medium">
          <ShieldCheck className="w-3 h-3 text-green-500/70" />
          ENCRYPTED
        </div>
        <div className="flex items-center gap-2 text-[9px] text-gray-400 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          ONLINE
        </div>
      </div>
    </div>
  );
};