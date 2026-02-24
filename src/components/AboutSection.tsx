import { ShieldCheck, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Strict Hygiene Protocols",
    desc: "Every instrument is fully sterilized and our clinic follows advanced sanitation standards."
  },
  {
    icon: Heart,
    title: "Comfort-Focused Care",
    desc: "Gentle procedures and a calm environment designed to reduce dental anxiety."
  },
  {
    icon: Sparkles,
    title: "Modern Dental Technology",
    desc: "Digital diagnostics and precision-driven equipment for efficient treatments."
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-white">
    <div className="container mx-auto px-6">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-wide text-emerald-600 uppercase">
            About Our Clinic
          </span>

          <h2 className="mt-4 text-4xl font-semibold text-gray-900 leading-tight">
            Dentistry Built on Trust,
            <br />
            Precision & Care.
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
            At Complete Dental Care, we combine clinical expertise with a
            patient-first philosophy. Led by Dr. Nisha (BDS, MDS —
            Pedodontist), our clinic delivers comprehensive dental solutions
            for all age groups in a safe, welcoming environment.
          </p>

          <div className="mt-8 h-px w-20 bg-emerald-500" />
        </motion.div>

        {/* Right Highlights */}
        <div className="grid gap-6 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-2xl border border-gray-100 bg-gray-50/60 backdrop-blur-sm p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <item.icon className="h-5 w-5" />
              </div>

              <h3 className="text-lg font-medium text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default AboutSection;