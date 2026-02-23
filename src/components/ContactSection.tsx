import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => (
  <section id="contact" className="py-20 lg:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</span>
        <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">Find Us</h2>
      </motion.div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Address</h3>
              <p className="text-sm text-muted-foreground">
                Shop no 111, FF, HUDA Market, Sector 55, Faridabad, Haryana 121015
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Phone</h3>
              <a href="tel:08810549632" className="text-sm text-primary font-medium hover:underline">
                088-105-49632
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Working Hours</h3>
              <p className="text-sm text-muted-foreground">Open Daily — Closes at 8:15 PM</p>
            </div>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl shadow-card"
        >
          <iframe
            title="Complete Dental Care Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.1!2d77.3!3d28.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzAwLjAiTiA3N8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin&q=Complete+Dental+Care+Sector+55+Faridabad"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
