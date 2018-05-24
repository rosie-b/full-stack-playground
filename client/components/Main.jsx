import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Main = () => {
  return (
    <div>
      <h1>I am the main page</h1>
    </div>
  )
}

export default connect()(Main) 