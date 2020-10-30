import React from 'react';
import PropTypes from 'prop-types';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {useSpring} from '../../hooks/useSpring';
import {useNavigation} from '@react-navigation/native';

const Layout = ({children, image, ComponentForm, heightForm}) => {
  const {goBack} = useNavigation();
  const translateY = useSpring({
    value: translation.y,
    velocity: velocity.y,
    state,
    snapPoints: [-heightForm, 0],
  });

  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
        <View
          style={[
            {
              ...StyleSheet.absoluteFillObject,
            },
            {transform: [{translateY}]},
          ]}>
          {image && (
            <Image
              source={image}
              style={{
                ...StyleSheet.absoluteFillObject,
                width: undefined,
                height: undefined,
                borderRadius: 30,
                resizeMode: 'cover',
              }}
            />
          )}
          {children}
        </View>
      {ComponentForm}
    </SafeAreaView>
  );
};

export default Layout;
