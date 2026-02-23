import { Star, Stethoscope, Monitor, IndianRupee, Siren } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { icon: Star, title: "4.9 Google Rating", desc: "Trusted by 104+ happy patients with top reviews." },
  { icon: Stethoscope, title: "Experienced Dentists", desc: "Qualified specialists with years of clinical expertise." },
  { icon: Monitor, title: "Modern Equipment", desc: "State-of-the-art dental technology for precise care." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Quality dental care that's easy on your wallet." },
  { icon: Siren, title: "Emergency Support", desc: "Urgent dental care when you need it most." },
];

const WhyChooseUs = () => (
  <section className="py-20 lg:py-28 dental-gradient-soft">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</span>
        <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">
          The Complete Dental Care Difference
        </h2>
      </motion.div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-center rounded-2xl bg-card p-6 shadow-card text-center transition-shadow hover:shadow-card-hover"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
              <r.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-sm font-bold text-foreground">{r.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
