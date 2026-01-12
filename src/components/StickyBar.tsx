import { Phone, MessageSquare, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyBar = () => {
  const smsText = encodeURIComponent("Hi ATP, I want a free quote. Address: ____ Town: ____ Service: House soft wash / driveway / sidewalk. Best time: ____. Photos attached.");

  return (
    <>
      {/* Desktop - Sticky Top Bar (below header) */}
      <div className="hidden md:block fixed top-20 left-0 right-0 z-40 bg-brand-navy border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground font-semibold text-sm">
                Get your free estimate
              </span>
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.facebook.com/share/17n95D4n9h/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-3.5 w-3.5 text-primary-foreground" />
                </a>
                <a 
                  href="https://www.instagram.com/atppowerwashingllc?igsh=MWhob2ZmaTVwZGFlaQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-3.5 w-3.5 text-primary-foreground" />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 h-7 px-2 text-xs" asChild>
                <a href="tel:7178140704" className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5" />
                  Call
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 h-7 px-2 text-xs" asChild>
                <a href={`sms:7178140704?body=${smsText}`} className="flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5" />
                  Text
                </a>
              </Button>
              <Button variant="cta" size="sm" className="h-7 px-3 text-xs" asChild>
                <a href="#quote">Free Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile - Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-navy border-t border-border pb-safe">
        <div className="grid grid-cols-3 h-16">
          <a 
            href="tel:7178140704" 
            className="flex flex-col items-center justify-center gap-1 text-primary-foreground hover:bg-primary-foreground/10 active:bg-primary-foreground/20 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="text-xs font-medium">Call</span>
          </a>
          <a 
            href={`sms:7178140704?body=${smsText}`}
            className="flex flex-col items-center justify-center gap-1 text-primary-foreground hover:bg-primary-foreground/10 active:bg-primary-foreground/20 transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
            <span className="text-xs font-medium">Text</span>
          </a>
          <a 
            href="#quote"
            className="flex flex-col items-center justify-center gap-1 bg-brand-red text-white hover:bg-brand-red/90 active:bg-brand-red/80 transition-colors"
          >
            <span className="text-sm font-bold">Free Quote</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default StickyBar;
