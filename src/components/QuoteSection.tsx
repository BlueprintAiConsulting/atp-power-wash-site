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
import { z } from "zod";

const towns = [
  "Lancaster",
  "Harrisburg",
  "York",
  "Lebanon",
  "Chambersburg",
  "Carlisle",
  "Camp Hill",
  "Mechanicsburg",
  "Lititz",
  "Ephrata",
  "Other nearby town",
];

const services = [
  "Full House Soft Washing",
  "Gutter Cleanout",
  "Sidewalk/Driveway Cleaning",
  "Other",
];

const QUOTE_TEXT = "Hi ATP, I want a free quote. Address: ____ Town: ____ Service: House soft wash / driveway / sidewalk. Best time: ____. Photos attached.";

// Zod schema for form validation
const quoteFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[\d\s\-\(\)\+]+$/, "Please enter a valid phone number"),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(200, "Address must be less than 200 characters"),
  town: z
    .string()
    .min(1, "Please select a town"),
  service: z
    .string()
    .min(1, "Please select a service"),
  details: z
    .string()
    .max(1000, "Details must be less than 1000 characters")
    .optional()
    .default(""),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const QuoteSection = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    town: "",
    service: "",
    details: "",
    // Honeypot field for bot protection - invisible to real users
    website: "",
  });

  const smsText = encodeURIComponent(QUOTE_TEXT);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(QUOTE_TEXT);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Quote template copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const validateForm = (): boolean => {
    const result = quoteFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof QuoteFormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof QuoteFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = error.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Check the form fields and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/xykkzekl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          town: formData.town,
          service: formData.service,
          details: formData.details || undefined,
          // Honeypot field - should be empty for real users
          _gotcha: formData.website,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit quote request");
      }

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
        website: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast({
        title: "Something went wrong",
        description: "Please try calling or texting us instead.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gradient-brand mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the option that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Option A: Call/Text Card */}
          <div className="bg-gradient-to-br from-primary via-primary to-brand-blue-dark rounded-2xl p-8 text-primary-foreground shadow-blue">
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
                {QUOTE_TEXT}
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
                <a href={`sms:7178140704?body=${smsText}`} className="flex items-center justify-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Text 717-814-0704
                </a>
              </Button>
              <Button variant="heroOutline" className="w-full" size="lg" asChild>
                <a href="tel:7178140704" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call 717-814-0704
                </a>
              </Button>
            </div>
          </div>

          {/* Option B: Quote Form */}
          <div className="bg-gradient-to-br from-primary via-primary to-brand-blue-dark rounded-2xl p-8 text-primary-foreground shadow-blue">
            <div className="text-center mb-8">
              <h3 className="font-heading font-bold text-2xl mb-2">
                Request a Quote Online
              </h3>
              <p className="text-primary-foreground/80">
                Fill out the form and we'll get back to you
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field - hidden from real users, bots will fill it */}
              <div className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true">
                <Input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  maxLength={100}
                  className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-primary-foreground/40 ${errors.name ? 'border-red-400' : ''}`}
                />
                {errors.name && <p className="text-red-300 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  maxLength={20}
                  className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-primary-foreground/40 ${errors.phone ? 'border-red-400' : ''}`}
                />
                {errors.phone && <p className="text-red-300 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Input
                  placeholder="Address or ZIP Code"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                  maxLength={200}
                  className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-primary-foreground/40 ${errors.address ? 'border-red-400' : ''}`}
                />
                {errors.address && <p className="text-red-300 text-xs mt-1">{errors.address}</p>}
              </div>
              <div>
                <Select
                  value={formData.town}
                  onValueChange={(value) => setFormData({ ...formData, town: value })}
                >
                  <SelectTrigger className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground [&>span]:text-primary-foreground/60 [&>span]:data-[placeholder]:text-primary-foreground/60 ${errors.town ? 'border-red-400' : ''}`}>
                    <SelectValue placeholder="Select Town" />
                  </SelectTrigger>
                  <SelectContent>
                    {towns.map((town) => (
                      <SelectItem key={town} value={town}>
                        {town}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.town && <p className="text-red-300 text-xs mt-1">{errors.town}</p>}
              </div>
              <div>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground [&>span]:text-primary-foreground/60 [&>span]:data-[placeholder]:text-primary-foreground/60 ${errors.service ? 'border-red-400' : ''}`}>
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-red-300 text-xs mt-1">{errors.service}</p>}
              </div>
              <div>
                <Textarea
                  placeholder="Additional Details (optional)"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  rows={3}
                  maxLength={1000}
                  className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-primary-foreground/40 ${errors.details ? 'border-red-400' : ''}`}
                />
              {errors.details && <p className="text-red-300 text-xs mt-1">{errors.details}</p>}
              </div>
              <Button
                type="submit"
                variant="secondary"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Quote Request"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
