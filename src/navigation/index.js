import React from 'react';
import Auth from './Auth';
import Main from './Home';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const MainStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Auth" headerMode="none">
      {/* <Stack.Screen name="Auth" component={Auth} /> */}
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStack;
