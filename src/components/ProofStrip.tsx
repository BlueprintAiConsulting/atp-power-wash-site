import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import actionVideo from "@/assets/atp-action-3.mp4";
import { useSeamlessVideoLoop } from "@/hooks/use-seamless-video-loop";

const ProofStrip = () => {
  const videoRef = useSeamlessVideoLoop({ cutSeconds: 1.2 });
  const smsText = encodeURIComponent(
    "Hi ATP, I want a free quote. Address: ____ Town: ____ Service: House soft wash / driveway / sidewalk. Best time: ____. Photos attached."
  );

  return (
    <section id="proof" className="py-16 md:py-20 bg-muted">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Watch ATP in action
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Real work. Real results. Fast quotes by text.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <a
                  href={`sms:+17178140704?body=${smsText}`}
                  className="flex items-center gap-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  Text for Quote
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#quote">Free Quote</a>
              </Button>
            </div>
          </div>

          {/* Right Column - Video Card */}
          <div className="order-2">
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <video
                ref={videoRef}
                className="w-full h-auto"
                autoPlay
                muted
                playsInline
                preload="auto"
              >
                <source src={actionVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofStrip;
