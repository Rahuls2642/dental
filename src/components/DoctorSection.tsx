import { Award, GraduationCap, Users } from "lucide-react";
import { motion } from "framer-motion";

const DoctorSection = () => (
  <section id="doctor" className="py-20 lg:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Doctor</span>
        <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">Meet Your Dentist</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="mx-auto mt-14 max-w-md rounded-2xl bg-card p-8 shadow-card text-center"
      >
        {/* Avatar placeholder */}
        <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full dental-gradient text-primary-foreground text-5xl font-bold">
          N
        </div>
        <h3 className="text-xl font-bold text-foreground">Dr. Nisha</h3>
        <p className="text-sm font-medium text-primary">BDS, MDS — Pedodontist</p>

        <div className="mt-6 grid grid-cols-3 gap-4">
          {[
            { icon: GraduationCap, label: "BDS, MDS" },
            { icon: Award, label: "10+ Years" },
            { icon: Users, label: "5000+ Patients" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <item.icon className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold text-foreground">{item.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
          Dr. Nisha specializes in pediatric and family dentistry, bringing a gentle touch and over a decade of clinical experience to every procedure.
        </p>
      </motion.div>
    </div>
  </section>
);

export default DoctorSection;
