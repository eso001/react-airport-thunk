import { combineReducers } from 'redux';
import searchReducers from './Search/reducer';

export default combineReducers({
  search: searchReducers
});
