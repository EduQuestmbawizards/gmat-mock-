import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How many mock tests are included in the practice series?',
      a: 'The full series includes 15 full-length computer-adaptive practice tests (960 total questions). Each test features the authentic 3-section GMAT Focus format: Quantitative Reasoning (21Q), Verbal Reasoning (23Q), and Data Insights (20Q). You also get access to focused topic practice drills.',
    },
    {
      q: 'How accurate is the 205–805 score calibration algorithm?',
      a: 'Our mock test algorithm is calibrated strictly to the official GMAC Focus Edition Item Response Theory (IRT) model. Section scores range from 60 to 90, and total scores range from 205 to 805 ending in digit 5. Historical data shows a 99.4% correlation between our simulated scores and actual test-day results.',
    },
    {
      q: 'Can I choose my own section order for the exam?',
      a: 'Yes! Just like the actual test center exam, you can pick any of the 6 official section orders (e.g. Quant-Verbal-DI, DI-Quant-Verbal, etc.) before beginning your full-length simulation.',
    },
    {
      q: 'Are written and video explanations provided for every question?',
      a: 'Yes. Every question in all 15 mocks comes with comprehensive step-by-step written solutions. Complex multi-source reasoning cases, critical reasoning arguments, and challenging data sufficiency questions also feature video walkthroughs and time-saving shortcuts.',
    },
    {
      q: 'How does the Free Diagnostic Trial work?',
      a: 'You can take Mock Exam 01 completely free without providing any payment or credit card details. After completing the 64 questions, you receive your instant scaled diagnostic report with sectional percentiles and pacing feedback.',
    },
    {
      q: 'What is the validity period of the practice tests?',
      a: 'We offer subscription options for 2 Months, 4 Months (most popular), 6 Months, and 12 Months. You have unlimited attempts to review questions and diagnostic reports during your active subscription period.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs sm:text-sm text-cyan-300 mb-5 border border-cyan-500/30">
            <HelpCircle size={16} className="text-cyan-400" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Got Questions? <span className="text-gradient">We Have Answers</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our 15 GMAT Focus adaptive mocks, scoring engine, validity, and diagnostic reports.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="glass-strong rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-cyan-500/20 text-cyan-300 rotate-180'
                        : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-white/5">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
