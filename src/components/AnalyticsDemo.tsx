import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Target,
  Clock,
  Sparkles,
  Award,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  BrainCircuit,
  PieChart,
} from 'lucide-react';

export default function AnalyticsDemo() {
  const handleEnroll = () => {
    window.open('https://gmat-interview-login.mbawizards.co.in/', '_blank');
  };

  const weakTopics = [
    { name: 'Multi-Source Reasoning (Data Insights)', accuracy: 52, timeAvg: '2m 35s', status: 'High Priority' },
    { name: 'Combinatorics & Probability (Quant)', accuracy: 58, timeAvg: '2m 10s', status: 'High Priority' },
    { name: 'Critical Reasoning: Boldface Flaws', accuracy: 64, timeAvg: '1m 55s', status: 'Medium Priority' },
    { name: 'Data Sufficiency: Inequalities', accuracy: 66, timeAvg: '2m 05s', status: 'Medium Priority' },
    { name: 'Reading Comp: Tone & Inference', accuracy: 70, timeAvg: '1m 40s', status: 'Moderate' },
  ];

  const strongTopics = [
    { name: 'Arithmetic & Number Properties (Quant)', accuracy: 95, timeAvg: '1m 15s', status: 'Mastered' },
    { name: 'Table Analysis & Sorting (Data Insights)', accuracy: 92, timeAvg: '1m 20s', status: 'Mastered' },
    { name: 'CR: Strengthen & Weaken (Verbal)', accuracy: 90, timeAvg: '1m 30s', status: 'Mastered' },
    { name: 'Algebra: Linear & Quadratic Systems', accuracy: 88, timeAvg: '1m 25s', status: 'Strong' },
    { name: 'Graphics Interpretation (Data Insights)', accuracy: 85, timeAvg: '1m 35s', status: 'Strong' },
  ];

  return (
    <section id="analytics" className="py-24 relative overflow-hidden bg-slate-950/70">
      {/* Background ambient lights */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs sm:text-sm text-cyan-300 mb-5 border border-cyan-500/30">
            <BrainCircuit size={16} className="text-cyan-400" />
            <span>AI Diagnostic Engine & Pacing Analytics</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Detailed Diagnostic Reports, <span className="text-gradient">Zero Guesswork</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            After completing each full-length mock, our calibrated AI diagnostics pinpoint exactly why you lost points: concept gaps, time traps, or fatigue in the final 5 questions.
          </p>
        </motion.div>

        {/* Analytics Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Scaled Score Card & Sectional Dial */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-strong rounded-3xl p-6 sm:p-8 border border-indigo-500/30 space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Simulated Performance</span>
                <h3 className="text-2xl font-bold text-white">Diagnostic Scorecard</h3>
              </div>
              <span className="text-xs font-mono bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30 font-bold">
                99th Percentile
              </span>
            </div>

            {/* Score Display */}
            <div className="text-center py-4 glass rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-indigo-950/30">
              <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Total Calibrated Scaled Score</span>
              <div className="text-5xl sm:text-6xl font-black text-white tracking-tight text-gradient">
                715 <span className="text-2xl font-normal text-slate-400">/ 805</span>
              </div>
              <p className="text-xs text-slate-300 mt-2">Old Scale Equivalent: <strong>760 - 770</strong> (Elite M7 Tier)</p>
            </div>

            {/* Sectional Breakdown Bars */}
            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between mb-1.5 font-semibold">
                  <span className="text-blue-400">Quantitative Reasoning (21Q)</span>
                  <span className="text-white">88 / 90 (96th %ile)</span>
                </div>
                <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[95%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1.5 font-semibold">
                  <span className="text-purple-400">Verbal Reasoning (23Q)</span>
                  <span className="text-white">85 / 90 (92nd %ile)</span>
                </div>
                <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-[88%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1.5 font-semibold">
                  <span className="text-emerald-400">Data Insights (20Q)</span>
                  <span className="text-white">84 / 90 (90th %ile)</span>
                </div>
                <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full w-[85%]" />
                </div>
              </div>
            </div>

            {/* Pacing Metric */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="glass p-3 rounded-xl border border-white/5">
                <span className="text-slate-400 block text-[11px]">Avg Time Per Question</span>
                <span className="text-base font-bold text-cyan-300">1m 58s</span>
              </div>
              <div className="glass p-3 rounded-xl border border-white/5">
                <span className="text-slate-400 block text-[11px]">Review & Edited Qs</span>
                <span className="text-base font-bold text-emerald-300">2 / 3 used</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 5 Strongest & 5 Weakest Topics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Weakest Topics List */}
            <div className="glass-strong rounded-3xl p-6 border border-amber-500/30">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
                <ShieldAlert size={16} />
                <span>Top 5 Focus Areas (High Improvement ROI)</span>
              </div>

              <div className="space-y-3">
                {weakTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="glass p-3 rounded-2xl border border-white/5 bg-white/[0.01] flex flex-wrap items-center justify-between gap-2 text-xs"
                  >
                    <div>
                      <span className="font-semibold text-white block">{topic.name}</span>
                      <span className="text-[11px] text-slate-400">Avg Time: {topic.timeAvg}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-400 font-bold">{topic.accuracy}% Accuracy</span>
                      <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono font-bold">
                        {topic.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strongest Topics List */}
            <div className="glass-strong rounded-3xl p-6 border border-emerald-500/30">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4">
                <CheckCircle2 size={16} />
                <span>Top 5 Mastered Topics (Maintain Pacing)</span>
              </div>

              <div className="space-y-3">
                {strongTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="glass p-3 rounded-2xl border border-white/5 bg-white/[0.01] flex flex-wrap items-center justify-between gap-2 text-xs"
                  >
                    <div>
                      <span className="font-semibold text-white block">{topic.name}</span>
                      <span className="text-[11px] text-slate-400">Avg Time: {topic.timeAvg}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400 font-bold">{topic.accuracy}% Accuracy</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold">
                        {topic.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
