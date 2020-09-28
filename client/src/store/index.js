import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import editorReducer from './reducers/editorReducer';
import articleReducer from './reducers/articleReducer';
import matchReducer from './reducers/matchReducer';
import reviewReducer from './reducers/reviewReducer';
import groupReducer from './reducers/groupReducer';
import trendingReducer from './reducers/trendingReducer';
import brandReducer from './reducers/brandReducer';

const reducer = combineReducers({
  editorReducer,
  articleReducer,
  matchReducer,
  reviewReducer,
  groupReducer,
  trendingReducer,
  brandReducer
});

const store = createStore(reducer, applyMiddleware(thunk))

export default store;
