import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Box} from '../../../components';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;

const defaultLocation = {
  latitude: -0.2101861,
  longitude: -78.4908799,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const Map = () => {
  const [styleMap, setStyleMap] = useState(1);
  const region = useRef(defaultLocation);

  useEffect(() => {
    setStyleMap(0);
  }, []);
  return (
    <Box style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsCompass
        loadingEnabled
        toolbarEnabled
        region={region.current}
        style={[{bottom: styleMap}, styles.map]}
        bottom={styleMap}
      />
    </Box>
  );
};
export default Map;
