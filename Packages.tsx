
import React from 'react';
import { Package, PackageType } from '../types';

const PACKAGES: Package[] = [
  {
    id: 'viral',
    name: 'The Viral Package',
    price: '$1,999/mo',
    description: 'Engineered for rapid growth, trend domination, and brand explosion.',
    features: [
      '20 High-Retention Reels/TikToks',
      'Daily Trend Monitoring',
      'Community Management',
      'Viral Hook Engineering',
      'Growth Reporting Dashboard'
    ],
    isPopular: true
  },
  {
    id: 'business',
    name: 'The Business Package',
    price: '$3,499/mo',
    description: 'Precision-targeted content for high-ticket brands and authority building.',
    features: [
      '12 Professional Short-form Videos',
      '8 Authority-Led Carousel Posts',
      'LinkedIn Lead Gen Strategy',
      'Dedicated Content Manager',
      'Bi-weekly Strategy Syncs'
    ],
    isPopular: false
  }
];

const Packages: React.FC = () => {
  return (
    <div id="services" className="py-24 px-6 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">CHOOSE YOUR <span className="text-red-500 underline decoration-red-500/30 underline-offset-8">WEAPON</span></h2>
          <p className="text-white/50">Two tiers. Endless impact. Select the engine that fits your goals.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative p-8 rounded-3xl transition-all duration-500 group ${
                pkg.isPopular 
                ? 'bg-red-950/20 border-2 border-red-500/50 scale-105 z-10' 
                : 'glass border border-white/10 hover:border-red-500/30'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  Most Volatile (Highest Growth)
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">{pkg.name}</h3>
                <p className="text-white/60 text-sm h-12">{pkg.description}</p>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-black mb-1">{pkg.price}</div>
                <div className="text-white/40 text-xs">Standard Contract: 3 Months</div>
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-white/80">
                    <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                pkg.isPopular 
                ? 'bg-red-600 hover:bg-red-700 text-white red-glow' 
                : 'bg-white/5 hover:bg-white/10 text-white'
              }`}>
                Deploy Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
