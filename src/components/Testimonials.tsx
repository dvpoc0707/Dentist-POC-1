import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "After years of hiding my smile, Dr. Chen gave me the confidence I never knew I could have. The entire team made me feel so comfortable, and the results exceeded my expectations!",
    treatment: "Porcelain Veneers",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "James Mitchell",
    location: "London, UK",
    rating: 5,
    text: "I traveled from London specifically for their expertise in dental implants. Worth every mile! The technology they use is incredible, and the aftercare has been exceptional.",
    treatment: "Dental Implants",
    avatar: "JM",
  },
  {
    id: 3,
    name: "Maria Garcia",
    location: "Dubai, UAE",
    rating: 5,
    text: "The invisible aligners changed my life. I could straighten my teeth without anyone noticing I was in treatment. The monthly check-ins were so convenient!",
    treatment: "Invisalign",
    avatar: "MG",
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    location: "Toronto, Canada",
    rating: 5,
    text: "As someone with dental anxiety, I was nervous about getting implants. The team here was incredibly patient and made the entire process stress-free. Highly recommend!",
    treatment: "Full Smile Makeover",
    avatar: "AH",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Patient Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Trusted by Patients{" "}
            <span className="text-gradient-primary">Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Hear from our patients who have experienced life-changing smile transformations.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-soft"
            >
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                "{testimonials[activeIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg">
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].location}
                    </p>
                  </div>
                </div>
                <div className="px-4 py-2 bg-secondary rounded-full">
                  <span className="text-sm font-medium text-primary">
                    {testimonials[activeIndex].treatment}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border"
        >
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "2,500+", label: "5-Star Reviews" },
            { value: "98%", label: "Patient Satisfaction" },
            { value: "50+", label: "Countries Served" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
