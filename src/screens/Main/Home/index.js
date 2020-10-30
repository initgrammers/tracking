import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import HomeLayout from '../../../Layouts/Home';
import Clock from './components/Clock';
import useTracking from '../../../hooks/useTracking';
import useTicTac from '../../../hooks/useTicTac';
import {Button, Text} from '../../../components';

const Home = () => {
  const {goBack, navigate} = useNavigation();
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

  const onStart = () => {
    setPlay(true);
    startClock();
  };

  const onPause = () => {
    setPlay(false);
    pauseClock();
  };
  return (
    <HomeLayout>
      <Text variant="h1" color="primary">
        {distance} KM
      </Text>
      <Clock
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        isPlay={play}
        onChange={() => (play ? onPause() : onStart())}
      />
      <Button
        label="Detener"
        onPress={() => {
          resetClock();
          setPlay(false);
        }}
      />
      <Button
        label="Ir al mapa.."
        onPress={() => navigate('Map', {history, distance})}
      />
      {play && exitsHistory && (
        <Button
          label="Detener"
          onPress={() => {
            setPlay(false);
            resetTacking();
          }}
        />
      )}
    </HomeLayout>
  );
};
export default Home;
