import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Offset Printing",
  "Digital Printing",
  "DTF Printing",
  "Flatbed UV DTF",
  "Promotional Products",
  "Other",
];

const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="quote" className="section-padding brand-gradient">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary-foreground mt-2">
            Request a Quote
          </h2>
          <div className="w-16 h-1 gold-gradient mx-auto mt-4 rounded-full" />
          <p className="text-primary-foreground/70 mt-4 max-w-xl mx-auto">
            Tell us about your project and we'll get back to you with a detailed quote.
          </p>
        </div>

        {submitted ? (
          <div className="max-w-lg mx-auto text-center py-16">
            <CheckCircle className="w-16 h-16 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-2">
              Thank you!
            </h3>
            <p className="text-primary-foreground/70">
              Your quote request has been received. Our team will contact you shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-primary-foreground/80">Full Name *</label>
              <input
                required
                type="text"
                className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-primary-foreground/80">Company / Organization</label>
              <input
                type="text"
                className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
                placeholder="Company name"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-primary-foreground/80">Email Address *</label>
              <input
                required
                type="email"
                className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
                placeholder="email@example.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-primary-foreground/80">Phone Number</label>
              <input
                type="tel"
                className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
                placeholder="+265 XXX XXX XXX"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-primary-foreground/80">Service Required</label>
              <select className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:border-gold transition-colors">
                <option value="">Select a service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-primary-foreground/80">Quantity Required</label>
              <input
                type="text"
                className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
                placeholder="e.g. 500"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-primary-foreground/80">Deadline</label>
              <input
                type="date"
                className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-primary-foreground/80">File Upload</label>
              <input
                type="file"
                className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/60 focus:outline-none focus:border-gold transition-colors file:bg-transparent file:border-0 file:text-gold file:font-medium"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col gap-1.5">
              <label className="text-sm font-medium text-primary-foreground/80">Project Details</label>
              <textarea
                rows={4}
                className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Describe your project requirements..."
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-4 rounded-lg gold-gradient font-heading font-bold text-navy hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {loading ? "Sending..." : "Send Quote Request"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default QuoteForm;
