// store.js
import { createStore, applyMiddleware,combineReducers } from 'redux';

import reducer from './Reducer/reducer';
import { thunk } from 'redux-thunk';
import loginReducer from './Reducer/authreducer';

const rootReducer = combineReducers({
    login: loginReducer,
    reducer: reducer, // Include other reducers here
  });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
