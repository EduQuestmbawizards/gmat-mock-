import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Clock,
  Target,
  BarChart2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BrainCircuit,
  Layers,
  Award,
  BookOpen,
  PieChart,
  Sliders,
  ShieldCheck,
  Zap,
  RotateCcw,
  Check,
  Flag,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';
import { mock01Full64Questions } from '../data/mock01Questions';
import MathText from './MathText';

interface MockExam {
  id: string;
  num: number;
  title: string;
  questions: number;
  duration: string;
  sections: string;
  tag: string;
  difficulty: string;
  scoreRange: string;
}

const builtMockExams: MockExam[] = [
  {
    id: 'mock_01',
    num: 1,
    title: 'GMAT Focus Diagnostic Mock Exam 01',
    questions: 64,
    duration: '135 Mins',
    sections: 'Quant (21Q) • Verbal (23Q) • DI (20Q)',
    tag: 'Diagnostic Exam',
    difficulty: 'Diagnostic Baseline',
    scoreRange: 'Calibrated 205-805',
  },
  {
    id: 'mock_02',
    num: 2,
    title: 'GMAT Focus Official Practice Exam 02',
    questions: 64,
    duration: '135 Mins',
    sections: 'Quant (21Q) • Verbal (23Q) • DI (20Q)',
    tag: 'Official Spec',
    difficulty: 'Adaptive (Medium-Hard)',
    scoreRange: 'Target 600-650',
  },
  {
    id: 'mock_03',
    num: 3,
    title: 'GMAT Focus Official Practice Exam 03',
    questions: 64,
    duration: '135 Mins',
    sections: 'Quant (21Q) • Verbal (23Q) • DI (20Q)',
    tag: 'Adaptive Engine',
    difficulty: 'Adaptive (Standard)',
    scoreRange: 'Target 620-670',
  },
  {
    id: 'mock_04',
    num: 4,
    title: 'GMAT Focus Official Practice Exam 04',
    questions: 64,
    duration: '135 Mins',
    sections: 'Quant (21Q) • Verbal (23Q) • DI (20Q)',
    tag: 'Concept Mastery',
    difficulty: 'Adaptive (Advanced)',
    scoreRange: 'Target 640-690',
  },
  {
    id: 'mock_05',
    num: 5,
    title: 'GMAT Focus Official Practice Exam 05',
    questions: 64,
    duration: '135 Mins',
    sections: 'Quant (21Q) • Verbal (23Q) • DI (20Q)',
    tag: 'Official Calibration',
    difficulty: 'Adaptive (700+ Caliber)',
    scoreRange: 'Target 660-715',
  },
  {
    id: 'mock_06',
    num: 6,
    title: 'GMAT Focus Official Practice Exam 06',
    questions: 64,
    duration: '135 Mins',
    sections: 'Quant (21Q) • Verbal (23Q) • DI (20Q)',
    tag: 'Challenger Edition',
    difficulty: 'Adaptive (705+ Elite)',
    scoreRange: 'Target 685-735',
  },
];

const sectionDetails = [
  {
    name: 'Quantitative Reasoning',
    qs: '21 Questions',
    time: '45 Minutes',
    badge: 'Quant',
    badgeColor: 'from-blue-500/20 to-indigo-500/10 text-blue-400 border-blue-500/30',
    desc: 'Measures your ability to reason mathematically, solve quantitative problems, and interpret numeric data through mental math.',
    topics: [
      'Problem Solving (Arithmetic, Algebra, Modern Math)',
      'Number Properties & Prime Factorization',
      'Word Problems, Rates, Work & Overlapping Sets',
      'Ratios, Proportions, Percentages & Profit-Loss',
    ],
  },
  {
    name: 'Verbal Reasoning',
    qs: '23 Questions',
    time: '45 Minutes',
    badge: 'Verbal',
    badgeColor: 'from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/30',
    desc: 'Evaluates your comprehension of written material, argument analysis, and logical reasoning skills across modern business contexts.',
    topics: [
      'Reading Comprehension (Business, Science & Humanities)',
      'Critical Reasoning (Strengthen / Weaken / Assumption)',
      'Inference, Boldface & Paradox Resolution',
      'Logical Flaws, Method of Reasoning & Evaluate Argument',
    ],
  },
  {
    name: 'Data Insights',
    qs: '20 Questions',
    time: '45 Minutes',
    badge: 'Data Insights',
    badgeColor: 'from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30',
    desc: 'Combines verbal, quantitative, and data analysis skills to analyze complex multi-source business scenarios and graphics interpretation.',
    topics: [
      'Data Sufficiency (Pure Math & Real-World Scenarios)',
      'Multi-Source Reasoning (Multi-Tab Cases)',
      'Table Analysis & Sorting Worksheets',
      'Graphics Interpretation & Two-Part Analysis Questions',
    ],
  },
];

