import { Phone, Facebook, Instagram, Mail } from "lucide-react";
import atpLogo from "@/assets/atp-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground pb-20 md:pb-0">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <img
              src={atpLogo}
              alt="ATP Power Washing Solutions"
              className="h-20 w-auto mb-6"
            />
            <p className="text-primary-foreground/70 leading-relaxed mb-4">
              <span className="font-bold text-brand-red">ATP Power Washing Solutions</span>
            </p>
            <p className="text-primary-foreground/70 leading-relaxed">
              York-area based, proudly serving South Central Pennsylvania with professional 
              power washing services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Service Areas", href: "#service-areas" },
                { label: "FAQ", href: "#faq" },
                { label: "Free Quote", href: "#quote" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Full House Soft Washing",
                "Gutter Cleanout",
                "Sidewalk/Driveway Cleaning",
                "Stone/Brick Cleaning",
                "Vinyl/Fence Cleaning",
                "Deck & Stair Washing",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:7178140704"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  717-814-0704
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:ATP@atppowerwashingsolutions.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  ATP@atppowerwashingsolutions.com
                </a>
              </li>
              <li className="text-primary-foreground/70">
                York Area, Pennsylvania
              </li>
              <li className="text-primary-foreground/70">
                Serving South Central PA
              </li>
            </ul>

            {/* Social & Contact Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="tel:7178140704"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Call Us"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:ATP@atppowerwashingsolutions.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email Us"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} ATP Power Washing Solutions. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              York Area, PA • 717-814-0704
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
