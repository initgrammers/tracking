import React from 'react';
import {Button, Text} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import HomeLayout from '../../../Layouts/Home';

const Login = () => {
  const {reset} = useNavigation();

  return (
    <HomeLayout>
      <Text>Login</Text>
      <Button
        label="Ir al Home"
        onPress={() => reset({routes: [{name: 'Main'}]})}
      />
    </HomeLayout>
  );
};
export default Login;
