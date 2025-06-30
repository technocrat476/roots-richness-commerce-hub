
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Shield, Truck, HeadphonesIcon } from 'lucide-react';
import SocialShare from '@/components/ui/SocialShare';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info - Enhanced */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-playfair font-bold mb-3">Roots & Richness</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Bringing you premium, authentic wood-pressed oils and natural wellness products 
                directly from nature's source. Traditional methods, modern quality standards.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary">Follow Our Journey</p>
              <SocialShare variant="footer" />
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">
                100% Natural
              </span>
              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                Chemical-Free
              </span>
            </div>
          </div>

          {/* Quick Links - Enhanced */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-primary">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/products" className="block text-gray-300 hover:text-primary transition-colors text-sm hover:translate-x-1 transform duration-200">
                → All Products
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-primary transition-colors text-sm hover:translate-x-1 transform duration-200">
                → About Us
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-primary transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Blog & Wellness Tips
              </Link>
              <Link to="/faq" className="block text-gray-300 hover:text-primary transition-colors text-sm hover:translate-x-1 transform duration-200">
                → FAQ
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-primary transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Contact Us
              </Link>
            </div>
          </div>

          {/* Customer Care - Enhanced */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-primary">Customer Care</h4>
            <div className="space-y-3">
              <Link to="/shipping-policy" className="block text-gray-300 hover:text-primary transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Shipping Policy
              </Link>
              <Link to="/return-refund-policy" className="block text-gray-300 hover:text-primary transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Return & Refund Policy
              </Link>
              <Link to="/privacy-policy" className="block text-gray-300 hover:text-primary transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="block text-gray-300 hover:text-primary transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info - Enhanced */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-primary">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:hello@rootsandrichness.com" className="text-gray-300 text-sm hover:text-primary transition-colors">
                    hello@rootsandrichness.com
                  </a>
                  <p className="text-xs text-gray-400 mt-1">24hr response time</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="text-gray-300 text-sm hover:text-primary transition-colors">
                    +91 98765 43210
                  </a>
                  <p className="text-xs text-gray-400 mt-1">Mon-Sat, 9 AM - 7 PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 text-sm">Mumbai, Maharashtra, India</span>
                  <p className="text-xs text-gray-400 mt-1">Direct from farms</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} Roots & Richness. All rights reserved.
              </p>
              <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
              <p className="text-gray-400 text-xs">
                Crafted with ❤️ for wellness enthusiasts
              </p>
            </div>
            
            {/* Enhanced service highlights */}
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 text-xs">
              <div className="flex items-center space-x-2 bg-white/5 px-3 py-2 rounded-full">
                <Truck size={14} className="text-primary" />
                <span className="text-gray-300 font-medium">Free Shipping ₹500+</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 px-3 py-2 rounded-full">
                <Shield size={14} className="text-green-400" />
                <span className="text-gray-300 font-medium">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 px-3 py-2 rounded-full">
                <HeadphonesIcon size={14} className="text-blue-400" />
                <span className="text-gray-300 font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
          
          {/* Additional legal/compliance line */}
          <div className="mt-6 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              All products are manufactured under FSSAI guidelines. 
              <Link to="/terms-and-conditions" className="text-primary hover:underline ml-1">
                Terms apply
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
