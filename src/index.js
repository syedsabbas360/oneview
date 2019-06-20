import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tableReducer from './store/reducers/tableReducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
    currentData: null
};

const store = createStore(tableReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,  document.getElementById('root'));

serviceWorker.unregister();
