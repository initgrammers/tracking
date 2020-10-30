import {locationActions} from '../actions/types';

const initialState = {
  locations: [],
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case locationActions.SAVE:
      let newLocations = state.locations;
      newLocations.push(action.payload);
      return {...state, locations: newLocations};

    default:
      return state;
  }
};

export default locationReducer;
