import {locationActions} from '../actions/types';

const initialState = {
  locations: [],
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case locationActions.SAVE:
      return {...state, locations: [...state.locations, ...action.payload]};

    default:
      return state;
  }
};

export default locationReducer;
