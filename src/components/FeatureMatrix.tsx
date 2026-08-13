import { motion } from 'framer-motion';
import { Check, X, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { FEATURE_COMPARISON_MATRIX } from '../data/pricingData';

export default function FeatureMatrix() {
  const handleEnroll = () => {
    window.open('https://gmat-interview-login.mbawizards.co.in/', '_blank');
  };

  // Group features by category
  const categories = Array.from(new Set(FEATURE_COMPARISON_MATRIX.map((r) => r.category)));

  const renderCell = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
          <Check size={12} />
        </div>
      ) : (
        <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-slate-500 flex items-center justify-center mx-auto">
          <X size={12} />
        </div>
      );
    }
    return <span className="text-xs text-slate-200 font-medium">{val}</span>;
  };

  return (
    <section id="feature-matrix" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs sm:text-sm text-indigo-300 mb-5 border border-indigo-500/30">
            <Sparkles size={16} className="text-indigo-400" />
            <span>Comprehensive Plan Comparison</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Side-by-Side <span className="text-gradient">Feature Matrix</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            See exactly what is included in each plan compared to standard market prep courses. Transparent capabilities designed for serious 705+ scorers.
          </p>
        </motion.div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              {/* Table Header */}
              <thead>
                <tr className="border-b border-white/10 bg-slate-900/90 text-xs text-slate-300">
                  <th className="p-4 sm:p-6 font-bold text-white w-2/5">Feature / Capability</th>
                  <th className="p-4 sm:p-6 font-bold text-center w-1/5">Free Diagnostic Trial</th>
                  <th className="p-4 sm:p-6 font-bold text-center w-1/5 bg-cyan-950/30 border-x border-cyan-500/20 text-cyan-300">
                    <span className="block text-sm text-cyan-300">15 Mock Series</span>
                    <span className="text-[10px] text-emerald-400 font-mono">Most Popular</span>
                  </th>
                  <th className="p-4 sm:p-6 font-bold text-center w-1/5">Complete Prep Suite</th>
                </tr>
              </thead>

              {/* Table Body grouped by category */}
              <tbody>
                {categories.map((category) => {
                  const rows = FEATURE_COMPARISON_MATRIX.filter((r) => r.category === category);
                  return (
                    <tbody key={category}>
                      {/* Category Header Row */}
                      <tr className="bg-white/[0.03] border-t border-b border-white/10">
                        <td
                          colSpan={4}
                          className="px-4 sm:px-6 py-2.5 text-xs font-extrabold text-cyan-400 uppercase tracking-wider"
                        >
                          {category}
                        </td>
                      </tr>

                      {/* Category Item Rows */}
                      {rows.map((row, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-white/5 hover:bg-white/[0.02] transition-colors text-xs"
                        >
                          <td className="p-4 sm:px-6 py-3.5 text-slate-300 font-medium flex items-center gap-2">
                            <span>{row.feature}</span>
                          </td>
                          <td className="p-4 sm:px-6 py-3.5 text-center">
                            {renderCell(row.freeTrial)}
                          </td>
                          <td className="p-4 sm:px-6 py-3.5 text-center bg-cyan-950/20 border-x border-cyan-500/10 font-bold">
                            {renderCell(row.mockSeries)}
                          </td>
                          <td className="p-4 sm:px-6 py-3.5 text-center">
                            {renderCell(row.completePrep)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  );
                })}
              </tbody>

              {/* Table Footer Action Row */}
              <tfoot>
                <tr className="border-t border-white/10 bg-slate-900/90 text-xs">
                  <td className="p-4 sm:p-6 text-slate-400 font-medium">Ready to start?</td>
                  <td className="p-4 sm:p-6 text-center">
                    <button
                      onClick={handleEnroll}
                      className="px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white glass hover:bg-white/10 cursor-pointer w-full"
                    >
                      Start Free Trial
                    </button>
                  </td>
                  <td className="p-4 sm:p-6 text-center bg-cyan-950/30 border-x border-cyan-500/20">
                    <button
                      onClick={handleEnroll}
                      className="btn-primary px-4 py-2.5 rounded-xl text-xs font-extrabold cursor-pointer w-full shadow-lg shadow-indigo-500/25"
                    >
                      Enroll in 15 Mocks
                    </button>
                  </td>
                  <td className="p-4 sm:p-6 text-center">
                    <button
                      onClick={handleEnroll}
                      className="px-3 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600/80 hover:bg-indigo-600 cursor-pointer w-full"
                    >
                      Get Complete Suite
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
