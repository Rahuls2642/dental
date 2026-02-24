import { Star, Phone, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-dental.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center bg-[#f8fafc] overflow-hidden"
  >
    {/* Soft Background Image */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Modern dental clinic"
        className="h-full w-full object-cover opacity-20"
        loading="eager"
      />
    </div>

    <div className="container relative mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        {/* Small Tag */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 border border-emerald-100">
          <Star className="h-4 w-4 text-emerald-600 fill-emerald-600" />
          <span className="text-sm font-medium text-emerald-700">
            Rated 4.9 by 100+ Patients
          </span>
        </div>

        {/* Headline (Not Overbold) */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900 tracking-tight">
          Precision Dentistry.
          <br />
          <span className="text-emerald-600">
            Designed Around Your Comfort.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-600 leading-relaxed">
          Advanced treatments, experienced specialists, and a calm
          patient-first environment — delivering confident smiles in Faridabad.
        </p>

        {/* CTA Row */}
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-3.5 text-base font-medium text-white shadow-md transition-all hover:bg-emerald-700 hover:-translate-y-0.5"
          >
            <CalendarDays className="h-5 w-5" />
            Book Consultation
          </a>

          <a
            href="tel:08810549632"
            className="inline-flex items-center gap-2 text-gray-700 font-medium hover:text-emerald-600 transition-colors"
          >
            <Phone className="h-5 w-5" />
            08810 xxxxx
          </a>
        </div>

        {/* Soft Divider Stats */}
        <div className="mt-14 flex gap-12 text-gray-700">
          <div>
            <p className="text-3xl font-semibold text-gray-900">12+</p>
            <p className="text-sm text-gray-500">Years Experience</p>
          </div>

          <div>
            <p className="text-3xl font-semibold text-gray-900">5K+</p>
            <p className="text-sm text-gray-500">Smiles Treated</p>
          </div>

          <div>
            <p className="text-3xl font-semibold text-gray-900">100%</p>
            <p className="text-sm text-gray-500">Patient Focused</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;