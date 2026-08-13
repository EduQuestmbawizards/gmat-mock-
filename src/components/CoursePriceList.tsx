import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Zap,
  Clock,
  HelpCircle,
  PhoneCall,
  UserPlus,
  MessageCircle,
} from 'lucide-react';
import { PRICING_PLANS, DURATION_OPTIONS, PricingPlan } from '../data/pricingData';

export default function CoursePriceList() {
  const [selectedDuration, setSelectedDuration] = useState<string>('4_months');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const handleEnroll = (_plan: PricingPlan) => {
    window.open('https://gmat-interview-login.mbawizards.co.in/', '_blank');
  };

  const handleOpenWhatsApp = () => {
    window.open(
      'https://wa.me/919958041888?text=Hi%20MBA%20Wizards,%20I%20would%20like%20to%20enroll%20in%20the%20GMAT%20Focus%2015%20Mock%20Test%20Series.',
      '_blank'
    );
  };

  return (
    <section id="course-price-list" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Badge & Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs sm:text-sm text-cyan-300 mb-5 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
            <Sparkles size={16} className="text-cyan-400 animate-pulse" />
            <span>Course Price List & Enrollment Plans</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Transparent Pricing, <span className="text-gradient">World-Class Mocks</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Choose the subscription duration that aligns with your target GMAT test date and MBA application deadlines. Every plan gives you full access to our computer-adaptive testing engine and AI diagnostic reports.
          </p>

          {/* Controls: Currency Toggle & Duration Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
            
            {/* Currency Toggle */}
            <div className="glass p-1 rounded-2xl border border-white/10 flex items-center">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  currency === 'INR'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ₹ INR (India)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                $ USD (Global)
              </button>
            </div>

            {/* Duration Selector Tabs */}
            <div className="glass p-1.5 rounded-2xl border border-white/10 flex flex-wrap justify-center gap-1">
              {DURATION_OPTIONS.map((dur) => (
                <button
                  key={dur.id}
                  onClick={() => setSelectedDuration(dur.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedDuration === dur.id
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{dur.label}</span>
                  {dur.id === '4_months' && (
                    <span className="text-[10px] bg-emerald-400 text-slate-950 px-1.5 py-0.2 rounded font-extrabold">
                      Best Value
                    </span>
                  )}
                </button>
              ))}
            </div>

          </div>
        </motion.div>

        {/* 3 Main Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16">
          {PRICING_PLANS.map((plan, idx) => {
            const currentPrice =
              currency === 'INR'
                ? plan.priceINR[selectedDuration]
                : plan.priceUSD[selectedDuration];

            const originalPrice =
              currency === 'INR'
                ? plan.originalPriceINR?.[selectedDuration]
                : plan.originalPriceUSD?.[selectedDuration];

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`glass-strong rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  plan.highlighted
                    ? 'border-cyan-400/80 bg-gradient-to-b from-slate-900/95 via-indigo-950/60 to-slate-900/90 shadow-2xl shadow-cyan-500/20 lg:-translate-y-2'
                    : 'border-white/10 bg-slate-900/70'
                }`}
              >
                {/* Popular / Elite Floating Badge */}
                {plan.badge && (
                  <div
                    className={`absolute top-0 right-0 px-4 py-1 rounded-bl-2xl text-[11px] font-extrabold uppercase tracking-wider ${
                      plan.badgeType === 'popular'
                        ? 'bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 text-slate-950 shadow-lg shadow-cyan-500/30'
                        : plan.badgeType === 'elite'
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white'
                        : 'bg-emerald-500 text-slate-950'
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 pr-12 leading-snug">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                    {plan.subtitle}
                  </p>

                  {/* Price Tag Box */}
                  <div className="p-4 rounded-2xl glass border border-white/10 mb-6 bg-white/[0.02]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {currentPrice === 0 ? 'FREE' : `${currency === 'INR' ? '₹' : '$'}${currentPrice.toLocaleString()}`}
                      </span>
                      {originalPrice && originalPrice > 0 && (
                        <span className="text-sm font-semibold text-slate-500 line-through">
                          {currency === 'INR' ? '₹' : '$'}{originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-1.5 text-[11px] text-slate-400">
                      <span>Access Period: <strong>{DURATION_OPTIONS.find(d => d.id === selectedDuration)?.label.split(' ')[0]} {DURATION_OPTIONS.find(d => d.id === selectedDuration)?.label.split(' ')[1]}</strong></span>
                      {currentPrice > 0 && (
                        <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                          Instant Access
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features Header */}
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-1.5">
                    <Check size={14} className="text-cyan-400" />
                    <span>Included in this plan:</span>
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-8 text-xs text-slate-300">
                    {plan.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                          <Check size={10} />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom CTA */}
                <div>
                  <button
                    onClick={() => handleEnroll(plan)}
                    className={`w-full py-3.5 px-4 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-xl ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 text-slate-950 hover:from-cyan-300 hover:to-emerald-300 shadow-cyan-500/25 hover:scale-[1.02]'
                        : 'btn-primary text-white hover:scale-[1.02]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center mt-3">
                    Target: {plan.targetAudience}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Enrollment Benefits & WhatsApp Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-6 sm:p-8 border border-white/10 bg-gradient-to-r from-slate-900/90 via-indigo-950/40 to-slate-900/90 max-w-5xl mx-auto shadow-2xl"
        >
          <div className="grid md:grid-cols-3 gap-6 items-center">
            
            <div className="md:col-span-2 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <ShieldCheck size={16} />
                <span>100% Risk-Free Enrollment & Free Diagnostic Trial</span>
              </div>
              <h4 className="text-xl font-bold text-white">Need Custom Access or Corporate Group Pricing?</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Connect directly with our GMAT prep mentors for customized access periods, 1-on-1 score diagnostic audits, or institution bundles.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <button
                onClick={handleOpenWhatsApp}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </button>

              <button
                onClick={() => window.open('https://gmat-interview-login.mbawizards.co.in/', '_blank')}
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer glass text-slate-300 hover:text-white border border-white/10"
              >
                <UserPlus size={14} className="text-cyan-400" />
                <span>Register / Candidate Login</span>
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
