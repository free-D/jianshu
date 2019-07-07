import * as constants from './constants'
import axios from 'axios';
import { fromJS } from 'immutable'

const initHomeData = data => ({
  type: constants.INIT_HOMT_LIST,
  data: fromJS(data)
})

export const initHomeList = () => {
  return dispatch => {
    return axios.get('/api/home.json')
    .then( res => {
      const data = res.data.data;
      dispatch(initHomeData(data))
    })
    .catch( err => console.log(err))
  }
}

const changeArticleList = (data, page) => ({
  type: constants.CHANGE_ARTICLE_LIST,
  data: fromJS(data),
  page: page
})

export const getdMoreList = (page)=> {
  return dispatch => {
    return axios.get('/api/homeList.json?page=' + page)
    .then( res => {
      const data = res.data.data;
      dispatch(changeArticleList(data, page+1))
    })
    .catch( err => console.log(err))
  }
}

export const toggleTopShow = (flag) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show: flag
})
