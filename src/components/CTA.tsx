import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6 animate-fade-in">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Get a free, no-obligation quote today. We'll assess your needs and provide 
            an honest estimate with no hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button variant="cta" size="xl" className="group">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+1234567890" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                (123) 456-7890
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
