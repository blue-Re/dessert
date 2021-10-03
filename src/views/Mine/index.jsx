import React, { Component } from 'react'
import { Carousel, WingBlank,Grid } from 'antd-mobile';

export default class index extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: '1.7rem',
    optionsData:[
      {
        icon:<i className="iconfont icon-shoucangjia" style={{color:'rgba(255, 141, 26, 1)',fontSize:'0.45rem'}}/>,
        text:'收藏'
      },
      {
        icon:<i className="iconfont icon-31daipingjia" style={{color:'rgba(255, 141, 26, 1)',fontSize:'0.45rem'}}/>,
        text:'评价'
      },
      {
        icon:<i className="iconfont icon-jilu" style={{color:'rgba(255, 141, 26, 1)',fontSize:'0.45rem'}}/>,
        text:'浏览'
      },
      {
        icon:<i className="iconfont icon-hongbao" style={{color:'rgba(255, 141, 26, 1)',fontSize:'0.45rem'}}/>,
        text:'钱包'
      },
      {
        icon:<i className="iconfont icon-hongbao" style={{color:'rgba(255, 141, 26, 1)',fontSize:'0.45rem'}}/>,
        text:'红包\\卡卷'
      },
      {
        icon:<i className="iconfont icon-meijin" style={{color:'rgba(255, 141, 26, 1)',fontSize:'0.45rem'}}/>,
        text:'余额'
      },
    ],
    username:localStorage.getItem('username')
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          'http://xy-store.oss-cn-beijing.aliyuncs.com/bg1.png',
          'http://xy-store.oss-cn-beijing.aliyuncs.com/bg2.png',
          'http://xy-store.oss-cn-beijing.aliyuncs.com/bg3.png'],
      });
    }, 100);
  }
  render() {
    return (
      <div>
        <WingBlank >
          <Carousel
            autoplay={true}
            infinite
            dots={false}
          >
            {this.state.data.map(val => (
              <img
                key={val}
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            ))}
          </Carousel>
        </WingBlank>
        <div className="userInfo" style={{ position: 'relative', height: '1.28rem', textAlign: 'center' }}>
          <img style={{
            width: '1.28rem',
            height: '1.28rem',
            borderRadius: '50%',
            position: 'absolute',
            top: '-0.5rem',
            left: '0',
            bottom: '0',
            right: '0',
            margin: '0 auto',
            display: 'block'
          }} src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180520%2F0473e00bdfd2476fbe0c228a45a1652c.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635648455&t=74f7323e3d113e1dd95bc3b612e9e734" alt="avatar" />
          <div className="username" style={{ lineHeight: '0.48rem', position: 'absolute', top: '0.8rem', bottom: '0', left: '0', right: '0', width: '1.26rem', margin: '0 auto', }}>{this.state.username}</div>
        </div>
        <Grid 
          data={this.state.optionsData} 
          activeStyle={false} 
          columnNum={3}
          hasLine={false}
          />
      </div>
    )
  }
}
