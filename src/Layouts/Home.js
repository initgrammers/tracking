import React from 'react';
import {SafeAreaView} from 'react-native';
import {Box, Logo} from '../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const HomeLayout = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <KeyboardAwareScrollView>
        <Box flex={1} alignItems="center" pt="xl">
          {children}
        </Box>
      </KeyboardAwareScrollView>
      <Logo white={false} />
    </SafeAreaView>
  );
};

export default HomeLayout;
