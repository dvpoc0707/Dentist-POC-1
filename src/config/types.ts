// Configuration types for multi-tenant dental clinic websites

export interface ClinicConfig {
  // Basic Information
  clinic: {
    name: string;
    tagline: string;
    logo: {
      initial: string; // Single letter for logo
      full?: string; // Optional full logo image URL
    };
  };

  // Contact Information
  contact: {
    phone: string;
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country?: string;
    };
    hours: {
      weekdays: string;
      saturday?: string;
      sunday?: string;
    };
  };

  // Social Media
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };

  // Services
  services: Service[];

  // Team/Doctors
  doctors: Doctor[];

  // Images
  images: {
    hero: string;
    clinicInterior: string;
    // Add more as needed
  };

  // Content
  content: {
    hero: {
      title: string;
      subtitle: string;
      badge?: string;
    };
    about: {
      title: string;
      description: string;
      features: string[];
    };
    stats: {
      patients: string;
      experience: string;
      satisfaction: string;
    };
  };

  // Testimonials
  testimonials: Testimonial[];

  // SEO
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface Service {
  icon: string; // Icon name from lucide-react
  title: string;
  description: string;
  price: string;
  popular: boolean;
}

export interface Doctor {
  image: string; // Image path or URL
  name: string;
  role: string;
  credentials: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  treatment: string;
  avatar: string;
}
