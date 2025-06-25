
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
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-playfair font-bold text-secondary">
              Roots & Richness
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? 'text-primary' : 'text-neutral-dark'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Icon (Desktop) */}
            <button className="hidden md:block p-2 hover:bg-neutral-light rounded-lg transition-colors">
              <Search size={20} className="text-neutral-dark" />
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="flex items-center space-x-1 p-2 hover:bg-neutral-light rounded-lg transition-colors relative"
            >
              <ShoppingCart size={20} className="text-neutral-dark" />
              {cartState.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartState.itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="text-xl font-playfair font-bold text-secondary">
                    Roots & Richness
                  </div>
                  
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`font-medium text-lg transition-colors hover:text-primary ${
                          isActive(item.href) ? 'text-primary' : 'text-neutral-dark'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="pt-4 border-t border-neutral-light">
                    <button className="flex items-center space-x-3 w-full p-3 hover:bg-neutral-light rounded-lg transition-colors">
                      <Search size={20} className="text-neutral-dark" />
                      <span className="text-neutral-dark">Search Products</span>
                    </button>
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
