
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold text-white shadow-lg shadow-red-600/20">
            S
          </div>
          <span className="text-xl font-bold tracking-tighter">
            SOS <span className="text-red-500">AGENCY</span>
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-white/70">
          <a href="#services" className="hover:text-red-500 transition-colors">Services</a>
          <a href="#ai-lab" className="hover:text-red-500 transition-colors">AI Lab</a>
          <a href="#about" className="hover:text-red-500 transition-colors">Why SOS?</a>
          <button className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all red-glow font-semibold text-xs uppercase tracking-widest">
            Fix My Socials
          </button>
        </div>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
