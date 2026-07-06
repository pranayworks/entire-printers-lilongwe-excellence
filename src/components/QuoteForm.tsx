import React, { useState } from "react";
import { Send, AlertCircle, CheckCircle } from "lucide-react";

declare global {
  interface Window {
    emailjs?: {
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

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  quantity: string;
  deadline: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  quantity: "",
  deadline: "",
  message: "",
};

type StatusType = "idle" | "sending" | "success" | "error";

const QuoteForm = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<StatusType>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    // FIX: Null-check on window.emailjs before calling send
    if (!window.emailjs) {
      setStatus("error");
      setErrorMsg(
        "Email service failed to load. Please email eptl.malawi@gmail.com directly or call +265 985 777 033."
      );
      return;
    }

    const params = {
      to_email: "eptl.malawi@gmail.com",
      from_name: form.name,
      company: form.company || "Not provided",
      from_email: form.email,
      phone: form.phone || "Not provided",
      service: form.service || "Not specified",
      quantity: form.quantity || "Not specified",
      deadline: form.deadline || "Not specified",
      message: form.message,
      reply_to: form.email,
    };

    try {
      await window.emailjs.send("service_umb4hqa", "template_cnlkcma", params);
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 9000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setErrorMsg(
        "Failed to send. Please email eptl.malawi@gmail.com directly or call +265 985 777 033."
      );
    }
  };

  const isSending = status === "sending";

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
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-primary-foreground/80">Full Name *</label>
            <input
              name="name"
              required
              type="text"
              value={form.name}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-primary-foreground/80">Company / Organization</label>
            <input
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
              placeholder="Company name"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-primary-foreground/80">Email Address *</label>
            <input
              name="email"
              required
              type="email"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
              placeholder="email@example.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-primary-foreground/80">Phone Number</label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
              placeholder="+265 XXX XXX XXX"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-primary-foreground/80">Service Required</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
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
              name="quantity"
              type="text"
              value={form.quantity}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
              placeholder="e.g. 500"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-primary-foreground/80">Deadline</label>
            <input
              name="deadline"
              type="date"
              value={form.deadline}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          {/* FIX: File upload removed — EmailJS cannot send file attachments.
              Users should email eptl.malawi@gmail.com directly with design files. */}
          <div className="flex flex-col gap-1.5 justify-end">
            <p className="text-xs text-primary-foreground/50 leading-relaxed">
              📎 To attach design files, please email them directly to{" "}
              <a href="mailto:eptl.malawi@gmail.com" className="text-gold hover:underline">
                eptl.malawi@gmail.com
              </a>
            </p>
          </div>

          <div className="sm:col-span-2 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-primary-foreground/80">Project Details *</label>
            <textarea
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors resize-none"
              placeholder="Describe your project requirements..."
            />
          </div>

          <div className="sm:col-span-2 space-y-3">
            {/* Status messages */}
            {status === "success" && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span className="text-sm">Quote sent successfully! We'll contact you within 24 hours.</span>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span className="text-sm">{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="w-full sm:w-auto px-8 py-4 rounded-lg gold-gradient font-heading font-bold text-navy hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSending ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Quote Request
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
