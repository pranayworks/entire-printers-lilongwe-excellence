import { motion } from "framer-motion";
import { Printer, Monitor, Shirt, Layers, Gift } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Printer,
    title: "Offset Printing",
    desc: "High-volume, premium quality offset printing for all your commercial needs.",
    products: [
      "Brochures & Flyers", "Envelopes", "Danglers", "Calendars",
      "Jacket Folders", "Posters", "Letter Heads", "Flip Charts",
      "Business Cards", "Sticker Labels", "All Kinds of Books",
      "Paper Bags", "Packaging Boxes",
    ],
  },
  {
    icon: Monitor,
    title: "Digital Printing",
    desc: "Digital printing refers to methods of printing from a digital-based image directly to a variety of media, meaning it goes from a file to digital print.",
    products: [
      "Large Format Banners", "Signage", "Proofing Prints",
      "Short-Run Publications", "Marketing Materials",
    ],
  },
  {
    icon: Shirt,
    title: "DTF Printing",
    desc: "DTF stands for Direct To Film. This technique involves printing your design directly onto a film and then transferring it to a T-shirt made of cotton, polyester, or their blends, regardless of their colour.",
    products: [
      "T-Shirts", "Lanyards", "Reflectors", "Caps", "Jute Bags",
      "Rain Coats", "Overalls", "Cleaner Uniforms", "Backpacks", "Umbrellas",
    ],
  },
  {
    icon: Layers,
    title: "Flatbed UV DTF",
    desc: "Prints directly onto hard surfaces with vivid detail and durability.",
    products: [
      "Keychains", "Business Cards", "Phone Covers", "Sticker Sheets",
      "Badges", "Name Tags", "Water Bottles", "Laptops", "Mouse Pads",
      "USB Drives", "Mugs", "Notebooks", "Wallets",
    ],
  },
  {
    icon: Gift,
    title: "Promotional Products",
    desc: "Custom branded promotional products to elevate your brand visibility.",
    products: [
      "T-Shirts", "Lanyards", "Reflectors", "Caps", "Rain Coats",
      "Overalls", "Cleaner Uniforms", "Pens", "Backpacks", "Tear Drops",
      "Roll Ups", "Back Drop Banners", "Door Signs", "Mouse Pads",
      "Jute Bags", "Umbrellas", "Sublimation Bottles", "Badges",
      "Mugs", "Flash Disks", "Note Books",
    ],
  },
];

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="section-title mt-2">Our Services</h2>
          <div className="w-16 h-1 gold-gradient mx-auto mt-4 rounded-full" />
        </div>

        {/* Service tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-heading font-semibold text-sm transition-all ${
                active === i
                  ? "brand-gradient text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              <s.icon className="w-4 h-4" />
              {s.title}
            </button>
          ))}
        </div>

        {/* Active service detail */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl brand-gradient flex items-center justify-center">
              {(() => {
                const Icon = services[active].icon;
                return <Icon className="w-7 h-7 text-primary-foreground" />;
              })()}
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground">
                {services[active].title}
              </h3>
            </div>
          </div>

          <p className="text-muted-foreground text-lg mb-8 max-w-3xl">
            {services[active].desc}
          </p>

          <h4 className="font-heading font-semibold text-foreground mb-4">
            Products & Applications
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {services[active].products.map((p) => (
              <div
                key={p}
                className="px-4 py-3 rounded-lg bg-accent text-center text-sm font-medium text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {p}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
