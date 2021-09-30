import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import Home from '../../views/Home'
import Find from '../../views/Find'
import Mine from '../../views/Mine'
import Order from '../../views/Order'
import NearBy from '../../views/NearBy'


class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    }
  }

  renderContent() {
    return (
      <div >
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/find" component={Find} />
          <Route path="/mine" component={Mine} />
          <Route path="/order" component={Order} />
          <Route path="/nearby" component={NearBy} />
          
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%' }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="rgba(255, 141, 26, 1)"
          barTintColor="white"
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title="主页"
            key="主页"
            icon={<i style={{ fontSize: 22 }} className="iconfont icon-wxbzhuye"></i>}
            selectedIcon={<i style={{ fontSize: 22 }} className="iconfont icon-wxbzhuye"></i>}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
              this.props.history.push('/home')
            }}
          >
            {this.renderContent()}
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{ fontSize: 22 }} className="iconfont icon-fujin"></i>}
            selectedIcon={<i style={{ fontSize: 22 }} className="iconfont icon-fujin"></i>}
            title="附近"
            key="附近"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
              this.props.history.push('/nearby')
            }}
          >
            {this.renderContent()}
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{ fontSize: 22 }} className="iconfont icon-yanjing"></i>}
            selectedIcon={<i style={{ fontSize: 22 }} className="iconfont icon-yanjing"></i>}
            title="发现"
            key="发现"
            selected={this.state.selectedTab === 'faxian'}
            onPress={() => {
              this.setState({
                selectedTab: 'faxian',
              });
              this.props.history.push('/find')
            }}
          >
            {this.renderContent()}
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{ fontSize: 22 }} className="iconfont icon-dingdan"></i>}
            selectedIcon={<i style={{ fontSize: 22 }} className="iconfont icon-dingdan"></i>}
            title="订单"
            key="订单"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
              this.props.history.push('/order')
            }}
          >
            {this.renderContent()}
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{ fontSize: 22 }} className="iconfont icon-wode"></i>}
            selectedIcon={<i style={{ fontSize: 22 }} className="iconfont icon-wode"></i>}
            title="我的"
            key="我的"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
              this.props.history.push('/mine')
            }}
          >
            {this.renderContent()}
          </TabBar.Item>
        </TabBar>
      </div>)
  }
}
export default withRouter(index)