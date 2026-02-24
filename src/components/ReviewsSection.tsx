import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Priya Sharma",
    text: "Excellent experience. Dr. Nisha was extremely gentle and professional. My root canal was completely painless.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    text: "Very clean and hygienic clinic. The staff is warm and welcoming. My kids feel comfortable here.",
    rating: 5,
  },
  {
    name: "Anita Gupta",
    text: "Dental implants were done perfectly. Everything was explained clearly before treatment.",
    rating: 5,
  },
  {
    name: "Sanjay Mehta",
    text: "Modern setup with advanced equipment. Professional and transparent service throughout.",
    rating: 5,
  },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-24 bg-[#f9fafb]">
    <div className="container mx-auto px-6">

      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* Left Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium uppercase tracking-wide text-emerald-600">
            Patient Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-semibold text-gray-900 leading-tight">
            Trusted by Families Across Faridabad.
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-emerald-600 text-emerald-600" />
              ))}
            </div>

            <span className="text-2xl font-semibold text-gray-900">
              4.9/5
            </span>

            <span className="text-gray-600">
              from 100+ verified patients
            </span>
          </div>

          <div className="mt-8 h-px w-20 bg-emerald-500" />
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-emerald-600 text-emerald-600" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed text-sm">
                “{r.text}”
              </p>

              <p className="mt-6 text-sm font-medium text-gray-900">
                {r.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default ReviewsSection;