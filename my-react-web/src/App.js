import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect, } from 'react-router-dom'
import routes from './router/router'

class App extends React.Component {

  setRoute = (routes) => {
    return routes.map((v, i) => {
      if (v.exact) {
        return <Route key={i} exact path={v.path}
          render={props => (
            <v.component {...props} routes={v.children} />
          )} />
      } else {
        return <Route key={i} path={v.path}
          render={props => (
            <v.component {...props} routes={v.children} />
          )} />
      }
    })
  }

  render() {
    this.setRoute(routes)
    return (
      
      <div className='App'>
        <Router>
          <Switch>
            {
              this.setRoute(routes)
            }
            <Redirect from='/*' to='/login'></Redirect>
          </Switch>
          
        </Router>
      </div>
    )
  }
}

export default App;