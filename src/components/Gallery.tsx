import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const categories = ["All", "Offset Printing", "Digital", "DTF", "Promotional", "Events"];

// Placeholder slots for actual photos
const galleryPhotos = [
  { id: 1, category: "Offset Printing", src: "/gallery/workplace.jpg", alt: "Workplace Offset Print", span: "md:col-span-2 md:row-span-2" },
  { id: 2, category: "Offset Printing", src: "/gallery/machine-operator.jpg", alt: "Machine Operator", span: "col-span-1 row-span-1" },
  { id: 3, category: "DTF", src: "/gallery/dtf-press.jpg", alt: "DTF Press Operation", span: "col-span-1 row-span-1" },
  { id: 4, category: "Digital", src: "/gallery/binding.jpg", alt: "Finishing & Binding", span: "md:col-span-1 md:row-span-2" },
  { id: 5, category: "Offset Printing", src: "/gallery/cutting.jpg", alt: "Cutting Machine", span: "md:col-span-2 md:row-span-1" },
  { id: 6, category: "Offset Printing", src: "/gallery/image6.jpg", alt: "Offset Press", span: "col-span-1 row-span-1" },
  { id: 7, category: "Offset Printing", src: "/gallery/image7.jpg", alt: "Printing Operation", span: "col-span-1 row-span-1" },
  { id: 8, category: "Offset Printing", src: "/gallery/image8.jpg", alt: "Machine Operation", span: "md:col-span-2 md:row-span-2" },
  { id: 9, category: "Digital", src: "/gallery/image9.jpg", alt: "Digital Printing", span: "md:col-span-1 md:row-span-1" },
  { id: 10, category: "Digital", src: "/gallery/image10.jpg", alt: "Wide Format Print", span: "md:col-span-1 md:row-span-1" },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = activeTab === "All" 
    ? galleryPhotos 
    : galleryPhotos.filter((p) => p.category === activeTab);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextPhoto = (e: any) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredPhotos.length : null));
  };

  const prevPhoto = (e: any) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : null));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto(e as any);
      if (e.key === "ArrowLeft") prevPhoto(e as any);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  return (
    <>
      <section id="gallery" className="bg-background py-20">
        {/* Hero Section */}
        <div className="section-container text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="section-title mt-2">Our Work</h2>
            <div className="w-16 h-1 gold-gradient mx-auto mt-4 rounded-full" />
            <p className="section-subtitle mx-auto mt-4 text-muted-foreground max-w-2xl">
              Explore our diverse portfolio of high-quality printing solutions, from stunning promotional items to large-scale commercial prints.
            </p>
          </motion.div>
        </div>

        {/* Filter Bar */}
        <div className="section-container mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-heading font-medium transition-all duration-300 overflow-hidden ${
                  activeTab === cat
                    ? "text-navy"
                    : "text-muted-foreground bg-accent hover:text-foreground"
                }`}
              >
                {activeTab === cat && (
                  <motion.div
                    layoutId="activeFilterBubble"
                    className="absolute inset-0 bg-gold rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Masonry/Bento Grid */}
        <section className="section-container">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:auto-rows-[280px]">
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, i) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  key={photo.id}
                  className={`relative group overflow-hidden rounded-xl cursor-pointer bg-card ${photo.span}`}
                  onClick={() => openLightbox(i)}
                >
                  {/* Dark overlay & Expand Icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 z-10 flex items-center justify-center">
                    <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 w-10 h-10 drop-shadow-lg" />
                  </div>
                  
                  {/* Image with grayscale-to-color transition and zoom */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-110"
                  />
                  
                  {/* Golden glowing border effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FFD100] group-hover:shadow-[inset_0_0_20px_rgba(255,209,0,0.4)] transition-all duration-500 z-20 pointer-events-none rounded-xl" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="absolute top-6 right-6 z-50">
              <button
                onClick={closeLightbox}
                className="p-2 bg-white/10 hover:bg-gold hover:text-navy text-white rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <button
              onClick={prevPhoto}
              className="absolute left-4 md:left-10 p-3 bg-white/10 hover:bg-gold hover:text-navy text-white rounded-full transition-colors backdrop-blur-md z-50 group"
            >
              <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[85vh] px-4 flex justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredPhotos[lightboxIndex].src}
                alt={filteredPhotos[lightboxIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
              />
              <div className="absolute -bottom-10 left-0 right-0 text-center text-white/70 font-medium">
                {filteredPhotos[lightboxIndex].category} • {lightboxIndex + 1} / {filteredPhotos.length}
              </div>
            </motion.div>

            <button
              onClick={nextPhoto}
              className="absolute right-4 md:right-10 p-3 bg-white/10 hover:bg-gold hover:text-navy text-white rounded-full transition-colors backdrop-blur-md z-50 group"
            >
              <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default Gallery;
