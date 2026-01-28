import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Play, Star, Award, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-smile.jpg";

const stats = [
  { icon: Users, value: "15,000+", label: "Happy Patients" },
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Shield, value: "100%", label: "Safety Standards" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
            >
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-sm font-medium text-primary">Rated #1 Dental Clinic in the Region</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-tight mb-6">
              Your Perfect{" "}
              <span className="text-gradient-primary">Smile</span>{" "}
              Starts Here
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Experience world-class dental care with cutting-edge technology and a compassionate team dedicated to transforming your smile and confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="xl" className="gap-2">
                <Calendar className="w-5 h-5" />
                Book Free Consultation
              </Button>
              <Button variant="heroOutline" size="xl" className="gap-2">
                <Play className="w-5 h-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-medium">
                <img
                  src={heroImage}
                  alt="Beautiful smile transformation"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-medium"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">FDA Approved</p>
                    <p className="text-sm text-muted-foreground">Latest Technology</p>
                  </div>
                </div>
              </motion.div>

              {/* Rating Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 shadow-medium"
              >
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-sm font-medium text-foreground">4.9/5 Rating</p>
                <p className="text-xs text-muted-foreground">2,500+ Reviews</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
