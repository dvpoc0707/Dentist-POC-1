import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";

const benefits = [
  "Free Initial Consultation",
  "Personalized Treatment Plan",
  "Flexible Payment Options",
  "Same-Day Appointments Available",
];

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+1 (234) 567-890" },
  { icon: Mail, label: "Email", value: "hello@smilestudio.com" },
  { icon: MapPin, label: "Address", value: "123 Dental Ave, New York, NY 10001" },
  { icon: Clock, label: "Hours", value: "Mon-Sat: 9AM - 7PM" },
];

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20, "Phone number too long"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().optional(),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

type FormValues = z.infer<typeof formSchema>;

const BookingPage = () => {
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
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
    
    // Navigate back to home after a short delay
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero pt-8 pb-16">
      <div className="container-narrow">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">
              Book Your Free Consultation
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Take the first step towards the smile you've always dreamed of. Fill out the form and our team will contact you within 24 hours.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-display text-lg font-medium text-foreground mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 shadow-medium border border-border"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Smith" 
                          className="h-12 px-4 rounded-xl border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
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
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="john@email.com" 
                            className="h-12 px-4 rounded-xl border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
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
                        <FormLabel>Phone *</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="+1 (234) 567-890" 
                            className="h-12 px-4 rounded-xl border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
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
                      <FormLabel>Service Interested In *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 px-4 rounded-xl border-border focus:border-primary focus:ring-2 focus:ring-primary/20">
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
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Date (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          type="date"
                          className="h-12 px-4 rounded-xl border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                          {...field} 
                        />
                      </FormControl>
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
                          rows={4}
                          placeholder="Tell us about your dental goals or any concerns..."
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
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Submitting..." : "Request Consultation"}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </p>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;