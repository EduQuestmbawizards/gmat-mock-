import { motion } from 'framer-motion';
import { School, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TargetSchools() {
  const schools = [
    { name: 'Stanford Graduate School of Business', location: 'Stanford, USA', targetScore: '735+', percentile: '99th %ile', acceptance: '6%', tier: 'M7 Elite' },
    { name: 'Harvard Business School (HBS)', location: 'Boston, USA', targetScore: '730+', percentile: '99th %ile', acceptance: '9%', tier: 'M7 Elite' },
    { name: 'The Wharton School (UPenn)', location: 'Philadelphia, USA', targetScore: '730+', percentile: '99th %ile', acceptance: '12%', tier: 'M7 Elite' },
    { name: 'INSEAD', location: 'Fontainebleau / Singapore', targetScore: '705+', percentile: '97th %ile', acceptance: '30%', tier: 'Top Global' },
    { name: 'Indian School of Business (ISB)', location: 'Hyderabad / Mohali, India', targetScore: '695+', percentile: '95th %ile', acceptance: '20%', tier: 'Top India' },
    { name: 'London Business School (LBS)', location: 'London, UK', targetScore: '710+', percentile: '98th %ile', acceptance: '18%', tier: 'Top Global' },
    { name: 'Kellogg School of Management', location: 'Evanston, USA', targetScore: '725+', percentile: '98th %ile', acceptance: '19%', tier: 'M7 Elite' },
    { name: 'MIT Sloan School of Management', location: 'Cambridge, USA', targetScore: '725+', percentile: '98th %ile', acceptance: '14%', tier: 'M7 Elite' },
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
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs sm:text-sm text-indigo-300 mb-5 border border-indigo-500/30">
            <School size={16} className="text-indigo-400" />
            <span>Target MBA Admissions Alignment</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Benchmark Against <span className="text-gradient">Top Business Schools</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            See how your diagnostic mock score aligns with actual median intake scores for the world’s leading MBA programs.
          </p>
        </motion.div>

        {/* Schools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {schools.map((school, i) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="glass-card card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 bg-indigo-950/60 px-2.5 py-0.5 rounded-full border border-indigo-500/30">
                    {school.tier}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {school.percentile}
                  </span>
                </div>

                <h3 className="text-white font-bold text-base mb-1 leading-snug">
                  {school.name}
                </h3>
                <p className="text-slate-400 text-xs mb-4">{school.location}</p>

                <div className="p-3 rounded-2xl glass border border-white/5 mb-4 bg-white/[0.01]">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-0.5">Target Focus Score</span>
                  <span className="text-xl font-extrabold text-cyan-300">{school.targetScore}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/5">
                <span>Acceptance Rate: {school.acceptance}</span>
                <CheckCircle2 size={14} className="text-cyan-400" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
