
import React, { useState } from 'react';
import { generatePostIdeas } from '../services/geminiService';
import { AIResponse, PackageType, PostIdea } from '../types';

const AILab: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [tier, setTier] = useState<PackageType>(PackageType.VIRAL);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResponse | null>(null);

  const handleGenerate = async () => {
    if (!niche) return;
    setLoading(true);
    try {
      const data = await generatePostIdeas(niche, tier);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("System overload. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="ai-lab" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold mb-6">THE <span className="text-red-500">AI LAB</span></h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Experience the power of our SOS proprietary AI engine. Input your niche, select your package tier, and get a glimpse of the strategy we'd deploy for you.
            </p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-2">Industry / Niche</label>
                <input 
                  type="text" 
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="e.g. Cyberpunk Fashion, Web3 SaaS" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-2">Strategy Tier</label>
                <div className="grid grid-cols-2 gap-2">
                  {[PackageType.VIRAL, PackageType.BUSINESS].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTier(t)}
                      className={`py-2 rounded-lg text-xs font-bold transition-all border ${
                        tier === t 
                        ? 'bg-red-600 border-red-500 text-white' 
                        : 'bg-white/5 border-white/10 text-white/50 hover:border-white/20'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={loading || !niche}
                className="w-full py-4 bg-white text-black font-black uppercase tracking-tighter rounded-xl hover:bg-red-500 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Synthesizing...' : 'Generate Sample Strategy'}
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="glass rounded-3xl min-h-[400px] border border-white/5 p-8 relative overflow-hidden">
              {!result && !loading && (
                <div className="absolute inset-0 flex items-center justify-center flex-col text-white/20">
                  <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="font-mono text-sm">WAITING FOR INPUT COMMANDS...</p>
                </div>
              )}

              {loading && (
                <div className="space-y-4 animate-pulse">
                  <div className="h-8 bg-white/5 rounded-lg w-1/2"></div>
                  <div className="h-24 bg-white/5 rounded-lg"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-40 bg-white/5 rounded-lg"></div>
                    <div className="h-40 bg-white/5 rounded-lg"></div>
                    <div className="h-40 bg-white/5 rounded-lg"></div>
                  </div>
                </div>
              )}

              {result && !loading && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div>
                    <h4 className="text-red-500 font-mono text-xs uppercase tracking-[0.2em] mb-2 font-bold">Strategic Approach</h4>
                    <p className="text-xl font-medium leading-relaxed">{result.strategy}</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {result.ideas.map((idea: PostIdea, i: number) => (
                      <div key={i} className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-red-500/20 transition-all group">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded uppercase tracking-widest text-white/50">{idea.platform}</span>
                          <span className="text-red-500 text-[10px] font-bold font-mono">#{i + 1}</span>
                        </div>
                        <h5 className="font-bold text-sm mb-2 text-white group-hover:text-red-400 transition-colors line-clamp-2">"{idea.hook}"</h5>
                        <p className="text-[11px] text-white/40 mb-4 line-clamp-3 leading-relaxed">{idea.caption}</p>
                        <div className="flex flex-wrap gap-1">
                          {idea.hashtags.map((tag: string, j: number) => (
                            <span key={j} className="text-[9px] text-red-500/60 font-mono">#{tag}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <p className="text-[10px] text-white/30 font-mono">
                      NOTE: THESE ARE SAMPLES. OUR FULL DEPLOYMENT INCLUDES VIDEO PRODUCTION, TREND-SYNCING, AND REAL-TIME OPTIMIZATION.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILab;
