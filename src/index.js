import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
// import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

import App from './components/App';
import './index.css';

render(
  <Provider store={ store }>
      <Router history={ history }>
          <App />
      </Router>
  </Provider>,
  document.getElementById('root')
);
