import {
  GET_COUNTRY,
  GET_SEARCH,
  GET_DATA,
  GET_POLLUTION,
  GET_SUNRISE,
} from "./types";

const initialState = {
  location: [],
  countrie: [],
  data: [],
  pollution: [],
  sunrise: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        location: action.payload,
      };
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case GET_SEARCH:
      return {
        ...state,
        countrie: action.payload,
      };
    case GET_POLLUTION:
      return {
        ...state,
        pollution: action.payload,
      };
    case GET_SUNRISE:
      return {
        ...state,
        sunrise: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
