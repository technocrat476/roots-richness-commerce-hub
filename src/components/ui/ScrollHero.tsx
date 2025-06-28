
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
    alt: "Wood-pressed mustard oil being extracted",
    headline: "Purity from the Source",
    subhead: "Traditional wood-pressed extraction methods preserve nature's goodness"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&h=1080&fit=crop&q=80",
    alt: "Pouring unrefined groundnut oil",
    headline: "Cold-Pressed. Unrefined. Real.",
    subhead: "Every drop carries the authentic taste and nutrition of pure oils"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1920&h=1080&fit=crop&q=80",
    alt: "Araku Valley tribal harvesting Arabica",
    headline: "From Araku with Love",
    subhead: "Tribal communities bring you the finest coffee straight from the mountains"
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
      return 'translateY(100%)';
    } else if (scrollY >= slideScrollEnd) {
      return 'translateY(-100%)';
    } else {
      const progress = (scrollY - slideScrollStart) / slideHeight;
      return `translateY(${(1 - progress) * 100 - 100}%)`;
    }
  };

  const getTextOpacity = (index: number) => {
    const slideHeight = window.innerHeight;
    const slideScrollStart = index * slideHeight;
    const slideScrollEnd = (index + 1) * slideHeight;
    
    if (scrollY < slideScrollStart || scrollY >= slideScrollEnd) {
      return 0;
    } else {
      const progress = (scrollY - slideScrollStart) / slideHeight;
      // Fade in during first 30% and fade out during last 30%
      if (progress < 0.3) {
        return progress / 0.3;
      } else if (progress > 0.7) {
        return (1 - progress) / 0.3;
      } else {
        return 1;
      }
    }
  };

  return (
    <div className="relative">
      {/* Fixed container for images */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out"
            style={{ 
              transform: getSlideTransform(index),
              willChange: 'transform'
            }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Overlay Text */}
            <div 
              className="absolute inset-0 flex items-center justify-center text-center px-4"
              style={{ 
                opacity: getTextOpacity(index),
                transition: 'opacity 0.5s ease-out'
              }}
            >
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-4 drop-shadow-lg">
                  {slide.headline}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-inter drop-shadow-md">
                  {slide.subhead}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Spacer to create scroll space */}
      <div style={{ height: `${heroSlides.length * 100}vh` }} />

      {/* Scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-white w-8 h-8 drop-shadow-lg" />
      </div>
    </div>
  );
};

export default ScrollHero;
