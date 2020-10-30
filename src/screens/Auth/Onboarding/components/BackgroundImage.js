import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Animated, StyleSheet} from 'react-native';

const BackgroundImage = ({time, images}) => {
  const lengthImages = images.length - 1;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const newIndex = prev + 1;
        if (prev === lengthImages) {
          return 0;
        }
        return newIndex;
      });
    }, time);
    return () => clearInterval(timer);
  }, []);

  return (
    <Animated.Image
      source={images[index]}
      style={[
        {
          ...StyleSheet.absoluteFillObject,
          width: undefined,
          height: undefined,
          resizeMode: 'cover',
        },
      ]}
    />
  );
};
BackgroundImage.propTypes = {
  time: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.any).isRequired,
};

BackgroundImage.defaultProps = {
  time: 1000,
};

export default BackgroundImage;
