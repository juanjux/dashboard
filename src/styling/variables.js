const color = {
  accent: {
    deepOrange: '#EB7422',
    lightOrange: '#F2A83F',
  },
  base: {
    darkGrey: '#212121',
    lightGrey: '#B1B1B1',
    white: '#FFFFFF',
    black: '#0b0b0b',
    light: '#f9f7f5',
  },
  custom: {
    smoothGrey: '#dad7d0',
    highlight: '#FFFF00',
  },
};

const fontSizeHTML = 16;
const px2rem = px => (px / fontSizeHTML) + 'rem';

export const font = {
  size: {
    html: fontSizeHTML+'px',
    xlarge: px2rem(24),
    large: px2rem(20),
    regular: px2rem(16),
    small: px2rem(14),
  },
  lineHeight: {
    large: '1.45em',
    regular: '1.2em',
  },
  color: {
    dark: color.base.darkGrey,
    light: color.base.lightGrey,
    accentDark: color.accent.deepOrange,
    accentLight: color.accent.lightOrange,
  },
  family: {
    logo: 'Century Gothic',
    prose: 'Lato, sans-serif',
    code: 'Inconsolata',
  }
};

export const background = {
  main: color.base.white,
  dark: color.base.black,
  highlight: color.custom.highlight,
  light: color.base.light,
  accent: color.accent.deepOrange,
};

export const border = {
  light: color.base.lightGrey,
  smooth: color.custom.smoothGrey,
  accent: color.accent.deepOrange,
};

export const shadow = {
  topbar: 'rgba(138, 128, 115, 0.14)',
  primaryButton: 'rgba(191, 76, 50, 0.48)',
};
