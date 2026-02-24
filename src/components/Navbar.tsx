import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Booking", href: "#appointment" },
  { label: "Doctor", href: "#doctor" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
const [scrolled, setScrolled] = useState(
  typeof window !== "undefined" ? window.scrollY > 20 : false
);
  const [mobileOpen, setMobileOpen] = useState(false);

useEffect(() => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  setTimeout(() => window.scrollTo(0, 0), 0);

  const onScroll = () => setScrolled(window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
}, []);
  return (
  <nav
  style={{ top: 0, position: 'fixed' }}
  className={`inset-x-0 z-[100] w-full transition-all duration-300 ${
    scrolled
      ? "bg-white/95 backdrop-blur-md border-b border-gray-200"
      : "bg-white/80 backdrop-blur-md"
  }`}
>
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-4">

        {/* Brand */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white font-semibold">
            B
          </div>

          <div className="leading-tight">
            <span className="block text-sm font-semibold text-gray-900">
              Bhardwaj dental care
            </span>
            <span className="block text-[11px] text-gray-500">
              Multi Speciality Clinic
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
           <a
  key={link.href}
  href={link.href}
  onClick={() => setMobileOpen(false)}
  className="text-gray-700 hover:text-emerald-600 transition-colors"
>
  {link.label}
</a>
          ))}

          <a
            href="tel:08810549632"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-emerald-700"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={{ duration: 0.2 }}
  className="lg:hidden bg-white border-t border-gray-200"
>
            <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
  key={link.href}
  href={link.href}
  onClick={(e) => {
    e.preventDefault();
    setMobileOpen(false);

    const section = document.querySelector(link.href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="text-gray-700 hover:text-emerald-600 transition-colors"
>
  {link.label}
</a>
              ))}

              <a
                href="tel:08810549632"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-700"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;