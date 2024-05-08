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

  const isMobile = width <= 576;
  const isTablet = width <= 869;

  return { isTablet, isMobile };
};

export default useCheckIsMobile;
