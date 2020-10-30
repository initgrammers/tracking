import {locationActions} from './types';

export const addLocation = (location) => ({
  type: locationActions.SAVE,
  payload: location,
});