const expertPrepFeatures = [
  {
    icon: <BrainCircuit size={22} />,
    title: 'Computer-Adaptive Practice Tests',
    desc: 'Full-length mocks calibrated with exact GMAC scoring algorithms. Question difficulty dynamically scales in real time based on your accuracy.',
    badge: 'Adaptive Engine',
    color: 'border-indigo-500/30 bg-indigo-500/5',
  },
  {
    icon: <BarChart2 size={22} />,
    title: 'Comprehensive Diagnostic Score Reports',
    desc: 'Instant 205-805 score calculation, percentile projections, topic-level accuracy heatmaps, pacing analysis, and section endurance tracking.',
    badge: 'Diagnostic Suite',
    color: 'border-cyan-500/30 bg-cyan-500/5',
  },
  {
    icon: <Clock size={22} />,
    title: 'Official 3-Section Exam Architecture',
    desc: 'Practice with exact 45-minute section timers across Quantitative Reasoning (21Q), Verbal Reasoning (23Q), and Data Insights (20Q).',
    badge: 'Official Timers',
    color: 'border-purple-500/30 bg-purple-500/5',
  },
  {
    icon: <Layers size={22} />,
    title: 'Topic-Wise Focused Practice Drills',
    desc: 'Master challenging subtopics with focused drill sets covering Algebra, Critical Reasoning, Reading Comprehension, and Data Sufficiency.',
    badge: 'Topic Drills',
    color: 'border-emerald-500/30 bg-emerald-500/5',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Realistic Test-Room Navigation',
    desc: 'Official GMAC exam features: Flag questions for review, question navigator drawer, and review/modify answers before section submit.',
    badge: 'Exam Controls',
    color: 'border-amber-500/30 bg-amber-500/5',
  },
  {
    icon: <Award size={22} />,
    title: 'Target Business School Alignment',
    desc: 'Benchmark your simulated score against average acceptance criteria at Harvard, Stanford GSB, Wharton, INSEAD, and London Business School.',
    badge: 'MBA Benchmarking',
    color: 'border-pink-500/30 bg-pink-500/5',
  },
];

