import { Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
    <div className="container mx-auto px-6">

      <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Complete Dental Care
          </h3>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Advanced multi-speciality dental clinic in Faridabad delivering
            precision-driven care with a compassionate approach.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Quick Links
          </h4>

          <ul className="mt-6 space-y-3">
            {["Home", "About", "Services", "Doctor", "Reviews", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Contact
          </h4>

          <div className="mt-6 space-y-4 text-sm text-gray-600">
            <p className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                Shop no-10, Huda Market,<br />
                Sector 55, Faridabad, Haryana 121015
              </span>
            </p>

            <a
              href="tel:08810549632"
              className="flex items-center gap-3 hover:text-emerald-600 transition-colors"
            >
              <Phone className="h-5 w-5 text-emerald-600" />
              98103 15978
            </a>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Follow Us
          </h4>

          <div className="mt-6 flex gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-emerald-500 hover:text-emerald-600 transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-16 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Complete Dental Care. All rights reserved.
      </div>

    </div>
  </footer>
);

export default Footer;