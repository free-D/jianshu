// import * as constants from './constants'
import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  showScroll: false,
});

const initHomeLIST = (state, action) => {
  return state.merge(action.data);
}

const changeArticleList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.data),
    articlePage: action.page
  });
}

const toggleScrollTop = (state, action) => {
  return state.set('showScroll', action.show)
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.INIT_HOMT_LIST:
      return initHomeLIST(state, action)
    case constants.CHANGE_ARTICLE_LIST: 
      return changeArticleList(state, action)
    case constants.TOGGLE_SCROLL_TOP:
      return toggleScrollTop(state, action)
    default:
      return state;
  }
}
