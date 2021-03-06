import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {routerReducer} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import registerReducer from './pages/Register/reducer';

const win = window;

const reducer = combineReducers({
  router: routerReducer,
  register: registerReducer
});

const initialState = {};

const middlewares = [thunkMiddleware];

const storeEnhancers = compose(applyMiddleware(...middlewares), win && win.devToolsExtension ? win.devToolsExtension() : (f) => f);

export default createStore(reducer, initialState, storeEnhancers);