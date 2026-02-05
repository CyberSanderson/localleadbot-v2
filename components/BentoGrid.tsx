import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils.ts';
import { Bot, LineChart, Globe, Target, ArrowUpRight } from 'lucide-react';

const Card = ({
  className,
  title,
  subtitle,
  description,
  icon: Icon,
  pattern,
  large = false,
}: {
  className?: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  pattern?: React.ReactNode;
  large?: boolean;
}) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors duration-300",
        large ? "md:col-span-2" : "col-span-1",
        className
      )}
    >
      {/* Golden Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="mb-8">
          <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-5 h-5 text-accent" />
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <span className="text-xs font-mono text-amber-500 uppercase tracking-widest">{subtitle}</span>
            <h3 className="text-xl font-display font-semibold text-white">
              {title}
            </h3>
          </div>
          <p className="text-sm text-secondary leading-relaxed max-w-[90%]">
            {description}
          </p>
        </div>
        
        {pattern && <div className="absolute right-0 bottom-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">{pattern}</div>}

        <div className="flex items-center text-xs font-medium text-gray-500 group-hover:text-white transition-colors">
            See protocol <ArrowUpRight className="ml-1 w-3 h-3" />
        </div>
      </div>
      
      {/* Border Beam Effect on Hover (Gold) */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 border border-amber-500/30 rounded-3xl" />
      </div>
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
            pattern={
              <div className="w-48 h-32 bg-gradient-to-t from-amber-500/20 to-transparent blur-2xl transform rotate-12 translate-y-10 translate-x-10" />
            }
          />
          
          <Card
            title="Next-Gen Revenue Hubs"
            subtitle="CONVERT"
            description="Ultra-fast, SEO-dominant Next.js infrastructure built with one goal: ROI. We don't just design for beauty; we design for the bank account. Our sites are optimized for local search dominance and high-ticket lead conversion."
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