import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  HelpCircle,
  Play,
  BookOpen,
  BrainCircuit,
  Zap,
} from 'lucide-react';
import { topicTestsData, TopicTest } from '../data/topicTestsData';
import TopicTestModal from './TopicTestModal';

export default function TopicTestsSuite() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Quant' | 'Verbal' | 'Data Insights'>('All');
  const [activeTest, setActiveTest] = useState<TopicTest | null>(null);

  const filteredTests = topicTestsData.filter((t) => {
    if (selectedCategory === 'All') return true;
    return t.category === selectedCategory;
  });

  return (
    <section id="topic-tests" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs sm:text-sm text-purple-300 mb-5 border border-purple-500/30">
            <Layers size={16} className="text-purple-400" />
            <span>Targeted Topic-Wise Practice Drills</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Laser-Focused <span className="text-gradient">Topic Mastery Tests</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Eliminate weaknesses in specific question formats. Practice topic-level drills for Number Properties, Inequalities, Critical Reasoning Assumptions, Reading Comprehension, and Data Sufficiency.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {['All', 'Quant', 'Verbal', 'Data Insights'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/40'
                    : 'glass text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat === 'All' ? 'All Practice Topics' : `${cat} Drills`}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Topic Tests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTests.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
              className="glass-card card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      test.category === 'Quant'
                        ? 'border-blue-500/30 bg-blue-500/10 text-blue-400'
                        : test.category === 'Verbal'
                        ? 'border-purple-500/30 bg-purple-500/10 text-purple-400'
                        : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                    }`}
                  >
                    {test.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {test.difficulty}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-2 leading-snug">
                  {test.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  {test.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-400 mb-6">
                  <div className="flex items-center gap-1.5">
                    <BookOpen size={14} className="text-indigo-400" />
                    <span><strong>{test.questionsCount}</strong> Questions</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-cyan-400" />
                    <span><strong>{test.durationMins}</strong> Mins</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {test.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="text-[10px] px-2 py-0.5 rounded-md glass text-slate-400 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveTest(test)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer btn-primary transition-all duration-300"
              >
                <Play size={13} fill="currentColor" />
                <span>Launch Interactive Drill</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal Runner */}
        {activeTest && (
          <TopicTestModal test={activeTest} onClose={() => setActiveTest(null)} />
        )}

      </div>
    </section>
  );
}
