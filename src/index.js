import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from 'reduxs/reducer'

const store = createStore(reducer)

//mock
if (process.env.NODE_ENV === 'development') {
  const fetchMock = require('fetch-mock')
  const templateData = require('./mock')
  Object.keys(templateData).forEach(key => {
    const {
      method,
      url,
      data
    } = templateData[key]
    fetchMock[method](url, data)
  })
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



