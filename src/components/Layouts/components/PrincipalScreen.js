import React from 'react';
import PropTypes from 'prop-types';
import {Box, Text} from 'src/styles/theme';
import {Icon} from 'src/components';
import {RectButton} from 'react-native-gesture-handler';
const PrincipalScreen = ({data, onBack, onNext}) => {
  const {title, description, likes, comments} = data;
  return (
    <>
      <Box flex={1} paddingHorizontal="l">
        <Box mb="xl" flexDirection="row" justifyContent="space-between">
          <Icon name="cog" />
          <Text color="white">Quito, Ecuador</Text>
          <Icon name="account" />
        </Box>
        <Box mb="m" flexDirection="row" justifyContent="space-evenly">
          <Box
            flexDirection="row"
            borderRadius="s"
            justifyContent="space-between"
            backgroundColor="shadowLight"
            p="s"
            flex={1}>
            <Text color="white" variant="body">
              Buscar categoria
            </Text>
            <Icon name="chevron-down" />
          </Box>
          <Box
            flexDirection="row"
            borderRadius="s"
            backgroundColor="shadowLight"
            flex={1 / 3}
            p="s"
            ml="m">
            <Icon name="view-dashboard-outline" />
            <Text color="white" variant="body">
              Vista
            </Text>
          </Box>
        </Box>
        <Box flex={1}>
          <Box flex={0.8} justifyContent="center">
            <Text variant="h5" fontWeight="normal">
              {title.name}
            </Text>
            <Text variant="h1">{title.emphasis}</Text>
          </Box>

          <Box flex={1} flexDirection="row" justifyContent="space-between">
            <RectButton onPress={onBack}>
              <Icon size={48} name="chevron-left" />
            </RectButton>
            <RectButton onPress={onNext}>
              <Icon size={48} name="chevron-right" />
            </RectButton>
          </Box>
        </Box>
      </Box>
      <Box height={329} backgroundColor="shadow" pt="xl" pl="l" pr="m" pb="l">
        <Text mb="m" variant="h6" fontWeight="normal">
          Información
        </Text>
        <Text
          variant="caption"
          lineHeight={18}
          color="white"
          fontWeight="normal">
          {description}
        </Text>
        <Box
          flex={1}
          flexDirection="row"
          alignItems="flex-end"
          justifyContent="space-around"
          pb="l">
          <Box flexDirection="row" alignItems="center">
            <Icon name="heart-outline" size={32} />
            <Text ml="s" variant="h4" fontWeight="400">
              {likes}
            </Text>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <Icon name="comment-text-outline" size={32} />
            <Text ml="s" variant="h4" fontWeight="400">
              {comments}
            </Text>
          </Box>
        </Box>
        <Box justifyContent="center" alignItems="center">
          <Icon name="chevron-up" />
          <Text color="white">Desliza hacia arriba</Text>
        </Box>
      </Box>
    </>
  );
};
PrincipalScreen.propTypes = {};
PrincipalScreen.defaultProps = {};
export default PrincipalScreen;
