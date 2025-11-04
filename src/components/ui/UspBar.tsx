import { Truck, Leaf, Users, Droplet } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

const usps = [
  { icon: Leaf, text: "100% Wood-Pressed Oils", ariaLabel: "Pure wood-pressed oils" },
  { icon: Users, text: "Sourced from Andhra Farmers", ariaLabel: "Directly sourced from local farmers" },
  { icon: Droplet, text: "No Additives or Refining", ariaLabel: "Pure unrefined oils without additives" },
  { icon: Truck, text: "Free Shipping Above ₹499", ariaLabel: "Free shipping on orders above 499 rupees" },
];

export const UspBar = () => {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
    dragFree: true 
  });
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`sticky top-0 z-50 bg-[#FDF8F3] text-[#3B2F2F] border-b border-[#E6D8C5] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      role="banner"
      aria-label="Brand unique selling points"
    >
      {/* Desktop View */}
      <div className="hidden md:flex justify-center items-center gap-8 lg:gap-12 py-3 px-4">
        {usps.map((usp, i) => (
          <div key={i} className="flex items-center gap-2">
            <usp.icon className="w-5 h-5 text-[#8B7355]" aria-hidden="true" />
            <span className="font-medium text-sm whitespace-nowrap" aria-label={usp.ariaLabel}>
              {usp.text}
            </span>
            {i < usps.length - 1 && (
              <div className="w-px h-4 bg-[#E6D8C5] ml-8 lg:ml-12" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="md:hidden overflow-hidden py-3" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {usps.map((usp, i) => (
            <div 
              key={i} 
              className="flex-[0_0_100%] min-w-0 flex items-center justify-center gap-2 px-4"
            >
              <usp.icon className="w-5 h-5 text-[#8B7355]" aria-hidden="true" />
              <span className="font-medium text-sm" aria-label={usp.ariaLabel}>
                {usp.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="md:hidden flex justify-center gap-1.5 pb-2" aria-hidden="true">
        {usps.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#E6D8C5]" />
        ))}
      </div>
    </div>
  );
};
