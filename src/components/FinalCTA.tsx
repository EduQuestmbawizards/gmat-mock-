import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, UserPlus, Play } from 'lucide-react';

export default function FinalCTA() {
  const handleStart = () => {
    window.open('https://gmat-interview-login.mbawizards.co.in/', '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-600/30 via-purple-600/20 to-cyan-500/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 sm:p-14 border border-cyan-400/40 text-center bg-gradient-to-b from-slate-900/90 via-indigo-950/50 to-slate-900/90 shadow-2xl relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs sm:text-sm text-cyan-300 mb-6 border border-cyan-500/30">
            <Sparkles size={16} className="text-cyan-400 animate-pulse" />
            <span>Join 10,000+ Successful GMAT Aspirants</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Achieve Your Target <br />
            <span className="text-gradient">705+ GMAT Focus Score?</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Start with our 100% free full-length diagnostic mock or get instant access to the complete 15-test adaptive series with comprehensive video solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleStart}
              className="px-8 py-4 rounded-2xl font-extrabold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-2xl shadow-cyan-500/30 border border-cyan-300 flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              <span>Start Free Diagnostic Mock Now</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('course-price-list');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else window.open('https://gmat-interview-login.mbawizards.co.in/', '_blank');
              }}
              className="glass px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-white hover:text-cyan-300 border border-white/15 hover:border-cyan-500/50 flex items-center gap-2 transition-all duration-300 cursor-pointer"
            >
              <span>View 15 Mocks Pricing & Plans</span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Instant Online Access</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-cyan-400" />
              <span>Calibrated 205–805 Score Report</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-purple-400" />
              <span>No Credit Card Needed for Trial</span>
            </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
