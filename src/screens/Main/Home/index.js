import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import HomeLayout from '../../../Layouts/Home';
import Clock from './components/Clock';
import useTracking from '../../../hooks/useTracking';
import {Button, Text} from '../../../components';
import BackgroundGeolocation from 'react-native-background-geolocation';

const Home = () => {
  const {goBack, navigate} = useNavigation();
  const [play, setPlay] = useState(false);
  const {resetTacking, history, distance} = useTracking(play);
  const exitsHistory = history.length > 5;
  // const {history, distance} = {};
  return (
    <HomeLayout>
      <Text variant="h1" color="primary">
        {distance} KM
      </Text>
      <Clock isPlay={play} onChange={() => setPlay((prev) => !prev)} />
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
