import { MapPin } from "lucide-react";
import { SERVICE_TOWNS } from "@/data/locations";

const ServiceAreas = () => {
  return (
    <section id="service-areas" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-heading font-bold text-sm uppercase tracking-widest mb-4">
            Where We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Service <span className="text-gradient-brand">Areas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            York-area based, proudly serving South Central Pennsylvania
          </p>
        </div>

        {/* Towns Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {SERVICE_TOWNS.map((town, index) => (
            <div
              key={town}
              className="flex items-center gap-2 bg-muted rounded-lg p-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-semibold text-foreground">{town}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
