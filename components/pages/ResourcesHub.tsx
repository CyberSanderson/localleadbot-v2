import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ResourcesHub = () => {
  const resources = [
    {
      title: "Complete Guide to Lead Generation",
      description: "Learn the three pillars of qualified lead generation and how to implement them in your business.",
      category: "Guide",
      link: "/resources/guide-lead-generation",
      readTime: "8 min"
    },
    {
      title: "AI Sales Agents vs Traditional Sales Teams",
      description: "Compare costs and ROI. When to use AI, when to hire, and how to combine both.",
      category: "Analysis",
      link: "/resources/ai-vs-traditional-sales",
      readTime: "10 min"
    },
    {
      title: "Solutions for Law Firms",
      description: "AI lead generation and client acquisition tailored specifically for legal practices.",
      category: "Solution",
      link: "/solutions/law-firms",
      readTime: "5 min"
    },
    {
      title: "Patient Acquisition for Medical Practices",
      description: "HIPAA-compliant lead generation to fill your practice with pre-qualified patients.",
      category: "Solution",
      link: "/solutions/medical-practices",
      readTime: "5 min"
    },
    {
      title: "Home Service Lead Generation",
      description: "Get high-intent leads for plumbing, electrical, HVAC, and other trades.",
      category: "Solution",
      link: "/solutions/home-services",
      readTime: "5 min"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Resources & Guides | Lead Generation, Sales Automation | LocalLeadBot</title>
        <meta name="description" content="Free guides, case studies, and resources on lead generation, AI sales automation, and territory-based business strategy for law firms, medical practices, and home service companies." />
        <link rel="canonical" href="https://www.localleadbot.pro/resources" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Resources for Lead Generation & Sales Growth" />
        <meta property="og:description" content="Free educational content on AI lead capture, qualifications, and automation." />
        <meta property="og:url" content="https://www.localleadbot.pro/resources" />
      </Helmet>

      <div className="min-h-screen bg-[#030303] text-white font-sans">
        <section className="relative pt-32 pb-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                Resources & Guides
              </h1>
              <p className="text-xl text-gray-400">
                Free educational content on lead generation, AI automation, and building local market dominance.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid gap-8">
              {resources.map((resource, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link to={resource.link}>
                    <div className="group border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-amber-500/50 transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            {resource.category}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">{resource.readTime} read</span>
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-amber-400 transition-colors">
                        {resource.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform">
                        <span className="text-sm font-medium">Read more</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-transparent via-amber-950/5 to-transparent px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-display font-bold mb-6">Ready to Transform Your Lead Pipeline?</h2>
            <p className="text-lg text-gray-400 mb-8">
              See how LocalLeadBot automates lead capture, qualification, and routing for your business.
            </p>
            <Link to="/">
              <button className="inline-flex items-center px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all">
                Back to Home
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
