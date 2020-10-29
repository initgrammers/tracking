import React from 'react';
import {Button, Text} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import HomeLayout from '../../../Layouts/Home';

const Home = () => {
  const {goBack, navigate} = useNavigation();

  return (
    <HomeLayout>
      <Text>Home</Text>
      <Button label="Ir al mapa" onPress={() => navigate('Map')} />
      <Button label="Atras" onPress={goBack} />
    </HomeLayout>
  );
};
export default Home;
