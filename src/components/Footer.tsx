import { Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-dental-navy py-14">
    <div className="container mx-auto px-4">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg dental-gradient">
              <span className="text-sm font-bold text-primary-foreground">C</span>
            </div>
            <span className="text-sm font-bold text-primary-foreground">Complete Dental Care</span>
          </div>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Advanced multi-speciality dental clinic providing quality care with a gentle touch.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-sm font-bold text-primary-foreground">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Doctor", "Reviews", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-bold text-primary-foreground">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/60">
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              Shop no 111, FF, HUDA Market, Sector 55, Faridabad, Haryana 121015
            </p>
            <a href="tel:08810549632" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone className="h-4 w-4" /> 088-105-49632
            </a>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-4 text-sm font-bold text-primary-foreground">Follow Us</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground/60 hover:bg-primary-foreground/20 hover:text-primary-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/40">
        © {new Date().getFullYear()} Complete Dental Care. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
