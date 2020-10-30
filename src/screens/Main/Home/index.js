import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import HomeLayout from '../../../Layouts/Home';
import Clock from './components/Clock';
import useTracking from '../../../hooks/useTracking';
import useTicTac from '../../../hooks/useTicTac';
import useLocationRedux from '../../../hooks/useLocationRedux';
import {Box, Button, Text, RoundedButton} from '../../../components';
import {Alert} from 'react-native';
import _ from 'lodash';
import ListSites from './components/ListSites';

const Home = () => {
  const [play, setPlay] = useState(false);
  const {resetTacking, history, distance} = useTracking(play);
  const {saveLocation, locations} = useLocationRedux();
  const exitsHistory = history.length > 5;
  const {
    minutes,
    seconds,
    hours,
    startClock,
    pauseClock,
    resetClock,
  } = useTicTac(play);
  const canStop = !play && exitsHistory;

  const onStart = () => {
    setPlay(true);
    startClock();
  };
  const onPause = () => {
    setPlay(false);
    pauseClock();
  };
  const onStop = () => {
    setPlay(false);
    resetClock();
    resetTacking();
  };

  const onSave = () => {
    if (!_.isEmpty(history)) {
      saveLocation({history, distance, time: {minutes, seconds, hours}});
    }
    onStop();
    Alert.alert(
      'Alerta',
      'Los datos no son suficientes para guardar la sesion',
      [{text: 'OK'}],
      {
        cancelable: false,
      },
    );
  };
  const handleSave = () => {
    Alert.alert(
      'Confimación',
      '¿Está seguro de guardar la sesión?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK', onPress: () => onSave()},
      ],
      {
        cancelable: false,
      },
    );
  };
  return (
    <HomeLayout>
      <Text textAlign="center" variant="caption">
        De ser posible no ponga la aplicacion en segundo plano ni apage la
        pantalla
      </Text>
      <Clock
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        isPlay={play}
        onChange={() => (play ? onPause() : onStart())}
      />
      <Box alignItems="center" mb="l">
        <Text variant="p" color="primary">
          {distance} km
        </Text>
        <Text variant="caption">Distancia</Text>
      </Box>
      <RoundedButton
        variant="primary"
        label={play ? 'Pausar' : 'Iniciar'}
        onPress={() => (play ? onPause() : onStart())}
      />
      {canStop && (
        <>
          <RoundedButton label="Detener" onPress={onStop} />
          <Button variant="primary" label="Guardar" onPress={handleSave} />
        </>
      )}
      <ListSites data={locations} />
    </HomeLayout>
  );
};
export default Home;
