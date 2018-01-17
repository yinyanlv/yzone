import {createStore, combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import registerReducer from './pages/Register/reducer';

const reducer = combineReducers({
  routing: routerReducer,
  register: registerReducer
});

const initialState = {};

export default createStore(reducer, initialState);