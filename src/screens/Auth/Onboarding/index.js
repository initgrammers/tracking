import React from 'react';
import {Button, Text} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import HomeLayout from '../../../Layouts/Home';

const Onboarding = () => {
  const {navigate} = useNavigation();

  return (
    <HomeLayout>
      <Text>Onboarding</Text>
      <Button label="ir al Login" onPress={() => navigate('Login')} />
    </HomeLayout>
  );
};
export default Onboarding;
