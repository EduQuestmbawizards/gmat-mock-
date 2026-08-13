import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Clock,
  BarChart3,
  BrainCircuit,
  Zap,
  Play,
} from 'lucide-react';

export default function Hero() {
  const handleStartMock = () => {
    window.open('https://gmat-interview-login.mbawizards.co.in/', '_blank');
  };

  const handleScrollToPricing = () => {
    const el = document.getElementById('course-price-list');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.open('https://gmat-interview-login.mbawizards.co.in/', '_blank');
  };

  const handleScrollToLiveMock = () => {
    const el = document.getElementById('mock-tests');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Dynamic background ambient lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="glass px-4 py-2 rounded-full border border-cyan-500/30 flex items-center gap-2.5 text-xs sm:text-sm text-cyan-300 shadow-xl shadow-cyan-500/10">
            <Sparkles size={16} className="text-cyan-400 animate-pulse" />
            <span className="font-semibold">Official GMAT Focus Edition 2026 Simulation</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-5xl mx-auto mb-8"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            The Most Realistic <br className="hidden sm:inline" />
            <span className="text-gradient">GMAT Focus Mock Test Series</span> & Diagnostic Prep
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            <strong className="text-white font-semibold">15 Full-Length Computer-Adaptive Exams</strong> calibrated to the official 205–805 score scale. Featuring timed 45-minute sections, official question distribution (Quant 21Q, Verbal 23Q, DI 20Q), written & video explanations, and AI diagnostic heatmaps.
          </p>
        </motion.div>

        {/* Dual Primary Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={handleStartMock}
            className="px-7 py-4 rounded-2xl font-extrabold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-2xl shadow-cyan-500/25 border border-cyan-300 flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
          >
            <span>Start Free Diagnostic Mock (64 Qs)</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={handleScrollToPricing}
            className="glass px-7 py-4 rounded-2xl font-bold text-sm sm:text-base text-white hover:text-cyan-300 border border-white/15 hover:border-cyan-500/50 flex items-center gap-2.5 transition-all duration-300 cursor-pointer hover:bg-white/[0.06]"
          >
            <span>Explore 15 Mocks & Pricing</span>
            <span className="text-xs bg-indigo-500/30 text-indigo-300 px-2 py-0.5 rounded-full font-mono">From ₹3,999 / $49</span>
          </button>
        </motion.div>

        {/* 4 Feature Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 max-w-6xl mx-auto mb-16"
        >
          {[
            {
              icon: <BrainCircuit size={22} className="text-cyan-400" />,
              val: '15 Full Mocks',
              title: 'Adaptive IRT Engine',
              desc: 'Dynamic difficulty scaling matching GMAC algorithms',
            },
            {
              icon: <Clock size={22} className="text-purple-400" />,
              val: '64 Qs / 135 Mins',
              title: '3-Section Focus Spec',
              desc: 'Quant (21Q), Verbal (23Q) & Data Insights (20Q)',
            },
            {
              icon: <BarChart3 size={22} className="text-emerald-400" />,
              val: '205 – 805 Scale',
              title: 'Calibrated Scoring',
              desc: 'Instant scaled scores with percentile benchmarking',
            },
            {
              icon: <ShieldCheck size={22} className="text-amber-400" />,
              val: '99.4% Accuracy',
              title: 'Official Test-Room',
              desc: 'On-screen calculator, review & edit 3 questions',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-card card-hover p-5 sm:p-6 rounded-3xl border border-white/10 flex flex-col justify-between"
            >
              <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-white block mb-0.5 tracking-tight">{item.val}</span>
                <span className="text-xs sm:text-sm font-semibold text-cyan-300 block mb-1.5">{item.title}</span>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Live Simulation Banner Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="glass-strong rounded-3xl p-6 sm:p-8 border border-indigo-500/30 bg-gradient-to-br from-slate-900/90 via-indigo-950/40 to-slate-900/90 shadow-2xl relative overflow-hidden max-w-5xl mx-auto"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                <Play size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Full-Length Interactive Diagnostic Test (Mock 01)</h3>
                <p className="text-xs text-slate-400">All 64 Questions playable with instant score calculation & section breakdown</p>
              </div>
            </div>

            <button
              onClick={handleScrollToLiveMock}
              className="btn-primary text-xs px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-indigo-500/25"
            >
              <span>Play Mock 01 Simulator Below</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-6 text-xs">
            <div className="glass p-4 rounded-2xl border border-blue-500/20 bg-blue-500/5">
              <div className="flex items-center justify-between text-blue-400 font-bold mb-1">
                <span>Quantitative Reasoning</span>
                <span className="text-[10px] bg-blue-500/20 px-2 py-0.5 rounded">21 Questions</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">Arithmetic, Algebra, Number Properties, Inequalities & Word Problems • 45 Mins</p>
            </div>

            <div className="glass p-4 rounded-2xl border border-purple-500/20 bg-purple-500/5">
              <div className="flex items-center justify-between text-purple-400 font-bold mb-1">
                <span>Verbal Reasoning</span>
                <span className="text-[10px] bg-purple-500/20 px-2 py-0.5 rounded">23 Questions</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">Reading Comprehension & Critical Reasoning (Assumption, Weaken, Boldface) • 45 Mins</p>
            </div>

            <div className="glass p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center justify-between text-emerald-400 font-bold mb-1">
                <span>Data Insights</span>
                <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded">20 Questions</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">Data Sufficiency, Multi-Source Reasoning, Table Analysis & Two-Part • 45 Mins</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
