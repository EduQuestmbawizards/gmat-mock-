import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Clock,
  Target,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Play,
  Award,
  BookOpen,
} from 'lucide-react';
import { all15MockExams, MockExam } from '../data/mockExamsData';

export default function MockSeriesGrid() {
  const [filter, setFilter] = useState<'all' | 'diagnostic' | 'advanced' | 'elite'>('all');

  const handleLaunchMock = (mock: MockExam) => {
    if (mock.isFree) {
      const el = document.getElementById('mock-tests');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.open('https://gmat-interview-login.mbawizards.co.in/', '_blank');
    } else {
      window.open('https://gmat-interview-login.mbawizards.co.in/', '_blank');
    }
  };

  const filteredMocks = all15MockExams.filter((m) => {
    if (filter === 'diagnostic') return m.isFree || m.num <= 3;
    if (filter === 'advanced') return m.num >= 4 && m.num <= 10;
    if (filter === 'elite') return m.num >= 11;
    return true;
  });

  return (
    <section id="all-mocks" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs sm:text-sm text-cyan-300 mb-5 border border-cyan-500/30">
            <Award size={16} className="text-cyan-400" />
            <span>Complete 15-Mock Exam Catalogue</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            15 Full-Length <span className="text-gradient">Computer-Adaptive Mocks</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Every test is calibrated using real Item Response Theory (IRT) algorithms matching the official GMAC test center. Practice the full 64-question exam across 3 timed 45-minute sections.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All 15 Mocks' },
              { id: 'diagnostic', label: 'Diagnostic & Standard (Mocks 1-3)' },
              { id: 'advanced', label: 'Advanced Mastery (Mocks 4-10)' },
              { id: 'elite', label: '705+ Score Simulators (Mocks 11-15)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/25 border border-cyan-400/40'
                    : 'glass text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 15 Mocks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMocks.map((mock, idx) => (
            <motion.div
              key={mock.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
              className={`glass-strong rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between card-hover relative overflow-hidden ${
                mock.isFree ? 'border-emerald-500/40 bg-emerald-950/10' : 'border-white/10'
              }`}
            >
              {/* Free Trial Badge if Mock 01 */}
              {mock.isFree && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-500 to-teal-500 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-lg">
                  FREE DIAGNOSTIC TRIAL
                </div>
              )}

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r ${mock.badgeColor}`}>
                    {mock.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                    MOCK #{mock.num < 10 ? `0${mock.num}` : mock.num}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-1.5 leading-snug group-hover:text-cyan-300 transition-colors">
                  {mock.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-cyan-300">{mock.scoreRange}</span>
                  <span className="text-slate-500 text-xs">•</span>
                  <span className="text-xs text-slate-400">{mock.difficulty}</span>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed mb-5">
                  {mock.description}
                </p>

                {/* Specs Info */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl glass border border-white/5 mb-5 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <FileText size={14} className="text-indigo-400" />
                    <span><strong>{mock.questions}</strong> Qs (3 Secs)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-cyan-400" />
                    <span><strong>{mock.duration}</strong> Timed</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-1.5 mb-6 text-[11px] text-slate-300">
                  {mock.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  {mock.isFree ? '100% Free Baseline Test' : 'Full Explanations & Analytics'}
                </span>
                
                <button
                  onClick={() => handleLaunchMock(mock)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all duration-300 shadow-md ${
                    mock.isFree
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 hover:scale-[1.03]'
                      : 'btn-primary'
                  }`}
                >
                  {mock.isFree ? (
                    <>
                      <Play size={13} fill="currentColor" />
                      <span>Try Free Mock</span>
                    </>
                  ) : (
                    <>
                      <span>Start Mock Exam</span>
                      <ArrowRight size={13} />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-3xl glass border border-cyan-500/30 text-center flex flex-wrap items-center justify-between gap-4 max-w-4xl mx-auto"
        >
          <div className="text-left">
            <h4 className="text-white font-bold text-base mb-1">Looking for all 15 Full-Length Adaptive Tests?</h4>
            <p className="text-slate-300 text-xs">Unlock all 15 full mocks with written and video solutions, AI diagnostic reports, and topic drills.</p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('course-price-list');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else window.open('https://gmat-interview-login.mbawizards.co.in/', '_blank');
            }}
            className="btn-primary text-xs px-5 py-3 font-bold flex items-center gap-2 cursor-pointer"
          >
            <span>View 15 Mock Series Pricing</span>
            <ArrowRight size={14} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
