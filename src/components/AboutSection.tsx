import { ShieldCheck, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: ShieldCheck, title: "Strict Hygiene", desc: "Fully sterilized instruments and sanitized environment for every patient." },
  { icon: Heart, title: "Patient Comfort", desc: "Gentle techniques and a calming atmosphere to ease dental anxiety." },
  { icon: Sparkles, title: "Latest Technology", desc: "Digital X-rays, modern equipment and pain-free treatment methods." },
];

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28 dental-gradient-soft">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</span>
        <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">
          Your Trusted Dental Partner in Faridabad
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          At Complete Dental Care, we combine advanced dental expertise with a compassionate approach. Led by Dr. Nisha (BDS, MDS — Pedodontist), our clinic provides comprehensive care for patients of all ages in a safe and hygienic setting.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-2xl bg-card p-7 shadow-card text-center transition-shadow hover:shadow-card-hover"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
