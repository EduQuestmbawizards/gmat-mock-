import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Clock,
  CheckCircle2,
  XCircle,
  Award,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Check,
  BrainCircuit,
} from 'lucide-react';
import MathText from './MathText';
import type { TopicTest } from '../data/topicTestsData';

interface TopicTestModalProps {
  test: TopicTest | null;
  onClose: () => void;
}

export default function TopicTestModal({ test, onClose }: TopicTestModalProps) {
  if (!test) return null;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [flagged, setFlagged] = useState<{ [key: number]: boolean }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(test.durationMins * 60);
  const [isPracticeMode, setIsPracticeMode] = useState<boolean>(false);

  // Timer effect
  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted]);

  const currentQ = test.questions[currentIndex];
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: optionIndex }));
  };

  const toggleFlag = (qIndex: number) => {
    setFlagged((prev) => ({ ...prev, [qIndex]: !prev[qIndex] }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    test.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const resetTest = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setFlagged({});
    setIsSubmitted(false);
    setTimeLeft(test.durationMins * 60);
  };

  const scoreCount = calculateScore();
  const scorePercent = Math.round((scoreCount / test.questions.length) * 100);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="glass-strong rounded-3xl border border-white/20 w-full max-w-4xl bg-slate-950 text-white shadow-2xl overflow-hidden my-auto"
        >
          {/* Top Bar Header */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg">
                <BrainCircuit size={18} />
              </span>
              <div>
                <h3 className="font-bold text-base text-white leading-tight flex items-center gap-2">
                  {test.title}
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {test.category}
                  </span>
                </h3>
                <p className="text-slate-400 text-xs">
                  {test.questions.length} Questions • Difficulty: {test.difficulty}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {!isSubmitted && (
                <div className="flex items-center gap-2 font-mono text-sm bg-black/40 px-3.5 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400">
                  <Clock size={15} className="animate-pulse" />
                  <span>{formatTime(timeLeft)}</span>
                </div>
              )}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {!isSubmitted ? (
            <div className="p-6 md:p-8 space-y-6">
              {/* Question Navigation & Mode Switch */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 overflow-x-auto py-1">
                  {test.questions.map((_, idx) => {
                    const isSelected = selectedAnswers[idx] !== undefined;
                    const isCurrent = currentIndex === idx;
                    const isFlagged = flagged[idx];

                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-8 h-8 rounded-lg text-xs font-semibold flex items-center justify-center transition-all relative ${
                          isCurrent
                            ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/30 scale-105'
                            : isSelected
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-white/5 text-slate-400 hover:bg-white/10'
                        }`}
                      >
                        {idx + 1}
                        {isFlagged && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border border-slate-900" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <button
                    onClick={() => setIsPracticeMode(!isPracticeMode)}
                    className={`px-3 py-1.5 rounded-full border transition-all ${
                      isPracticeMode
                        ? 'bg-indigo-600/30 border-indigo-500 text-indigo-200'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    {isPracticeMode ? '⚡ Instant Answer Mode ON' : '⏱ Standard Timed Exam'}
                  </button>

                  <button
                    onClick={() => toggleFlag(currentIndex)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all ${
                      flagged[currentIndex]
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Bookmark size={13} />
                    <span>{flagged[currentIndex] ? 'Flagged' : 'Flag'}</span>
                  </button>
                </div>
              </div>

              {/* Question Body: Two-Pane when passage is present */}
              {currentQ.passage ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Left Pane: Passage */}
                  <div className="glass p-5 rounded-2xl border border-white/10 bg-slate-900/60 max-h-[380px] overflow-y-auto text-sm text-slate-300 leading-relaxed font-serif">
                    <span className="text-xs uppercase tracking-wider text-purple-400 font-sans font-bold block mb-2">
                      Reading Comprehension Passage:
                    </span>
                    <MathText text={currentQ.passage} />
                  </div>

                  {/* Right Pane: Question Prompt & Options */}
                  <div>
                    <div className="text-xs text-indigo-400 font-semibold uppercase tracking-wider mb-2">
                      Question {currentIndex + 1} of {test.questions.length}
                    </div>
                    <h4 className="text-base font-semibold text-white leading-snug mb-4">
                      <MathText text={currentQ.question} />
                    </h4>

                    {/* Options List */}
                    <div className="space-y-3">
                      {currentQ.options.map((opt, oIdx) => {
                        const isSelected = selectedAnswers[currentIndex] === oIdx;
                        const optionLetter = String.fromCharCode(65 + oIdx);

                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleOptionSelect(oIdx)}
                            className={`w-full p-4 rounded-xl text-left text-sm transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                              isSelected
                                ? 'bg-gradient-to-r from-indigo-600/40 to-cyan-600/30 border-cyan-400 text-white font-medium shadow-lg shadow-indigo-500/10'
                                : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.07] hover:border-white/20'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center ${
                                  isSelected
                                    ? 'bg-cyan-400 text-slate-950'
                                    : 'bg-white/10 text-slate-400'
                                }`}
                              >
                                {optionLetter}
                              </span>
                              <span><MathText text={opt} /></span>
                            </div>
                            {isSelected && <Check size={18} className="text-cyan-400" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-xs text-indigo-400 font-semibold uppercase tracking-wider mb-2">
                    Question {currentIndex + 1} of {test.questions.length}
                  </div>
                  <h4 className="text-lg font-semibold text-white leading-snug mb-5">
                    <MathText text={currentQ.question} />
                  </h4>

                  {/* Options List */}
                  <div className="space-y-3">
                    {currentQ.options.map((opt, oIdx) => {
                      const isSelected = selectedAnswers[currentIndex] === oIdx;
                      const optionLetter = String.fromCharCode(65 + oIdx);

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleOptionSelect(oIdx)}
                          className={`w-full p-4 rounded-xl text-left text-sm transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                            isSelected
                              ? 'bg-gradient-to-r from-indigo-600/40 to-cyan-600/30 border-cyan-400 text-white font-medium shadow-lg shadow-indigo-500/10'
                              : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.07] hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center ${
                                isSelected
                                  ? 'bg-cyan-400 text-slate-950'
                                  : 'bg-white/10 text-slate-400'
                              }`}
                            >
                              {optionLetter}
                            </span>
                            <span><MathText text={opt} /></span>
                          </div>
                          {isSelected && <Check size={18} className="text-cyan-400" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Instant Explanation (If Practice Mode is ON) */}
              {isPracticeMode && selectedAnswers[currentIndex] !== undefined && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`glass p-5 rounded-2xl border ${
                    selectedAnswers[currentIndex] === currentQ.correctAnswer
                      ? 'border-emerald-500/40 bg-emerald-950/20'
                      : 'border-rose-500/40 bg-rose-950/20'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm mb-2">
                    {selectedAnswers[currentIndex] === currentQ.correctAnswer ? (
                      <span className="text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 size={16} /> Correct Answer!
                      </span>
                    ) : (
                      <span className="text-rose-400 flex items-center gap-1.5">
                        <XCircle size={16} /> Incorrect. Correct option is (
                        {String.fromCharCode(65 + currentQ.correctAnswer)})
                      </span>
                    )}
                  </div>
                  <div className="text-slate-300 text-xs leading-relaxed font-sans">
                    <MathText text={currentQ.explanation} />
                  </div>
                </motion.div>
              )}

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(currentIndex - 1)}
                  className="btn-ghost py-2.5 px-4 text-xs flex items-center gap-1 disabled:opacity-30 cursor-pointer"
                >
                  <ChevronLeft size={16} /> Previous
                </button>

                <div className="flex items-center gap-3">
                  {currentIndex < test.questions.length - 1 ? (
                    <button
                      onClick={() => setCurrentIndex(currentIndex + 1)}
                      className="btn-primary py-2.5 px-5 text-xs flex items-center gap-1 cursor-pointer"
                    >
                      Next Question <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsSubmitted(true)}
                      className="btn-primary bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white py-2.5 px-6 text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
                    >
                      <CheckCircle2 size={16} /> Submit Topic Test
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Diagnostic Score Report Screen */
            <div className="p-6 md:p-8 space-y-6">
              <div className="text-center max-w-xl mx-auto py-4">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 text-cyan-300 mb-4 border border-cyan-500/30">
                  <Award size={48} className="text-cyan-400 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Topic Test Completed!</h3>
                <p className="text-slate-400 text-sm">
                  Here is your topic accuracy & step-by-step GMAT Focus Edition diagnostic breakdown.
                </p>
              </div>

              {/* Score Overview Card */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass p-4 rounded-2xl text-center border border-white/10 bg-white/[0.02]">
                  <p className="text-slate-400 text-xs mb-1">Score Accuracy</p>
                  <div className="text-3xl font-extrabold text-cyan-400">{scorePercent}%</div>
                  <p className="text-slate-500 text-[11px]">
                    {scoreCount} of {test.questions.length} Correct
                  </p>
                </div>

                <div className="glass p-4 rounded-2xl text-center border border-white/10 bg-white/[0.02]">
                  <p className="text-slate-400 text-xs mb-1">Percentile Estimate</p>
                  <div className="text-3xl font-extrabold text-emerald-400">
                    {scorePercent >= 80 ? '90th+' : scorePercent >= 60 ? '75th' : '50th'}
                  </div>
                  <p className="text-slate-500 text-[11px]">Target Caliber</p>
                </div>

                <div className="glass p-4 rounded-2xl text-center border border-white/10 bg-white/[0.02]">
                  <p className="text-slate-400 text-xs mb-1">Time Used</p>
                  <div className="text-3xl font-extrabold text-amber-400">
                    {formatTime(test.durationMins * 60 - timeLeft)}
                  </div>
                  <p className="text-slate-500 text-[11px]">Max: {test.durationMins} Mins</p>
                </div>

                <div className="glass p-4 rounded-2xl text-center border border-white/10 bg-white/[0.02]">
                  <p className="text-slate-400 text-xs mb-1">Category</p>
                  <div className="text-2xl font-bold text-indigo-400 mt-1">{test.category}</div>
                  <p className="text-slate-500 text-[11px]">{test.tags[0]}</p>
                </div>
              </div>

              {/* Solutions Review Accordion */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <BrainCircuit size={16} className="text-cyan-400" />
                  Detailed Answers & Explanations Review
                </h4>

                <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                  {test.questions.map((q, idx) => {
                    const userAns = selectedAnswers[idx];
                    const isCorrect = userAns === q.correctAnswer;

                    return (
                      <div
                        key={q.id}
                        className={`glass p-5 rounded-2xl border ${
                          isCorrect ? 'border-emerald-500/30 bg-emerald-950/10' : 'border-rose-500/30 bg-rose-950/10'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="font-medium text-white text-sm flex items-start gap-2.5">
                            <span className="text-cyan-400 font-bold shrink-0">Q{idx + 1}.</span>
                            <span><MathText text={q.question} /></span>
                          </div>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold shrink-0 ${
                              isCorrect
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                            }`}
                          >
                            {isCorrect ? 'Correct ✓' : 'Incorrect ✗'}
                          </span>
                        </div>

                        <div className="text-xs text-slate-300 mb-3 space-y-1 pl-8">
                          <div>
                            Your Choice:{' '}
                            <span className={isCorrect ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                              {userAns !== undefined ? (
                                <>
                                  {String.fromCharCode(65 + userAns)}) <MathText text={q.options[userAns]} />
                                </>
                              ) : 'Not Answered'}
                            </span>
                          </div>
                          {!isCorrect && (
                            <div>
                              Correct Answer:{' '}
                              <span className="text-emerald-400 font-bold">
                                {String.fromCharCode(65 + q.correctAnswer)}) <MathText text={q.options[q.correctAnswer]} />
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="glass p-3.5 rounded-xl border border-white/10 bg-black/40 text-xs text-slate-300 leading-relaxed font-sans ml-8">
                          <strong className="text-cyan-400 block mb-1 font-mono">Explanation:</strong>
                          <MathText text={q.explanation} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={resetTest}
                  className="btn-ghost py-2.5 px-4 text-xs flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white"
                >
                  <RotateCcw size={15} /> Retake Test
                </button>

                <button
                  onClick={onClose}
                  className="btn-primary py-2.5 px-6 text-xs flex items-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 size={16} /> Close Review
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
