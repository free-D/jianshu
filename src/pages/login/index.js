import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import * as actionCreators from './store/actionCreators'
import { LoginWrapper, LoginBox, LoginInput, LoginButton } from './style'

class Login extends Component {
  render() {
    const { login, isLogin } = this.props;

    if(!isLogin){
      return (
        <LoginWrapper>
          <LoginBox>
            <LoginInput placeholder="账号" ref={input => this.name = input}/>
            <LoginInput placeholder="密码" ref={input => this.password = input}/>
            <LoginButton onClick={() => login(this.name, this.password)}>登陆</LoginButton>
          </LoginBox>
        </LoginWrapper>
      )
    }
    return <Redirect to="/"></Redirect>
  }
}

const mapDispatch = dispatch => {
  return {
    login(nameEl, passwordEl) {
      const name = nameEl.value;
      const password = passwordEl.value;
      dispatch(actionCreators.login(name, password))
    }
  }
}

const mapState = state => {
  return {
    isLogin: state.getIn(['login', 'isLogin'])
  }
}

export default connect(mapState, mapDispatch)(Login);
