import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Smile, 
  CircleDot, 
  Syringe, 
  ScanLine, 
  Stethoscope,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter, more confident smile in just one visit.",
    price: "From $299",
    popular: true,
  },
  {
    icon: Smile,
    title: "Dental Veneers",
    description: "Custom porcelain veneers to transform your smile with natural-looking, permanent results.",
    price: "From $899",
    popular: false,
  },
  {
    icon: CircleDot,
    title: "Invisalign",
    description: "Clear aligner therapy for straighter teeth without traditional metal braces.",
    price: "From $3,500",
    popular: true,
  },
  {
    icon: Syringe,
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
    price: "From $1,999",
    popular: false,
  },
  {
    icon: ScanLine,
    title: "Digital Smile Design",
    description: "Preview your new smile before treatment with our advanced 3D imaging technology.",
    price: "Complimentary",
    popular: false,
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Exams",
    description: "Thorough dental examinations including X-rays, oral cancer screening, and treatment planning.",
    price: "From $149",
    popular: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Comprehensive Dental Care for Your{" "}
            <span className="text-gradient-primary">Beautiful Smile</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From routine check-ups to complete smile makeovers, we offer a full range of dental services using the latest technology and techniques.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
            >
              {service.popular && (
                <span className="absolute -top-3 right-6 bg-gradient-warm text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </span>
              )}

              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-4 line-clamp-2">
                {service.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="font-semibold text-primary">{service.price}</span>
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground hover:text-primary">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="xl">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
