
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import SocialShare from '@/components/ui/SocialShare';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-bold">Roots & Richness</h3>
            <p className="text-gray-300 text-sm">
              Bringing you premium, authentic products directly from nature's source. 
              Traditional methods, modern quality standards.
            </p>
            <div className="space-y-3">
              <p className="text-sm font-medium">Follow Us</p>
              <SocialShare variant="footer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/products" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                All Products
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Blog
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">Customer Care</h4>
            <div className="space-y-2">
              <Link to="/shipping-policy" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Shipping Policy
              </Link>
              <Link to="/return-refund-policy" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Return Policy
              </Link>
              <Link to="/privacy-policy" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-gray-300 text-sm">hello@rootsandrichness.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-gray-300 text-sm">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Roots & Richness. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">🚚 Free Shipping</span>
            <span className="text-gray-400 text-sm">🔒 Secure Payment</span>
            <span className="text-gray-400 text-sm">📞 24/7 Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
