import * as constants from './constants'
import axios from 'axios';
// import { fromJS } from 'immutable'

const changeLoginData = data => ({
  type: constants.CHANGE_LOGIN,
  data
})

export const login = (name, password) => {
  return dispatch => {
    return axios.get('/api/login.json?name=' + name + '&password=' + password)
    .then( res => {
      const data = res.data.data;
      dispatch(changeLoginData(data))
    })
    .catch( err => console.log(err))
  }
}

export const logOut = () => ({
  type: constants.CHANGE_LOGOUT
})
