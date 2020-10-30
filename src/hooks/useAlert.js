import {Alert} from 'react-native';

const useAlert = () => {
  const showAlert = ({
    title,
    message,
    rightButton = {
      text: 'Ok',
      onPress: () => console.log('der'),
      style: 'default',
    },
    leftButton = {
      text: 'Cancelar',
      onPress: () => console.log('Izq'),
      style: 'cancel',
    },
  }) => {
    Alert.alert(title, message, [rightButton, leftButton], {
      cancelable: false,
    });
  };
  return {showAlert};
};
export default useAlert;
