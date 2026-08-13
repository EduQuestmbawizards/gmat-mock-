import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MockSeriesGrid from './components/MockSeriesGrid';
import MockTests from './components/MockTests';
import TopicTestsSuite from './components/TopicTestsSuite';
import CoursePriceList from './components/CoursePriceList';
import FeatureMatrix from './components/FeatureMatrix';
import AnalyticsDemo from './components/AnalyticsDemo';
import TargetSchools from './components/TargetSchools';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-indigo-500 selection:text-white relative">
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <MockSeriesGrid />
        <MockTests />
        <TopicTestsSuite />
        <CoursePriceList />
        <FeatureMatrix />
        <AnalyticsDemo />
        <TargetSchools />
        <Comparison />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
