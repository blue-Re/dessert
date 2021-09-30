import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Login from './views/Login'
import Register from './views/Register'

import Main from './components/Main'
class App extends Component {
  render() {
    // 获取当前路由路径
    const { pathname } = this.props.location
    return (
      <div>
        {
          // 判断是否是登录页面，是就显示登录和注册，否则显示主要内容
          pathname === "/login" ?
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
            :
            <Main />
        }
      </div>
    )
  }
}
export default withRouter(App)