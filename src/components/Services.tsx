import { Home, Building2, Truck, Fence, Droplets, PaintBucket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "House Washing",
    description: "Gentle soft washing removes dirt, mold, mildew and algae from siding, brick, and stucco surfaces.",
  },
  {
    icon: Droplets,
    title: "Driveway & Concrete",
    description: "Restore your driveway, sidewalks, and patios to like-new condition with professional pressure washing.",
  },
  {
    icon: Fence,
    title: "Deck & Fence Cleaning",
    description: "Revitalize wooden decks and fences, removing years of weathering and preparing for staining.",
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description: "Keep your business looking professional with scheduled pressure washing for storefronts and properties.",
  },
  {
    icon: PaintBucket,
    title: "Roof Cleaning",
    description: "Safe soft washing techniques remove black streaks and extend the life of your roof.",
  },
  {
    icon: Truck,
    title: "Fleet Washing",
    description: "Professional cleaning for commercial vehicles and fleets to maintain your company image.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-heading font-bold text-sm uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Complete Power Washing{" "}
            <span className="text-gradient-brand">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From residential homes to commercial properties, we have the expertise and equipment 
            to tackle any cleaning challenge.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-card overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
