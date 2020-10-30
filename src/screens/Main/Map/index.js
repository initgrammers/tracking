import React, {memo, useEffect, useRef, useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Box} from '../../../components';
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import CustomMarker from './components/Marker';
import Details from './components/Details';

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
  const LATITUDE_DELTA = distance > 0 ? Number(distance / 40) : 0.1022;
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
              strokeColor="#000"
              strokeColors={[
                '#7F0000',
                '#00000000',
                '#B24112',
                '#E5845C',
                '#238C23',
                '#7F0000',
              ]}
              strokeWidth={6}
            />
            <CustomMarker coords={history[0]} title="Inicio" />
            <CustomMarker coords={lastItem} title="Fin" />
          </>
        )}
      </MapView>
      <Details distance={distance} />
    </Box>
  );
};
export default memo(Map);
