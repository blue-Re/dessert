import React, { Component } from 'react'
import { reqBasks } from '../../../../api'
export default class index extends Component {
  state = {
    baskData: []
  }

  // 获取晒单数据
  getBaskData = async () => {
    const result = await reqBasks()
    if (result.code === 0) {
      this.setState({ baskData: result.data })
    }
  }


  componentDidMount() {
    // this.getBaskData()
  }

  render() {
    const { baskData } = this.state
    return (
      <div>
        <div className="list">
          {
            baskData.map((bask) => {
              return (
                <div className="food" key={bask._id}>
                  <img src={bask.foodUrl} alt="" />
                  <div className="icon">
                    <i className="iconfont icon-aixin"></i>
                    <i className="iconfont icon-shoucang"></i>
                    <i className="iconfont icon-fenxiang"></i>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
