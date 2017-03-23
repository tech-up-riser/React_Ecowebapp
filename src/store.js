/* @flow */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducers as communicationReducers } from './communication';
import { reducers as coreReducers } from './core';
import { reducers as userReducers } from './user';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    ...communicationReducers,
    ...coreReducers,
    ...userReducers,
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(function*() {
  //TODO, run all saga's being used by the application
});

export default store;
