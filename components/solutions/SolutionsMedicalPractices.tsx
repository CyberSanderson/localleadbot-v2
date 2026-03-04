import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Users, TrendingUp, Award, Zap } from 'lucide-react';

interface SolutionsMedicalProps {
  onOpenModal: () => void;
}

export const SolutionsMedicalPractices = ({ onOpenModal }: SolutionsMedicalProps) => {
  return (
    <>
      <Helmet>
        <title>AI Patient Acquisition Software | Medical Practice Lead Generation</title>
        <meta name="description" content="Grow your medical practice with AI-powered patient acquisition. LocalLeadBot generates qualified patient leads and automates your intake process." />
        <link rel="canonical" href="https://www.localleadbot.pro/solutions/medical-practices" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Patient Acquisition Software for Medical Practices" />
        <meta property="og:description" content="Automated patient lead generation for private practices, specialists, and urgent care clinics." />
        <meta property="og:url" content="https://www.localleadbot.pro/solutions/medical-practices" />
      </Helmet>

      <div className="min-h-screen bg-[#030303] text-white font-sans">
        <section className="relative pt-32 pb-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                Patient Acquisition for Medical Practices
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Fill your practice with pre-qualified patients. Our HIPAA-compliant AI infrastructure captures patient intent and delivers warm leads ready to schedule.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white/5">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-display font-bold mb-12">Built for Medical Practice Growth</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Users, title: "Patient Qualification", desc: "AI screens for insurance, appointment availability, and treatment fit before routing to your schedulers" },
                { icon: TrendingUp, title: "Higher Show Rate", desc: "Pre-qualified, confirmed leads show up to 85% of the time vs 40% from traditional sources" },
                { icon: Award, title: "HIPAA Compliant", desc: "All patient data handling meets medical industry compliance and privacy standards" },
                { icon: Zap, title: "Reduced No-Shows", desc: "Automated confirmations and reminder sequences cut cancellations by 60%" }
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
            <h2 className="text-3xl font-display font-bold mb-12">Patient Lead Generation Process</h2>
            <div className="space-y-8">
              {[
                { num: "01", title: "Patient Discovery", desc: "Find patients actively searching for your specialty in your service area with high intent signals." },
                { num: "02", title: "Automated Qualification", desc: "Verify insurance coverage, treatment needs, and scheduling preferences automatically." },
                { num: "03", title: "Instant Scheduling", desc: "Qualified patients routed directly to your scheduler with all details pre-filled." },
                { num: "04", title: "LTV Tracking", desc: "Track patient value from initial lead through lifetime visit frequency and referral generation." }
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
            <h2 className="text-4xl font-display font-bold mb-6">Grow Your Patient Base This Quarter</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Limited partnerships available. We work exclusively with practices committed to scaling with qualified leads.
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
