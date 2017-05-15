import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from 'reduxs/reducer'

const store = createStore(reducer)
//mock
import fetchMock from 'fetch-mock'
console.log(fetchMock)
fetchMock.get('*', {hello: 'world'});



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



