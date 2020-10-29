import React from 'react';
import {Box, Text} from '../../../../components';

const Clock = () => {
  const WIDTH = 250;
  const RADIUS = WIDTH / 2;
  return (
    <Box
      alignSelf="center"
      backgroundColor="white"
      alignItems="center"
      justifyContent="center"
      style={{width: WIDTH, height: WIDTH, borderRadius: RADIUS}}>
      <Text variant="h1" color="secondary">
        12:43
      </Text>
    </Box>
  );
};

export default Clock;
