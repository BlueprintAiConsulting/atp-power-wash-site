import { Star } from "lucide-react";
import { useEffect } from "react";

const Reviews = () => {
  useEffect(() => {
    // Load Elfsight script for Google Reviews widget
    const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="reviews" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-current" />
            Customer Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it — see what real customers have to say about ATP Power Washing Solutions.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Google Reviews */}
          <div className="bg-card rounded-xl shadow-md p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <h3 className="text-xl font-bold text-foreground">Google Reviews</h3>
            </div>
            {/* 
              TO ACTIVATE: 
              1. Go to elfsight.com and create a free account
              2. Create a "Google Reviews" widget for "ATP Power Washing Solutions"
              3. Copy the widget ID and replace the data-elfsight-app-lazy below
            */}
            <div className="elfsight-app-lazy" data-elfsight-app-lazy></div>
            <div className="mt-4 text-center">
              <a
                href="https://share.google/ifD6QLW25qEgsnXDu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium"
              >
                See all reviews on Google →
              </a>
            </div>
          </div>

          {/* Facebook Reviews */}
          <div className="bg-card rounded-xl shadow-md p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <h3 className="text-xl font-bold text-foreground">Facebook Reviews</h3>
            </div>
            <div className="flex justify-center">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61576864807279&tabs=reviews&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true"
                width="340"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="max-w-full"
                title="Facebook Reviews"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
