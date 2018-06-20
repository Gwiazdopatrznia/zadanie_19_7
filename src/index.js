import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import {addComment} from './actions';
import {createStore, combineReducers} from 'redux';
import DevTools from './DevTools';
import reducer from './reducer.js';

const store = createStore(
  reducer,
  DevTools.instrument()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('Pierwszy komentarz.'));
store.dispatch(addComment('Drugi komentarz.'));
store.dispatch(addComment('Trzeci komentarz.'));
