import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import HomeLayout from '../../../Layouts/Home';
import Clock from './components/Clock';
import useTracking from '../../../hooks/useTracking';
import useTicTac from '../../../hooks/useTicTac';
import {Box, Button, Text, RoundedButton} from '../../../components';

const Home = () => {
  const {navigate} = useNavigation();
  const [play, setPlay] = useState(false);
  const {resetTacking, history, distance} = useTracking(play);
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
      {/* <Button
        label="Ir al mapa.."
        onPress={() => navigate('Map', {history, distance})}
      /> */}
      <RoundedButton
        variant="primary"
        label={play ? 'Pausar' : 'Iniciar'}
        onPress={() => (play ? onPause() : onStart())}
      />
      {canStop && (
        <>
          <RoundedButton label="Detener" onPress={onStop} />
          <Button
            variant="primary"
            label="Guardar"
            onPress={() => {
              alert('Guardar');
            }}
          />
        </>
      )}
    </HomeLayout>
  );
};
export default Home;
