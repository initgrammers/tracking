import React, {memo, useEffect, useRef, useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Box, Text} from '../../../components';
import MapView, {PROVIDER_GOOGLE, Polyline, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const defaultLocation = {
  latitude: -0.2101861,
  longitude: -78.4908799,
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
  },
  map: {
    width: '100%',
    flex: 1,
    height: 'auto',
  },
});

const Map = ({route}) => {
  const {history, distance = 0} = route.params;
  const LATITUDE_DELTA =
    typeof distance !== 'string' || distance > 0
      ? Number(distance / 40)
      : 0.1022;
  const latitudeDelta = LATITUDE_DELTA;
  const longitudeDelta = LATITUDE_DELTA * ASPECT_RATIO;
  const [styleMap, setStyleMap] = useState(1);
  const region = useRef({
    ...defaultLocation,
    latitudeDelta,
    longitudeDelta,
    ...history[0],
  });
  const lastItem = history[history.length - 1];
  const existHistory = history.length > 5;
  useEffect(() => {
    setStyleMap(0);
  }, []);
  const Details = ({distance}) => (
    <Box
      width="100%"
      bottom={0}
      borderRadius="l"
      p="l"
      height={120}
      alignItems="center"
      justifyContent="center"
      backgroundColor="white">
      <Box mb="m">
        <Text variant="h6" color="primary">
          Detalles
        </Text>
        <Text variant="p" color="black">
          Distancia: {distance} km
        </Text>
        <Text variant="p" color="black">
          Fecha: 12/12/20
        </Text>
      </Box>
    </Box>
  );
  return (
    <Box style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsCompass
        loadingEnabled
        toolbarEnabled
        region={region.current}
        style={[{bottom: styleMap}, styles.map]}
        bottom={styleMap}>
        {existHistory && (
          <>
            <Polyline
              coordinates={history}
              strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
              strokeColors={[
                '#7F0000',
                '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                '#B24112',
                '#E5845C',
                '#238C23',
                '#7F0000',
              ]}
              strokeWidth={6}
            />
            <Marker coordinate={history[0]}>
              <Box
                backgroundColor="black"
                width={50}
                justifyContent="center"
                alignItems="center"
                height={50}>
                <Text color="white">Inicio</Text>
              </Box>
            </Marker>
            <Marker coordinate={lastItem}>
              <Box
                backgroundColor="black"
                width={50}
                justifyContent="center"
                alignItems="center"
                height={50}>
                <Text color="white">Fin</Text>
              </Box>
            </Marker>
          </>
        )}
      </MapView>
      <Details distance={distance} />
    </Box>
  );
};
export default memo(Map);
