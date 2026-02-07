
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold text-white">S</div>
            <span className="text-2xl font-black tracking-tighter">SOS <span className="text-red-500">AGENCY</span></span>
          </div>
          <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
            Helping brands survive the chaos of modern social media through aggressive strategy and AI integration. We are the antidote to stagnation.
          </p>
          <div className="flex gap-4">
            {['IG', 'TK', 'TW', 'LI'].map((social) => (
              <a key={social} href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-xs font-bold hover:border-red-500 hover:text-red-500 transition-all">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-white/40 text-sm">
            <li><a href="#" className="hover:text-red-500 transition-colors">Our Ethos</a></li>
            <li><a href="#services" className="hover:text-red-500 transition-colors">Growth Packages</a></li>
            <li><a href="#ai-lab" className="hover:text-red-500 transition-colors">AI Lab Tool</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Case Studies</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
          <ul className="space-y-4 text-white/40 text-sm">
            <li>hello@sosagency.tech</li>
            <li>HQ: Digital Nomad Orbit</li>
            <li className="text-red-500 font-bold">+1 (555) SOS-GROW</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
        <p className="text-[10px] text-white/20 font-mono">© 2025 STRESSED OUT SOCIAL AGENCY. ALL SYSTEMS OPTIMIZED.</p>
        <div className="flex gap-8 text-[10px] text-white/20 font-mono">
          <a href="#">PRIVACY_PROTOCOL</a>
          <a href="#">TERMS_OF_SERVICE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
