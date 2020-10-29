import React from 'react';
import MainNav from './navigation';
import {ThemeProvider} from '@shopify/restyle';
import {StatusBar} from 'react-native';
import theme from './components/theme';

const Index = () => (
  <ThemeProvider theme={theme}>
    <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle="light-content"
    />
    <MainNav />
  </ThemeProvider>
);

export default Index;
