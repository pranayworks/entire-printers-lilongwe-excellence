import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company: string;
  stars: number;
  logo: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "We are very impressed with the excellent print quality and professional service. The team consistently delivers high standards.",
    name: "Peter",
    company: "OXFAM",
    stars: 5,
    logo: "oxfam-logo.png",
  },
  {
    id: 2,
    quote: "Their timely delivery and attention to detail make them a reliable printing partner for our business.",
    name: "Norah",
    company: "Winrock",
    stars: 5,
    logo: "winrock-logo.png",
  },
  {
    id: 3,
    quote: "The customer service is outstanding. They are always responsive and ensure our printing needs are handled smoothly.",
    name: "Pyxus",
    company: "Exon",
    stars: 5,
    logo: "exon-logo.png",
  },
  {
    id: 4,
    quote: "We appreciate the consistent quality, competitive pricing, and dependable delivery. Highly recommended.",
    name: "Maswati",
    company: "Tree Business",
    stars: 5,
    logo: "tree-business-logo.png",
  },
  {
    id: 5,
    quote: "We have been working with them for years and their printing quality and commitment to deadlines have always been excellent.",
    name: "Kennedy",
    company: "GIZ",
    stars: 5,
    logo: "giz-logo.png",
  },
  {
    id: 6,
    quote: "A highly professional printing company that understands our requirements and delivers exactly what we need.",
    name: "Tayamika",
    company: "Mission Rebies",
    stars: 5,
    logo: "mission-rebies-logo.png",
  },
  {
    id: 7,
    quote: "Their reliability and dedication to quality printing make them one of the best partners we work with.",
    name: "Andrew",
    company: "Atlas Enterprises",
    stars: 5,
    logo: "atlas-logo.png",
  },
  {
    id: 8,
    quote: "The finishing quality and attention to detail in every job truly reflect their expertise in printing.",
    name: "Antonie Bational",
    company: "AIDS Commission",
    stars: 5,
    logo: "aids-commission-logo.png",
  },
];

const Counter = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalMilisecondDuraton = 2000;
    let incrementTime = (totalMilisecondDuraton / end) * 5;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
        {count}{suffix}
      </div>
      <div className="text-primary-foreground/60 text-sm uppercase tracking-widest">{label}</div>
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className="testi-card group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7 transition-all duration-400 cursor-pointer hover:border-gold/40 hover:bg-gold/[0.04] hover:shadow-[0_20px_60px_rgba(255,209,0,0.15),0_0_30px_rgba(255,209,0,0.1)]"
    >
      <div className="absolute top-[-10px] left-5 text-[120px] text-gold/5 font-serif pointer-events-none transition-opacity group-hover:opacity-20">"</div>

      <div className="relative z-10">
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-gold text-gold" />
          ))}
        </div>

        <p className="text-primary-foreground/80 mb-6 line-clamp-4 leading-relaxed italic">
          {testimonial.quote}
        </p>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center overflow-hidden shrink-0">
            <img
              src={`/images/${testimonial.logo}`}
              alt={testimonial.company}
              className="w-full h-full object-contain p-1"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden font-bold text-gold">{testimonial.company[0]}</div>
          </div>
          <div>
            <div className="text-sm font-bold text-primary-foreground">{testimonial.name}</div>
            <div className="text-xs text-gold uppercase tracking-tighter">{testimonial.company}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="bg-navy py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal/30 filter blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 filter blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-primary-foreground mt-2 inline-block relative">
              What Our Clients Say
              <motion.div
                className="absolute bottom-[-8px] left-0 h-1 gold-gradient rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </h2>
            <p className="text-primary-foreground/60 mt-8 max-w-2xl mx-auto text-lg">
              Trusted by leading global organisations, NGOs and businesses across Malawi and beyond
            </p>
          </motion.div>
        </div>

        {/* Counter Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 bg-white/[0.02] border border-white/[0.05] rounded-3xl p-10 backdrop-blur-sm">
          <Counter value={500} suffix="+" label="Happy Clients" />
          <Counter value={8} suffix="+" label="Testimonials" />
          <Counter value={7} suffix="+" label="Years Trusted" />
        </div>

        {/* Featured Testimonial */}
        <div className="mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-royal/10 border border-royal/20 rounded-[32px] p-10 md:p-16 relative group"
            >
              <Quote className="absolute top-10 right-10 w-20 h-20 text-gold/10 pointer-events-none" />

              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                  ))}
                </div>

                <blockquote className="text-2xl md:text-3xl leading-relaxed text-primary-foreground font-medium italic mb-10">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full border-2 border-gold bg-gold/20 flex items-center justify-center overflow-hidden">
                    <img
                      src={`/images/${testimonials[activeIndex].logo}`}
                      alt={testimonials[activeIndex].company}
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden font-bold text-gold text-xl">{testimonials[activeIndex].company[0]}</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary-foreground">{testimonials[activeIndex].name}</div>
                    <div className="text-gold uppercase tracking-[0.2em] font-bold text-sm">{testimonials[activeIndex].company}</div>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="absolute inset-y-0 left-4 flex items-center">
                <button onClick={prev} className="p-3 rounded-full bg-white/5 hover:bg-gold hover:text-navy text-primary-foreground transition-all">
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-4 flex items-center">
                <button onClick={next} className="p-3 rounded-full bg-white/5 hover:bg-gold hover:text-navy text-primary-foreground transition-all">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-12">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? "w-8 bg-gold" : "w-2 bg-white/20"}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testi, idx) => (
            <TestimonialCard key={testi.id} testimonial={testi} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
