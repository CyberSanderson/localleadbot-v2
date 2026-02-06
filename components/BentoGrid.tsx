import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { Bot, LineChart, Globe, Target, ArrowUpRight, X, Shield, Cpu, Zap, BarChart3 } from 'lucide-react';

// Content for the "Protocol" views
const PROTOCOL_DATA: Record<string, any> = {
  CAPTURE: {
    title: "AI Agent Architecture",
    steps: ["Neural Language Processing", "Real-time CRM Sync", "Instant Speed-to-Lead"],
    stats: "98% Engagement Rate"
  },
  CONVERT: {
    title: "Next.js Edge Delivery",
    steps: ["Server-Side Rendering", "Global CDN Distribution", "0.4s Core Web Vitals"],
    stats: "12x Speed Increase"
  },
  CONQUER: {
    title: "Map Pack Weaponization",
    steps: ["Geo-fencing Authority", "Entity Relationship Mapping", "Citation Dominance"],
    stats: "#1 Ranking Average"
  },
  VALIDATE: {
    title: "Attribution Engine",
    steps: ["UTM Pipeline Tracking", "Closed-Loop CRM Data", "LTV Forecasting"],
    stats: "100% Data Integrity"
  }
};

const Card = ({
  title,
  subtitle,
  description,
  icon: Icon,
  pattern,
  large = false,
}: {
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  pattern?: React.ReactNode;
  large?: boolean;
}) => {
  const [isProtocolOpen, setIsProtocolOpen] = useState(false);
  const data = PROTOCOL_DATA[subtitle];

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500",
        large ? "md:col-span-2" : "col-span-1",
        isProtocolOpen ? "border-amber-500/50 bg-white/[0.05]" : "hover:bg-white/[0.04]"
      )}
    >
      <AnimatePresence mode="wait">
        {!isProtocolOpen ? (
          // --- MAIN FRONT CONTENT ---
          <motion.div
            key="front"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative z-10 flex flex-col h-full justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <div className="flex flex-col gap-1 mb-2">
                <span className="text-xs font-mono text-amber-500 uppercase tracking-widest">{subtitle}</span>
                <h3 className="text-xl font-display font-semibold text-white">{title}</h3>
              </div>
              <p className="text-sm text-secondary leading-relaxed max-w-[90%]">{description}</p>
            </div>
            
            {pattern && <div className="absolute right-0 bottom-0 opacity-20">{pattern}</div>}

            <button 
              onClick={() => setIsProtocolOpen(true)}
              className="flex items-center text-xs font-medium text-gray-500 hover:text-white transition-colors w-fit"
            >
              See protocol <ArrowUpRight className="ml-1 w-3 h-3" />
            </button>
          </motion.div>
        ) : (
          // --- PROTOCOL DETAIL CONTENT ---
          <motion.div
            key="protocol"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="relative z-20 h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-mono text-amber-500 uppercase tracking-[0.2em]">Deployment Protocol</span>
                  <h4 className="text-lg font-bold text-white">{data.title}</h4>
                </div>
                <button 
                  onClick={() => setIsProtocolOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              <div className="space-y-3">
                {data.steps.map((step: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-1 h-1 rounded-full bg-amber-500" />
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex justify-between items-center">
              <span className="text-[10px] font-mono text-gray-500 italic">{data.stats}</span>
              <div className="flex gap-2">
                <Cpu className="w-3 h-3 text-amber-500/50" />
                <Shield className="w-3 h-3 text-amber-500/50" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Background Glow remains consistent */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export const BentoGrid = () => {
  return (
    <section id="services" className="py-32 relative bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            The Agency Model, <span className="text-accent">Evolved.</span>
          </h2>
          <p className="text-lg text-secondary">
            We don't sell hourly retainers for "effort." We install a 24/7 Growth Engine designed to capture, convert, and conquer your local market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          <Card
            large
            title="The 24/7 AI Sales Agent"
            subtitle="CAPTURE"
            description="Our proprietary LocalLeadBot doesn't just chat—it qualifies, books appointments, and closes deals while your competitors sleep. No missed calls, no lost revenue."
            icon={Bot}
            pattern={<div className="w-48 h-32 bg-gradient-to-t from-amber-500/20 to-transparent blur-2xl transform rotate-12 translate-y-10 translate-x-10" />}
          />
          
          <Card
            title="Next-Gen Revenue Hubs"
            subtitle="CONVERT"
            description="Ultra-fast, SEO-dominant Next.js infrastructure built with one goal: ROI. Optimized for local search dominance and high-ticket conversion."
            icon={Globe}
          />

          <Card
            title="Territory Domination"
            subtitle="CONQUER"
            description="We weaponize local SEO to ensure your firm owns the 'Map Pack' for every high-value keyword in your specific service radius."
            icon={Target}
          />

          <Card
            large
            title="Revenue Attribution Ledger"
            subtitle="VALIDATE"
            description="Stop paying for 'clicks' and 'impressions'. Our transparent dashboard tracks real revenue generated, connecting every marketing dollar to a closed deal in your CRM."
            icon={LineChart}
            pattern={
              <div className="flex gap-2 items-end translate-y-8 translate-x-8 opacity-50">
                  <div className="w-4 h-12 bg-amber-500/20 rounded-t-sm" />
                  <div className="w-4 h-20 bg-amber-500/40 rounded-t-sm" />
                  <div className="w-4 h-32 bg-amber-500/60 rounded-t-sm" />
                  <div className="w-4 h-24 bg-amber-500/30 rounded-t-sm" />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};