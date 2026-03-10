import { motion } from "framer-motion";
import {
  Award, Lightbulb, Users, Shield, Leaf, UsersRound, Star,
} from "lucide-react";

const values = [
  { icon: Award, title: "Quality", desc: "Uncompromising standards in every print" },
  { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge printing technology" },
  { icon: Users, title: "Customer Focus", desc: "Your vision, our priority" },
  { icon: Shield, title: "Integrity", desc: "Honest, transparent business practices" },
  { icon: Leaf, title: "Sustainability", desc: "Environmentally responsible printing" },
  { icon: UsersRound, title: "Teamwork", desc: "Collaborative excellence" },
  { icon: Star, title: "Excellence", desc: "Striving for perfection always" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const About = () => (
  <section id="about" className="section-padding bg-muted">
    <div className="section-container">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-gold uppercase tracking-widest">Who We Are</span>
        <h2 className="section-title mt-2">About Entire Printers</h2>
        <div className="w-16 h-1 gold-gradient mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Entire Printers is a premier printing company based in Lilongwe,
            Malawi, offering a comprehensive range of printing solutions from
            offset and digital printing to DTF and promotional products. With
            world-class equipment and a dedicated team, we deliver exceptional
            quality that meets international standards.
          </p>
          <div className="p-6 rounded-xl border border-primary/20 bg-accent">
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide high-quality printing solutions that meet the unique
              needs of our clients, leveraging cutting-edge technology and
              exceptional customer service to deliver superior results.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-6 rounded-xl border border-gold/20 bg-accent mb-6">
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the leading provider of innovative and sustainable printing
              services, recognized for our commitment to excellence, creativity,
              and environmental responsibility.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl brand-gradient text-center">
              <span className="block text-3xl font-heading font-black text-primary-foreground">15+</span>
              <span className="text-sm text-primary-foreground/70">Years Experience</span>
            </div>
            <div className="p-4 rounded-xl gold-gradient text-center">
              <span className="block text-3xl font-heading font-black text-navy">100+</span>
              <span className="text-sm text-navy/70">Happy Clients</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Values */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-heading font-bold text-foreground">Our Core Values</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            custom={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card p-4 text-center hover-lift"
          >
            <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-3 flex items-center justify-center">
              <v.icon className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-heading font-bold text-sm text-foreground">{v.title}</h4>
            <p className="text-xs text-muted-foreground mt-1">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
