import React, { Component } from 'react'
import { Tabs, Badge } from 'antd-mobile';
import Best from './child/Best'
import Focus from './child/Focus'
import Bask from './child/Bask'
import New from './child/New'
import './index.css'
export default class index extends Component {
  state = {
    tabs: [
      { title: <Badge >精品</Badge> },
      { title: <Badge >关注</Badge> },
      { title: <Badge >晒单</Badge> },
      { title: <Badge >推荐</Badge> },
    ]
  }
  render() {
    return (
      <div>
        <Tabs tabs={this.state.tabs}
          initialPage={3}
          destroyInactiveTab={true}
          tabBarActiveTextColor="rgba(255, 141, 26, 1)"
          swipeable={false}
        >
          <div className="best"><Best /></div>
          <div className="focus"><Focus /></div>
          <div className="bask"><Bask /></div>
          <div className="new"><New /></div>
        </Tabs>
      </div>
    )
  }
}
