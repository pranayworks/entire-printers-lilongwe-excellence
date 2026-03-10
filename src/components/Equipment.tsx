import { motion } from "framer-motion";
import { Settings, Cpu, MonitorDot, Scissors } from "lucide-react";

interface Machine {
  name: string;
  desc: string;
}

interface Category {
  title: string;
  icon: typeof Settings;
  color: string;
  machines: Machine[];
}

const categories: Category[] = [
  {
    title: "Pre-Press",
    icon: Cpu,
    color: "bg-accent text-accent-foreground",
    machines: [
      { name: "Amsky Augsetter CTP Machine", desc: "Computer-to-plate technology for preparing printing plates with precision and speed." },
      { name: "Plate Processor", desc: "Develops and processes CTP plates ready for the press with consistent quality." },
    ],
  },
  {
    title: "Printing Equipment",
    icon: Settings,
    color: "brand-gradient text-primary-foreground",
    machines: [
      { name: "Komori Sprint 4-Color Offset Press", desc: "High-speed multi-color offset printing for commercial jobs with exceptional registration." },
      { name: "Komori Lithrone 28", desc: "At the heart of our printing prowess lies the remarkable Komori Lithrone, a cutting-edge marvel that redefines the standards of print quality and efficiency." },
    ],
  },
  {
    title: "Digital Equipment",
    icon: MonitorDot,
    color: "gold-gradient text-navy",
    machines: [
      { name: "Large Format UV Printer", desc: "Wide-format printing for banners, signage, and large displays with UV-cured inks." },
      { name: "Epson Wide Format Printer", desc: "High-resolution digital output for proofing and short-run prints with vivid colors." },
      { name: "Konica Minolta Digital Press", desc: "Fast, high-quality digital printing for small to medium runs with professional finish." },
    ],
  },
  {
    title: "Post-Press",
    icon: Scissors,
    color: "bg-accent text-accent-foreground",
    machines: [
      { name: "Cutting Machine", desc: "Precision paper cutting for clean, accurate final dimensions." },
      { name: "Die Punching Machine", desc: "Custom shapes and perforations for packaging and specialty prints." },
      { name: "Perfect Binding Machine", desc: "Professional spine binding for books, catalogues, and reports." },
      { name: "Folding Machine", desc: "Automated paper folding for brochures, flyers, and mailers." },
      { name: "Book Pinning Machines", desc: "Saddle-stitching for booklets and magazines with precision." },
      { name: "Lamination Machine", desc: "Gloss or matte lamination to protect and enhance printed materials." },
    ],
  },
];

const Equipment = () => (
  <section id="equipment" className="section-padding bg-muted">
    <div className="section-container">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-gold uppercase tracking-widest">
          Our Technology
        </span>
        <h2 className="section-title mt-2">World-Class Equipment</h2>
        <div className="w-16 h-1 gold-gradient mx-auto mt-4 rounded-full" />
        <p className="section-subtitle mx-auto mt-4">
          We invest in the finest printing technology to deliver outstanding results every time.
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((cat, ci) => (
          <div key={cat.title}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-lg ${cat.color} flex items-center justify-center`}>
                <cat.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">{cat.title}</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.machines.map((m, mi) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: mi * 0.1, duration: 0.4 }}
                  className="glass-card p-6 hover-lift group"
                >
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-gold/20 text-gold mb-3">
                    {cat.title}
                  </span>
                  <h4 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {m.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Equipment;
