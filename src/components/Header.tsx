import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between md:justify-start h-16">
          <a href="/" className="flex items-center space-x-2 mx-auto md:mx-0">
            <img 
              src="/lovable-uploads/bc6f70da-0a7e-4d20-bb12-66f35bf8fe4b.png" 
              alt="Bixory Logo" 
              className="h-20 w-auto"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-600 bg-clip-text text-transparent">
              BIXORY eCOM
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </a>
            <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact Us
            </a>
            <Button variant="default" size="sm">
              Explore Portfolio
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </a>
              <a href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
                Blog
              </a>
              <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact Us
              </a>
              <Button variant="default" size="sm" className="w-full">
                Explore Portfolio
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;