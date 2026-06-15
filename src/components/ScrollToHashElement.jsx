import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const { pathname, hash } = useLocation();

  // 1. Handle scrolling on fresh route transitions or cross-page navigations
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  // 2. Intercept click events on links pointing to the current page's hash
  // (Fixes the bug where subsequent clicks on the same link after manual scrolling do nothing)
  useEffect(() => {
    const normalizePath = (path) => path.replace(/\/$/, '') || '/';

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href && href.includes('#')) {
        const [pathPart, hashPart] = href.split('#');
        const targetId = hashPart;

        const isCurrentPage =
          !pathPart || 
          normalizePath(pathPart) === normalizePath(window.location.pathname);

        if (isCurrentPage) {
          const element = document.getElementById(targetId);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { capture: true });
    return () => document.removeEventListener('click', handleAnchorClick, { capture: true });
  }, []);

  return null;
};

export default ScrollToHashElement;
