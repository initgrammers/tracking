import React from 'react';
import {formatGeneralDate} from '../../../../../utils/dates';
import {Box, Text} from '../../../../../components';
const Details = ({distance, date = new Date()}) => {
  const labelDate = formatGeneralDate(date);
  return (
    <Box
      width="100%"
      bottom={0}
      borderRadius="l"
      p="l"
      height={120}
      alignItems="center"
      justifyContent="center"
      backgroundColor="white">
      <Box mb="m">
        <Text textAlign="center" variant="h6" color="primary">
          Detalles
        </Text>
        <Text variant="p" color="black">
          Distancia: {distance} km
        </Text>
        <Text variant="p" color="black">
          {`Fecha:  ${labelDate}`}
        </Text>
      </Box>
    </Box>
  );
};

export default Details;
