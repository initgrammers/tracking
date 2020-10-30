import {useTheme} from '@shopify/restyle';
import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Box, Text} from '../../../../components';

const Clock = ({isPlay, isStop, onChange}) => {
  const WIDTH = 250;
  const RADIUS = WIDTH / 2;
  const margin = 16;
  const theme = useTheme();
  const primary = theme.colors.primary;
  return (
    <RectButton
      onPress={onChange}
      style={{
        width: WIDTH,
        height: WIDTH,
        borderRadius: RADIUS,
        backgroundColor: primary,
        margin,
      }}>
      <Box
        flex={1}
        height="100%"
        alignSelf="center"
        alignItems="center"
        justifyContent="center">
        {isPlay ? (
          <Icon name="pause" size={100} color="white" />
        ) : (
          <Icon name="play" size={100} color="white" />
        )}
        <Text variant="caption" color="secondary">
          12:12
        </Text>
      </Box>
    </RectButton>
  );
};

export default Clock;
