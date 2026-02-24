import { Award, GraduationCap, Users } from "lucide-react";
import { motion } from "framer-motion";
import doctorImg from "@/assets/doctor.webp"; // replace with real image

const DoctorSection = () => (
  <section id="doctor" className="py-24 bg-[#f9fafb]">
    <div className="container mx-auto px-6">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Doctor Image */}
        <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative mx-auto lg:mx-0 max-w-md"
>
  <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
    <img
      src={doctorImg}
      alt="Dr. Nisha"
      className="w-full h-full object-cover object-top"
    />
  </div>
</motion.div>
        {/* Doctor Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium uppercase tracking-wide text-emerald-600">
            Meet Your Dentist
          </span>

          <h2 className="mt-4 text-4xl font-semibold text-gray-900">
            Dr. Bhardwaj
          </h2>

          <p className="mt-1 text-emerald-600 font-medium">
            BDS, MIDA — Specialist in Pediatric & Family Dentistry
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
            With over a decade of clinical experience, Dr. Bhardwaj is dedicated
            to delivering compassionate, precision-driven dental care. His
            patient-first philosophy ensures comfort, clarity, and long-term
            oral health for every family he treats.
          </p>

          {/* Credentials */}
          <div className="mt-10 flex flex-wrap gap-10">
            {[
              { icon: GraduationCap, label: "BDS, MIDA" },
              { icon: Award, label: "10+ Years Experience" },
              { icon: Users, label: "5000+ Patients Treated" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 h-px w-20 bg-emerald-500" />
        </motion.div>

      </div>
    </div>
  </section>
);

export default DoctorSection;