import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Check, BarChart3, Shield, Clock } from 'lucide-react';

interface SolutionsLawFirmsProps {
  onOpenModal: () => void;
}

export const SolutionsLawFirms = ({ onOpenModal }: SolutionsLawFirmsProps) => {
  return (
    <>
      <Helmet>
        <title>AI Lead Generation for Law Firms | LocalLeadBot</title>
        <meta name="description" content="Generate qualified leads for law firms with AI-powered client acquisition. LocalLeadBot captures high-intent prospects and automates your sales pipeline." />
        <link rel="canonical" href="https://www.localleadbot.pro/solutions/law-firms" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lead Generation Software for Law Firms" />
        <meta property="og:description" content="AI-powered lead generation and client acquisition for personal injury, family law, and corporate attorneys." />
        <meta property="og:url" content="https://www.localleadbot.pro/solutions/law-firms" />
      </Helmet>

      <div className="min-h-screen bg-[#030303] text-white font-sans">
        <section className="relative pt-32 pb-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                Client Acquisition Software for Law Firms
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Stop relying on inconsistent referrals. Our AI agents generate qualified, high-intent leads automatically and route them through your proven conversion systems.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white/5">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-display font-bold mb-12">Purpose-Built for Law Practices</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: BarChart3, title: "Higher Case Values", desc: "Target high-intent prospects with specific case types and urgency signals" },
                { icon: Clock, title: "Faster Case Closure", desc: "Pre-qualified leads reduce intake time and improve conversion rates" },
                { icon: Shield, title: "LAWYERASSISTANT Compliance", desc: "Built-in compliance tracking and documentation for legal industry requirements" },
                { icon: Check, title: "Proven Models", desc: "80%+ conversion rates on generated leads in personal injury, family, and corporate law" }
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
            <h2 className="text-3xl font-display font-bold mb-12">How It Works for Law Firms</h2>
            <div className="space-y-8">
              {[
                { num: "01", title: "Lead Capture", desc: "AI agents identify prospects searching for legal services in your territory with specific practice area intent." },
                { num: "02", title: "Instant Qualification", desc: "Preliminary intake questions validate case value, urgency, and fit before routing to your team." },
                { num: "03", title: "Warm Handoff", desc: "Leads arrive pre-qualified with full context, reducing intake burden on your staff." },
                { num: "04", title: "Conversion Tracking", desc: "Full attribution from lead source through case success, proving ROI at every stage." }
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
            <h2 className="text-4xl font-display font-bold mb-6">Ready to Transform Your Client Pipeline?</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              We partner with 3 law firms per region. Check if your territory is available.
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
