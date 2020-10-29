import React from 'react';
import Login from '../screens/Auth/Login';
import Onboarding from '../screens/Auth/Onboarding';
import Home from '../screens/Main/Home';
import Map from '../screens/Main/Map';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const MainStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStack;
