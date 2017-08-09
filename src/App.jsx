import React, {Component} from 'react'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import {connect}  from 'react-redux'
import { CLICK_RIGHT_BUTTON } from 'reduxs/constant'
import {autobind} from 'core-decorators'
import Rx from 'rxjs'


const contexts = require.context('pages', true, /@index\.js$/)
const routers = contexts.keys().reduce((routers, key) => {
  const routeName = key.match(/([a-zA-Z\-0-9]+)\/@index.js$/i)[1]
  routers.push({
    path: routeName,
    component: contexts(key)
  })
  return routers
}, [])





@connect(
    state => {
        return {
        }
    },
    dispatch => {
        return {
          cancelActiveAll: () => dispatch({
            type: CLICK_RIGHT_BUTTON
          })
        }
    }
)
export default class App extends Component {


  render() {
    return (
      <Router>
        <Switch>
            {routers.map(route => (
              <Route 
                path={`/${route.path}`} 
                component={route.component.default} 
                key={route.path} 
                />
            ))}
            <Redirect from="/*" to="/login"></Redirect>
        </Switch>
      </Router>
    );
  }



  componentDidMount () {
      document.oncontextmenu = function(){return false};
      Rx.Observable.fromEvent(document, 'mouseup')
      .filter(e => e.button === 2)
      .subscribe(e => {
        this.props.cancelActiveAll()
      })
      
      //禁用浏览器后退键
      window.addEventListener('popstate', function () {
        history.pushState(null, null, document.URL);
      });
      
  }
}



