import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio-section');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 relative">
            <img 
              src="/lovable-uploads/bc6f70da-0a7e-4d20-bb12-66f35bf8fe4b.png" 
              alt="Bixory Logo" 
              className="h-20 w-auto"
            />
            <span className={`text-xl md:text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] bg-clip-text 
              text-transparent transition-colors duration-300 ${
              isScrolled ? "dark:from-indigo-400 dark:to-indigo-600" : "dark:from-indigo-300 dark:to-indigo-500"
            }`}>
              BIXORY eCOM
            </span>
          </Link>

          <nav className={`hidden md:flex items-center space-x-8`}>
            <Link 
              to="/" 
              className={`text-lg font-medium transition-all duration-300 hover:text-purple-600 ${
                isScrolled ? "text-foreground" : "text-[#D3E4FD]"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className={`text-lg font-medium transition-all duration-300 hover:text-purple-600 ${
                isScrolled ? "text-foreground" : "text-[#D3E4FD]"
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`text-lg font-medium transition-all duration-300 hover:text-purple-600 ${
                isScrolled ? "text-foreground" : "text-[#D3E4FD]"
              }`}
            >
              Contact Us
            </Link>
            <Button 
              variant="default" 
              size="sm"
              onClick={scrollToPortfolio}
              className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Portfolio
            </Button>
          </nav>

          <button
            className="md:hidden relative z-50 p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation with improved animation */}
        <div className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <Link 
              to="/" 
              className="text-2xl font-medium hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className="text-2xl font-medium hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="text-2xl font-medium hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button 
              variant="default" 
              size="lg"
              onClick={scrollToPortfolio}
              className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 w-48"
            >
              Explore Portfolio
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;