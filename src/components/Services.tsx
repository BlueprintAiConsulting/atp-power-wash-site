import { Button } from "@/components/ui/button";
import serviceHouseWash from "@/assets/service-house-wash.jpg";
import serviceGutter from "@/assets/service-gutter.jpg";
import serviceSidewalk from "@/assets/service-sidewalk.jpg";

const services = [
  {
    image: serviceHouseWash,
    title: "Full House Soft Washing",
    description: "Gentle cleaning that removes dirt, mold, and mildew without damaging your siding.",
  },
  {
    image: serviceGutter,
    title: "Gutter Cleanout",
    description: "Clear debris and buildup to keep your gutters flowing freely.",
  },
  {
    image: serviceSidewalk,
    title: "Sidewalk/Driveway Cleaning",
    description: "Restore your concrete surfaces to like-new condition.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 md:pt-36 bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-heading font-bold text-sm uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gradient-brand mb-6">
            Complete Power Washing Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From residential homes to commercial properties, we have the expertise and equipment 
            to tackle any cleaning challenge.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay - stronger for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <h3 className="font-heading font-bold text-2xl text-white mb-2 drop-shadow-lg [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)]">
                  {service.title}
                </h3>
                <p className="text-white mb-4 leading-relaxed drop-shadow-md [text-shadow:_0_1px_4px_rgb(0_0_0_/_70%)]">
                  {service.description}
                </p>
                <Button variant="cta" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="#quote">Get Free Quote</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
