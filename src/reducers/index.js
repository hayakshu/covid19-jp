import { combineReducers } from 'redux';
import covid19 from './covid19';

const reducer = combineReducers({
  covid19,
});

export default reducer;
