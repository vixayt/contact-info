import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import { searchUsers } from './reducers';

import * as serviceWorker from './serviceWorker';
import 'tachyons';

const store = createStore(searchUsers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
