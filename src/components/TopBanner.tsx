import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function TopBanner() {
  const handleStartFree = () => {
    window.open('https://gmat-interview-login.mbawizards.co.in/', '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-950 border-b border-indigo-500/20 py-2.5 px-4 text-center relative z-50 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30 text-[11px]">
          <Sparkles size={12} className="text-cyan-400 animate-pulse" />
          <span>GMAT FOCUS EDITION 2026</span>
        </span>
        <p className="text-slate-300 text-xs sm:text-sm font-medium">
          <strong className="text-white">15 Full-Length Computer-Adaptive Practice Tests</strong> • Calibrated IRT Scoring (205–805) • Free Diagnostic Trial Available
        </p>
        <button
          onClick={handleStartFree}
          className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-4 cursor-pointer text-xs transition-colors"
        >
          <span>Start Free Diagnostic Mock</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}
