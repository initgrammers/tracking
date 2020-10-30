import React from 'react';
import PropTypes from 'prop-types';
import {Image, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {PanGestureHandler, RectButton} from 'react-native-gesture-handler';
import {usePanGestureHandler} from 'react-native-redash';
import Animated from 'react-native-reanimated';
import {useSpring} from 'src/hooks/useSpring';
import PrincipalScreen from './components/PrincipalScreen';
import Details from './components/Details';

const wHeight = Dimensions.get('screen').height;

const LayoutNavigation = ({
  children,
  image,
  onBack,
  onNext,
  principal,
  details,
}) => {
  const {gestureHandler, translation, velocity, state} = usePanGestureHandler();
  const translateY = useSpring({
    value: translation.y,
    velocity: velocity.y,
    state,
    snapPoints: [-wHeight * 0.9, 0],
  });

  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={[
            {
              ...StyleSheet.absoluteFillObject,
              paddingTop: 64,
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
              blurRadius={3}
            />
          )}
          {children}
          <PrincipalScreen data={principal} onBack={onBack} onNext={onNext} />
        </Animated.View>
      </PanGestureHandler>
      <Details data={details} title={principal.title} />
    </SafeAreaView>
  );
};
LayoutNavigation.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.any,
  ComponentScreen: PropTypes.node,
};
LayoutNavigation.defaultProps = {
  image: undefined,
  ComponentScreen: undefined,
};

export default LayoutNavigation;
