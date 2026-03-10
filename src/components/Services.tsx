import { motion, AnimatePresence } from "framer-motion";
import { Printer, Monitor, Shirt, Layers, Gift } from "lucide-react";
import { useState } from "react";

import serviceOffset from "@/assets/service-offset.jpg";
import serviceDigital from "@/assets/service-digital.jpg";
import serviceDtf from "@/assets/service-dtf.jpg";
import serviceUvdtf from "@/assets/service-uvdtf.jpg";
import servicePromo from "@/assets/service-promo.jpg";

// Product image imports
import imgTshirts from "@/assets/promo/tshirts.jpg";
import imgLanyards from "@/assets/promo/lanyards.jpg";
import imgReflectors from "@/assets/promo/reflectors.jpg";
import imgCaps from "@/assets/promo/caps.jpg";
import imgJuteBags from "@/assets/promo/jutebags.jpg";
import imgRainCoats from "@/assets/promo/raincoats.jpg";
import imgOveralls from "@/assets/promo/overalls.jpg";
import imgPens from "@/assets/promo/pens.jpg";
import imgBackpacks from "@/assets/promo/backpacks.jpg";
import imgTearDrops from "@/assets/promo/teardrops.jpg";
import imgRollUps from "@/assets/promo/rollups.jpg";
import imgUmbrellas from "@/assets/promo/umbrellas.jpg";
import imgMugs from "@/assets/promo/mugs.jpg";
import imgFlashDisks from "@/assets/promo/flashdisks.jpg";
import imgNotebooks from "@/assets/promo/notebooks.jpg";
import imgBottles from "@/assets/promo/bottles.jpg";
import imgBadges from "@/assets/promo/badges.jpg";
import imgBackdrop from "@/assets/promo/backdrop.jpg";
import imgDoorSigns from "@/assets/promo/doorsigns.jpg";
import imgMousePads from "@/assets/promo/mousepads.jpg";
import imgUniforms from "@/assets/promo/uniforms.jpg";
import imgBrochures from "@/assets/promo/brochures.jpg";
import imgEnvelopes from "@/assets/promo/envelopes.jpg";
import imgBusinessCards from "@/assets/promo/businesscards.jpg";
import imgPosters from "@/assets/promo/posters.jpg";
import imgStickers from "@/assets/promo/stickers.jpg";
import imgPaperBags from "@/assets/promo/paperbags.jpg";
import imgBooks from "@/assets/promo/books.jpg";
import imgBoxes from "@/assets/promo/boxes.jpg";

const productImages: Record<string, string> = {
  "T-Shirts": imgTshirts,
  "Lanyards": imgLanyards,
  "Reflectors": imgReflectors,
  "Caps": imgCaps,
  "Jute Bags": imgJuteBags,
  "Rain Coats": imgRainCoats,
  "Overalls": imgOveralls,
  "Pens": imgPens,
  "Backpacks": imgBackpacks,
  "Tear Drops": imgTearDrops,
  "Roll Ups": imgRollUps,
  "Umbrellas": imgUmbrellas,
  "Mugs": imgMugs,
  "Flash Disks": imgFlashDisks,
  "Note Books": imgNotebooks,
  "Sublimation Bottles": imgBottles,
  "Badges": imgBadges,
  "Back Drop Banners": imgBackdrop,
  "Door Signs": imgDoorSigns,
  "Mouse Pads": imgMousePads,
  "Cleaner Uniforms": imgUniforms,
  "Brochures & Flyers": imgBrochures,
  "Envelopes": imgEnvelopes,
  "Business Cards": imgBusinessCards,
  "Posters": imgPosters,
  "Sticker Labels": imgStickers,
  "Paper Bags": imgPaperBags,
  "All Kinds of Books": imgBooks,
  "Packaging Boxes": imgBoxes,
  "Large Format Banners": imgBackdrop,
  "Signage": imgDoorSigns,
  "Short-Run Publications": imgBooks,
  "Marketing Materials": imgBrochures,
  "Proofing Prints": imgPosters,
  "Keychains": imgBadges,
  "Phone Covers": imgMousePads,
  "Sticker Sheets": imgStickers,
  "Name Tags": imgBadges,
  "Water Bottles": imgBottles,
  "Laptops": imgMousePads,
  "USB Drives": imgFlashDisks,
  "Notebooks": imgNotebooks,
  "Wallets": imgMousePads,
  "Danglers": imgPosters,
  "Calendars": imgBrochures,
  "Jacket Folders": imgBrochures,
  "Letter Heads": imgEnvelopes,
  "Flip Charts": imgPosters,
};

const services = [
  {
    icon: Printer,
    title: "Offset Printing",
    image: serviceOffset,
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
    image: serviceDigital,
    desc: "Digital printing refers to methods of printing from a digital-based image directly to a variety of media, meaning it goes from a file to digital print.",
    products: [
      "Large Format Banners", "Signage", "Proofing Prints",
      "Short-Run Publications", "Marketing Materials",
    ],
  },
  {
    icon: Shirt,
    title: "DTF Printing",
    image: serviceDtf,
    desc: "DTF stands for Direct To Film. This technique involves printing your design directly onto a film and then transferring it to a T-shirt made of cotton, polyester, or their blends, regardless of their colour.",
    products: [
      "T-Shirts", "Lanyards", "Reflectors", "Caps", "Jute Bags",
      "Rain Coats", "Overalls", "Cleaner Uniforms", "Backpacks", "Umbrellas",
    ],
  },
  {
    icon: Layers,
    title: "Flatbed UV DTF",
    image: serviceUvdtf,
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
    image: servicePromo,
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

const ProductCard = ({ name }: { name: string }) => {
  const [hovered, setHovered] = useState(false);
  const image = productImages[name];

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="px-4 py-3 rounded-lg bg-accent text-center text-sm font-medium text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
        {name}
      </div>
      <AnimatePresence>
        {hovered && image && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 pointer-events-none"
          >
            <div className="w-44 rounded-xl overflow-hidden shadow-2xl border-2 border-primary/20 bg-card">
              <img src={image} alt={name} className="w-full h-36 object-cover" />
              <div className="px-3 py-2 text-center">
                <span className="text-xs font-heading font-semibold text-foreground">{name}</span>
              </div>
            </div>
            {/* Arrow */}
            <div className="w-3 h-3 bg-card border-b-2 border-r-2 border-primary/20 rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1.5" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-heading font-semibold text-sm transition-all ${active === i
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
          className="glass-card overflow-hidden"
        >
          {/* Service hero image */}
          <div className="relative h-48 md:h-64 overflow-hidden">
            <img
              src={services[active].image}
              alt={services[active].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl brand-gradient flex items-center justify-center">
                  {(() => {
                    const Icon = services[active].icon;
                    return <Icon className="w-7 h-7 text-primary-foreground" />;
                  })()}
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  {services[active].title}
                </h3>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 pt-4 md:pt-6">
            <p className="text-muted-foreground text-lg mb-8 max-w-3xl">
              {services[active].desc}
            </p>

            <h4 className="font-heading font-semibold text-foreground mb-4">
              Products & Applications
              <span className="text-xs font-normal text-muted-foreground ml-2">(hover to preview)</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {services[active].products.map((p) => (
                <ProductCard key={p} name={p} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
