import { Star, Phone, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-dental.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Modern dental clinic interior" className="h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-dental-navy/85 via-dental-navy/60 to-transparent" />
    </div>

    <div className="container relative mx-auto px-4 py-32 lg:py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        {/* Rating badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-card/15 backdrop-blur-sm px-4 py-2 border border-primary-foreground/20">
          <Star className="h-4 w-4 fill-dental-gold text-dental-gold" />
          <span className="text-sm font-semibold text-primary-foreground">4.9 Rating</span>
          <span className="text-sm text-primary-foreground/70">· 104 Reviews</span>
        </div>

        <h1 className="text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
          Advanced & Gentle{" "}
          <span className="text-dental-sky-light">Dental Care</span>{" "}
          in Faridabad
        </h1>
        <p className="mt-5 max-w-lg text-lg text-primary-foreground/80 leading-relaxed">
          Experience world-class dental treatments in a warm, caring environment. Your smile is our priority.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#appointment"
            className="dental-gradient inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-hero transition-transform hover:scale-105"
          >
            <CalendarDays className="h-5 w-5" /> Book Appointment
          </a>
          <a
            href="tel:08810549632"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm px-7 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
          >
            <Phone className="h-5 w-5" /> Call Now
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
