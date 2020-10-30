import React from 'react';
import Login from '../screens/Auth/Login';
import Onboarding from '../screens/Auth/Onboarding';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator initialRouteName="Onboarding" headerMode="none">
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default MainStack;
