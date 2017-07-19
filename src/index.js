import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'


import App from './App';
import reducer from 'reduxs/reducer'
import * as plugins from 'plugin/index'
import middlewares from 'middleware'
import './index.css';


Object.keys(plugins).forEach(key => {
  Component.prototype[key] = plugins[key]
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(
        middlewares.transer, 
        middlewares.roundHook,
        middlewares.glory
      )
    )
)
window.store = store
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



