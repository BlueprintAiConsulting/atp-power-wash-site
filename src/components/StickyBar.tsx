import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALL_LINK, SMS_LINK } from "@/lib/contact";

const StickyBar = () => {

  return (
    <>
      {/* Desktop - Sticky Top Bar (below header) */}
      <div className="hidden md:block fixed top-20 left-0 right-0 z-40 bg-brand-navy border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between h-12">
            <span className="text-primary-foreground font-semibold">
              Get your free estimate
            </span>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href={CALL_LINK} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href={SMS_LINK} className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Text
                </a>
              </Button>
              <Button variant="cta" size="sm" asChild>
                <a href="#quote">Free Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile - Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-navy border-t border-border safe-area-inset-bottom">
        <div className="container">
          <div className="flex items-center justify-between h-16 gap-2">
            <span className="text-primary-foreground font-semibold text-sm flex-shrink-0">
              Get your free estimate
            </span>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 px-2" asChild>
                <a href={CALL_LINK} className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only">Call</span>
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 px-2" asChild>
                <a href={SMS_LINK} className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only">Text</span>
                </a>
              </Button>
              <Button variant="cta" size="sm" asChild>
                <a href="#quote">Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyBar;
