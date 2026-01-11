import { Shield, Clock, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import atpLogoCircle from "@/assets/atp-logo-circle.jpeg";

const stats = [
  { icon: Shield, value: "100%", label: "Satisfaction Guarantee" },
  { icon: Clock, value: "Same Day", label: "Quote Response" },
  { icon: Award, value: "Licensed", label: "& Insured" },
  { icon: Users, value: "500+", label: "Happy Customers" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={atpLogoCircle}
                alt="ATP Power Washing Solutions"
                className="w-full aspect-square object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-xl p-6 border border-border hidden md:block">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-slide-in-right">
            <span className="inline-block text-primary font-heading font-bold text-sm uppercase tracking-widest mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Pennsylvania's Trusted{" "}
              <span className="text-gradient-brand">Power Washing</span> Experts
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ATP Power Washing Solutions is a locally owned and operated company dedicated to 
              providing exceptional exterior cleaning services throughout Pennsylvania. We combine 
              professional-grade equipment with eco-friendly solutions to deliver outstanding results.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our experienced team takes pride in every job, treating your property as if it were 
              our own. From routine maintenance to deep cleaning transformations, we're committed 
              to exceeding your expectations.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-xl text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg">
              Schedule Your Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
