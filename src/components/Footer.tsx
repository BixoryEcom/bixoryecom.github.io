import { Facebook, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = async () => {
    if (!validateEmail(email)) {
      toast({
        variant: "destructive",
        title: "Invalid Email",
        description: "Sorry, the email you provided is not valid",
      });
      return;
    }

    try {
      // Using mailto link as a fallback since direct email sending requires backend implementation
      window.location.href = `mailto:main@bixory.com?subject=Someone subscribed&body=New subscription from: ${email}`;
      
      toast({
        title: "Subscription Successful!",
        description: "Thanks for your subscription! We will keep you updated with helpful eCom tips and our latest development!",
      });
      
      setEmail(""); // Clear the input after successful subscription
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Branding Column */}
          <div className="space-y-4 text-center md:text-left">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity justify-center md:justify-start">
              <img 
                src="/lovable-uploads/73845396-eac7-477c-a78d-466f850a111d.png" 
                alt="Bixory Logo" 
                className="h-12 w-auto"
              />
              <h3 className="text-2xl font-bold">BIXORY eCOM</h3>
            </Link>
            <p className="text-sm font-['Playfair_Display'] text-[#FFD700] italic">Build Next-gen eCommerce with AI</p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies Column */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest updates on our eCommerce ventures and expert insights.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                onClick={handleSubscribe}
                className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white"
              >
                Sign Up Now
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          © 2024 Bixory Ecommerce. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;