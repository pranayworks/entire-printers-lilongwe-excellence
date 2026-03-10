import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Equipment", href: "#equipment" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
            <span className="font-heading font-black text-navy text-lg">EP</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-bold text-primary-foreground text-lg tracking-tight">
              Entire Printers
            </span>
            <span className="text-[10px] text-gold font-medium tracking-widest uppercase">
              Printing Excellence
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-gold"
                  : "text-primary-foreground/80 hover:text-gold"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            className="ml-4 px-5 py-2.5 rounded-lg gold-gradient font-heading font-semibold text-sm text-navy hover:opacity-90 transition-opacity"
          >
            Request a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-primary/20">
          <div className="section-container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-gold bg-primary/20"
                    : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-3 rounded-lg gold-gradient font-heading font-semibold text-sm text-navy text-center"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
