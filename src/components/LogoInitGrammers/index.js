import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {Image, StyleSheet, Linking} from 'react-native';
import LOGOIG from '../../assets/logo-ING.png';
import LOGOIG_WHITE from '../../assets/logo-white.png';
export default ({white = true}) => {
  const onPress = () => Linking.openURL('https://initgrammers.com');
  return (
    <RectButton style={[styles.container]} onPress={onPress}>
      <Image
        source={white ? LOGOIG_WHITE : LOGOIG}
        resizeMode="center"
        style={{width: '100%', height: 30}}
      />
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    width: '50%',
  },
});
