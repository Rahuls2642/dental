import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.webp"
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Dentist performing treatment" },
  { src: gallery2, alt: "Clinic interior view" },
  { src: gallery3, alt: "Complete Dental Care clinic exterior" },
  { src: gallery4, alt: "Dr. Nisha at work" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 bg-white">
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
          Gallery
        </span>

        <h2 className="mt-4 text-4xl font-semibold text-gray-900">
          Inside Our Clinic.
        </h2>

        <p className="mt-4 text-gray-600">
          A glimpse into our modern facilities and patient-focused environment.
        </p>

        <div className="mt-8 h-px w-20 bg-emerald-500" />
      </motion.div>

      {/* Masonry Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">

        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`group overflow-hidden rounded-3xl ${
              i === 0 ? "lg:row-span-2" : ""
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </motion.div>
        ))}

      </div>
    </div>
  </section>
);

export default GallerySection;