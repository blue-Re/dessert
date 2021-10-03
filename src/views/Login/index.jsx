import React, { Component } from 'react'
import { Button, Toast } from 'antd-mobile'
import './index.css'
import { reqLogin, reqRegister } from '../../api'
import { withRouter } from 'react-router'

class index extends Component {
  // 登陆
  login = async () => {
    // 获取输入框的值
    let username = this.username.value
    let password = this.password.value
    // 获取到用户名和密码后开始登录

    // 先进性判空
    if (username === "" || password === "") {
      Toast.fail('用户名或密码不能为空！');
    } else {
      // 发送请求，开始登陆
      const result = await reqLogin(username, password)
      if (result.code === 0) {
        Toast.success(result.msg)

        // 将登陆者的信息保存下来
        localStorage.setItem('username',username)

        // 登录成功，跳转到首页
        this.props.history.replace('/home')
      } else {
        Toast.fail(result.msg)
      }
    }
  }
  // 注册
  register = async () => {
    // 获取输入框的值
    let username = this.username.value
    let password = this.password.value
    // 获取到用户名和密码后开始注册

    // 先进性判空
    if (username === "" || password === "") {
      Toast.fail('用户名或密码不能为空！');
    } else {
      // 发送请求，开始登陆
      const result = await reqRegister(username, password)
      if (result.code === 0) {
        Toast.success(`${result.msg},请进行登录！`)
      } else {
        Toast.fail(result.msg)
      }
    }
  }
  render() {
    return (
      <div className="login" >
        <div className="form">
          <i className="iconfont icon-geren" /><input ref={c => this.username = c} type="text" placeholder="账号" /><br />
          <i className="iconfont icon-suoding" /><input ref={c => this.password = c} type="password" placeholder="密码" />
          <div className="btns"
            style={{ display: 'flex', justifyContent: 'center', marginTop: '0.1rem' }}>
            <Button
              onClick={() => this.register()}
              style={{
                width: '2rem',
                marginLeft: '0.6rem',
                background: 'white',
                color: 'rgba(255,141,26,100)',
              }}>注册</Button>
            <Button
              onClick={() => this.login()}
              style={{
                width: '2rem',
                marginLeft: '0.4rem',
                backgroundColor: 'rgba(255,141,26,100)'
              }}>登录</Button>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(index)