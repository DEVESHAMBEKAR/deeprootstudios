import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import BackedBySection from './components/BackedBySection';
import ProcessSection from './components/ProcessSection';
import UseCasesSection from './components/UseCasesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import FAQSection from './components/FAQSection';
import CTABannerSection from './components/CTABannerSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col bg-[#F5F5F5]">
      {/* First section: Navbar + Hero in a full-screen container */}
      <div className="h-screen flex flex-col overflow-hidden relative">
        <Navbar />
        <HeroSection />
      </div>

      {/* Remaining sections */}
      <InfoSection />
      <BackedBySection />
      <ProcessSection />
      <UseCasesSection />
      <WhyChooseUsSection />
      <FAQSection />
      <CTABannerSection />
      <Footer />
    </div>
  );
}

export default App;