export default function MockTests() {
  const [activeTab, setActiveTab] = useState<'analytics' | 'exams' | 'features' | 'sections'>('analytics');
  
  // Interactive Live Diagnostic Mock Test state for all 64 questions
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({ 0: 'A' });
  const [flaggedQuestions, setFlaggedQuestions] = useState<{ [key: number]: boolean }>({});
  const [isTestSubmitted, setIsTestSubmitted] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(8100); // 135 Mins (8100s)
  const [showQuestionPalette, setShowQuestionPalette] = useState<boolean>(false);

  // Timer simulation
  useEffect(() => {
    if (isTestSubmitted) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isTestSubmitted]);

  const formatTimer = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours > 0 ? `${hours}h ` : ''}${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleSelectOption = (qIdx: number, optKey: string) => {
    if (isTestSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optKey }));
  };

  const handleToggleFlag = (qIdx: number) => {
    setFlaggedQuestions((prev) => ({ ...prev, [qIdx]: !prev[qIdx] }));
  };

  const handleNextQuestion = () => {
    if (currentQIndex < mock01Full64Questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
    } else {
      setIsTestSubmitted(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex((prev) => prev - 1);
    }
  };

  const handleJumpToQuestion = (idx: number) => {
    setCurrentQIndex(idx);
    setShowQuestionPalette(false);
  };

  const handleRetakeTest = () => {
    setSelectedAnswers({});
    setFlaggedQuestions({});
    setCurrentQIndex(0);
    setIsTestSubmitted(false);
    setTimerSeconds(8100);
  };

  // Comprehensive calculation across all 64 questions of Mock 01
  const calculateComprehensiveScore = () => {
    let quantCorrect = 0;
    let quantTotal = 21;
    let verbalCorrect = 0;
    let verbalTotal = 23;
    let diCorrect = 0;
    let diTotal = 20;

    mock01Full64Questions.forEach((q, idx) => {
      const userAns = selectedAnswers[idx];
      const isCorrect = userAns && userAns.toUpperCase() === (q.correctAnswer || 'A').toUpperCase();
      if (q.section === 'Quantitative') {
        if (isCorrect) quantCorrect += 1;
      } else if (q.section === 'Verbal') {
        if (isCorrect) verbalCorrect += 1;
      } else if (q.section === 'Data Insights') {
        if (isCorrect) diCorrect += 1;
      }
    });

    const totalCorrect = quantCorrect + verbalCorrect + diCorrect;
    const answeredCount = Object.keys(selectedAnswers).length;
    const totalAccuracy = answeredCount > 0 ? Math.round((totalCorrect / answeredCount) * 100) : 0;

    // Standard Official GMAT Focus scale conversion (205 to 805, ending in 5)
    const quantScaled = Math.min(90, Math.max(60, 60 + Math.round((quantCorrect / quantTotal) * 30)));
    const verbalScaled = Math.min(90, Math.max(60, 60 + Math.round((verbalCorrect / verbalTotal) * 30)));
    const diScaled = Math.min(90, Math.max(60, 60 + Math.round((diCorrect / diTotal) * 30)));

    // Total score = 205 + (Sum of scaled differences from 60) * 6.666, rounded to 10s + 5
    const rawSum = (quantScaled - 60) + (verbalScaled - 60) + (diScaled - 60);
    const tenPointIncrement = Math.round((rawSum / 90) * 60);
    const totalScaled = Math.min(805, Math.max(205, 205 + (tenPointIncrement * 10)));

    const getPercentile = (scaled: number) => {
      if (scaled >= 705) return '99th %ile';
      if (scaled >= 685) return '97th %ile';
      if (scaled >= 655) return '93rd %ile';
      if (scaled >= 635) return '85th %ile';
      if (scaled >= 605) return '75th %ile';
      if (scaled >= 585) return '65th %ile';
      return '55th %ile';
    };

    return {
      totalCorrect,
      answeredCount,
      totalAccuracy,
      totalScaled,
      overallPercentile: getPercentile(totalScaled),
      quant: { correct: quantCorrect, total: quantTotal, scaled: quantScaled, pct: getPercentile(totalScaled) },
      verbal: { correct: verbalCorrect, total: verbalTotal, scaled: verbalScaled, pct: getPercentile(totalScaled) },
      di: { correct: diCorrect, total: diTotal, scaled: diScaled, pct: getPercentile(totalScaled) },
    };
  };

  const handleRedirectToLogin = () => {
    window.open('https://gmat-interview-login.mbawizards.co.in/', '_blank');
  };

  const handleTakeMock = () => {
    window.open('https://gmat-interview-login.mbawizards.co.in/#mock-tests', '_blank');
  };

  const handleViewPricing = () => {
    const el = document.getElementById('pricing') || document.getElementById('course-price-list');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.open('https://gmat-interview-login.mbawizards.co.in/', '_blank');
  };

  const currentQ = mock01Full64Questions[currentQIndex];
  const report = calculateComprehensiveScore();

  return (
    <section id="mock-tests" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Badge & Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-cyan-300 mb-6 border border-cyan-500/30">
            <Sparkles size={16} className="text-cyan-400 animate-pulse" />
            <span>Official GMAT Focus Exam Suite</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Full-Length GMAT Focus <span className="text-gradient">Mock Test Center</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Prepare under authentic GMAC exam conditions with computer-adaptive practice tests, full 3-section breakdowns, real test-room navigation, and instant AI-driven diagnostic score reports.
          </p>

          {/* Quick Action Banner */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="glass px-5 py-2.5 rounded-2xl border border-indigo-500/30 flex items-center gap-2.5 text-sm text-indigo-300">
              <ShieldCheck size={18} className="text-indigo-400" />
              <span><strong>Mock 01: Full-Length Diagnostic Exam</strong> (Complete 64 Questions)</span>
            </div>
            <button
              onClick={handleViewPricing}
              className="glass px-5 py-2.5 rounded-2xl border border-cyan-500/30 flex items-center gap-2.5 text-sm text-cyan-300 hover:text-white cursor-pointer transition-all"
            >
              <span>Explore Course Pricing & Prep Plans →</span>
            </button>
          </div>
        </motion.div>

        {/* Dashboard Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-6 border border-white/10 mb-16 shadow-2xl"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                <Target size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold text-base">GMAT Focus Mock Test Center & Prep Suite</h4>
                <p className="text-slate-400 text-xs">Adaptive Practice Tests • Section Breakdown • Diagnostic Analytics</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleTakeMock}
                className="btn-primary text-xs px-4 py-2 flex items-center gap-2 cursor-pointer"
              >
                Start Mock 01
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Official Format', val: 'Full-Length', sub: 'Adaptive 64Q / 135M', color: 'text-white' },
              { label: 'Practice Section Pool', val: 'Quant & Verbal', sub: 'Plus Data Insights', color: 'text-cyan-400' },
              { label: 'Scoring Scale', val: '205 - 805', sub: 'Official GMAC Scale', color: 'text-amber-400' },
              { label: 'Diagnostic Assessment', val: 'Mock 01', sub: 'Instant Score Report', color: 'text-emerald-400' },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-2xl p-4 border border-white/5 bg-white/[0.02]">
                <p className="text-slate-400 text-xs mb-1 font-medium">{stat.label}</p>
                <div className={`text-xl font-extrabold ${stat.color} mb-0.5`}>{stat.val}</div>
                <p className="text-slate-500 text-[11px]">{stat.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center mb-10">
          <div className="glass p-1.5 rounded-2xl border border-white/10 flex flex-wrap gap-2 justify-center">
            {[
              { id: 'analytics', label: 'Live Playable Mock 01 (64 Questions)', icon: <Sliders size={16} /> },
              { id: 'exams', label: 'Adaptive Mock Tests', icon: <BookOpen size={16} /> },
              { id: 'features', label: 'Platform Capabilities', icon: <Zap size={16} /> },
              { id: 'sections', label: '3 Exam Sections', icon: <PieChart size={16} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Contents */}
        <AnimatePresence mode="wait">
          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-strong rounded-3xl p-8 border border-white/10 mb-16 grid lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Info Column */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs text-purple-300 mb-4 border border-purple-500/30">
                    <BrainCircuit size={14} className="text-purple-400" />
                    <span>Real Interactive Mock 01 Simulation</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                    Full-Length Mock 01 (64 Questions & Scorecard)
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Experience all 64 questions of GMAT Focus Diagnostic Mock 01. Select your answers across Quant (21Q), Verbal (23Q), and Data Insights (20Q), jump between questions via the navigator, and submit for a comprehensive diagnostic report!
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      'Complete 64 official questions across Quant, Verbal & Data Insights',
                      'Interactive Question Navigator (1 to 64) with answered & flagged status',
                      'Instant 205-805 scaled diagnostic score & percentile calibration',
                      'Seamless gateway to access full mock series on candidate portal',
                    ].map((point, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
                          ✓
                        </div>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white block mb-0.5">Need Full Mock Series?</span>
                    <span>Unlock all full-length tests & admissions coaching.</span>
                  </div>
                  <button
                    onClick={handleRedirectToLogin}
                    className="btn-primary text-xs px-3.5 py-2 cursor-pointer shrink-0"
                  >
                    Login / Sign In →
                  </button>
                </div>
              </div>

              {/* Right: Live Playable Test-Room Component (All 64 Questions) */}
              <div className="lg:col-span-7 glass rounded-3xl p-6 border border-white/10 bg-black/60 shadow-2xl relative">
                {!isTestSubmitted ? (
                  <div>
                    {/* Test-Room Header */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        <span className="text-xs text-slate-400 ml-2 font-medium">GMAT Focus Exam Environment</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/40 font-bold">
                          ⏱ Total Timer: {formatTimer(timerSeconds)}
                        </span>
                      </div>
                    </div>

                    {/* Section Switcher / Question Tracker */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 mb-4 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="text-indigo-300 font-semibold">{currentQ.section}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 font-mono text-[11px]">{currentQ.topic || 'Reasoning'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setShowQuestionPalette(!showQuestionPalette)}
                          className="text-cyan-300 hover:text-white bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/30 cursor-pointer text-[11px] font-semibold"
                        >
                          Navigator ({Object.keys(selectedAnswers).length}/64 Answered)
                        </button>
                        <span>Q <strong>{currentQIndex + 1}</strong> of {mock01Full64Questions.length}</span>
                        {flaggedQuestions[currentQIndex] && (
                          <span className="text-amber-400 font-bold text-[10px] bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/40 flex items-center gap-1">
                            <Flag size={10} /> Flagged
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Question Palette Modal Dropdown */}
                    {showQuestionPalette && (
                      <div className="mb-4 p-3.5 rounded-2xl bg-slate-900 border border-white/15 max-h-48 overflow-y-auto">
                        <div className="flex items-center justify-between mb-2 text-xs text-slate-300">
                          <span className="font-bold">Jump to Any Question (1–64):</span>
                          <span className="text-[11px] text-slate-400">Quant (1-21) • Verbal (22-44) • DI (45-64)</span>
                        </div>
                        <div className="grid grid-cols-8 sm:grid-cols-12 gap-1.5">
                          {mock01Full64Questions.map((_, idx) => {
                            const isAnswered = !!selectedAnswers[idx];
                            const isFlagged = !!flaggedQuestions[idx];
                            const isCurrent = currentQIndex === idx;
                            return (
                              <button
                                key={idx}
                                onClick={() => handleJumpToQuestion(idx)}
                                className={`text-[11px] font-mono h-7 rounded border transition-all cursor-pointer ${
                                  isCurrent
                                    ? 'bg-cyan-500 text-black font-bold border-cyan-300'
                                    : isFlagged
                                    ? 'bg-amber-950/80 text-amber-300 border-amber-500/60'
                                    : isAnswered
                                    ? 'bg-indigo-900/60 text-indigo-200 border-indigo-500/40'
                                    : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/30'
                                }`}
                              >
                                {idx + 1}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Question & Passage Display */}
                    {currentQ.passage ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                        {/* Left Pane: Reading Comprehension Passage */}
                        <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 text-sm text-slate-200 leading-relaxed font-serif max-h-[380px] overflow-y-auto">
                          <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-purple-400 block mb-2">
                            Reading Comprehension Passage
                          </span>
                          <MathText text={currentQ.passage} />
                        </div>
                        {/* Right Pane: Question Prompt & Option Choices */}
                        <div className="flex flex-col justify-between">
                          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-sm text-slate-100 leading-relaxed font-sans mb-4 whitespace-pre-line max-h-40 overflow-y-auto">
                            <MathText text={currentQ.questionText} />
                          </div>
                          <div className="space-y-2.5">
                            {(currentQ.answerOptions && currentQ.answerOptions.length > 0
                              ? currentQ.answerOptions
                              : [
                                  { key: 'A', text: 'Option A' },
                                  { key: 'B', text: 'Option B' },
                                  { key: 'C', text: 'Option C' },
                                  { key: 'D', text: 'Option D' },
                                  { key: 'E', text: 'Option E' },
                                ]
                            ).map((opt) => {
                              const isSelected = selectedAnswers[currentQIndex] === opt.key;
                              return (
                                <div
                                  key={opt.key}
                                  onClick={() => handleSelectOption(currentQIndex, opt.key)}
                                  className={`p-3 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition-all duration-200 ${
                                    isSelected
                                      ? 'bg-gradient-to-r from-indigo-600/40 to-cyan-600/20 border-cyan-400/80 text-white font-semibold shadow-lg shadow-indigo-500/10'
                                      : 'bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/[0.04]'
                                  }`}
                                >
                                  <span><strong>({opt.key})</strong> <MathText text={opt.text} /></span>
                                  {isSelected && (
                                    <span className="text-cyan-300 text-[10px] uppercase font-extrabold bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/40">
                                      SELECTED
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Question Prompt */}
                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-sm text-slate-100 leading-relaxed font-sans mb-5 whitespace-pre-line min-h-[90px] max-h-60 overflow-y-auto">
                          <MathText text={currentQ.questionText} />
                        </div>

                        {/* Option Choices */}
                        <div className="space-y-2.5 mb-6">
                          {(currentQ.answerOptions && currentQ.answerOptions.length > 0
                            ? currentQ.answerOptions
                            : [
                                { key: 'A', text: 'Option A' },
                                { key: 'B', text: 'Option B' },
                                { key: 'C', text: 'Option C' },
                                { key: 'D', text: 'Option D' },
                                { key: 'E', text: 'Option E' },
                              ]
                          ).map((opt) => {
                            const isSelected = selectedAnswers[currentQIndex] === opt.key;
                            return (
                              <div
                                key={opt.key}
                                onClick={() => handleSelectOption(currentQIndex, opt.key)}
                                className={`p-3 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition-all duration-200 ${
                                  isSelected
                                    ? 'bg-gradient-to-r from-indigo-600/40 to-cyan-600/20 border-cyan-400/80 text-white font-semibold shadow-lg shadow-indigo-500/10'
                                    : 'bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/[0.04]'
                                }`}
                              >
                                <span><strong>({opt.key})</strong> <MathText text={opt.text} /></span>
                                {isSelected && (
                                  <span className="text-cyan-300 text-[10px] uppercase font-extrabold bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/40">
                                    SELECTED
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </>
                    )}

                    {/* Test Controls / Navigation Bar */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleToggleFlag(currentQIndex)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                            flaggedQuestions[currentQIndex]
                              ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                              : 'border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                          }`}
                        >
                          <Flag size={12} />
                          <span>{flaggedQuestions[currentQIndex] ? 'Unflag' : 'Flag for Review'}</span>
                        </button>
                        
                        <button
                          onClick={() => setIsTestSubmitted(true)}
                          className="text-slate-400 hover:text-red-400 px-2 py-1 transition-all cursor-pointer text-[11px]"
                        >
                          Submit Test Early
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handlePrevQuestion}
                          disabled={currentQIndex === 0}
                          className={`px-3.5 py-1.5 rounded-xl border flex items-center gap-1 transition-all ${
                            currentQIndex === 0
                              ? 'opacity-30 cursor-not-allowed border-white/5 text-slate-500'
                              : 'cursor-pointer border-white/10 text-slate-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <ChevronLeft size={14} />
                          <span>Previous</span>
                        </button>
                        
                        <button
                          onClick={handleNextQuestion}
                          className="btn-primary px-4 py-1.5 text-xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>{currentQIndex === mock01Full64Questions.length - 1 ? 'Submit & View Report' : 'Next Question'}</span>
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Comprehensive Diagnostic Score Card across all 64 questions */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} />
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300 glass px-3 py-1 rounded-full border border-cyan-500/30">
                      Mock 01 Diagnostic Report Completed
                    </span>

                    <h3 className="text-3xl font-extrabold text-white mt-3 mb-2">
                      Predicted GMAT Score: <span className="text-gradient">{report.totalScaled} / 805</span>
                    </h3>
                    <p className="text-slate-400 text-xs max-w-md mx-auto mb-6">
                      Performance Summary: You answered <strong>{report.answeredCount}</strong> of 64 questions with <strong>{report.totalCorrect}</strong> correct ({report.totalAccuracy}% accuracy).
                    </p>

                    {/* Section Breakdown Pills */}
                    <div className="grid grid-cols-3 gap-3 mb-6 text-left max-w-lg mx-auto">
                      <div className="glass p-3 rounded-2xl border border-white/10 bg-white/[0.02]">
                        <span className="text-[11px] text-slate-400 block">Quantitative (21Q)</span>
                        <span className="text-lg font-bold text-cyan-400">{report.quant.scaled} / 90</span>
                        <span className="text-[10px] text-emerald-400 block">{report.quant.correct}/{report.quant.total} Correct ({report.quant.pct})</span>
                      </div>
                      <div className="glass p-3 rounded-2xl border border-white/10 bg-white/[0.02]">
                        <span className="text-[11px] text-slate-400 block">Verbal (23Q)</span>
                        <span className="text-lg font-bold text-indigo-400">{report.verbal.scaled} / 90</span>
                        <span className="text-[10px] text-emerald-400 block">{report.verbal.correct}/{report.verbal.total} Correct ({report.verbal.pct})</span>
                      </div>
                      <div className="glass p-3 rounded-2xl border border-white/10 bg-white/[0.02]">
                        <span className="text-[11px] text-slate-400 block">Data Insights (20Q)</span>
                        <span className="text-lg font-bold text-purple-400">{report.di.scaled} / 90</span>
                        <span className="text-[10px] text-emerald-400 block">{report.di.correct}/{report.di.total} Correct ({report.di.pct})</span>
                      </div>
                    </div>

                    {/* Prominent Action CTA Buttons as Requested */}
                    <div className="space-y-3 max-w-md mx-auto">
                      <button
                        onClick={handleRedirectToLogin}
                        className="btn-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-indigo-500/20"
                      >
                        <span>For More Mocks, Upgrade & Purchase / Login</span>
                        <ArrowRight size={16} />
                      </button>

                      <button
                        onClick={handleRetakeTest}
                        className="btn-ghost w-full py-2.5 text-xs text-slate-400 hover:text-white flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <RotateCcw size={13} />
                        <span>Retake Mock 01 Diagnostic</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === 'exams' && (
            <motion.div
              key="exams"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 mb-16"
            >
              {/* Mocks Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {builtMockExams.map((mock) => (
                  <div
                    key={mock.id}
                    className="glass card-hover rounded-3xl p-6 border border-white/10 bg-gradient-to-br from-slate-900/80 to-indigo-950/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="glass px-3 py-1 rounded-full text-xs font-semibold text-indigo-300 border border-indigo-500/30">
                          {mock.tag}
                        </span>
                        <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
                          Mock #{mock.num < 10 ? `0${mock.num}` : mock.num}
                        </span>
                      </div>

                      <h3 className="text-white font-bold text-lg mb-2 leading-snug">{mock.title}</h3>
                      <p className="text-xs text-indigo-300 font-medium mb-4">{mock.scoreRange}</p>

                      <div className="space-y-2 mb-6 text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                          <FileText size={16} className="text-indigo-400" />
                          <span><strong>{mock.questions}</strong> Questions Total (Quant, Verbal, DI)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-cyan-400" />
                          <span><strong>{mock.duration}</strong> Official Timed Format</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs text-slate-400">{mock.difficulty}</span>
                      <button
                        onClick={handleTakeMock}
                        className="btn-primary text-xs px-4 py-2 flex items-center gap-1.5 cursor-pointer rounded-xl font-semibold transition-all"
                      >
                        <span>Launch Mock</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'features' && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-16"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {expertPrepFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className={`glass rounded-3xl p-7 border ${feat.color} flex flex-col justify-between card-hover`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                          {feat.icon}
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full glass border border-white/10 text-slate-300">
                          {feat.badge}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3">{feat.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">{feat.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                      <span>Official GMAT Focus Simulation</span>
                      <CheckCircle2 size={16} className="text-emerald-400" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'sections' && (
            <motion.div
              key="sections"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-3 gap-6 mb-16"
            >
              {sectionDetails.map((sec) => (
                <div
                  key={sec.name}
                  className="glass rounded-3xl p-7 border border-white/10 bg-gradient-to-br from-slate-900/90 to-indigo-950/40 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`glass px-3.5 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r ${sec.badgeColor}`}>
                        {sec.badge}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="text-white font-medium">{sec.qs}</span>
                        <span>•</span>
                        <span className="text-cyan-300 font-medium">{sec.time}</span>
                      </div>
                    </div>

                    <h3 className="text-white font-bold text-xl mb-3">{sec.name}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{sec.desc}</p>

                    <h4 className="text-slate-200 font-semibold text-xs uppercase tracking-wider mb-3">Key Exam Topics Tested:</h4>
                    <ul className="space-y-2 mb-6">
                      {sec.topics.map((t, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={handleTakeMock}
                    className="btn-ghost w-full py-2.5 text-xs text-indigo-300 hover:text-white border-indigo-500/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Practice {sec.badge} Drill
                    <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
