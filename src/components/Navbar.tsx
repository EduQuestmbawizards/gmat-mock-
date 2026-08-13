import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Menu, X, ShieldCheck, User } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (url: string) => {
    window.open(url, '_blank');
  };

  const navLinks = [
    { label: 'All 15 Mocks', href: '#all-mocks' },
    { label: 'Live Mock 01', href: '#mock-tests' },
    { label: 'Topic Drills', href: '#topic-tests' },
    { label: 'Course Price List', href: '#course-price-list' },
    { label: 'Feature Matrix', href: '#feature-matrix' },
    { label: 'AI Analytics', href: '#analytics' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <span>G</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                MBA Wizards
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-500/30">
                GMAT FOCUS
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">15 Adaptive Mocks & Prep Suite</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 glass px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNavigate('https://gmat-interview-login.mbawizards.co.in/')}
            className="glass px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:border-cyan-500/40 cursor-pointer transition-all flex items-center gap-1.5"
          >
            <User size={14} className="text-cyan-400" />
            <span>Login</span>
          </button>

          <button
            onClick={() => handleNavigate('https://gmat-interview-login.mbawizards.co.in/')}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 cursor-pointer transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-1.5 hover:scale-[1.02]"
          >
            <span>Start Free Mock</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => handleNavigate('https://gmat-interview-login.mbawizards.co.in/')}
            className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-cyan-400"
          >
            Start Free
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg glass"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-strong border-b border-white/10 px-6 py-5 space-y-3 mt-3 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-cyan-300 py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => handleNavigate('https://gmat-interview-login.mbawizards.co.in/')}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-center text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400"
            >
              Enroll / Start Practice Test
            </button>
            <button
              onClick={() => handleNavigate('https://gmat-interview-login.mbawizards.co.in/')}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-center text-slate-300 glass"
            >
              Candidate Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
