import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

/*
  Reducers

  Reducers match up the dispatched (fired) action with a function that should be called.

  It takes in a copy of state, modifies it, and returns the new state
  When state gets large, it makes sense to have multiple reducers that only deal with a piece of the state

*/

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, router: routerReducer});

export default rootReducer;