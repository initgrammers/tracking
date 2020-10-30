import {locationActions} from './types';

export const saveLocation = (location) => ({
  type: locationActions.SAVE,
  payload: location,
});
