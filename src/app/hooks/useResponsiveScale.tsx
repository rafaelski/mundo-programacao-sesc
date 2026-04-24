import { useState, useEffect } from 'react';

export function useResponsiveScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const scaleX = windowWidth / 1920;
      const scaleY = windowHeight / 1080;
      const newScale = Math.max(scaleX, scaleY);

      setScale(newScale);
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    window.addEventListener('orientationchange', calculateScale);

    return () => {
      window.removeEventListener('resize', calculateScale);
      window.removeEventListener('orientationchange', calculateScale);
    };
  }, []);

  return { scale };
}
