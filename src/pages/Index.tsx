import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import DoctorSection from "@/components/DoctorSection";
import AppointmentForm from "@/components/AppointmentForm";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <DoctorSection />
      <AppointmentForm />
      <ReviewsSection />
      <GallerySection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
