import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-navy/80" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/40 text-gold text-sm font-medium mb-6 tracking-wider uppercase">
            Lilongwe, Malawi
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-primary-foreground leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Printing Excellence.
          <br />
          <span className="text-gold">Delivered.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Lilongwe's leading printing company — offset, digital, DTF, and
          promotional printing solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a
            href="#quote"
            className="px-8 py-4 rounded-lg gold-gradient font-heading font-bold text-navy text-base hover:opacity-90 transition-opacity shadow-lg"
          >
            Request a Quote
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-heading font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
          >
            Explore Our Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
