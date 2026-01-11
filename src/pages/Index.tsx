import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StickyBar from "@/components/StickyBar";
import ProofStrip from "@/components/ProofStrip";
import Services from "@/components/Services";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <StickyBar />
      <main>
        <Hero />
        <ProofStrip />
        <Services />
        <ServiceAreas />
        <FAQ />
        <QuoteSection />
      </main>
      {/* Add padding at bottom for mobile sticky bar */}
      <div className="md:hidden h-16" />
      <Footer />
    </div>
  );
};

export default Index;
