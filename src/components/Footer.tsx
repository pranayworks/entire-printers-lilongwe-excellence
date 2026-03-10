import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Equipment", href: "#equipment" },
  { label: "Clients", href: "#clients" },
  { label: "Quote", href: "#quote" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
];

const Footer = () => (
  <footer className="bg-navy text-navy-foreground">
    <div className="section-container py-16">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
              <span className="font-heading font-black text-navy text-lg">EP</span>
            </div>
            <span className="font-heading font-bold text-lg">Entire Printers</span>
          </div>
          <p className="text-navy-foreground/60 text-sm leading-relaxed mb-6">
            Printing Excellence. Delivered.
            <br />
            Lilongwe's leading printing company offering offset, digital, DTF,
            and promotional printing solutions.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-lg bg-navy-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-navy-foreground/60 hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Contact Info</h4>
          <div className="space-y-3 text-sm text-navy-foreground/60">
            <p>Shop No. 4, Costantini, Area 4, Lilongwe</p>
            <p>eptl.malawi@gmail.com</p>
            <p>+265 985 777 033</p>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-navy-foreground/10">
      <div className="section-container py-6 text-center text-sm text-navy-foreground/40">
        © {new Date().getFullYear()} Entire Printers. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
