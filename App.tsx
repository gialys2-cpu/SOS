
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import AILab from './components/AILab';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-red-500 selection:text-white">
      <Navbar />
      
      <main>
        {/* Animated Grid Background */}
        <div className="fixed inset-0 pointer-events-none -z-20 opacity-[0.03]" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>

        <Hero />
        
        <section id="about" className="py-24 px-6 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-red-600/20 blur-2xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Tech" 
                  className="relative rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xs font-black text-red-500 uppercase tracking-[0.3em] mb-4">The SOS Doctrine</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">WE DON'T POST.<br />WE <span className="text-red-500">CONQUER.</span></h2>
              <p className="text-white/50 mb-8 leading-relaxed text-lg">
                The digital landscape is a battlefield. Algorithms change daily. Attention spans are shrinking. Being "stressed out" about your social media is a symptom of outdated tactics.
              </p>
              <div className="space-y-4">
                {[
                  "AI-Driven Predictive Trends",
                  "Aggressive Psychological Hook Design",
                  "Platform-Specific Growth Protocols",
                  "24/7 Algorithmic Surveillance"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/80 font-mono text-xs">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Packages />
        
        <AILab />

        <section className="py-24 px-6 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-600/5 blur-[100px] -z-10"></div>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">READY TO TERMINATE THE <span className="text-red-500 italic">STRESS?</span></h2>
            <p className="text-white/60 mb-10 text-lg">Your social media shouldn't be a chore. It should be an asset. Let us take the wheel.</p>
            <button className="px-12 py-6 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all text-xl font-black tracking-widest red-glow uppercase">
              Initialize Takeover
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
