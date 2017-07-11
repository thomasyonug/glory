import React, {Component} from 'react'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

const contexts = require.context('pages', true, /@index\.js$/)
const routers = contexts.keys().reduce((routers, key) => {
  const routeName = key.match(/([a-zA-Z\-0-9]+)\/@index.js$/i)[1]
  routers.push({
    path: routeName,
    component: contexts(key)
  })
  return routers
}, [])

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
}



