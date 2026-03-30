import React from "react";
import { Send } from "lucide-react";

declare global {
  interface Window {
    emailjs: {
      send: (serviceId: string, templateId: string, params: Record<string, unknown>) => Promise<unknown>;
    };
  }
}

const serviceOptions = [
  "Offset Printing",
  "Digital Printing",
  "DTF Printing",
  "Flatbed UV DTF",
  "Promotional Products",
  "Other",
];

const QuoteForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const btn = document.getElementById("submitBtn") as HTMLButtonElement;
    const msg = document.getElementById("formMsg") as HTMLDivElement;

    // Reset message
    msg.style.display = "none";

    // Loading state
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    // All form values sent to eptl.malawi@gmail.com
    const params = {
      to_email: "eptl.malawi@gmail.com",
      from_name: (document.getElementById("f_name") as HTMLInputElement).value,
      company: (document.getElementById("f_company") as HTMLInputElement).value || "Not provided",
      from_email: (document.getElementById("f_email") as HTMLInputElement).value,
      phone: (document.getElementById("f_phone") as HTMLInputElement).value || "Not provided",
      service: (document.getElementById("f_service") as HTMLSelectElement).value,
      quantity: (document.getElementById("f_qty") as HTMLInputElement).value || "Not specified",
      deadline: (document.getElementById("f_deadline") as HTMLInputElement).value || "Not specified",
      message: (document.getElementById("f_message") as HTMLTextAreaElement).value,
      reply_to: (document.getElementById("f_email") as HTMLInputElement).value,
    };

    window.emailjs
      .send("service_umb4hqa", "template_cnlkcma", params)
      .then(function () {
        msg.style.display = "block";
        msg.style.background = "rgba(34,197,94,0.1)";
        msg.style.border = "1px solid rgba(34,197,94,0.3)";
        msg.style.color = "#4ade80";
        msg.style.padding = "16px";
        msg.style.borderRadius = "8px";
        msg.style.marginTop = "14px";
        msg.innerHTML =
          '<i class="fas fa-check-circle"></i> Quote sent successfully to eptl.malawi@gmail.com! We will contact you within 24 hours.';
        (document.getElementById("quoteForm") as HTMLFormElement).reset();
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Quote Request';
        setTimeout(function () {
          msg.style.display = "none";
        }, 9000);
      })
      .catch(function (err: Error) {
        console.error("EmailJS Error:", err);
        msg.style.display = "block";
        msg.style.background = "rgba(239,68,68,0.1)";
        msg.style.border = "1px solid rgba(239,68,68,0.3)";
        msg.style.color = "#f87171";
        msg.style.padding = "16px";
        msg.style.borderRadius = "8px";
        msg.style.marginTop = "14px";
        msg.innerHTML =
          '<i class="fas fa-exclamation-circle"></i> Failed to send. Please email eptl.malawi@gmail.com directly or call +265 985 777 033.';
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Quote Request';
      });
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

        <form
          id="quoteForm"
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-primary-foreground/80">Full Name *</label>
            <input
              id="f_name"
              required
              type="text"
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-primary-foreground/80">Company / Organization</label>
            <input
              id="f_company"
              type="text"
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
              placeholder="Company name"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-primary-foreground/80">Email Address *</label>
            <input
              id="f_email"
              required
              type="email"
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
              placeholder="email@example.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-primary-foreground/80">Phone Number</label>
            <input
              id="f_phone"
              type="tel"
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
              placeholder="+265 XXX XXX XXX"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-primary-foreground/80">Service Required</label>
            <select
              id="f_service"
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:border-gold transition-colors"
            >
              <option value="" className="text-black">Select a service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s} className="text-black">{s}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-primary-foreground/80">Quantity Required</label>
            <input
              id="f_qty"
              type="text"
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
              placeholder="e.g. 500"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-primary-foreground/80">Deadline</label>
            <input
              id="f_deadline"
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
            <label className="text-sm font-medium text-primary-foreground/80">Project Details *</label>
            <textarea
              id="f_message"
              required
              rows={4}
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors resize-none"
              placeholder="Describe your project requirements..."
            />
          </div>

          <div className="sm:col-span-2">
            <div id="formMsg" style={{ display: "none" }}></div>
            <button
              id="submitBtn"
              type="submit"
              className="w-full sm:w-auto px-8 py-4 rounded-lg gold-gradient font-heading font-bold text-navy hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
            >
              <Send className="w-4 h-4" />
              Send Quote Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
