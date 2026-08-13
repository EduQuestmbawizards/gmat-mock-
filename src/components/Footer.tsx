import { ArrowRight, ShieldCheck, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const handleOpenLogin = () => {
    window.open('https://gmat-interview-login.mbawizards.co.in/', '_blank');
  };

  const handleOpenWhatsApp = () => {
    window.open('https://wa.me/919958041888', '_blank');
  };

  return (
    <footer className="border-t border-white/10 bg-[#02050e] pt-16 pb-12 relative z-10 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-extrabold text-base">
                G
              </div>
              <span className="font-bold text-white text-base tracking-tight">MBA Wizards GMAT Focus Mock Center</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The leading computer-adaptive GMAT Focus Mock Test Series in India and globally. Calibrated 205-805 scoring, 15 full-length adaptive tests, 4,000+ questions, and 1-on-1 MBA admissions strategy mentorship.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleOpenWhatsApp}
                className="glass px-3 py-1.5 rounded-lg text-emerald-300 flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-xs"
              >
                <MessageCircle size={14} />
                <span>WhatsApp: +91 99580 41888</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">Exam Prep Suites</h4>
            <ul className="space-y-2">
              <li><a href="#all-mocks" className="hover:text-cyan-300 transition-colors">15 Full-Length Mocks</a></li>
              <li><a href="#mock-tests" className="hover:text-cyan-300 transition-colors">Mock 01 Diagnostic Test</a></li>
              <li><a href="#topic-tests" className="hover:text-cyan-300 transition-colors">Topic-Wise Practice Drills</a></li>
              <li><a href="#analytics" className="hover:text-cyan-300 transition-colors">AI Diagnostic Reports</a></li>
            </ul>
          </div>

          {/* Course Price List */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">Pricing & Plans</h4>
            <ul className="space-y-2">
              <li><a href="#course-price-list" className="hover:text-cyan-300 transition-colors">Course Price List</a></li>
              <li><a href="#feature-matrix" className="hover:text-cyan-300 transition-colors">Feature Matrix</a></li>
              <li><a href="#faq" className="hover:text-cyan-300 transition-colors">Subscription FAQ</a></li>
              <li><button onClick={handleOpenLogin} className="hover:text-cyan-300 transition-colors text-left cursor-pointer">Candidate Login</button></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">Admissions & Support</h4>
            <ul className="space-y-2">
              <li><a href="mailto:rupali.eduquest@gmail.com" className="hover:text-cyan-300 transition-colors">Email Support</a></li>
              <li><a href="https://wa.me/919958041888" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors">Mentor WhatsApp</a></li>
              <li><button onClick={handleOpenLogin} className="hover:text-cyan-300 transition-colors text-left cursor-pointer">Enroll Portal</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} MBA Wizards / EduQuest. All rights reserved. GMAT® is a registered trademark of the Graduate Management Admission Council (GMAC).</p>
          <div className="flex items-center gap-4">
            <button onClick={handleOpenLogin} className="text-slate-400 hover:text-white cursor-pointer">
              Login to Mock Engine
            </button>
            <span>•</span>
            <a href="#faq" className="text-slate-400 hover:text-white">Privacy & Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
