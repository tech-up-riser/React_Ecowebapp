/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import router from './router';
import store from './store';

// Enable dev tools
window.React = React;

// Render to dom
window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      {router}
    </Provider>,
    window.document.getElementById('react-content')
  );
};
