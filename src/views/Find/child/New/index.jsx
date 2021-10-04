import React, { Component } from 'react'
import { reqNews } from '../../../../api'

export default class index extends Component {
  state = {
    newsData: []
  }

  getShopData = async () => {
    const result = await reqNews()
    if (result.code === 0) {
      this.setState({
        newsData: result.data
      })
    }
  }

  componentDidMount() {
    // this.getShopData()
  }

  render() {
    const { newsData } = this.state
    return (
      <div>
        {
          newsData.map((news) => {
            return (
              <div className="shop" key={news._id}>
                <div className="info">
                  <img className="avatar" src={news.avatarUrl} alt="" />
                  <div className="des">
                    <div className="top-des">
                      <span className="shop-name">{news.author}</span>
                      <span className="enter">进入店铺>&nbsp; </span>
                      <div className="content">
                        {news.content}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="imgList">
                  {
                    news.imgList.map((img, index) => {
                      return (
                        <div className="cakes" key={index}>
                          <img src={img.imgUrl} alt="" />
                          <div className="price-info">
                            <span className="text">{img.title}</span><br />
                            <div className="price">{img.price}</div>
                          </div>
                        </div>

                      )
                    })
                  }
                </div>
              </div>

            )
          })
        }


      </div>
    )
  }
}
