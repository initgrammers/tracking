import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {Text} from './theme';

export default ({label, variant = 'default', onPress, children, mb = 8}) => {
  const theme = useTheme();
  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : theme.colors.gray;
  const color = variant === 'primary' ? theme.colors.white : theme.colors.title;

  return (
    <RectButton
      style={[styles.container, {backgroundColor, marginBottom: mb}]}
      onPress={onPress}>
      {children ? (
        children
      ) : (
        <Text variant="button" style={{color}}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};
const WIDTH = 80;
const RADIUS = WIDTH / 2;
const styles = StyleSheet.create({
  container: {
    borderRadius: RADIUS,
    height: WIDTH,
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
