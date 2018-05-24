import request from 'superagent'
import {saveUserToken} from '../utils/auth'
import {receiveLogin} from './login'

export function registerUserRequest ({user_name, user_email, password}) {
  global.window.localStorage.setItem('things', 'stuff')
  return (dispatch) => {
    request
      .post('/api/v1/auth/register')
      .send({
        user_name, user_email, password
      })
      .end((err, res) => {
        if (err) {
          alert("Failed, try again.")
          console.log({err});
        }
        else {
          const userInfo = saveUserToken(res.body.token)
          dispatch(receiveLogin(userInfo))
          document.location = "/#/"
        }
      })
  }
}
