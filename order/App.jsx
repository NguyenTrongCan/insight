import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './startup/configureStore';
import AppRouter from './modules/AppRouter';
import './modules/i18n';


console.log('ESD ---------->');
const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  store.subscribe(() => {
    console.log('SFJ\'s store changed: ', store.getState());
  });
}

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const containerNode = document.getElementById('container');
ReactDOM.render(<App />, containerNode);
