import React, { Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import store from './store'
import Header from './common/header'
import { GlobalStyle } from './style'
import { GlobalIcon } from './statics/iconfont/iconfont'

const LoadableHomeComponent = Loadable({
  loader: () => import('./pages/home'),
  loading: () => (<div>正在加载</div>),
});

const LoadableWriteComponent = Loadable({
  loader: () => import('./pages/write'),
  loading: () => (<div>正在加载</div>),
});

const LoadableDetailComponent = Loadable({
  loader: () => import('./pages/detail'),
  loading: () => (<div>正在加载</div>),
});

const LoadableLoginComponent = Loadable({
  loader: () => import('./pages/login'),
  loading: () => (<div>正在加载</div>),
});

const App = (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <GlobalIcon />
      <BrowserRouter>
        <Fragment>
          <Header />
          <Route path="/" exact component={LoadableHomeComponent}></Route>
          <Route path="/login" exact component={LoadableLoginComponent}></Route>
          <Route path="/detail/:id" exact component={LoadableDetailComponent}></Route>
          <Route path="/write" exact component={LoadableWriteComponent}></Route>
        </Fragment>
      </BrowserRouter>
    </Fragment>
  </Provider>
);

export default App;
