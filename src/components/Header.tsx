import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            SparkServes
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              <Link to="#features" className="text-foreground hover:text-primary transition-colors py-2">
                Features
              </Link>
              <Link to="#pricing" className="text-foreground hover:text-primary transition-colors py-2">
                Pricing
              </Link>
              <Link to="#contact" className="text-foreground hover:text-primary transition-colors py-2">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;