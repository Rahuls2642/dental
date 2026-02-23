import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Priya Sharma", text: "Excellent experience! Dr. Nisha is very gentle and professional. Got my root canal done painlessly. Highly recommended!", rating: 5 },
  { name: "Rahul Verma", text: "Best dental clinic in Faridabad. Clean, hygienic and very affordable. My kids love visiting here for their check-ups.", rating: 5 },
  { name: "Anita Gupta", text: "Got my dental implants done here. Wonderful results and the staff is extremely caring and friendly.", rating: 5 },
  { name: "Sanjay Mehta", text: "Very modern clinic with latest equipment. Dr. Nisha explained everything clearly before the treatment. Great service!", rating: 5 },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-20 lg:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</span>
        <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">What Our Patients Say</h2>
        <div className="mt-4 inline-flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-dental-gold text-dental-gold" />
            ))}
          </div>
          <span className="text-lg font-bold text-foreground">4.9/5</span>
          <span className="text-sm text-muted-foreground">from 104 patients</span>
        </div>
      </motion.div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl bg-card p-6 shadow-card"
          >
            <div className="mb-3 flex">
              {[...Array(r.rating)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-dental-gold text-dental-gold" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">"{r.text}"</p>
            <p className="mt-4 text-sm font-bold text-foreground">{r.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
