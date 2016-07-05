/**
 * 程序的入口, 类似java中的main
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import 'antd_css';  // 在这里引入antd的css

// 开始引入各种自定义的组件
import App from './components/App';
import Welcome from './components/Welcome';
import Error from './components/Error';
import Hello from './components/Hello';
import DBTable from './components/DBTable';

// 路由表, 必须和menu.js中一致
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>

      <Route path="index">
        <Route path="option1" component={DBTable}/>
        <Route path="option2" component={Hello}/>
        <Route path="option3" component={Hello}/>
      </Route>

      <Route path="daohang">
        <Route path="555" component={Hello}/>
        <Route path="sanji">
          <Route path="666" component={Hello}/>
          <Route path="777" component={Hello}/>
          <Route path="888" component={Hello}/>
          <Route path="999" component={Hello}/>
        </Route>
      </Route>

      <Route path="test">
        <Route path="aaa" component={Hello}/>
        <Route path="bbb" component={Hello}/>
        <Route path="ccc" component={Hello}/>
        <Route path="sanjiaaa">
          <Route path="666aa" component={Hello}/>
        </Route>
        <Route path="sanjibbb">
          <Route path="666bb" component={Hello}/>
        </Route>
      </Route>

      <Route path="*" component={Error}/>

    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
