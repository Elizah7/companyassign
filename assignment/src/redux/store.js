// src/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer ,{dataReducer2}from './reducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({ dataReducer,dataReducer2 });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
