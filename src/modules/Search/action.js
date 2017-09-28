import * as types from './types';

const search = query => ({type: types.FILTER, payload: query});

const setDirection = direction => ({type: types.SET_DIRECTION, payload: direction});

const setDirectionThunk = (direction, query) => dispatch => {
  dispatch(setDirection(direction));

  dispatch(search(query));
}

export default {
  search,
  setDirection,
  setDirectionThunk
}
