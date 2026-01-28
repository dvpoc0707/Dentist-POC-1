import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import About from "@/components/About";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <BeforeAfter />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </main>
  );
};

export default Index;
