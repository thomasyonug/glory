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
import 'rxjs'










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
        middlewares.glory,
        middlewares.epic,
        middlewares.epicHelper
      )
    )
)
window.store = store


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



