import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import { searchUsers, requestUsers } from './reducers';

import * as serviceWorker from './serviceWorker';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({ searchUsers, requestUsers })
const store = 
  createStore(rootReducer, 
    applyMiddleware(thunkMiddleware, logger)
  )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
