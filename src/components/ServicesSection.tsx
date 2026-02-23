import { Sparkles, HeartPulse, Wrench, AlignLeft, SmilePlus, Baby } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Sparkles, title: "Teeth Cleaning", desc: "Professional scaling & polishing for a brighter, healthier smile." },
  { icon: HeartPulse, title: "Root Canal Treatment", desc: "Pain-free root canal therapy with advanced techniques." },
  { icon: Wrench, title: "Dental Implants", desc: "Permanent tooth replacement with high-quality implant systems." },
  { icon: AlignLeft, title: "Braces & Aligners", desc: "Orthodontic solutions for perfectly aligned teeth." },
  { icon: SmilePlus, title: "Cosmetic Dentistry", desc: "Veneers, bonding, and smile makeover procedures." },
  { icon: Baby, title: "Pediatric Dentistry", desc: "Gentle dental care specially designed for children." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</span>
        <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">
          Comprehensive Dental Solutions
        </h2>
        <p className="mt-4 text-muted-foreground">
          From routine check-ups to advanced treatments, we offer a full spectrum of dental care.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group rounded-2xl bg-card p-7 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl dental-gradient text-primary-foreground transition-transform group-hover:scale-110">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
