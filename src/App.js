import React, { Component } from 'react'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import Login from './views/Login'
import FoodDetail from './views/FoodDetail'
import Search from './views/Search'

import Main from './components/Main'
class App extends Component {
  render() {
    // 获取当前路由路径
    const { pathname } = this.props.location
    return (
      <div style={{ background: 'white', height: '100vh' }}>
        {
          localStorage.getItem('username') ? 
          <Switch>
            <Route path="/search" component={Search}/>
            <Route path="/foodDetail/:_id" component={FoodDetail} />
          </Switch>
            :
            <Redirect to="/login" />
        }

        {
          // 判断是否是登录页面，是就显示登录和注册，否则显示主要内容
          pathname === "/login" ?
            <Route path="/login" component={Login} />
            :
            <Main />
        }
      </div>
    )
  }
}
export default withRouter(App)