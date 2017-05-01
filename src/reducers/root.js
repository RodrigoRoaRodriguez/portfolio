import { createStore, combineReducers } from 'redux';
import ui from './uiReducer';
import query from './queryReducer';
import viz from './visualizationReducer';

const globalReducer = combineReducers({ ui, query, viz });

// Makes it possible reset the entire state with a RESET_ALL action
const rootReducer = (state, action) => globalReducer(action.type === 'RESET_ALL' ? undefined : state, action);

/* eslint-disable no-underscore-dangle */
const globalStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default globalStore;

