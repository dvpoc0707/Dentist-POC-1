import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Free Initial Consultation",
  "Personalized Treatment Plan",
  "Flexible Payment Options",
  "Same-Day Appointments Available",
];

const BookingCTA = () => {
  return (
    <section className="section-padding bg-gradient-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Take the first step towards the smile you've always dreamed of. Book your free consultation today and discover what's possible.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary-foreground flex-shrink-0" />
                  <span className="text-primary-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 gap-2 font-semibold"
              >
                <Calendar className="w-5 h-5" />
                Book Free Consultation
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary gap-2 font-semibold bg-transparent"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </Button>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-medium"
          >
            <h3 className="font-display text-2xl font-medium text-foreground mb-6">
              Quick Contact
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                  <option>Select a service</option>
                  <option>Teeth Whitening</option>
                  <option>Dental Veneers</option>
                  <option>Invisalign</option>
                  <option>Dental Implants</option>
                  <option>General Check-up</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your dental goals..."
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>

              <Button variant="hero" size="xl" className="w-full gap-2">
                Submit Request
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>

            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
              <MessageCircle className="w-4 h-4" />
              <span>Or chat with us on WhatsApp</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
