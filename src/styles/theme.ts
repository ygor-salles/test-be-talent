const colors = {
  blue: {
    primary: '#0500FF',
    10: '#EDEFFB',
  },
  black: {
    neutral: '#1C1C1C',
  },
  gray: {
    neutral0: '#F0F0F0',
    neutral5: '#F5F5F5',
    neutral10: '#DFDFDF',
    neutral20: '#9E9E9E',
  },
  white: '#FFFFFF',
};

const shadow = {
  1: '0px 1px 2px 0px #00000033',
  2: '0px 2px 4px 0px #00000033',
  3: '0px 2px 8px 0px #00000033',
};

const spacing = {
  '1x': '4px',
  '2x': '8px',
  '3x': '16px',
  '4x': '20px',
  '5x': '28px',
  '6x': '32px',
  '7x': '40px',
  '8x': '60px',
  '9x': '80px',
};

const breakpoints = {
  xs: '@media screen and (max-width: 375px)',
  sm: '@media screen and (max-width: 600px)',
  md: '@media screen and (max-width: 900px)',
  lg: '@media screen and (max-width: 1200px)',
  xl: '@media screen and (max-width: 1536px)',
  xxl: '@media screen and (min-width: 1537px)',
  custom: (size: number) => `@media screen and (max-width: ${size}px)`,
};

const screenMeasurements = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
  xxl: 1537,
};

export type Theme = {
  colors: typeof colors;
  spacing: typeof spacing;
  breakpoints: typeof breakpoints;
  screenMeasurements: typeof screenMeasurements;
  shadow: typeof shadow;
};

export const THEME: Theme = {
  colors,
  spacing,
  breakpoints,
  screenMeasurements,
  shadow,
};
