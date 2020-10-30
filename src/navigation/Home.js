import React from 'react';
import Home from '../screens/Main/Home';
import Map from '../screens/Main/Map';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@shopify/restyle';

const Stack = createStackNavigator();

const MainStack = () => {
  const theme = useTheme();
  const bgcolor = theme.colors.primary;
  const options = ({title}) => ({
    headerTitle: title,
    headerTintColor: 'white',
    headerStyle: {backgroundColor: bgcolor},
  });
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={options({title: 'Iniciar recorrido'})}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={options({title: 'Recorrido anterior'})}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
