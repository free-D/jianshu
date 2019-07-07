import styled from 'styled-components';

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  top: 56px;
  right: 0;
  bottom: 0;
  left: 0;
  background: #eee;
`

export const LoginBox = styled.div`
  width: 400px;
  height: 180px;
  margin: 80px auto;
  padding-top: 20px;
  background: #fff;
  box-shadow: 0 0 8 rgba(0, 0, 0, .1);
`

export const LoginInput = styled.input`
  display: block;
  margin: 10px auto;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
`

export const LoginButton = styled.button`
  display: block;
  margin: 10px auto;
  width: 220px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background-color: #3194d0;
  border-radius: 15px;
  text-align: center;
`
