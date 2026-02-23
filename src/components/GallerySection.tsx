import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";

const images = [
  { src: gallery1, alt: "Dentist performing treatment" },
  { src: gallery2, alt: "Clinic interior view" },
  { src: gallery3, alt: "Complete Dental Care clinic exterior" },
  { src: gallery4, alt: "Dr. Nisha at work" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 lg:py-28 dental-gradient-soft">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Gallery</span>
        <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">Our Clinic</h2>
      </motion.div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group overflow-hidden rounded-2xl shadow-card"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
