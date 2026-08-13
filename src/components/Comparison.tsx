import { motion } from 'framer-motion';
import { Check, X, ShieldCheck, Zap } from 'lucide-react';

export default function Comparison() {
  const points = [
    {
      feature: 'Algorithm Fidelity',
      ours: '100% Computer-Adaptive IRT scoring matching official GMAC test algorithms',
      others: 'Static tests or simplistic linear scoring estimates',
    },
    {
      feature: 'Exam Architecture',
      ours: 'Authentic 3 sections: Quant (21Q), Verbal (23Q), Data Insights (20Q)',
      others: 'Outdated legacy formats with Geometry & Sentence Correction',
    },
    {
      feature: 'Exam Navigation',
      ours: 'Question bookmarking, navigator drawer, and review/edit up to 3 answers per section',
      others: 'One-way linear navigation with no review feature',
    },
    {
      feature: 'Explanations & Solutions',
      ours: 'Step-by-step written AND video explanations for all 960 questions',
      others: 'Sparse text explanations with no alternative shortcut methods',
    },
    {
      feature: 'AI Diagnostic Heatmap',
      ours: 'Top 5 weakest and 5 strongest topics identified with pacing curves',
      others: 'Generic correct/incorrect summary without actionable insights',
    },
    {
      feature: 'Data Insights Calculator',
      ours: 'Integrated on-screen calculator mirroring official GMAC interface',
      others: 'No integrated calculator or basic uncalibrated widget',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs sm:text-sm text-cyan-300 mb-5 border border-cyan-500/30">
            <Zap size={16} className="text-cyan-400" />
            <span>Built for High-Stakes Performance</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Why Our Mock Series <span className="text-gradient">Leads the Industry</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            The GMAT Focus Edition requires precision timing and adaptive stamina. Here is how our test engine compares to standard test prep offerings.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
              className="glass-strong rounded-3xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-white font-bold text-lg mb-4">{p.feature}</h3>
                
                {/* Our Advantage */}
                <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 mb-3 flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider block">Our Test Series</span>
                    <p className="text-slate-200 text-xs leading-relaxed">{p.ours}</p>
                  </div>
                </div>

                {/* Other standard tests */}
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={12} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Standard Mocks</span>
                    <p className="text-slate-400 text-xs leading-relaxed">{p.others}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
