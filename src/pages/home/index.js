import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { initHomeList, toggleTopShow } from './store/actionCreators'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'

class Home extends Component {
  render() {
    const { showScroll, hendleScollTop } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          showScroll ? <BackTop onClick={hendleScollTop}>回到顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.initHomeData();
    this.props.bindEvents();
  }

  componentWillMount() {
    this.props.removeEvents();
  }
}

const mapDispatch = dispatch => {
  return {
    initHomeData() {
      dispatch(initHomeList())
    },
    hendleScollTop() {
      window.scrollTo(0, 0);
    },
    bindEvents() {
      window.addEventListener('scroll', this.changeScrollTopShow)
    },
    removeEvents() {
      window.removeEventListener('scroll', this.changeScrollTopShow)
    },
    changeScrollTopShow() {
      if(document.documentElement.scrollTop > 100) {
        dispatch(toggleTopShow(true))
      }else{
        dispatch(toggleTopShow(false))
      }
    }
  }
}

const mapState = stste => {
  return {
    showScroll: stste.getIn(['home', 'showScroll'])
  }
}

export default connect(mapState, mapDispatch)(Home);
