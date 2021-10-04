import React, { Component } from 'react'
import { NavBar, Icon, InputItem, Carousel, WingBlank, Tabs, Badge } from 'antd-mobile';
import Head from './child/Head';
import { reqFoods } from '../../api';
import { withRouter } from 'react-router';

class index extends Component {
  state = {
    slideIndex: 5,
    data: ['1', '2', '3', '4', '5', '6'],
    tabs: [
      { title: <Badge>面包甜点</Badge> },
      { title: <Badge >智能排序</Badge> },
      { title: <Badge >筛选</Badge> },
    ],
    foodData: []
  }
  // 食物接口
  initFoods = async () => {
    // 请求食物数据
    let result = await reqFoods()
    if (result.code === 0) {
      // 修改状态
      this.setState({
        foodData: result.data
      })
    }
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          'http://xy-store.oss-cn-beijing.aliyuncs.com/swiper1.jpg',
          'http://xy-store.oss-cn-beijing.aliyuncs.com/swiper2.jpg',
          'http://xy-store.oss-cn-beijing.aliyuncs.com/swiper3.jpg',
          'http://xy-store.oss-cn-beijing.aliyuncs.com/swiper4.jpg',
          'http://xy-store.oss-cn-beijing.aliyuncs.com/swiper5.jpg',
          'http://xy-store.oss-cn-beijing.aliyuncs.com/swiper6.jpg'
        ],
      });
    }, 100);
    // 请求食物数据
    this.initFoods()
  }
  render() {
    // 获取状态
    const { foodData } = this.state
    return (
      <div style={{ width: '100%', background: 'white' }}>
        <NavBar
          mode="light"
          icon={<Head />}
          rightContent={[
            <Icon key="0" type="ellipsis" style={{ color: 'rgba(56, 56, 56, 1)' }} />,
          ]}
        >
          <InputItem
            onClick={()=>this.props.history.push('/search')}
            style={{ width: '3.36rem' }}
            maxLength={15}
            placeholder="巧克力慕斯"
            clear
            moneyKeyboardAlign="left"
          ></InputItem>
        </NavBar>

        <WingBlank>
          <Carousel
            autoplay={true}
            infinite
            selectedIndex={this.state.slideIndex}
          >
            {this.state.data.map(val => (
              <img
                key={val}
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top', height: '3.2rem' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            ))}
          </Carousel>
        </WingBlank>
        <Tabs tabs={this.state.tabs}
          initialPage={0}
        >
          <div style={{ backgroundColor: '#fff' }}>
            {
              foodData.map((item) => {
                return <div
                  onClick={()=>this.props.history.push(`/foodDetail/${item._id}`)}
                  key={item._id}
                  className="foods"
                  style={{
                    width: '100%',
                    height: '2.2rem',
                    display: 'flex',
                    marginTop: '0.12rem'
                  }}>
                  <div className="left" style={{
                    width: '2rem',
                  }}>
                    <img
                      src={item.imgUrl}
                      alt=""
                      style={{
                        width: '1rem',
                        height: '1rem',
                        marginLeft: '0.32rem',
                        marginTop: '0.12rem'
                      }}
                    />
                  </div>
                  <div className="right" style={{ marginLeft: '0.22rem', width: '100%' }}>
                    <div className="title" style={{ color: 'rgba(56, 56, 56, 1)', fontWeight: 'bold', fontSize: '0.28rem', marginTop: '0.16rem' }}>{item.foodTitle}</div>
                    <div className="tips" style={{ color: 'rgba(166, 166, 166, 1)', fontSize: '0.22rem', marginTop: '0.1rem', marginLeft: '0.3rem' }}>
                      <span className="site" >{item.foodSite}</span>
                      <span className="distance" style={{ float: 'right', marginRight: '0.32rem' }}>{item.distance}</span>
                    </div>
                    <div className="content" style={{ color: 'rgba(166, 166, 166, 1)', fontSize: '0.22rem', marginTop: '0.3rem', marginLeft: '0.3rem' }}>{item.content}</div>
                  </div>
                </div>

              })
            }
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: '#fff' }}>
            排序
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: '#fff' }}>
            筛选
          </div>
        </Tabs>
      </div>
    )
  }
}
export default withRouter(index)