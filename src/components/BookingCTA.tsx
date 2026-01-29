import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const benefits = [
  "Free Initial Consultation",
  "Personalized Treatment Plan",
  "Flexible Payment Options",
  "Same-Day Appointments Available",
];

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20, "Phone number too long"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

type FormValues = z.infer<typeof formSchema>;

const BookingCTA = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", { ...data, email: "[REDACTED]", phone: "[REDACTED]" });
    
    toast({
      title: "Consultation Request Submitted!",
      description: "Thank you! We'll contact you within 24 hours to confirm your appointment.",
    });
    
    form.reset();
  };

  return (
    <section id="booking" className="section-padding bg-gradient-primary relative overflow-hidden">
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
              Book Free Consultation
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Smith" 
                          className="px-4 py-3 rounded-xl border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="john@email.com" 
                            className="px-4 py-3 rounded-xl border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="+1 (234) 567-890" 
                            className="px-4 py-3 rounded-xl border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Interested In</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="px-4 py-3 rounded-xl border-border focus:border-primary focus:ring-2 focus:ring-primary/20">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="teeth-whitening">Teeth Whitening</SelectItem>
                          <SelectItem value="veneers">Dental Veneers</SelectItem>
                          <SelectItem value="invisalign">Invisalign</SelectItem>
                          <SelectItem value="implants">Dental Implants</SelectItem>
                          <SelectItem value="checkup">General Check-up</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={3}
                          placeholder="Tell us about your dental goals..."
                          className="px-4 py-3 rounded-xl border-border focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="w-full gap-2"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Submitting..." : "Submit Request"}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </Form>

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
