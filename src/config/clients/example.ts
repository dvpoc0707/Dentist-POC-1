import { ClinicConfig } from "../types";

// Example client configuration
// Copy this file and rename it to create a new client config
// e.g., clients/dentist-smith.ts

const exampleConfig: ClinicConfig = {
  clinic: {
    name: "Smith Dental Care",
    tagline: "Your Family Dentist",
    logo: {
      initial: "S",
    },
  },
  contact: {
    phone: "+1 (555) 123-4567",
    email: "info@smithdental.com",
    address: {
      street: "456 Main Street",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      country: "USA",
    },
    hours: {
      weekdays: "Mon-Fri: 8AM - 6PM",
      saturday: "Saturday: 9AM - 3PM",
      sunday: "Sunday: Closed",
    },
  },
  social: {
    facebook: "https://facebook.com/smithdental",
    instagram: "https://instagram.com/smithdental",
  },
  services: [
    {
      icon: "Sparkles",
      title: "Teeth Whitening",
      description: "Professional whitening treatments for a brighter smile.",
      price: "From $299",
      popular: true,
    },
    // Add more services...
  ],
  doctors: [
    {
      image: "/assets/doctor-1.jpg",
      name: "Dr. John Smith",
      role: "General Dentist",
      credentials: "DDS • 20+ Years Experience",
    },
  ],
  images: {
    hero: "/assets/hero-smile.jpg",
    clinicInterior: "/assets/clinic-interior.jpg",
  },
  content: {
    hero: {
      title: "Welcome to Smith Dental Care",
      subtitle: "Your trusted family dentist for over 20 years.",
      badge: "Family Owned Since 2000",
    },
    about: {
      title: "About Our Practice",
      description: "We provide comprehensive dental care for the whole family.",
      features: [
        "Family-friendly environment",
        "Emergency appointments available",
        "Insurance accepted",
      ],
    },
    stats: {
      patients: "10,000+",
      experience: "20+",
      satisfaction: "98%",
    },
  },
  testimonials: [
    {
      id: 1,
      name: "Jane Doe",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Great experience! The staff is friendly and professional.",
      treatment: "Teeth Cleaning",
      avatar: "JD",
    },
  ],
};

export default exampleConfig;
