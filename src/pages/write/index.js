import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class Write extends Component {
  render() {
    const { isLogin } = this.props;
    console.log(1)
    if(isLogin){
      return <div>写文章</div>
    }
    return <Redirect to="/login"></Redirect>
  }
}

const mapDispatch = dispatch => {
  return {
  }
}

const mapState = state => {
  return {
    isLogin: state.getIn(['login', 'isLogin'])
  }
}

export default connect(mapState, mapDispatch)(Write);
