import { useEffect, useState } from "react";
import { Flame, Clock } from "lucide-react";

interface SaleInfoProps {
  saleEndTime?: string;
  saleActive?: boolean;
  purchasesToday?: number;
}

export const SaleInfo = ({ saleEndTime, saleActive = true, purchasesToday }: SaleInfoProps) => {
  const [timeLeft, setTimeLeft] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!saleEndTime || !saleActive || !mounted) return;
    
    const end = new Date(saleEndTime).getTime();
    
    const updateTimer = () => {
      const diff = end - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft(null);
        return false;
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        
        // Format with leading zeros
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        
        if (hours > 0) {
          setTimeLeft(`${formattedHours}h : ${formattedMinutes}m : ${formattedSeconds}s`);
        } else {
          setTimeLeft(`${formattedMinutes}m : ${formattedSeconds}s`);
        }
        return true;
      }
    };

    // Initial update
    if (!updateTimer()) return;

    const interval = setInterval(() => {
      if (!updateTimer()) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [saleEndTime, saleActive, mounted]);

  // Generate realistic buyer count (30-120 range) if not provided
  const buyersCount = purchasesToday || Math.floor(Math.random() * 91) + 30;

  // Don't render anything until mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  // Don't show if both features are inactive
  if (!saleActive && !purchasesToday) {
    return null;
  }

  return (
    <div className="bg-sale-bg border border-sale-border rounded-lg md:rounded-xl p-3 md:p-4 shadow-sale text-sale-text">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
        {/* Countdown Timer */}
        {saleActive && timeLeft && (
          <div className="flex items-center gap-2" role="timer" aria-live="polite" aria-atomic="true">
            <Clock className="text-sale-accent w-4 h-4 md:w-5 md:h-5 flex-shrink-0" aria-hidden="true" />
            <span className="font-medium text-sm md:text-base">
              {timeLeft.includes('h') ? 'Sale ends in ' : 'Hurry! Sale ends in '}
              <span className="font-semibold tabular-nums">{timeLeft}</span>
            </span>
          </div>
        )}

        {/* Buyer Activity Indicator */}
        <div className="flex items-center gap-2">
          <Flame className="text-sale-accent w-4 h-4 md:w-5 md:h-5 flex-shrink-0 animate-pulse" aria-hidden="true" />
          <span className="font-medium text-sm md:text-base">
            <span className="font-semibold">{buyersCount}</span> people bought this today
          </span>
        </div>
      </div>
    </div>
  );
};
