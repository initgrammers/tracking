import React from 'react';
import {Box, ButtonOutline, Text, Logo} from '../../../components';
import BackgroundImage from './components/BackgroundImage';
import {backgroundImage} from '../../../constants';
import {useNavigation} from '@react-navigation/native';

const Onboarding = () => {
  const {navigate} = useNavigation();

  return (
    <Box
      position="relative"
      flex={1}
      alignItems="center"
      justifyContent="space-around"
      p="xl">
      <BackgroundImage time={2500} images={backgroundImage} />
      <Box
        flex={1}
        width="100%"
        mt="xl"
        justifyContent="center"
        alignItems="flex-start">
        <Text variant="h2" color="white">
          Bienvenido
        </Text>
        <Text color="white">Descubre más!</Text>
      </Box>
      <Box
        flex={1 / 3}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around">
        <ButtonOutline
          enableDecoration
          label="Inicial sesión"
          onPress={() => navigate('Login')}
        />
      </Box>
      <Logo />
    </Box>
  );
};

export default Onboarding;
