
import React, { useState, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ScrollHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showShopButton, setShowShopButton] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&h=1080&fit=crop&q=80",
      headline: "Purity from the Source",
      subtext: "Farm-sourced, untouched, and natural.",
      alt: "Farmer harvesting mustard in Indian village"
    },
    {
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&h=1080&fit=crop&q=80",
      headline: "Wood-Pressed. No Compromise.",
      subtext: "Retaining nutrition, flavor, and texture.",
      alt: "Cold-pressed mustard oil extraction method"
    },
    {
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&h=1080&fit=crop&q=80",
      headline: "From Araku with Love",
      subtext: "Sustainably grown Arabica coffee.",
      alt: "Women picking coffee berries in Araku Valley"
    }
  ];

  const categories = ["Mustard Oil", "Groundnut Oil", "Coconut Oil", "Araku Coffee", "Cold-Pressed", "Wood-Pressed"];
  const searchSuggestions = categories.filter(cat => 
    cat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate current slide based on scroll position
      const slideIndex = Math.floor(scrollY / windowHeight);
      setCurrentSlide(Math.min(slideIndex, slides.length - 1));
      
      // Show shop button after second slide
      setShowShopButton(scrollY > windowHeight * 1.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slides.length]);

  return (
    <>
      {/* Hero Scroll Section */}
      <div className="relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden"
            style={{ zIndex: slides.length - index }}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
                currentSlide >= index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/30" />
            </div>
            
            <div className={`relative z-10 text-center text-white px-4 max-w-4xl transition-all duration-1000 delay-300 ${
              currentSlide >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4 leading-tight">
                {slide.headline}
              </h2>
              <p className="text-lg md:text-xl font-inter text-gray-200 max-w-2xl mx-auto">
                {slide.subtext}
              </p>
            </div>

            {/* Scroll hint on first slide */}
            {index === 0 && currentSlide === 0 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-sm font-inter">Scroll to explore</span>
                  <ChevronDown size={24} />
                </div>
              </div>
            )}

            {/* Hidden image for SEO */}
            <img 
              src={slide.image} 
              alt={slide.alt}
              className="sr-only"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Discovery Layer */}
      <section className="relative z-20 bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Smart Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-medium" size={20} />
                <input
                  type="text"
                  placeholder="Search for oils, coffee, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-neutral-light rounded-xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              
              {/* Search Suggestions */}
              {searchQuery && searchSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-neutral-light rounded-lg mt-2 shadow-lg z-30">
                  {searchSuggestions.map((suggestion, index) => (
                    <Link
                      key={index}
                      to={`/products?search=${suggestion}`}
                      className="block px-4 py-3 hover:bg-neutral-light transition-colors"
                      onClick={() => setSearchQuery('')}
                    >
                      {suggestion}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/products?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-6 py-3 bg-neutral-light hover:bg-primary hover:text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="text-center">
            <Link to="/products">
              <Button size="lg" className="btn-primary mr-4">
                Shop All Products
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="btn-outline">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Shop Now Button */}
      {showShopButton && (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
          <Link to="/products">
            <Button size="lg" className="btn-primary shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Shop Now
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ScrollHero;
