import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Play, Star, Award, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-smile.jpg";

const stats = [
  { icon: Users, value: "15,000+", label: "Happy Patients" },
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Shield, value: "100%", label: "Safety Standards" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero pt-24 pb-12 lg:pt-20 lg:pb-0 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-primary/10 rounded-full mb-4 md:mb-6"
            >
              <Star className="w-3 h-3 md:w-4 md:h-4 text-gold fill-gold" />
              <span className="text-xs md:text-sm font-medium text-primary">Rated #1 Dental Clinic in the Region</span>
            </motion.div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-tight mb-4 md:mb-6">
              Your Perfect{" "}
              <span className="text-gradient-primary">Smile</span>{" "}
              Starts Here
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8 px-2 sm:px-0">
              Experience world-class dental care with cutting-edge technology and a compassionate team dedicated to transforming your smile and confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-8 md:mb-12 px-4 sm:px-0">
              <Button variant="hero" size="lg" className="gap-2 w-full sm:w-auto" asChild>
                <Link to="/book">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  Book Free Consultation
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="gap-2 w-full sm:w-auto">
                <Play className="w-4 h-4 md:w-5 md:h-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-1 md:gap-2 mb-1">
                    <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <span className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative px-4 sm:px-8 lg:px-0"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-medium">
                <img
                  src={heroImage}
                  alt="Beautiful smile transformation"
                  className="w-full h-auto object-cover aspect-[4/3] md:aspect-auto"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>

              {/* Floating Card - Hidden on very small screens, positioned inside on mobile */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="hidden sm:block absolute bottom-2 left-2 md:-bottom-4 md:-left-4 lg:-bottom-6 lg:-left-6 glass-card rounded-xl md:rounded-2xl p-2 md:p-4 shadow-medium"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-primary rounded-lg md:rounded-xl flex items-center justify-center">
                    <Shield className="w-4 h-4 md:w-6 md:h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-xs md:text-base">FDA Approved</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Latest Technology</p>
                  </div>
                </div>
              </motion.div>

              {/* Rating Card - Hidden on very small screens, positioned inside on mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="hidden sm:block absolute top-2 right-2 md:-top-4 md:-right-4 glass-card rounded-xl md:rounded-2xl p-2 md:p-4 shadow-medium"
              >
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-xs md:text-sm font-medium text-foreground">4.9/5 Rating</p>
                <p className="text-xs text-muted-foreground hidden md:block">2,500+ Reviews</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
