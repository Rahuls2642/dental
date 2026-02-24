import { Star, Stethoscope, Monitor, IndianRupee, Siren } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { icon: Star, title: "4.6 Google Rating", desc: "Trusted by 100+ patients with consistently excellent reviews." },
  { icon: Stethoscope, title: "Experienced Specialists", desc: "Qualified dentists with years of clinical expertise." },
  { icon: Monitor, title: "Advanced Technology", desc: "Modern diagnostic tools for precision and comfort." },
  { icon: IndianRupee, title: "Transparent Pricing", desc: "High-quality care at fair and honest pricing." },
];

const WhyChooseUs = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">

      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* Left Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium uppercase tracking-wide text-emerald-600">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-semibold text-gray-900 leading-tight">
            The Complete Dental Care Difference.
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
            We combine expertise, compassion, and technology to deliver a
            dental experience built on trust and long-term relationships.
          </p>

          <div className="mt-8 h-px w-20 bg-emerald-500" />
        </motion.div>

        {/* Right Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-gray-100 bg-gray-50/70 p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-transform group-hover:scale-105">
                <r.icon className="h-5 w-5" />
              </div>

              <h3 className="text-lg font-medium text-gray-900">
                {r.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

    </div>
  </section>
);

export default WhyChooseUs;