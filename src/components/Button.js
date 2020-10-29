import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {Text} from './theme';

export default ({label, variant = 'default', onPress, children}) => {
  const theme = useTheme();
  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : theme.colors.gray;
  const color = variant === 'primary' ? theme.colors.white : theme.colors.title;

  return (
    <RectButton style={[styles.container, {backgroundColor}]} onPress={onPress}>
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

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
