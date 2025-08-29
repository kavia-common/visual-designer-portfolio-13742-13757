import { useEffect } from 'react';

// PUBLIC_INTERFACE
export function useSmoothScroll() {
  /**
   * Attaches a document click handler to smoothly scroll to in-page #anchors.
   * Cleans up on unmount.
   */
  useEffect(() => {
    function onClick(e) {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
    document.addEventListener('click', onClick, false);
    return () => document.removeEventListener('click', onClick, false);
  }, []);
}
