import moment from 'moment';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addLocation} from '../redux/actions/locationActions';

const useLocationRedux = () => {
  const dispatch = useDispatch();
  const {locations} = useSelector(({locationState}) => locationState);
  const getRandomId = () => moment().unix();
  const saveLocation = (location) => {
    dispatch(addLocation({...location, id: getRandomId()}));
    Alert.alert('Guardado', 'Gracias por registrar tu sesión', [{text: 'OK'}], {
      cancelable: false,
    });
  };

  return {saveLocation, locations};
};
export default useLocationRedux;
