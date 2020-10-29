import React from 'react';
import {SafeAreaView} from 'react-native';
import {Box} from '../components';

const HomeLayout = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Box flex={1} justifyContent="center" alignItems="center">
        {children}
      </Box>
    </SafeAreaView>
  );
};

export default HomeLayout;
