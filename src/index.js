import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from 'reduxs/reducer'
import {Component} from 'react'
import * as plugins from 'plugin/index'


Object.keys(plugins).forEach(key => {
  Component.prototype[key] = plugins[key]
})

const store = createStore(reducer)



//mock
// if (process.env.NODE_ENV === 'development') {
//   Promise.all([
//     import('fetch-mock'),
//     import('./mock')
//   ]).then(([fetchMock, templateData]) => {
//     Object.keys(templateData).forEach(key => {
//       const {
//         method,
//         url,
//         data
//       } = templateData[key]
//       fetchMock[method](url, data)
//     })
//   })
// }


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



