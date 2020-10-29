import {createTheme, createText, createBox} from '@shopify/restyle';

const theme = createTheme({
  colors: {
    primary: '#FF256C',
    primaryLight: '#e7f9f7',
    primaryDark: 'rgb(147,225,211)',
    secondary: '#0c0d34',
    black: '#000',
    text: 'rgba(12,13,52,0.5)',
    white: '#fff',
    gray: 'rgba(12,13,52,0.05)',
    darkGray: '#8a8d90',
    lightGray: '#fafafa',
    shadow: 'rgba(0,0,0,0.63)',
    shadowLight: 'rgba(0,0,0,0.35)',
    cardBackground: 'rgba(0,0,0,0.05)',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    h1: {
      fontSize: 48,
      color: 'white',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 36,
      color: 'white',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 32,
      color: 'white',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: 28,
      color: 'white',
      fontWeight: 'bold',
    },
    h6: {
      fontSize: 26,
      color: 'white',
      fontWeight: 'bold',
    },
    p: {
      fontSize: 22,
      color: 'text',
    },
    body: {
      fontSize: 20,
      color: 'text',
    },
    caption: {
      fontSize: 12,
      color: 'text',
    },
    button: {
      fontSize: 18,
    },
  },
});

// export type Theme = typeof theme;
export const Text = createText();
export const Box = createBox();
export default theme;
