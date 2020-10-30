import React from 'react';
import MainNav from './navigation';
import {ThemeProvider} from '@shopify/restyle';
import {StatusBar} from 'react-native';
import theme from './components/theme';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux';

const Index = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <MainNav />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default Index;
