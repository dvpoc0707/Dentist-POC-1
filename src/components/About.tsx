import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Heart, ArrowRight } from "lucide-react";
import clinicImage from "@/assets/clinic-interior.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";

const features = [
  "State-of-the-art equipment & technology",
  "Internationally trained specialists",
  "Strict sterilization protocols",
  "Comfortable, spa-like environment",
  "Flexible payment plans available",
  "Multilingual staff for international patients",
];

const doctors = [
  {
    image: doctor1,
    name: "Dr. Michael Chen",
    role: "Cosmetic Dentistry Specialist",
    credentials: "DDS, FAGD • 15+ Years Experience",
  },
  {
    image: doctor2,
    name: "Dr. Sarah Williams",
    role: "Orthodontics & Invisalign Expert",
    credentials: "DMD, MS • Board Certified",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-medium">
              <img
                src={clinicImage}
                alt="Modern dental clinic interior"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-medium border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-2xl font-semibold text-foreground">25+</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
              Where Expertise Meets{" "}
              <span className="text-gradient-primary">Compassion</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Smile Studio, we believe everyone deserves a healthy, beautiful smile. Our team of internationally trained specialists combines cutting-edge technology with personalized care to deliver exceptional results.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="gap-2">
              Meet Our Team
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Doctors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
              Meet Our Expert Dentists
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team of specialists brings decades of combined experience and a passion for creating beautiful smiles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-medium transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-display text-xl font-medium text-foreground mb-1">
                    {doctor.name}
                  </h4>
                  <p className="text-primary font-medium mb-2">{doctor.role}</p>
                  <p className="text-sm text-muted-foreground">{doctor.credentials}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
