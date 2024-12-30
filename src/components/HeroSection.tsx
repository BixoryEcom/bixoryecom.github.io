import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImages = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80"
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio-section');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large purple floating circle */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-float">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 mix-blend-overlay" />
        </div>
        
        {/* Large blue floating circle */}
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-float-delayed">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 mix-blend-overlay" />
        </div>
        
        {/* Medium cyan floating circle */}
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl animate-float">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 mix-blend-overlay" />
        </div>

        {/* Neural Network Pattern */}
        <div className="absolute inset-0">
          {/* Vertical lines */}
          <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent left-1/4 transform -skew-x-12" />
          <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent left-2/4 transform skew-x-12" />
          <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent left-3/4 transform -skew-x-12" />
          
          {/* Horizontal lines */}
          <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-purple-400/30 to-transparent top-1/4 transform -skew-y-12" />
          <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent top-2/4 transform skew-y-12" />
          <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent top-3/4 transform -skew-y-12" />
        </div>

        {/* Intersection Points */}
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/4 w-3 h-3 bg-purple-400/50 rounded-full animate-pulse" />
          <div className="absolute left-2/4 top-2/4 w-3 h-3 bg-blue-400/50 rounded-full animate-pulse" />
          <div className="absolute left-3/4 top-3/4 w-3 h-3 bg-cyan-400/50 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Your Partner in eCommerce Excellence
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
          Discover AI-powered eCommerce brands driving the future of digital retail
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white min-w-[200px]"
            onClick={scrollToPortfolio}
          >
            Explore Our Portfolio <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white min-w-[200px]"
            onClick={scrollToServices}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;