import {useState, useEffect} from 'react';
import BackgroundGeolocation from 'react-native-background-geolocation';
import {getDistanceFromLatLonInKm} from '../utils/geolocation';

const useTracking = (isActive) => {
  const [location, setLocation] = useState({});
  const [history, setHistory] = useState([]);
  const [distance, setDistance] = useState(0);

  const resetTacking = () => {
    setLocation({});
    setHistory([]);
    setDistance(0);
    BackgroundGeolocation.removeAllListeners();
  };
  useEffect(() => {
    if (!isActive) {
      return;
    }
    BackgroundGeolocation.onLocation(
      ({coords, uuid, timestamp}) => {
        setLocation((prev) => ({
          ...prev,
          latitude: coords.latitude,
          longitude: coords.longitude,
        }));
        setHistory((prev) => {
          setDistance((prevDistance) => {
            if (prev.length === 0) {
              return 0;
            }
            const latestItem = prev[prev.length - 1];
            const km = getDistanceFromLatLonInKm({
              lastLatitude: latestItem.latitude,
              lastLongitude: latestItem.longitude,
              currentLatitude: coords.latitude,
              currentLongitude: coords.longitude,
            });
            const _distance = Number(prevDistance) + Number(km);

            return Number(_distance).toFixed(2);
          });

          return prev.concat({
            latitude: coords.latitude,
            longitude: coords.longitude,
            uuid,
            timestamp,
          });
        });
      },
      (error) => {
        console.warn('[location] ERROR -', error);
      },
    );

    // This handler fires when movement states changes (stationary->moving; moving->stationary)
    BackgroundGeolocation.onMotionChange((event) => {
      // console.log('[motionchange] -', event.isMoving, event.location);
    });

    // This event fires when a change in motion activity is detected
    BackgroundGeolocation.onActivityChange((event) => {
      // console.log('[activitychange] -', event); // eg: 'on_foot', 'still', 'in_vehicle'
    });

    // This event fires when the user toggles location-services authorization
    BackgroundGeolocation.onProviderChange((provider) => {
      // console.log('[providerchange] -', provider.enabled, provider.status);
    });

    ////
    // 2.  Execute #ready method (required)
    //
    BackgroundGeolocation.ready(
      {
        // Geolocation Config
        desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_MEDIUM,
        distanceFilter: 10,
        // Activity Recognition
        locationUpdateInterval: 10000,
        stopTimeout: 1,
        // Application config
        debug: false, // <-- enable this hear sounds for background-geolocation life-cycle.
        // logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
        stopOnTerminate: false, // <-- Allow the background-service to continue tracking when user closes the app.
        startOnBoot: false, // <-- Auto start tracking when device is powered-up.
        // HTTP / SQLite config
        // url: 'http://yourserver.com/locations',
        batchSync: false, // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
        autoSync: true, // <-- [Default: true] Set true to sync each location to server as it arrives.
        // headers: {
        //   // <-- Optional HTTP headers
        //   'X-FOO': 'bar',
        // },
        // params: {
        //   // <-- Optional HTTP params
        //   auth_token: 'maybe_your_server_authenticates_via_token_YES?',
        // },
      },
      (state) => {
        console.log(
          '- BackgroundGeolocation is configured and ready: ',
          state.enabled,
        );

        if (state.enabled) {
          ////
          // 3. Start tracking!
          //
          BackgroundGeolocation.start((props) => {
            console.log('- Start success');
          });
        }
      },
    );

    return () => {
      BackgroundGeolocation.removeAllListeners();
    };
  }, [isActive]);
  return {location, history, distance, resetTacking};
};

export default useTracking;
