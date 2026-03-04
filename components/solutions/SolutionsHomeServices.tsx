import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Hammer, DollarSign, Target, TrendingUp } from 'lucide-react';

interface SolutionsHomeServicesProps {
  onOpenModal: () => void;
}

export const SolutionsHomeServices = ({ onOpenModal }: SolutionsHomeServicesProps) => {
  return (
    <>
      <Helmet>
        <title>Lead Generation Software for Home Service Companies | LocalLeadBot</title>
        <meta name="description" content="Get more plumbing, electrical, HVAC, and home service leads. LocalLeadBot automates lead generation for home service contractors and field service companies." />
        <link rel="canonical" href="https://www.localleadbot.pro/solutions/home-services" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lead Generation for Home Service & Contractor Businesses" />
        <meta property="og:description" content="AI-powered lead generation for plumbers, electricians, HVAC, masons, and all home service trades." />
        <meta property="og:url" content="https://www.localleadbot.pro/solutions/home-services" />
      </Helmet>

      <div className="min-h-screen bg-[#030303] text-white font-sans">
        <section className="relative pt-32 pb-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                Home Service Lead Generation That Actually Works
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Stop wasting money on ads. Get pre-qualified, ready-to-book leads for your plumbing, electrical, HVAC, or landscaping business—automatically.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white/5">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-display font-bold mb-12">Designed for Field Service Companies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Hammer, title: "Trade-Specific Targeting", desc: "Find customers actively seeking your specific service (emergency, maintenance, or new install)" },
                { icon: Target, title: "Local Territory Control", desc: "Build market dominance in your service area with location-based lead capture" },
                { icon: DollarSign, title: "Higher Job Values", desc: "Quality leads with clear budgets and urgency command 30% higher average ticket prices" },
                { icon: TrendingUp, title: "Consistent Pipeline", desc: "Predictable lead flow means better crew scheduling and zero-pressure sales" }
              ].map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
                  <item.icon className="w-8 h-8 text-amber-500 mb-4" />
                  <h3 className="text-lg font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-12">How We Get You More Jobs</h2>
            <div className="space-y-8">
              {[
                { num: "01", title: "Lead Capture Engine", desc: "AI agents identify customers in your area searching for emergency repairs, maintenance, or new projects." },
                { num: "02", title: "Instant Qualification", desc: "Pre-screen for budget, timeline, and urgency so you focus on the jobs that matter." },
                { num: "03", title: "Direct Routing to You", desc: "Qualified leads sent directly to your phone or CRM—no form fills, no delays." },
                { num: "04", title: "ROI Proof", desc: "Track every lead from click to closed job and see your exact cost-per-acquisition." }
              ].map((step, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-500/20 border border-amber-500/50">
                      <span className="text-amber-400 font-bold">{step.num}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-transparent via-amber-950/5 to-transparent px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-display font-bold mb-6">Fill Your Schedule with Quality Leads</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              We accept 3 companies per trade per region. Check if your market is available.
            </p>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all"
            >
              Check Availability
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
