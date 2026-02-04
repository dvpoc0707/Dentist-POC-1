import { ClinicConfig } from "./types";

// Default configuration - this will be overridden by client-specific configs
export const defaultConfig: ClinicConfig = {
  clinic: {
    name: "UrbanSmile Dental",
    tagline: "Premium Dental Care",
    logo: {
      full: "/Dental-Logo-Design.jpg", // Path to logo image in public folder
      initial: "U",
    },
  },
  contact: {
    phone: "+1 (234) 567-890",
    email: "hello@smilestudio.com",
    address: {
      street: "123 Dental Ave",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA",
    },
    hours: {
      weekdays: "Mon-Fri: 9AM - 7PM",
      saturday: "Saturday: 9AM - 5PM",
      sunday: "Sunday: Closed",
    },
  },
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },
  services: [
    {
      icon: "Sparkles",
      title: "Teeth Whitening",
      description: "Professional whitening treatments for a brighter, more confident smile in just one visit.",
      price: "From $299",
      popular: true,
    },
    {
      icon: "Smile",
      title: "Dental Veneers",
      description: "Custom porcelain veneers to transform your smile with natural-looking, permanent results.",
      price: "From $899",
      popular: false,
    },
    {
      icon: "CircleDot",
      title: "Invisalign",
      description: "Clear aligner therapy for straighter teeth without traditional metal braces.",
      price: "From $3,500",
      popular: true,
    },
    {
      icon: "Syringe",
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
      price: "From $1,999",
      popular: false,
    },
    {
      icon: "ScanLine",
      title: "Digital Smile Design",
      description: "Preview your new smile before treatment with our advanced 3D imaging technology.",
      price: "Complimentary",
      popular: false,
    },
    {
      icon: "Stethoscope",
      title: "Comprehensive Exams",
      description: "Thorough dental examinations including X-rays, oral cancer screening, and treatment planning.",
      price: "From $149",
      popular: false,
    },
  ],
  doctors: [
    {
      image: "/assets/doctor-1.jpg",
      name: "Dr. Michael Chen",
      role: "Cosmetic Dentistry Specialist",
      credentials: "DDS, FAGD • 15+ Years Experience",
    },
    {
      image: "/assets/doctor-2.jpg",
      name: "Dr. Sarah Williams",
      role: "Orthodontics & Invisalign Expert",
      credentials: "DMD, MS • Board Certified",
    },
  ],
  images: {
    hero: "/assets/hero-smile.jpg",
    clinicInterior: "/assets/clinic-interior.jpg",
  },
  content: {
    hero: {
      title: "Your Perfect Smile Starts Here",
      subtitle: "Experience world-class dental care with cutting-edge technology and a compassionate team dedicated to transforming your smile and confidence.",
      badge: "Rated #1 Dental Clinic in the Region",
    },
    about: {
      title: "Where Expertise Meets Compassion",
      description: "At UrbanSmile Dental, we believe everyone deserves a healthy, beautiful smile. Our team of internationally trained specialists combines cutting-edge technology with personalized care to deliver exceptional results.",
      features: [
        "State-of-the-art equipment & technology",
        "Internationally trained specialists",
        "Strict sterilization protocols",
        "Comfortable, spa-like environment",
        "Flexible payment plans available",
        "Multilingual staff for international patients",
      ],
    },
    stats: {
      patients: "15,000+",
      experience: "25+",
      satisfaction: "100%",
    },
  },
  testimonials: [
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
  ],
  beforeAfter: [
    {
      id: 1,
      treatment: "Teeth Whitening",
      duration: "1 Session",
      beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1581585828929-ebc61a190102?w=600&h=400&fit=crop",
      description: "Professional whitening treatment achieving 8 shades brighter in just one visit.",
    },
    {
      id: 2,
      treatment: "Porcelain Veneers",
      duration: "2 Weeks",
      beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop",
      description: "Complete smile makeover with custom porcelain veneers for a natural, beautiful result.",
    },
    {
      id: 3,
      treatment: "Invisalign",
      duration: "6 Months",
      beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
      description: "Invisible aligners straightened teeth discreetly, creating a perfectly aligned smile.",
    },
    {
      id: 4,
      treatment: "Dental Implants",
      duration: "3 Months",
      beforeImage: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
      description: "Single tooth implant restored full function and aesthetics with a natural-looking crown.",
    },
  ],
};
