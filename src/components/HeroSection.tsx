import { Star, Phone, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-dental.jpg";

const HeroSection = () => {
  return (
    <>
    {/* WhatsApp Floating Button */}
<a
  href="https://wa.me/919810315978?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl transition-all hover:scale-105"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M12 2C6.48 2 2 6.37 2 11.79c0 1.98.58 3.83 1.58 5.4L2 22l4.94-1.54c1.52.83 3.26 1.27 5.06 1.27 5.52 0 10-4.37 10-9.79S17.52 2 12 2zm0 17.64c-1.62 0-3.21-.43-4.6-1.25l-.33-.2-2.93.91.96-2.86-.21-.34A7.56 7.56 0 014.01 11.8c0-4.18 3.58-7.58 7.99-7.58 4.41 0 7.99 3.4 7.99 7.58 0 4.18-3.58 7.58-7.99 7.58z"/>
  </svg>

  <span className="hidden sm:inline">Chat on WhatsApp</span>
</a>
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Modern dental clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl px-6"
      >
        {/* Trust Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-5 py-2 border border-white/20">
          <Star className="h-4 w-4 text-emerald-400 fill-emerald-400" />
          <span className="text-sm font-medium text-white">
            Rated 4.6 on Google Maps
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white tracking-tight">
          Confident Smiles Begin Here.
          <br />
          <span className="text-emerald-400">
            Modern Dentistry. Personal Care.
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Advanced treatments, experienced specialists, and a calm
          patient-first environment — delivering exceptional dental care in
          Faridabad.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-8 py-3.5 text-base font-medium text-white shadow-lg transition-all hover:bg-emerald-600 hover:-translate-y-0.5"
          >
            <CalendarDays className="h-5 w-5" />
            Book Consultation
          </a>

          <a
            href="tel:9810315978"
            className="inline-flex items-center gap-2 text-white font-medium hover:text-emerald-400 transition-colors"
          >
            <Phone className="h-5 w-5" />
            098103 15978
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 text-white">
          <div>
            <p className="text-3xl font-semibold">12+</p>
            <p className="text-sm text-gray-300">Years Experience</p>
          </div>

          <div>
            <p className="text-3xl font-semibold">5K+</p>
            <p className="text-sm text-gray-300">Smiles Treated</p>
          </div>

          <div>
            <p className="text-3xl font-semibold">100%</p>
            <p className="text-sm text-gray-300">Patient Focused</p>
          </div>
        </div>
      </motion.div>
    </section>
    </>
  );
};

export default HeroSection;