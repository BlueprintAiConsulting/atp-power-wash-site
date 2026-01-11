import { useState } from "react";
import { Phone, MessageSquare, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CALL_LINK, PHONE_DISPLAY, QUOTE_TEMPLATE, SMS_LINK } from "@/lib/contact";
import { QUOTE_TOWNS } from "@/data/locations";
import { QUOTE_SERVICE_OPTIONS } from "@/data/services";

const QuoteSection = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    town: "",
    service: "",
    details: "",
  });

  const handleCopy = async () => {
    await navigator.clipboard.writeText(QUOTE_TEMPLATE);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Quote template copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Requires VITE_FORMSPREE_ENDPOINT to be configured
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (!formspreeEndpoint) {
      toast({
        title: "Online form unavailable",
        description: "Please text or call us for the fastest quote.",
        variant: "destructive",
      });
      return;
    }
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: "Quote Request Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({
          name: "",
          phone: "",
          address: "",
          town: "",
          service: "",
          details: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try calling or texting us instead.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="quote" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-heading font-bold text-sm uppercase tracking-widest mb-4">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Get Your Free{" "}
            <span className="text-gradient-brand">Quote</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the option that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Option A: Call/Text Card */}
          <div className="bg-brand-navy rounded-2xl p-8 text-primary-foreground">
            <div className="text-center mb-8">
              <h3 className="font-heading font-bold text-2xl mb-2">
                Fastest Quote by Text
              </h3>
              <p className="text-primary-foreground/80">
                Copy the message below and text it to us with your photos
              </p>
            </div>

            <div className="bg-primary-foreground/10 rounded-lg p-4 mb-6">
              <p className="text-sm leading-relaxed mb-4">
                {QUOTE_TEMPLATE}
              </p>
              <Button
                variant="secondary"
                className="w-full"
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Message
                  </>
                )}
              </Button>
            </div>

            <div className="space-y-3">
              <Button variant="cta" className="w-full" size="lg" asChild>
                 <a href={SMS_LINK} className="flex items-center justify-center gap-2">
                   <MessageSquare className="h-5 w-5" />
                  Text {PHONE_DISPLAY}
                 </a>
               </Button>
               <Button variant="heroOutline" className="w-full" size="lg" asChild>
                 <a href={CALL_LINK} className="flex items-center justify-center gap-2">
                   <Phone className="h-5 w-5" />
                  Call {PHONE_DISPLAY}
                 </a>
               </Button>
            </div>
          </div>

          {/* Option B: Quote Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="text-center mb-8">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                Request a Quote Online
              </h3>
              <p className="text-muted-foreground">
                Fill out the form and we'll get back to you
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <Input
                placeholder="Address or ZIP Code"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
              />
              <Select
                value={formData.town}
                onValueChange={(value) => setFormData({ ...formData, town: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Town" />
                </SelectTrigger>
                <SelectContent>
                  {QUOTE_TOWNS.map((town) => (
                    <SelectItem key={town} value={town}>
                      {town}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent>
                  {QUOTE_SERVICE_OPTIONS.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Additional Details (optional)"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                rows={3}
              />
              <Button type="submit" variant="cta" className="w-full" size="lg">
                Submit Quote Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
