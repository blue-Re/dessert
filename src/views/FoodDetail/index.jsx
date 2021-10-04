import React, { Component } from 'react'
import { NavBar, Icon, Tabs, Badge } from 'antd-mobile';
import { withRouter } from 'react-router';
import './index.css'
import { reqFoodById } from '../../api';

class index extends Component {
  state = {
    tabs: [
      { title: <Badge >优惠信息</Badge> },
      { title: <Badge >用户评论</Badge> },
      { title: <Badge >商家信息</Badge> },
    ],
    shopInfo: [],
    disCounts: [],
    remark: []
  }
  getFoodById = async () => {
    let _id = this.props.match.params._id
    const result = await reqFoodById(_id)
    console.log(result);
    if (result.code === 0) {
      this.setState({
        shopInfo: result.data[0],
        disCounts: result.data[0].disCounts,
        remark: result.data[0].remark
      })
    }
  }
  componentDidMount() {
    this.getFoodById()
  }
  render() {
    // 当前路由下的_id
    console.log(this.props.match.params._id);
    // console.log(this.props);
    // 获取数据
    const { shopInfo, disCounts, remark } = this.state
    return (
      <div className="food-detail">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.go(-1)}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        />
        <div className="shop-info">

          <div className="header">
            <img src={shopInfo.imgUrl} alt="" className="avatar" />
            <div className="info">
              <span className="tag">品牌</span>
              <span className="title">{shopInfo.foodTitle}</span>
            </div>
          </div>
          <div className="content">{shopInfo.distance}</div>
          <ul className="infoList">
            <li className="decrement">满40减6（不与美食活动同享）</li>
            <li className="shift">{shopInfo.foodSite}</li>
            <li className="address">{shopInfo.content}</li>
          </ul>
        </div>
        <Tabs tabs={this.state.tabs}
          initialPage={0}
        >
          <div className="banner-title">
            <h5 >套餐专享</h5>
            {
              disCounts.map((dis,index) => {
                return (
                  <div className="disItem" key={index}>
                    <img src={dis.shopUrl} alt="" />
                    <div className="shopping">
                      <span className="shopping-title">{dis.disName}</span>
                      <div className="shopping-content">{dis.disInfo}</div>
                      <div className="saleCount">{dis.saleCount}</div>
                    </div>
                    <div className="pull">抢购</div>
                  </div>
                )
              })
            }

          </div>
          <div className="banner-title" >
            <h5 >用户评价</h5>
            {
              remark.map((remarkItem,index) => {
                return (
                  <div className="userMark" key={index}>
                    <img src="/public/image/food1.jpg" alt="" />
                    <div className="remark-content">
                      <div className="top">
                        <span className="username">{remarkItem.username}</span>
                        <span className="time">2019-1-19</span>
                      </div>
                      <div className="word">最爱铜锣烧，超甜，酥脆，口味很棒</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="banner-title" >
            <h5 >商家信息</h5>
            <div className="workTime">
              <h6 className="title">营业时间</h6>
              <div className="timer">周一至周日  09:00-22:00</div>
            </div>
            <div className="infos">共3家分店</div>
            <div className="infos">营业许可资质</div>
          </div>
        </Tabs>
      </div>
    )
  }
}
export default withRouter(index)
