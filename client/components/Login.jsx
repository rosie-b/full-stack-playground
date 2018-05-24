import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Login = () => {
  return (
    <div>
      <h1>Login.jsx *check*</h1>
    </div>
  )
}

export default connect()(Login) 