'use client';

import { useState, useEffect } from 'react';
import { Share2, Check } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  slug: string;
}

export default function ShareButton({ title, slug }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState('');

  // Get the current URL on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  const handleShare = async () => {
    // Try native Web Share API first (mobile-friendly)
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
      } catch (error) {
        // User cancelled or error occurred
        if ((error as Error).name !== 'AbortError') {
          console.error('Error sharing:', error);
          fallbackCopyToClipboard();
        }
      }
    } else {
      // Fallback: Copy to clipboard
      fallbackCopyToClipboard();
    }
  };

  const fallbackCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error('Failed to copy:', error);
      // Final fallback: Select text manually
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Fallback copy failed:', err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
      title={copied ? 'Link copied!' : 'Share this article'}
    >
      {copied ? (
        <>
          <Check size={18} className="text-green-600" />
          <span className="text-green-600 font-medium">Copied!</span>
        </>
      ) : (
        <>
          <Share2 size={18} className="group-hover:scale-110 transition-transform" />
          <span>Share</span>
        </>
      )}
    </button>
  );
}
