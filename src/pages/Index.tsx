import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StickyBar from "@/components/StickyBar";
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
        <Services />
        <ServiceAreas />
        <FAQ />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
