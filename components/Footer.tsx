import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded bg-amber-600 flex items-center justify-center text-xs font-bold text-white">L</div>
             <span className="font-display font-bold text-white tracking-wide">LocalLeadBot</span>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>

          <div className="text-xs text-gray-600">
            © 2024 LocalLeadBot Agency. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};