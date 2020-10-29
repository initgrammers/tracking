import React from 'react';
import {useNavigation} from '@react-navigation/native';
import HomeLayout from '../../../Layouts/Home';
import Clock from './components/Clock';

const Home = () => {
  const {goBack, navigate} = useNavigation();

  return (
    <HomeLayout>
      <Clock />
    </HomeLayout>
  );
};
export default Home;
