import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import {HashRouter as Router, Route,Link,NavLink,Switch} from 'react-router-dom';
import './App.css';
import AsyncComponent from './utils/AsyncComponent'

//import A from './pages/A';
import B from './pages/B';
const A = AsyncComponent(() => import('./pages/A'))

class App extends Component {
  render() {
    return (
      /* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">Button</Button>
      </div> */
      <div>
        <ul className="nav">
                            <li className='navbar-nav'><NavLink exact  to="/">首页</NavLink></li>
                            <li className='navbar-nav'><NavLink  to="/a">用户管理</NavLink></li>
                            <li className='navbar-nav'><NavLink  to="/b">个人中心</NavLink></li>
                        </ul>
        <Router>
          {/*Switch是匹配*/}
                        {/*exact 我们匹配/斜杠时候，就匹配第一个*/}
                        <Switch>
                          <Route path="/a" component={A} />
                          <Route path="/b"  component={B}/>
                        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
