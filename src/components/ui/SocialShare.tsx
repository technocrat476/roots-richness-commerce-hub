
import { Facebook, Instagram, Youtube, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface SocialShareProps {
  url?: string;
  title?: string;
  className?: string;
}

const SocialShare = ({ url = window.location.href, title = 'Check this out!', className = '' }: SocialShareProps) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy the URL manually.",
        variant: "destructive",
      });
    }
  };

  const shareOnFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <span className="text-sm text-neutral-medium font-medium">Share:</span>
      
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={shareOnFacebook}
          className="text-neutral-dark hover:text-primary"
          aria-label="Share on Facebook"
        >
          <Facebook size={16} />
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
          className="text-neutral-dark hover:text-primary"
          aria-label="Copy link"
        >
          <LinkIcon size={16} />
        </Button>
      </div>

      <div className="flex items-center space-x-2 ml-6">
        <span className="text-sm text-neutral-medium font-medium">Follow us:</span>
        <a 
          href="https://www.facebook.com/rootsandrichness" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-dark hover:text-primary transition-colors duration-300"
          aria-label="Follow us on Facebook"
        >
          <Facebook size={16} />
        </a>
        <a 
          href="https://www.instagram.com/rootsandrichness" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-dark hover:text-primary transition-colors duration-300"
          aria-label="Follow us on Instagram"
        >
          <Instagram size={16} />
        </a>
        <a 
          href="https://www.youtube.com/@rootsandrichness" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-dark hover:text-primary transition-colors duration-300"
          aria-label="Subscribe to our YouTube channel"
        >
          <Youtube size={16} />
        </a>
      </div>
    </div>
  );
};

export default SocialShare;
