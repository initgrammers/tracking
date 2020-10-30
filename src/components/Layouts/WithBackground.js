import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {useSpring} from '../../hooks/useSpring';
import {useNavigation} from '@react-navigation/native';
import {usePanGestureHandler} from 'react-native-redash';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const Layout = ({children, image, ComponentForm, heightForm}) => {
  const {goBack} = useNavigation();
  const {gestureHandler, translation, velocity, state} = usePanGestureHandler();
  const translateY = useSpring({
    value: translation.y,
    velocity: velocity.y,
    state,
    snapPoints: [-heightForm, 0],
  });

  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <PanGestureHandler {...gestureHandler}>
        <>
          <Animated.View
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
          </Animated.View>
          {ComponentForm}
        </>
      </PanGestureHandler>
    </SafeAreaView>
  );
};

export default Layout;
