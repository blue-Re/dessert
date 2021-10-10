import React, { Component } from 'react'
import { NavBar, NoticeBar, Card } from 'antd-mobile';
import { connect } from 'react-redux';

class index extends Component {
  render() {
    // 从props中取出redux中的共享数据
    const { orderData } = this.props
    return (
      <div>
        <NavBar mode="light">我的订单</NavBar>
        {
          orderData.length === 0 ? <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>目前您还暂无订单！！！</NoticeBar> :
            orderData.map((item, index) => {
              return (
                <Card key={index}>
                  <Card.Header
                    thumb={item.shopUrl}
                    extra={<span>{item.disName}</span>}
                  />
                  <Card.Body>
                    <div>{item.disInfo}</div>
                  </Card.Body>
                </Card>
              )
            })
        }
      </div>
    )
  }
}

// disInfo: "周末超值冰淇淋，爽口美食的必备，\r\n立享特色双人套餐"
// disName: "1人豪华套餐"
// saleCount: "半年销量 3566"
// shopUrl: "https://img1.baidu.com/it/u=1136220172,4189576221&fm=26&fmt=auto"


export default connect(
  state => ({ orderData: state.rush_purchase_data }),
  {

  }
)(index)
