import { Sparkles, HeartPulse, Wrench, AlignLeft, SmilePlus, Baby } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Sparkles, title: "Teeth Cleaning", desc: "Professional scaling and polishing for a healthier, brighter smile." },
  { icon: HeartPulse, title: "Root Canal Treatment", desc: "Advanced pain-managed root canal procedures with precision care." },
  { icon: Wrench, title: "Dental Implants", desc: "Long-lasting implant solutions designed for strength and aesthetics." },
  { icon: AlignLeft, title: "Braces & Aligners", desc: "Modern orthodontic treatments for perfectly aligned teeth." },
  { icon: SmilePlus, title: "Cosmetic Dentistry", desc: "Veneers, bonding and complete smile enhancement procedures." },
  { icon: Baby, title: "Pediatric Dentistry", desc: "Compassionate and gentle dental care for children." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-[#f9fafb]">
    <div className="container mx-auto px-6">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <span className="text-sm font-medium uppercase tracking-wide text-emerald-600">
          Our Services
        </span>

        <h2 className="mt-4 text-4xl font-semibold text-gray-900 leading-tight">
          Comprehensive Dental Care,
          <br /> Delivered With Precision.
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          From preventive check-ups to advanced restorative treatments,
          we provide a complete range of modern dental solutions.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-transform group-hover:scale-105">
              <s.icon className="h-5 w-5" />
            </div>

            <h3 className="text-lg font-medium text-gray-900">
              {s.title}
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default ServicesSection;