import React from 'react';
import {Button, Text} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import HomeLayout from '../../../Layouts/Home';

const Login = () => {
  const {navigate} = useNavigation();

  return (
    <HomeLayout>
      <Text>Login</Text>
      <Button label="Ir al Home" onPress={() => navigate('Home')} />
    </HomeLayout>
  );
};
export default Login;
