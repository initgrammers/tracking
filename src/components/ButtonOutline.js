import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {Box, Text} from '../styles/theme';

const Button = ({label, onPress, children, enableDecoration}) => {
  const theme = useTheme();
  const white = theme.colors.white;
  const borderWidth = 2;
  return (
    <View style={[styles.container, {borderColor: white, borderWidth}]}>
      <RectButton onPress={onPress}>
        {children ? (
          children
        ) : (
          <Text p="s" color="white" variant="button">
            {label}
          </Text>
        )}
        {enableDecoration && (
          <Box
            width={50}
            backgroundColor="primary"
            bottom={1}
            left={20}
            height={borderWidth * 1.5}
          />
        )}
      </RectButton>
    </View>
  );
};
export default Button;
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 41,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 128,
  },
});
