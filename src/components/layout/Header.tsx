
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, Search, ChevronDown } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state: cartState } = useCart();
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { 
      href: '/products', 
      label: 'Shop',
      hasDropdown: true,
      dropdownItems: [
        { href: '/products?category=mustard-oil', label: 'Mustard Oil' },
        { href: '/products?category=coconut-oil', label: 'Coconut Oil' },
        { href: '/products?category=groundnut-oil', label: 'Groundnut Oil' },
        { href: '/products?category=coffee', label: 'Coffee' },
      ]
    },
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
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
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger className={`font-medium transition-colors hover:text-primary flex items-center space-x-1 ${
                    isActive(item.href) ? 'text-primary' : 'text-neutral-dark'
                  }`}>
                    <span>{item.label}</span>
                    <ChevronDown size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border border-neutral-light shadow-lg">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.href} asChild>
                        <Link
                          to={dropdownItem.href}
                          className="text-neutral-dark hover:text-primary hover:bg-neutral-light px-3 py-2 cursor-pointer"
                        >
                          {dropdownItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? 'text-primary' : 'text-neutral-dark'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Icon (Desktop) */}
            <button className="hidden lg:block p-2 hover:bg-neutral-light rounded-lg transition-colors">
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
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[80vw] max-w-sm bg-neutral-light border-l border-neutral-medium"
                style={{ backgroundColor: '#F6F1E9' }}
              >
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="text-xl font-playfair font-bold text-secondary">
                    Roots & Richness
                  </div>
                  
                  <nav className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                      <div key={item.href}>
                        <Link
                          to={item.href}
                          onClick={handleMenuItemClick}
                          className={`font-medium text-lg transition-colors hover:text-primary py-3 px-4 rounded-lg block ${
                            isActive(item.href) 
                              ? 'text-primary bg-primary/10 border-b-2 border-primary' 
                              : 'text-secondary hover:bg-primary/5'
                          }`}
                          style={{ color: isActive(item.href) ? '#D4A441' : '#1D3B2A' }}
                        >
                          {item.label}
                        </Link>
                        
                        {/* Mobile Dropdown Items */}
                        {item.hasDropdown && (
                          <div className="ml-4 mt-2 space-y-1">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                to={dropdownItem.href}
                                onClick={handleMenuItemClick}
                                className="block py-2 px-4 text-base text-neutral-dark hover:text-primary hover:bg-primary/5 rounded transition-colors"
                                style={{ color: '#1D3B2A' }}
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>

                  <div className="pt-4 border-t border-neutral-medium">
                    <button className="flex items-center space-x-3 w-full p-3 hover:bg-primary/5 rounded-lg transition-colors">
                      <Search size={20} className="text-secondary" />
                      <span className="text-secondary">Search Products</span>
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
