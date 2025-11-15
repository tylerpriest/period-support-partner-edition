// Design System Tokens

export const colors = {
  // Primary: Terracotta
  terracotta: {
    50: '#FFF4F0',
    100: '#FFE6DB',
    200: '#FFCDB7',
    300: '#FFB393',
    400: '#FF9A6F',
    500: '#E8734C', // Main brand color
    600: '#D15A31',
    700: '#A4461F',
    800: '#773314',
    900: '#4A200C',
  },

  // Secondary: Sage Green
  sage: {
    50: '#F6F8F4',
    100: '#E8EDE5',
    200: '#D4DED0',
    300: '#B8C9B0',
    400: '#9BB48E',
    500: '#7D9E6F',
    600: '#658354',
    700: '#4D683F',
    800: '#364C2C',
    900: '#1F301A',
  },

  // Neutrals (warm grays)
  neutral: {
    0: '#FFFFFF',
    50: '#FAF9F8',
    100: '#F3F1EE',
    200: '#E6E3DF',
    300: '#D4CFC8',
    400: '#B8B0A7',
    500: '#8F8782',
    600: '#6E675E',
    700: '#4E4841',
    800: '#342F2A',
    900: '#1C1917',
  },

  // Phase-specific colors
  menstrual: {
    primary: '#B35A47',
    background: '#FFF4F2',
    accent: '#E8734C',
  },
  follicular: {
    primary: '#7D9E6F',
    background: '#F6F8F4',
    accent: '#9BB48E',
  },
  ovulation: {
    primary: '#E8A54C',
    background: '#FFF9F0',
    accent: '#FFCF93',
  },
  luteal: {
    primary: '#C17854',
    background: '#FFF7F3',
    accent: '#E8985C',
  },

  // Semantic colors
  success: '#7D9E6F',
  warning: '#E8A54C',
  error: '#D15A31',
  info: '#4D7C9E',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 96,
};

export const typography = {
  // Headings
  h1: {
    fontFamily: 'DMSans-Bold',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  h2: {
    fontFamily: 'DMSans-Bold',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.3,
  },
  h3: {
    fontFamily: 'DMSans-Medium',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0,
  },
  // Body
  body: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  bodyBold: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    lineHeight: 24,
  },
  // UI
  button: {
    fontFamily: 'DMSans-Medium',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  caption: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  label: {
    fontFamily: 'DMSans-Medium',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
};

export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: '#1C1917',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#1C1917',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  lg: {
    shadowColor: '#1C1917',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 5,
  },
};

export const duration = {
  fast: 150,
  base: 250,
  slow: 350,
  slower: 500,
};

export const tokens = {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
  duration,
};

export default tokens;
