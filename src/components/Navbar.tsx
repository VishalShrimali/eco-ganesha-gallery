
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const location = useLocation();

  const cartCount = getCartCount();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-heading text-2xl font-bold text-eco-green-dark">
            Eco<span className="text-eco-purple-DEFAULT">Ganesha</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-medium hover:text-eco-green-DEFAULT transition-colors ${
                isActive(link.path) 
                  ? "text-eco-green-DEFAULT border-b-2 border-eco-green-DEFAULT" 
                  : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="flex items-center">
              <User size={18} className="mr-1" />
              Login
            </Button>
          </Link>
          <Link to="/cart" className="relative">
            <Button variant="outline" size="icon" className="rounded-full">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-eco-orange-DEFAULT text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-4">
          <Link to="/cart" className="relative">
            <Button variant="outline" size="icon" className="rounded-full">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-eco-orange-DEFAULT text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container-custom space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-base font-medium ${
                  isActive(link.path) 
                    ? "text-eco-green-DEFAULT" 
                    : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-600"
            >
              Login / Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
