import {useCallback, useEffect, useState} from 'react';
import {Platform} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

const useTicTac = (isRunning) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const isAndroid = Platform.OS === 'android';
  let counterAndroid;
  const updateSeconds = useCallback(() => {
    setSeconds((prev) => {
      const _seconds = prev + 1;
      if (_seconds === 59) {
        setSeconds(0);
        const _minutes = minutes + 1;
        if (_minutes === 60) {
          setMinutes(0);
          setHours((prevh) => prevh + 1);
        } else {
          setMinutes(_minutes);
        }
      } else {
        setSeconds(_seconds);
      }
    });
  }, [minutes]);

  useEffect(() => {
    if (isRunning) {
      BackgroundTimer.runBackgroundTimer(() => {
        updateSeconds();
      }, 1000);
    }
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [isRunning, updateSeconds]);

  const startClock = () => {
    if (isAndroid) {
      counterAndroid = BackgroundTimer.setInterval(() => {
        updateSeconds();
      }, 1000);
    } else {
      BackgroundTimer.start();
    }
  };

  const pauseClock = () => {
    if (isAndroid) {
      BackgroundTimer.clearInterval(counterAndroid);
    } else {
      BackgroundTimer.stop();
    }
    BackgroundTimer.stopBackgroundTimer();
  };

  const resetClock = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    BackgroundTimer.stopBackgroundTimer();
  };
  return {minutes, hours, seconds, startClock, pauseClock, resetClock};
};
export default useTicTac;
