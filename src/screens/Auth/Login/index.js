import React from 'react';
import {Button, Text, LayoutBackground, Box} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import Form from './components/Form';
import {backgroundImage} from '../../../constants';

const Login = () => {
  const {reset} = useNavigation();

  return (
    <LayoutBackground
      heightForm={320}
      image={backgroundImage[0]}
      ComponentForm={<Form />}>
      <Box flex={1} justifyContent="flex-end" pb="xl">
      </Box>
      <Box flex={1 / 3} alignItems="center" justifyContent="flex-end">
        <Text variant="h5" marginBottom="m">
          Iniciar sesión
        </Text>
        <Text marginBottom="m" color="white">
          Desliza para ir iniciar sesión
        </Text>
      </Box>
    </LayoutBackground>
  );

  /* return (
    <HomeLayout>
      <Text>Login</Text>
      <Button
        label="Ir al Home"
        onPress={() => reset({routes: [{name: 'Main'}]})}
      />
    </HomeLayout>
  ); */
};
export default Login;
