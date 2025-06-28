
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  headline: string;
  subhead: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop&q=80",
    alt: "Traditional mustard farming in India",
    headline: "Purity from the Source",
    subhead: "Farm-sourced, untouched, and natural"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&h=1080&fit=crop&q=80",
    alt: "Wooden cold press extracting mustard oil",
    headline: "Wood-Pressed. No Compromise.",
    subhead: "Retaining nutrition, flavor, and texture"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1920&h=1080&fit=crop&q=80",
    alt: "Tribal women harvesting Arabica coffee",
    headline: "From Araku with Love",
    subhead: "Sustainably grown Arabica coffee"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1920&h=1080&fit=crop&q=80",
    alt: "Cold-pressed groundnut oil being bottled",
    headline: "Untouched. Natural. Real.",
    subhead: "Every drop tells a story of purity"
  }
];

const ScrollHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      
      // Calculate which slide should be active based on scroll position
      const slideHeight = window.innerHeight;
      const totalHeroHeight = slideHeight * heroSlides.length;
      
      if (scrollPosition < totalHeroHeight) {
        const newSlide = Math.floor(scrollPosition / slideHeight);
        setCurrentSlide(Math.min(newSlide, heroSlides.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSlideTransform = (index: number) => {
    const slideHeight = window.innerHeight;
    const slideScrollStart = index * slideHeight;
    const slideScrollEnd = (index + 1) * slideHeight;
    
    if (scrollY < slideScrollStart) {
      // Slide is coming from the right
      return 'translateX(100%)';
    } else if (scrollY >= slideScrollEnd) {
      // Slide has moved to the left
      return 'translateX(-100%)';
    } else {
      // Slide is currently active, calculate horizontal position
      const progress = (scrollY - slideScrollStart) / slideHeight;
      return `translateX(${(1 - progress) * 100 - 100}%)`;
    }
  };

  const getImageScale = (index: number) => {
    const slideHeight = window.innerHeight;
    const slideScrollStart = index * slideHeight;
    const slideScrollEnd = (index + 1) * slideHeight;
    
    if (scrollY >= slideScrollStart && scrollY < slideScrollEnd) {
      const progress = (scrollY - slideScrollStart) / slideHeight;
      // Slight zoom effect during transition
      return 1 + (progress * 0.05);
    }
    return 1;
  };

  const getTextOpacity = (index: number) => {
    const slideHeight = window.innerHeight;
    const slideScrollStart = index * slideHeight;
    const slideScrollEnd = (index + 1) * slideHeight;
    
    if (scrollY < slideScrollStart || scrollY >= slideScrollEnd) {
      return 0;
    } else {
      const progress = (scrollY - slideScrollStart) / slideHeight;
      // Fade in during first 20% and fade out during last 20%
      if (progress < 0.2) {
        return progress / 0.2;
      } else if (progress > 0.8) {
        return (1 - progress) / 0.2;
      } else {
        return 1;
      }
    }
  };

  return (
    <div className="relative">
      {/* Fixed container for the film roll effect */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-out"
            style={{ 
              transform: getSlideTransform(index),
              willChange: 'transform'
            }}
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                transform: `scale(${getImageScale(index)})`,
                willChange: 'transform'
              }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover opacity-0"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
            
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Overlay Text */}
            <section 
              className="absolute inset-0 flex items-end justify-center pb-20 px-4"
              style={{ 
                opacity: getTextOpacity(index),
                transition: 'opacity 0.6s ease-out'
              }}
            >
              <div className="max-w-4xl text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4 drop-shadow-lg">
                  {slide.headline}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-inter drop-shadow-md">
                  {slide.subhead}
                </p>
              </div>
            </section>
          </div>
        ))}
      </div>

      {/* Spacer to create scroll space for the film roll effect */}
      <div style={{ height: `${heroSlides.length * 100}vh` }} />

      {/* Scroll indicator - only visible on first slide */}
      {currentSlide === 0 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-center animate-bounce">
          <ChevronDown className="text-white w-8 h-8 drop-shadow-lg mx-auto mb-2" />
          <span className="text-white text-sm font-inter drop-shadow-md">Scroll to discover</span>
        </div>
      )}

      {/* CTA button appears after second slide */}
      {currentSlide >= 1 && (
        <div className="fixed bottom-8 right-8 z-10">
          <a
            href="/products"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Products
          </a>
        </div>
      )}
    </div>
  );
};

export default ScrollHero;
