import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/local-lead-bot-logo.png" 
                alt="LocalLeadBot" 
                className="w-6 h-6 object-contain"
              />
              <span className="font-display font-bold text-white tracking-wide">LocalLeadBot</span>
            </div>
            <p className="text-sm text-gray-500">
              AI-powered lead generation and sales automation for professional service firms.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/solutions/law-firms" className="hover:text-white transition-colors">Law Firms</Link></li>
              <li><Link to="/solutions/medical-practices" className="hover:text-white transition-colors">Medical Practices</Link></li>
              <li><Link to="/solutions/home-services" className="hover:text-white transition-colors">Home Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/resources" className="hover:text-white transition-colors">All Resources</Link></li>
              <li><Link to="/resources/guide-lead-generation" className="hover:text-white transition-colors">Lead Generation Guide</Link></li>
              <li><Link to="/resources/ai-vs-traditional-sales" className="hover:text-white transition-colors">AI vs Sales Teams</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="https://localleadbot.com/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="https://localleadbot.com/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-gray-600 uppercase tracking-widest font-mono">
            © 2026 LocalLeadBot Infrastructure. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};