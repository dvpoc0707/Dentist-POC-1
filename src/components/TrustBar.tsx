import { motion } from "framer-motion";
import { Award, Shield, Clock, Globe, ThumbsUp, HeartHandshake } from "lucide-react";

const trustItems = [
  { icon: Award, label: "Award Winning" },
  { icon: Shield, label: "100% Safe & Sterile" },
  { icon: Clock, label: "Same Day Appointments" },
  { icon: Globe, label: "International Patients Welcome" },
  { icon: ThumbsUp, label: "Pain-Free Treatments" },
  { icon: HeartHandshake, label: "Patient-First Approach" },
];

const TrustBar = () => {
  return (
    <section className="py-8 bg-primary">
      <div className="container-narrow">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-primary-foreground"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
