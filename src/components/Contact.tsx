import { MapPin, Mail, Phone } from "lucide-react";

const offices = [
  {
    title: "Corporate Office",
    address: "Shop No. 4, Costantini, Area 4,\nNext to Four Brothers,\nNear Game Complex",
    email: "eptl.malawi@gmail.com",
    phone: "+265 985 777 033",
  },
  {
    title: "Factory",
    address: "Plot #Chitipi 18/1/16, Njewa,\nAlong Mchinji Road,\nLilongwe, Malawi",
    email: "eptl.marketing23@gmail.com",
    phone: "+265 999 111 411",
  },
];

const Contact = () => (
  <section id="contact" className="section-padding bg-muted">
    <div className="section-container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-gold uppercase tracking-widest">
          Get In Touch
        </span>
        <h2 className="section-title mt-2">Contact Us</h2>
        <div className="w-16 h-1 gold-gradient mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {offices.map((o) => (
          <div key={o.title} className="glass-card p-8 hover-lift">
            <h3 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gold" />
              {o.title}
            </h3>
            <p className="text-muted-foreground whitespace-pre-line mb-4 leading-relaxed">
              {o.address}
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${o.email}`}
                className="flex items-center gap-2 text-sm text-primary hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                {o.email}
              </a>
              <a
                href={`tel:${o.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-primary hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                {o.phone}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Map embed */}
      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-border">
        <iframe
          title="Entire Printers Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123464.67009082916!2d33.7!3d-13.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d4ae062e4d25%3A0x50adfa2b4e4a4c5d!2sLilongwe%2C%20Malawi!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

export default Contact;
