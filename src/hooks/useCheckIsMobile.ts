import { useEffect, useState } from 'react';

const useCheckIsMobile = () => {
  // if (typeof window === 'undefined') {
  //   return { isTablet: false, isMobile: false };
  // }

  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  const isTablet = width <= 1080;

  return { isTablet, isMobile };
};

export default useCheckIsMobile;
