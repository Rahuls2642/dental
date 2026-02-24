import { useState } from "react";
import { CalendarDays, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

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

const AppointmentForm = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 4000);
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition";

  return (
    <section id="appointment" className="py-24 bg-[#f9fafb]">
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
            Appointment
          </span>

          <h2 className="mt-4 text-4xl font-semibold text-gray-900">
            Schedule Your Visit.
          </h2>

          <p className="mt-4 text-gray-600">
            Choose your preferred service, date and time. Our team will confirm shortly.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-14 max-w-3xl rounded-3xl border border-gray-100 bg-white p-10"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-5 py-16 text-center"
              >
                <CheckCircle className="h-14 w-14 text-emerald-600" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  Appointment Request Sent
                </h3>
                <p className="text-gray-600">
                  Our team will contact you soon to confirm your booking.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="grid gap-6 sm:grid-cols-2"
              >
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
                  placeholder="Any concerns or notes…"
                  rows={4}
                  className={`${inputClass} sm:col-span-2`}
                />

                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-emerald-700 hover:-translate-y-0.5"
                >
                  <CalendarDays className="h-5 w-5" />
                  Confirm Appointment
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