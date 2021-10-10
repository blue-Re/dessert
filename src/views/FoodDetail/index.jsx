import React, { Component } from 'react'
import { NavBar, Icon, Tabs, Badge, InputItem, Button, Toast } from 'antd-mobile';
import { withRouter } from 'react-router';
import { reqFoodById, reqFoodRemarkContent, foodRemark } from '../../api';
import './index.css'

class index extends Component {
  state = {
    tabs: [
      { title: <Badge >优惠信息</Badge> },
      { title: <Badge >用户评论</Badge> },
      { title: <Badge >商家信息</Badge> },
    ],
    shopInfo: [],
    disCounts: [],
    remark: [],
  }
  // 获取食物以及其评论信息
  getFoodById = async () => {
    // 使用Promise.all来发送两个请求，参数是一个数组，里边为对应的请求函数，返回的结果也会以数组的形式按序保存
    let _id = this.props.match.params._id
    const result = await Promise.all([reqFoodById(_id), reqFoodRemarkContent(_id)])

    console.log(result);
    if (result[0].code === 0 && result[1].code === 0) {
      this.setState({
        shopInfo: result[0].data[0],
        disCounts: result[0].data[0].disCounts,
        remark: result[1].data
      })
    }
  }
  // 评论
  remark = async () => {
    const { remark } = this.state
    // 拿到评论的内容
    const content = this.remarkContent.state.value
    // 获取食物对应的food_id
    const food_id = this.props.match.params._id
    // 获取评论者的姓名
    const username = localStorage.getItem('username')
    // 构造一个对象，将其推送到state中的remark中
    let obj = {
      username,
      food_id,
      content,
      time:Date().substring(10,32)
    }
    // 发送请求
    const result = await foodRemark(food_id, username, content)
    // console.log('我评论了！',remark);
    if (result.code === 0) {
      Toast.success('评论成功!')
      // 更新state中的评论内容
      this.setState({
        remark: [...remark, obj]
      })
      // 清空输入框
      this.remarkContent.state.value = ''
      // remark.push(obj)
      // console.log(remark);
    } else {
      Toast.fail(result.msg)
      // 清空输入框
      this.remarkContent.state.value = ''
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
              disCounts.map((dis, index) => {
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
              remark.map((remarkItem, index) => {
                return (
                  <div className="userMark" key={index}>
                    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180520%2F0473e00bdfd2476fbe0c228a45a1652c.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635648455&t=74f7323e3d113e1dd95bc3b612e9e734" alt="" />
                    <div className="remark-content">
                      <div className="top">
                        <span className="username">{remarkItem.username}</span>
                        <span className="time">{remarkItem.time}</span>
                      </div>
                      <div className="word">{remarkItem.content}</div>
                    </div>
                  </div>
                )
              })
            }
            <InputItem placeholder="请输入评论内容" ref={c => this.remarkContent = c} />
            <Button onClick={this.remark}>评论</Button>
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
