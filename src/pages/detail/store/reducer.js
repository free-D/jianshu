import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  content: '',
  title: ''
});

const initData = (state, action) => {
  return state.merge({
    content: action.content,
    title: action.title
  })
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.INIT_DATA:
      return initData(state, action);
    default:
      return state;
  }
}
