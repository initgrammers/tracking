import React from 'react';
import {Box, Text} from '../../../../../components';
import {formatNumber} from './formatData';

const Clock = ({isPlay, minutes = 0, seconds = 0, hours = 0, onChange}) => {
  const labelSeconds = formatNumber(seconds);
  const labelMinutes = formatNumber(minutes);
  const labelHours = formatNumber(hours);

  return (
    <Box alignItems="center">
      <Text variant="h6" color="secondary" my="xl">
        Tiempo recorrido
      </Text>
      <Text
        variant="h1"
        fontSize={70}
        fontWeight="bold"
        color="primaryDark"
        mb="m">
        {`${labelHours}:${labelMinutes}:${labelSeconds}`}
      </Text>
    </Box>
  );
};

export default Clock;
