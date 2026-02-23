import { useState } from "react";
import { CalendarDays, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceOptions = [
  "Teeth Cleaning",
  "Root Canal Treatment",
  "Dental Implants",
  "Braces & Aligners",
  "Cosmetic Dentistry",
  "Pediatric Dentistry",
  "General Check-up",
  "Other",
];

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
  "07:00 PM", "07:30 PM",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

const initialForm: FormData = { name: "", phone: "", email: "", service: "", date: "", time: "", message: "" };

const AppointmentForm = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API-ready: send form data to backend here
    console.log("Appointment submitted:", form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 4000);
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow";

  return (
    <section id="appointment" className="py-20 lg:py-28 dental-gradient-soft">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Appointment</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">Book Your Visit</h2>
          <p className="mt-4 text-muted-foreground">Fill in the form below and we'll get back to you shortly.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-12 max-w-2xl rounded-2xl bg-card p-8 shadow-card lg:p-10"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4 py-12 text-center"
              >
                <CheckCircle className="h-16 w-16 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Appointment Request Sent!</h3>
                <p className="text-muted-foreground">We'll contact you shortly to confirm your appointment.</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" required className={inputClass} />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number *" required type="tel" className={inputClass} />
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" type="email" className={inputClass} />
                <select name="service" value={form.service} onChange={handleChange} required className={inputClass}>
                  <option value="">Select Service *</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <input name="date" value={form.date} onChange={handleChange} type="date" required className={inputClass} />
                <select name="time" value={form.time} onChange={handleChange} required className={inputClass}>
                  <option value="">Select Time *</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any message or concerns…"
                  rows={3}
                  className={`${inputClass} sm:col-span-2`}
                />
                <button
                  type="submit"
                  className="sm:col-span-2 dental-gradient inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-hero transition-transform hover:scale-[1.02]"
                >
                  <CalendarDays className="h-5 w-5" /> Book Appointment
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentForm;
