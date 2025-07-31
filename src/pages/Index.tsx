import HeroSection from "@/components/HeroSection";
import DonationForm from "@/components/DonationForm";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <DonationForm />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
