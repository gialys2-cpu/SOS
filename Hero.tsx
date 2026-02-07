
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/5 blur-[100px] rounded-full -z-10"></div>
      
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/5 text-red-400 text-[10px] font-bold uppercase tracking-widest mb-6 animate-pulse-red">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
          System Online: Save Our Socials
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
          STRESSED OUT <br />
          <span className="text-gradient-red">SOCIALS?</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          Stop screaming into the void. We use AI-enhanced strategies and ruthless creativity to turn your digital presence into a growth engine.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all font-bold text-lg red-glow">
            Start Your Growth
          </button>
          <button className="px-8 py-4 glass hover:bg-white/5 text-white rounded-xl transition-all font-bold text-lg">
            View Case Studies
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-10">
          {[
            { label: 'Viral Hits', val: '450+' },
            { label: 'Total Reach', val: '1.2B+' },
            { label: 'Client Growth', val: '320%' },
            { label: 'Uptime', val: '99.9%' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-mono text-red-500">{stat.val}</div>
              <div className="text-xs uppercase tracking-widest text-white/40 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
