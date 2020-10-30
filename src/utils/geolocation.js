import {clockRunning} from 'react-native-reanimated';

export const getDistanceFromLatLonInKm = ({
  lastLatitude,
  lastLongitude,
  currentLatitude,
  currentLongitude,
}) => {
  const RADIO = 6371;
  const dLat = deg2Rad(currentLatitude - lastLatitude);
  const dLon = deg2Rad(currentLongitude - lastLongitude);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLon / 2) +
    Math.cos(deg2Rad(lastLatitude)) *
      Math.cos(deg2Rad(currentLatitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon * 2);
  const c = 2 * Math.atan(Math.sqrt(a), Math.sqrt(1 - a));
  console.log({
    lastLatitude,
    lastLongitude,
    currentLatitude,
    currentLongitude,
    dLat,
    dLon,
    a,
  });
  return Number(RADIO * c);
};

const deg2Rad = (deg) => Number((deg * Math.PI) / 180);
