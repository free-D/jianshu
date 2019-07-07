import { fromJS } from 'immutable';
import axios from 'axios';
import * as constants from './constants';

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

const infoList = (list) => ({
  type: constants.SEARCH_INFO_LIST,
  list: fromJS(list),
  totalPage: Math.ceil(list.length / 10)
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then( res => {
      const list = res.data.data;
      dispatch(infoList(list))
    }).catch( err => console.log(err))
  }
}

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER,
})

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE,
})

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE ,
  page
})