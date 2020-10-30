import React from 'react';
import {Box, Text} from './theme';
const CustomText = ({label, field}) => (
  <Box flexDirection="row">
    <Text color="primary" fontWeight="500">
      {label}
    </Text>
    <Text color="secondary">{field}</Text>
  </Box>
);

export default CustomText;
