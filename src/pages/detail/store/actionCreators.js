import { fromJS } from 'immutable'
import axions from 'axios';
import * as constants from './constants'

const inintData = (title, content) => ({
  type: constants.INIT_DATA,
  title: fromJS(title), 
  content: fromJS(content)
})
 
export const changeInintData = (id) => {
  return dispatch => {
    return axions.get('/api/detail.json?id=' + id)
    .then( res => {
      const data = res.data.data;
      dispatch(inintData(data.title, data.content))
    })
    .catch( err => {
      console.log(err)
    })
  }
}