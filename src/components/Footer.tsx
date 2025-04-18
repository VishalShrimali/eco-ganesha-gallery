
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-eco-green-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">EcoGanesha</h3>
            <p className="mb-4 text-gray-300">
              We create eco-friendly Ganesha idols from recycled paper to promote environmental consciousness while preserving tradition.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-eco-orange-light transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-eco-orange-light transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-eco-orange-light transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-eco-orange-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-eco-orange-light transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-eco-orange-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-eco-orange-light transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-eco-orange-light transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="hover:text-eco-orange-light transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-eco-orange-light transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-eco-orange-light transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-eco-orange-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-eco-orange-light transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-300">
              Subscribe to receive updates on new products and special promotions.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full text-black rounded-l-md focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-eco-orange-DEFAULT hover:bg-eco-orange-dark px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
          <p>&copy; {currentYear} EcoGanesha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
