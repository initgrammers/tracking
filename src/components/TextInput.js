import React, {forwardRef} from 'react';
import {Box} from '../styles/theme';
import {TextInput, StyleSheet} from 'react-native';
import {useTheme} from '@shopify/restyle';

const TextInputRN = forwardRef(
  ({placeholder, icon, error, touched, ...props}, ref) => {
    const theme = useTheme();
    const validColor = !touched ? 'darkGray' : !error ? 'primary' : 'danger';
    const color = theme.colors[validColor];

    return (
      <Box
        flexDirection="row"
        height={56}
        borderRadius="s"
        borderColor={validColor}
        borderWidth={StyleSheet.hairlineWidth}
        alignItems="center"
        p="s"
        mb="m">
        <Box p="s">
        </Box>
        <Box flex={1}>
          <TextInput
            {...{ref}}
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            placeholder={placeholder}
            {...props}
          />
        </Box>
      </Box>
    );
  },
);
export default TextInputRN;
