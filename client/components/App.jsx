import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Login from './Login'
import Register from './Register'
import Main from './Main'

const App = ({auth}) => (
  <Router>
    <div>
      <h1>App.jsx *check*</h1>
      <Route exact path='/' component={props => auth.isAuthenticated
          ? <Main {...props} />
          : <Login {...props} />
        } />
        <Route path="/main" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </div>
  </Router>
)

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(App) 