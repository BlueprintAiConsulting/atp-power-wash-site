import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PHONE_DISPLAY } from "@/lib/contact";

const faqs = [
  {
    question: "Is soft washing safe for siding?",
    answer: "Yes! Soft washing uses low pressure and biodegradable cleaning solutions that are safe for all types of siding including vinyl, wood, stucco, and brick. It effectively removes dirt, mold, mildew, and algae without causing any damage to your home's exterior.",
  },
  {
    question: "How do I get the fastest quote?",
    answer: `The fastest way to get a quote is to text us at ${PHONE_DISPLAY} with your address, town, the service you need, and a few photos if possible. We typically respond within minutes during business hours!`,
  },
  {
    question: "Do you need water access?",
    answer: "Yes, we need access to an outdoor water spigot/hose bib at your property. If you don't have one accessible, please let us know when requesting your quote and we can discuss alternatives.",
  },
  {
    question: "Do I need to be home?",
    answer: "No, you don't need to be home! As long as we have access to water and the areas to be cleaned, we can complete the work while you're away. We'll send you before and after photos when the job is done.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-heading font-bold text-sm uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Frequently Asked{" "}
            <span className="text-gradient-brand">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border-0 shadow-md px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
