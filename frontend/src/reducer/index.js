import { combineReducers } from 'redux';
import bookReducer from './bookReducer';

const rootReducer = combineReducers({
  books: bookReducer,
  // Add other reducers if needed
});

export default rootReducer;