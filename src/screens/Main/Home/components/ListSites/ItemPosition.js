import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {Text, Box, CustomText} from '../../../../../components';
import {formatGeneralDate, formatTime} from '../../../../../utils/dates';

const ItemPosition = (position) => {
  const {
    history = [],
    distance,
    time: {seconds, minutes, hours},
    id,
  } = position;
  const points = history.length;
  const labelTime = formatTime(seconds, minutes, hours);
  const labelDate = formatGeneralDate(id * 1000);
  const {navigate} = useNavigation();
  return (
    <Box width="100%" mb="m">
      <Box flexDirection="row" justifyContent="space-between">
        <CustomText label="Fecha: " field={labelDate} />
        <CustomText label="Distancia: " field={`${distance} km`} />
      </Box>
      <CustomText label="Puntos registrados: " field={points} />
      <CustomText label="Tiempo: " field={labelTime} />
      <RectButton
        style={{width: 100, paddingVertical: 8}}
        onPress={() => navigate('Map', position)}>
        <Text textAlign="center">Ver la ruta</Text>
      </RectButton>
      <Box mt="s" width="100%" height={1} backgroundColor="black" />
    </Box>
  );
};
export default ItemPosition;
