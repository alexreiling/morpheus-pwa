import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { listen } = useHistory();
  const { pathname } = useLocation();
  useEffect(() => {
    const unlisten = listen(() => {
      setTimeout(() => window.scrollTo(0, 0), 0);
    });
    return () => {
      unlisten();
    };
  }, [pathname, listen]);

  return null;
}

export default ScrollToTop;
