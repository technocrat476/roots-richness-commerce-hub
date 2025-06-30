
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state: cartState } = useCart();
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-sm border-b border-neutral-light sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Consistent styling */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="text-2xl font-playfair font-bold text-secondary">
              Roots & Richness
            </div>
          </Link>

          {/* Desktop Navigation - Enhanced consistency */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-medium transition-colors hover:text-primary duration-200 ${
                  isActive(item.href) 
                    ? 'text-primary font-semibold border-b-2 border-primary pb-1' 
                    : 'text-neutral-dark hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section - Enhanced styling */}
          <div className="flex items-center space-x-3">
            {/* Search Icon (Desktop) */}
            <button 
              className="hidden md:flex p-2 hover:bg-neutral-light rounded-lg transition-colors duration-200"
              aria-label="Search products"
            >
              <Search size={20} className="text-neutral-dark" />
            </button>

            {/* Cart - Enhanced with animation */}
            <Link
              to="/cart"
              className="flex items-center space-x-1 p-2 hover:bg-neutral-light rounded-lg transition-colors duration-200 relative group"
              aria-label={`Shopping cart with ${cartState.itemCount} items`}
            >
              <ShoppingCart size={20} className="text-neutral-dark group-hover:text-primary transition-colors" />
              {cartState.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium animate-pulse">
                  {cartState.itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu - Enhanced */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden hover:bg-neutral-light"
                  aria-label="Open navigation menu"
                >
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <div className="flex flex-col space-y-8 mt-8">
                  <div className="text-xl font-playfair font-bold text-secondary">
                    Roots & Richness
                  </div>
                  
                  <nav className="flex flex-col space-y-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`font-medium text-lg transition-colors hover:text-primary duration-200 py-2 px-3 rounded-lg ${
                          isActive(item.href) 
                            ? 'text-primary bg-primary/10 font-semibold' 
                            : 'text-neutral-dark hover:bg-neutral-light'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="pt-6 border-t border-neutral-light">
                    <button className="flex items-center space-x-3 w-full p-3 hover:bg-neutral-light rounded-lg transition-colors duration-200">
                      <Search size={20} className="text-neutral-dark" />
                      <span className="text-neutral-dark font-medium">Search Products</span>
                    </button>
                  </div>

                  {/* Mobile-specific trust indicators */}
                  <div className="pt-4 space-y-3">
                    <div className="text-sm text-neutral-medium space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>100% Chemical-Free</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Free Shipping ₹500+</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>COD Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
