const clientNames = [
  "UNICEF", "WHO", "UNFPA", "FAO", "GIZ", "UNDP",
  "Ministry of Agriculture", "Ministry of Health", "Ministry of Education",
  "JICA", "Habitat for Humanity", "ActionAid", "Concern Worldwide",
  "LBL SPA", "ICRISAT", "Palladium", "NAC", "Airtel", "World Vision",
  "Centenary Bank", "Self Help Africa", "Good Neighbors", "Energ Africa",
  "VS Farms", "COMESA", "Intermed", "Chemonics", "Pharmarous",
  "World Relief", "FPAM", "PYXUS", "NCA DCA", "CARE",
  "SOS Children's Villages", "Tata Motors", "SOFERES", "Puma",
  "Feed the Future", "AVC", "Shayona Cement", "Bamber Palace",
  "Winrock International", "PMRA", "CP Feeds Ltd", "Go Fresh",
  "Family Health Services", "The World Bank", "Geo Consult",
  "Woodlands Lilongwe", "Costantini 85", "Lilongwe Academy", "SMEDI",
  "ETG Agri Inputs", "Seed-Co", "OXFAM", "Plan International",
  "UK Aid", "Neotree", "KSB Consultants", "Mango Talat",
  "Rising Sun", "UbuntuNet Alliance", "WaterAid",
  "Lilongwe Water Board", "Trade", "Amref Health Africa",
  "Intermed Fosun Pharma", "UNESCO Malawi", "MDO",
  "Brilliant Solutions Ltd",
];

const ClientBadge = ({ name }: { name: string }) => (
  <div className="flex-shrink-0 px-6 py-3 rounded-lg bg-card border border-border shadow-sm hover:shadow-md hover:border-gold/40 transition-all">
    <span className="font-heading font-semibold text-sm text-foreground whitespace-nowrap">
      {name}
    </span>
  </div>
);

const Clients = () => {
  const firstHalf = clientNames.slice(0, Math.ceil(clientNames.length / 2));
  const secondHalf = clientNames.slice(Math.ceil(clientNames.length / 2));

  return (
    <section id="clients" className="section-padding bg-background overflow-hidden">
      <div className="section-container text-center mb-12">
        <span className="text-sm font-semibold text-gold uppercase tracking-widest">
          Trusted By
        </span>
        <h2 className="section-title mt-2">Our Clients</h2>
        <div className="w-16 h-1 gold-gradient mx-auto mt-4 rounded-full" />
        <p className="section-subtitle mx-auto mt-4">
          Proudly serving leading organizations across Malawi and beyond.
        </p>
      </div>

      {/* Row 1 */}
      <div className="relative mb-4">
        <div className="flex gap-4 animate-scroll-left" style={{ width: "max-content" }}>
          {[...firstHalf, ...firstHalf].map((name, i) => (
            <ClientBadge key={`r1-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Row 2 - reverse */}
      <div className="relative">
        <div
          className="flex gap-4 animate-scroll-left"
          style={{ width: "max-content", animationDirection: "reverse", animationDuration: "50s" }}
        >
          {[...secondHalf, ...secondHalf].map((name, i) => (
            <ClientBadge key={`r2-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
