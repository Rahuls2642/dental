import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-[#f9fafb]">
    <div className="container mx-auto px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <span className="text-sm font-medium uppercase tracking-wide text-emerald-600">
          Contact
        </span>

        <h2 className="mt-4 text-4xl font-semibold text-gray-900">
          Visit Our Clinic.
        </h2>

        <p className="mt-4 text-gray-600">
          Conveniently located in Sector 55, Faridabad. We’re here to help you smile confidently.
        </p>

        <div className="mt-8 h-px w-20 bg-emerald-500" />
      </motion.div>

      {/* Content */}
      <div className="mt-16 grid lg:grid-cols-2 gap-16 items-start">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          {/* Address */}
          <div className="flex gap-4">
            <MapPin className="h-6 w-6 text-emerald-600 shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Address</h3>
              <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                Shop No xxx, FF, xxx Market,<br />
                Sector 55, State, City 121015
              </p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-emerald-600 hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <Phone className="h-6 w-6 text-emerald-600 shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <a
                href="tel:08810549632"
                className="mt-1 block text-sm font-medium text-gray-700 hover:text-emerald-600"
              >
                08810 xxxxxx
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex gap-4">
            <Clock className="h-6 w-6 text-emerald-600 shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Working Hours
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Open Daily — 10:00 AM to 8:15 PM
              </p>
            </div>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-gray-200"
        >
          <iframe
            title="Complete Dental Care Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.1!2d77.3!3d28.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzAwLjAiTiA3N8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin&q=Complete+Dental+Care+Sector+55+Faridabad"
            className="w-full h-[420px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

      </div>
    </div>
  </section>
);

export default ContactSection;