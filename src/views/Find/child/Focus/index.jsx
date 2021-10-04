import React, { Component } from 'react'
import { Button } from 'antd-mobile';
import { reqFocus } from '../../../../api';

export default class index extends Component {
  state = {
    focusData: []
  }

  // 获取关注数据
  getFocusData = async () => {
    const result = await reqFocus()
    if (result.code === 0) {
      this.setState({ focusData: result.data })
      console.log(result.data);
    }
  }

  componentDidMount() {
    // this.getFocusData()
  }
  render() {
    const { focusData } = this.state
    return (
      <div>
        {
          focusData.map((focus) => {
            return (
              <div className="list" key={focus._id}>
                <img className="avatar" src={focus.avatarUrl} alt="" />
                <span className="title">{focus.author}</span>
                <Button
                  inline size="small"
                  style={{
                    marginRight: '4px',
                    color: 'white',
                    backgroundColor: 'rgba(255, 141, 26, 1)',
                    borderRadius: '8px',
                    float: 'right'
                  }}>+关注</Button>
                <div className="content">{focus.content}</div>
                <div className="imgList">
                  {
                    focus.imgList.map((img, index) => {
                      return (
                        <img key={index} src={img} alt="" />
                      )
                    })
                  }
                  {/*  <img src="../../../../../public/image/food1.jpg" alt="" />
                  <img src="../../../../../public/image/food1.jpg" alt="" />
                  <img src="../../../../../public/image/food1.jpg" alt="" /> */}
                </div>
                <div className="infos">
                  <span className="author">{focus.author}</span>
                  <i className="iconfont icon-yanjing"></i>
                  <span className="seeCount">{focus.seeCount}万人看过</span>
                </div>
              </div>
            )
          })
        }

      </div>
    )
  }
}
