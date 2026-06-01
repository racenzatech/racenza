import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If the path contains a hash (e.g. /#services), find the element and scroll smoothly
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Wait briefly to allow DOM elements to render, especially on cross-page routing
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      // If navigating to a fresh page without a hash, reset scroll position to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHashElement;
