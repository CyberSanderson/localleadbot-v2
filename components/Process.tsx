import React from 'react';

import { motion } from 'framer-motion';

import { Users, Filter, MessageSquare, DollarSign } from 'lucide-react';



const Step = ({ icon: Icon, title, label, index }: { icon: any, title: string, label: string, index: number }) => (

  <div className="flex flex-col items-center relative z-10 group">

    <div className="w-16 h-16 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:border-amber-500/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300">

      <Icon className="w-7 h-7 text-gray-400 group-hover:text-accent transition-colors" />

    </div>

    <div className="text-center">

      <span className="text-xs font-mono text-amber-500 mb-2 block tracking-wider">0{index}</span>

      <h3 className="text-lg font-display font-semibold text-white mb-2">{title}</h3>

      <p className="text-xs text-gray-500 max-w-[150px]">{label}</p>

    </div>

  </div>

);



export const Process = () => {

  return (

    <section id="process" className="py-24 bg-background relative overflow-hidden">

      {/* Background radial highlight */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-amber-900/10 blur-[100px] rounded-full pointer-events-none" />



      <div className="container px-4 md:px-6 mx-auto relative z-10">

        <div className="text-center mb-24">

          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">

            The Revenue <span className="text-accent">Pipeline</span>

          </h2>

          <p className="text-gray-400">From anonymous traffic to high-ticket revenue. The exact flow we install.</p>

        </div>



        {/* Desktop Process Flow */}

        <div className="hidden md:flex justify-between items-start relative max-w-5xl mx-auto">

          {/* Connecting Line Base */}

          <div className="absolute top-8 left-0 w-full h-[1px] bg-white/10" />

         

          {/* Animated Beam */}

          <div className="absolute top-8 left-0 w-full h-[1px] overflow-hidden">

            <div className="w-[200px] h-full bg-gradient-to-r from-transparent via-amber-500 to-transparent absolute top-0 animate-slide-right" />

          </div>



          <Step index={1} icon={Users} title="Injection" label="SEO & Media flood the zone." />

          <Step index={2} icon={MessageSquare} title="Engagement" label="AI Bot qualifies instantly." />

          <Step index={3} icon={Filter} title="Conversion" label="High-ticket intent verified." />

          <Step index={4} icon={DollarSign} title="Revenue" label="Booked & Closed in CRM." />

        </div>



        {/* Mobile Process Flow (Vertical) */}

        <div className="md:hidden flex flex-col gap-12 relative max-w-xs mx-auto">

           <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-white/10" />

           

           {[

               { i: 1, icon: Users, t: "Injection", l: "SEO & Ads" },

               { i: 2, icon: MessageSquare, t: "Engagement", l: "Instant AI Chat" },

               { i: 3, icon: Filter, t: "Conversion", l: "Intent Verified" },

               { i: 4, icon: DollarSign, t: "Revenue", l: "Closed Won" }

           ].map((item) => (

             <div key={item.i} className="flex gap-8 items-center relative z-10">

                <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center relative z-20">

                    <item.icon className="w-6 h-6 text-accent" />

                </div>

                <div>

                    <span className="text-xs font-mono text-amber-500 block mb-1">0{item.i}</span>

                    <h3 className="text-lg font-bold text-white">{item.t}</h3>

                    <p className="text-sm text-gray-500">{item.l}</p>

                </div>

             </div>

           ))}

        </div>

      </div>



      <style>{`

        @keyframes slide-right {

          0% { left: -200px; }

          100% { left: 100%; }

        }

        .animate-slide-right {

          animation: slide-right 3s linear infinite;

        }

      `}</style>

    </section>

  );

};