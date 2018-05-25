import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'

function Main (props) {
  return (
    <div>
      <div>
        <h1>Main.jsx testing testing 123</h1>
        <Link to="/">Home</Link>
        {props.auth.isAuthenticated
          ? <button onClick={() => props.dispatch(logoutUser())}>Logout</button>
          : <div>
            <Link to="/login">Login</Link>&nbsp;
            <Link to="/register">Register</Link>
          </div>
        }
      </div>

    </div>
  )
}

const mapStateToProps = ({auth}) => {
  return {auth}
}

export default connect(mapStateToProps)(Main)