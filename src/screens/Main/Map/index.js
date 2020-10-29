import React from 'react';
import {Button, Text} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import HomeLayout from '../../../Layouts/Home';

const Map = () => {
  const {goBack} = useNavigation();
  return (
    <HomeLayout>
      <Text>Map</Text>
      <Button label="Atras" onPress={goBack} />
    </HomeLayout>
  );
};
export default Map;
