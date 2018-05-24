import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Main = () => {
  return (
    <div>
      <h1>Main.jsx *check*</h1>
    </div>
  )
}

export default connect()(Main) 