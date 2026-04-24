import { useState, useEffect } from 'react';

export function useResponsiveScale() {
  const [scale, setScale] = useState(1);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const framePadding = windowWidth < 900 ? 24 : 56;
      const availableWidth = Math.max(windowWidth - framePadding * 2, 320);
      const availableHeight = Math.max(windowHeight - framePadding * 2, 320);

      const scaleX = availableWidth / 1920;
      const scaleY = availableHeight / 1080;
      const newScale = Math.min(scaleX, scaleY);

      setScale(newScale);
      setDimensions({
        width: 1920 * newScale,
        height: 1080 * newScale
      });
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    window.addEventListener('orientationchange', calculateScale);

    return () => {
      window.removeEventListener('resize', calculateScale);
      window.removeEventListener('orientationchange', calculateScale);
    };
  }, []);

  return { scale, dimensions };
}
