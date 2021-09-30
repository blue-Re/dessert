import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import './index.css'

export default class index extends Component {
  state = {
    
  }
  login = () => {
    // 获取输入框的值
    let username = this.username.value
    let password = this.password.value
    // 获取到用户名和密码后开始登录
    console.log(username,password);
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
