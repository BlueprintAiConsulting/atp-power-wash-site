import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Phone, MessageSquare } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const smsText = encodeURIComponent("Hi ATP, I want a free quote. Address: ____ Town: ____ Service: House soft wash / driveway / sidewalk. Best time: ____. Photos attached.");

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-primary-foreground text-sm font-medium">
              5-Star Rated in South Central PA
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Professional Power Washing by{" "}
            <span className="text-brand-red">ATP Power Washing Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Applying The Pressure to the greater York/South Central Pennsylvania Region since 2024.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="cta" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#quote">Free Quote</a>
            </Button>
            <div className="flex gap-2 sm:gap-4">
              <Button variant="heroOutline" size="xl" className="flex-1 sm:flex-none px-4 sm:px-6" asChild>
                <a href="tel:7174673620" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span className="hidden xs:inline">Call</span>
                  <span className="xs:hidden">Call</span>
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" className="flex-1 sm:flex-none px-4 sm:px-6" asChild>
                <a href={`sms:7174673620?body=${smsText}`} className="flex items-center justify-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  <span className="hidden sm:inline">Text for Quote</span>
                  <span className="sm:hidden">Text</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Trust Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              "Licensed & Insured",
              "100% Satisfaction Guarantee",
              "Free Estimates",
            ].map((point) => (
              <div key={point} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0" />
                <span className="text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
