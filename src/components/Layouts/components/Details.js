import React from 'react';
import PropTypes from 'prop-types';
import {Box, Text} from 'src/styles/theme';
import {Image, ScrollView, StyleSheet} from 'react-native';
import Logo from 'src/components/Logo';
import {Icon} from 'src/components';
import {useTheme} from '@shopify/restyle';
import {FlatList, RectButton} from 'react-native-gesture-handler';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
const Details = ({data, title}) => {
  const {
    photos,
    phone,
    category,
    homeService,
    openTime,
    closeTime,
    comments,
  } = data;
  const {
    colors: {primary},
  } = useTheme();
  const SocialIcon = ({name}) => (
    <RectButton
      style={{
        borderRadius: 12,
        width: 24,
        height: 24,
        backgroundColor: primary,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <EvilIcons name={name} size={22} color="white" />
    </RectButton>
  );
  const TextWithLabel = ({label, text}) => (
    <Box flexDirection="row">
      <Text
        variant="caption"
        color="black"
        fontWeight="bold">{`${label}: `}</Text>
      <Text variant="caption" fontWeight="300" color="black">
        {text}
      </Text>
    </Box>
  );

  const Comment = ({photo, name, time, comment}) => (
    <Box
      width="45%"
      borderRadius="m"
      backgroundColor="cardBackground"
      p="m"
      m="s">
      <Box flexDirection="row">
        <Image
          source={{uri: photo}}
          style={{width: 28, height: 28, borderRadius: 14}}
        />
        <Box mb="m" ml="s">
          <Text variant="caption" color="black" mb="s" fontWeight="bold">
            {name.substr(0, 15)}
          </Text>
          <Text variant="caption" fontWeight="bold">
            {new Date(time).toLocaleDateString('es-ES')}
          </Text>
        </Box>
      </Box>
      <Text variant="caption" lineHeight={15}>
        {comment}
      </Text>
      <Box flexGrow={1} />
      <Box flexDirection="row" mt="s" justifyContent="space-around">
        <Box flexDirection="row" alignItems="center">
          <Icon name="heart-outline" size={24} />
          <Text ml="s" variant="body" fontWeight="400">
            29
          </Text>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Icon name="comment-text-outline" size={24} />
          <Text ml="s" variant="body" fontWeight="400">
            3
          </Text>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box flex={1} zIndex={-10}>
      <Box height={329} p="m" position="relative">
        <Image
          source={photos[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
          }}
        />
        <Logo />
        <Box pt="xl" flexDirection="row" justifyContent="space-between">
          <Box>
            <Text variant="body" color="white" fontWeight="300">
              {title.name}
            </Text>
            <Text variant="h3" color="white">
              {title.emphasis}
            </Text>
          </Box>
          <Box
            justifyContent="center"
            alignItems="center"
            borderRadius="l"
            width={48}
            height={48}
            backgroundColor="white">
            <Icon name="heart" color={primary} />
          </Box>
        </Box>
        <Box
          position="absolute"
          bottom={-50}
          alignSelf="center"
          width="100%"
          borderRadius="m"
          p="m"
          zIndex={999}
          height={133}
          backgroundColor="white">
          <Box position="relative" flex={1}>
            <Box
              flexDirection="row"
              mb="m"
              width={100}
              alignSelf="center"
              justifyContent="space-between">
              <SocialIcon name="sc-facebook" />
              <SocialIcon name="sc-youtube" />
              <SocialIcon name="sc-twitter" />
            </Box>
            <Box flexDirection="row" justifyContent="space-between">
              <Box>
                <TextWithLabel label="Teléfono" text={phone} />
                <TextWithLabel label="Categoría" text={category} />
              </Box>
              <Box>
                <TextWithLabel
                  label="Servicio a domicilio"
                  text={homeService ? 'Si' : 'No'}
                />
                <TextWithLabel
                  label="Hora"
                  text={`${openTime} a ${closeTime}`}
                />
              </Box>
            </Box>
            <Box
              position="absolute"
              bottom={-40}
              alignSelf="center"
              borderRadius="l"
              height={48}
              width={48}
              justifyContent="center"
              alignItems="center"
              backgroundColor="primary">
              <Icon name="map-marker-outline" />
            </Box>
          </Box>
        </Box>
      </Box>
      <ScrollView style={{zIndex: -100}}>
        <Box style={{marginTop: 70}} pt="l" paddingHorizontal="m" flex={1}>
          <Text fontWeight="bold" variant="p" color="black" mb="l">
            Fotos de usuarios
          </Text>
          <Box height={120} mb="m">
            <FlatList
              data={photos}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index}
              renderItem={({item}) => (
                <Image
                  source={item}
                  style={{
                    width: 98,
                    height: 117,
                    borderRadius: 10,
                    marginRight: 16,
                  }}
                />
              )}
            />
          </Box>
          <Text fontWeight="bold" variant="p" color="black" mb="m">
            Opiniones
          </Text>
          <Box flexDirection="row" flexWrap="wrap">
            {comments.map((comment, index) => (
              <Comment key={index} {...comment} />
            ))}
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};
Details.propTypes = {};
Details.defaultProps = {};
export default Details;
