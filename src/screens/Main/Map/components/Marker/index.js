import React from 'react';
import {Marker} from 'react-native-maps';
import {Box, Text} from '../../../../../components';
const CustomMarker = ({coords, title}) => {
  return (
    <Marker coordinate={coords}>
      <Box
        backgroundColor="black"
        width={50}
        justifyContent="center"
        alignItems="center"
        height={50}>
        <Text color="white">{title}</Text>
      </Box>
    </Marker>
  );
};
export default CustomMarker;
