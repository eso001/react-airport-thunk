export const FILTER = 'FILTER';
export const SET_DIRECTION = 'SET_DIRECTION';

export function filterSearch(query) {
  return {
    type: FILTER,
    payload: query
  }
}

export function setDirection(direction) {
  return {
    type: SET_DIRECTION,
    payload: direction,
  }
}
