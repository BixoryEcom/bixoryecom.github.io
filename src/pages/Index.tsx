import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} />
      <main className="flex flex-col w-full">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <section className="container mx-auto py-20 px-4 bg-gradient-to-b from-white/90 to-purple-50/30">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Great Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're launching your first store or scaling operations, we're here to help.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;