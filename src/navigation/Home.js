import React from 'react';
import Home from '../screens/Main/Home';
import Map from '../screens/Main/Map';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Map" component={Map} />
  </Stack.Navigator>
);

export default MainStack;
