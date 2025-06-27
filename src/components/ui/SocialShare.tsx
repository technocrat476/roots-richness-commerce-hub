
import { Facebook, Instagram, Youtube, Share2, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface SocialShareProps {
  url?: string;
  title?: string;
  showFollowText?: boolean;
}

const SocialShare = ({ url, title, showFollowText = false }: SocialShareProps) => {
  const currentUrl = url || window.location.href;
  const shareTitle = title || document.title;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareOnNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          url: currentUrl,
        });
      } catch (err) {
        console.error('Error sharing: ', err);
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="flex items-center gap-4">
      {showFollowText && (
        <span className="text-sm font-medium text-neutral-medium">Follow us:</span>
      )}
      
      {/* Social Media Links */}
      <div className="flex items-center gap-3">
        <a 
          href="https://www.facebook.com/rootsandrichness" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#1D3B2A] hover:text-[#D4A441] transition-colors p-2 hover:bg-neutral-light rounded-full"
          aria-label="Follow us on Facebook"
        >
          <Facebook size={20} />
        </a>
        <a 
          href="https://www.instagram.com/rootsandrichness" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#1D3B2A] hover:text-[#D4A441] transition-colors p-2 hover:bg-neutral-light rounded-full"
          aria-label="Follow us on Instagram"
        >
          <Instagram size={20} />
        </a>
        <a 
          href="https://www.youtube.com/@rootsandrichness" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#1D3B2A] hover:text-[#D4A441] transition-colors p-2 hover:bg-neutral-light rounded-full"
          aria-label="Subscribe to our YouTube channel"
        >
          <Youtube size={20} />
        </a>
      </div>

      {/* Share Options */}
      <div className="flex items-center gap-2 ml-2 pl-2 border-l border-neutral-light">
        <Button
          variant="ghost"
          size="sm"
          onClick={shareOnNative}
          className="text-[#1D3B2A] hover:text-[#D4A441] hover:bg-neutral-light"
        >
          <Share2 size={16} className="mr-1" />
          Share
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="text-[#1D3B2A] hover:text-[#D4A441] hover:bg-neutral-light"
        >
          <Copy size={16} className="mr-1" />
          Copy
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;
