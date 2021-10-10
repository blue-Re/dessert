import React, { Component } from 'react'
import { reqBest } from '../../../../api'

export default class index extends Component {
  state = {
    bestList: []
  }

  // 获取精品数据
  getBestData = async () => {
    const result = await reqBest()
    if (result.code === 0) {
      this.setState({ bestList: result.data })
      console.log(result.data);
    }
  }

  componentDidMount() {
    this.getBestData()
  }
  render() {
    // 获取状态
    const { bestList } = this.state
    return (
      <div>
        {
          bestList.map((best) => {
            return (
              <div className="list" key={best._id}>
                <div className="content">{best.content}</div>
                <div className="imgList" >
                  {
                    best.imgList.map((img, index) => {
                      return (
                        <img key={index} src={img} alt="" />
                      )
                    })
                  }
                </div>
                <div className="infos">
                  <span className="author">{best.author}</span>
                  <i className="iconfont icon-yanjing"></i>
                  <span className="seeCount">{best.seeCount}万人看过</span>
                </div>
              </div>

            )
          })
        }
      </div>
    )
  }
}
