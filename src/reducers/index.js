import { combineReducers } from 'redux';

import articleReducer from './articleReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  articleReducer: articleReducer,
  searchReducer: searchReducer,
});

export default rootReducer;