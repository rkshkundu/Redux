import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import App1 from './components/App1';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

ReactDOM.render(
  <Provider store={store}>
    <App1 />
  </Provider>,
  document.getElementById('root1')
);

registerServiceWorker();
