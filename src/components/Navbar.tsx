import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctor", href: "#doctor" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl dental-gradient">
            <span className="text-lg font-bold text-primary-foreground">C</span>
          </div>
          <div className="leading-tight">
            <span className="block text-sm font-bold text-foreground">Complete Dental Care</span>
            <span className="block text-[10px] font-medium text-muted-foreground">Advanced Multi Speciality Clinic</span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:08810549632"
            className="dental-gradient inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-hero transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:08810549632"
                className="dental-gradient inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-primary-foreground mt-2"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
