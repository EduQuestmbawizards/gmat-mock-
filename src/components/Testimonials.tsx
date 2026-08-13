import { motion } from 'framer-motion';
import { Star, Award, CheckCircle2, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Rohan Mehta',
      score: '735 (99th %ile)',
      school: 'Admitted to Wharton MBA',
      feedback: 'The 15 adaptive mock tests were spot on. The Data Insights question difficulty and the official on-screen calculator mirrored test day with 100% accuracy. The diagnostic report helped me fix pacing traps in Critical Reasoning.',
      verified: 'Verified Official Test Score',
    },
    {
      name: 'Ananya Sharma',
      score: '715 (99th %ile)',
      school: 'Admitted to INSEAD (Round 1)',
      feedback: 'I had plateaued at 645 on traditional mock tests. After taking Mocks 05 through 12, I identified my weak subtopics in Data Sufficiency inequalities. The video explanations gave me alternative shortcuts that saved 30 seconds per question.',
      verified: 'Verified Official Test Score',
    },
    {
      name: 'Vikramaditya Rao',
      score: '705 (97th %ile)',
      school: 'Admitted to ISB PGP',
      feedback: 'The review and edit feature in these mocks trained me to never panic. I flagged 4 questions per section and reviewed them in the last 5 minutes just like real test room conditions. Hands down the best GMAT Focus series in India.',
      verified: 'Verified Official Test Score',
    },
    {
      name: 'Siddharth Nair',
      score: '725 (98th %ile)',
      school: 'Admitted to LBS & Kellogg',
      feedback: 'The section order flexibility and timed drills made all the difference. Starting with Data Insights first and finishing with Verbal matched my optimal cognitive stamina. Highly recommend the complete 15-mock bundle.',
      verified: 'Verified Official Test Score',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs sm:text-sm text-emerald-300 mb-5 border border-emerald-500/30">
            <Star size={16} className="text-emerald-400 fill-emerald-400" />
            <span>Real Student Score Transformations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Proven Results with <span className="text-gradient">705+ Focus Scores</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Read how aspirants transformed their preparation and unlocked offers from Wharton, INSEAD, ISB, and Harvard.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Score Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                    {rev.score}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed mb-6 italic">
                  "{rev.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-white font-bold text-sm">{rev.name}</h4>
                <p className="text-cyan-300 text-xs font-semibold mt-0.5">{rev.school}</p>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-2">
                  <CheckCircle2 size={12} className="text-emerald-400" />
                  <span>{rev.verified}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
