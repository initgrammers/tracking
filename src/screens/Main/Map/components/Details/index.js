import React from 'react';
import {Box, Text} from '../../../../../components';
const Details = ({distance, date}) => (
  <Box
    width="100%"
    bottom={0}
    borderRadius="l"
    p="l"
    height={120}
    justifyContent="center"
    backgroundColor="white">
    <Box mb="m">
      <Text textAlign="center" variant="h6" color="primary">
        Detalles
      </Text>
      <Text color="black">Distancia: {distance} km</Text>
      <Text color="black">{`Fecha:  ${date}`}</Text>
    </Box>
  </Box>
);

export default Details;
