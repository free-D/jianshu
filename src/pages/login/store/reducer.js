// import * as constants from './constants'
import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  isLogin: false,
  
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('isLogin', action.data);
    case constants.CHANGE_LOGOUT:
      return state.set('isLogin', false)
    default:
      return state;
  }
}
