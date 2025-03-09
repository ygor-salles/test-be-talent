import { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';

const useWindowSize = () => {
  const { screenMeasurements } = useTheme();

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const width = windowSize.width;
  const height = windowSize.height;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width,
    height,
    xs: width <= screenMeasurements.xs,
    sm: width <= screenMeasurements.sm,
    md: width <= screenMeasurements.md,
    lg: width <= screenMeasurements.lg,
    xl: width <= screenMeasurements.xl,
    xxl: width >= screenMeasurements.xxl,
  };
};

export default useWindowSize;
