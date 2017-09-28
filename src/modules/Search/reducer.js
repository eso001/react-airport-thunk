import * as types from './action';
import airlineData from '../../data/airlines.json';
import airportData from '../../data/airports.json';
import Helper from './helper';

const initialState = {
  Airports: [],
  Airlines: [],
  Direction: 'Outbound'
};

const searchReducers = (state = initialState, action) => {
  switch(action.type) {

    case types.FILTER:

      let matches = Helper.filterAirports(airportData, action.payload)

      //Create list of all the airlines/times
      if (matches.length === 1) {
        var routes = Helper.createListOfTimes(airlineData, matches[0], state.Direction);
      }

      //If search is nothing, reset the list
      if (action.payload === '') {
        matches = []
      }

      return {
        ...state,
        Airports: matches,
        Airlines: routes
      }

    case types.SET_DIRECTION:
      return {
        ...state,
        Direction: action.payload
      }

    default:
      return state;

  }

}

export default searchReducers;
