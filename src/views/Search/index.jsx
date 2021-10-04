import React, { Component } from 'react'
import { NavBar, Icon, InputItem, Toast } from 'antd-mobile';
import { searchFoodByKey } from '../../api';
import { withRouter } from 'react-router';

class index extends Component {
  state = {
    searchText: '',
    notesData: [],
    hotData: ['巧克力慕斯', '奶油卷', '蛋黄派', '夹心饼干', '葡萄酒', '奶油咖喱草莓蛋糕'],
    searchData: []
  }
  // 输入框数据改变时重新改变searchText的值
  searchValue = (value) => {
    this.setState({
      searchText: value
    })
  }
  // 拿到输入框的值后进行搜素
  search = async () => {
    // 获取输入框的值
    const { searchText, notesData } = this.state
    // 判空
    if (searchText === "") {
      Toast.fail('关键字不能为空！')
    } else {
      // 发起请求，查找数据
      const result = await searchFoodByKey(searchText)
      console.log(result);
      if (result.code === 0) {
        Toast.success('玩命搜索中...')
        // 修改状态的数据
        this.setState({ searchData: result.data })
      } else {
        Toast.fail(result.msg)
      }
      // 每次将输入框的值推送到记录
      // 推送前先判断当前的关键字是否在原来数组中存在，若存在则不添加，否则再添加
      if (notesData.indexOf(searchText) === -1) {
        // 才会去添加
        this.setState({
          notesData: [...notesData, searchText]
        })
      }
    }
  }
  // 点击热门或者记录的文字，将其填充到输入框
  searchHotItem = (item) => {
    // console.log(item);
    // 拿到数据后，改变searchText的值
    this.setState({
      searchText: item
    })
  }
  render() {
    // 获取状态
    const { notesData, hotData, searchData } = this.state
    return (
      <div className="search" style={{ height: '100vh', overflow: 'hidden' }}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.go(-1)}
          rightContent={[
            <Icon
              onClick={() => this.search()}
              key="0" type="search" style={{ marginRight: '16px' }} />,
          ]}
        >
          <InputItem
            value={this.state.searchText}
            onChange={(value) => this.searchValue(value)}
            style={{
              height: '0.7rem',
              color: 'rgba(166, 166, 166, 1)',
              width: '200px', border: '1px solid rgba(166, 166, 166, 1)', borderRadius: '15px', padding: '0 10px'
            }}
            placeholder="巧克力蛋黄派"
          ></InputItem>
        </NavBar>

        <div style={{
          width: '100%',
          color: 'rgba(166, 166, 166, 1)',
          fontSize: '0.22rem',
          paddingTop: '0.5rem',
          paddingLeft: '0.72rem'
        }}>
          <div className="hot-search"  >
            <div>热门搜素</div>
            <div className="key" >
              {
                hotData.map((hotItem, index) => {
                  return (
                    <span
                      onClick={() => { this.searchHotItem(hotItem) }}
                      className="keyWords"
                      key={index}
                      style={{
                        display: 'inline-block',
                        padding: '0.1rem', margin: ' 0.1rem',
                        textAlign: 'center',
                        border: '1px solid rgba(243, 243, 243, 1)',
                        borderRadius: '8px'
                      }}>
                      {hotItem}
                    </span>
                  )
                })
              }
            </div>
          </div>

          <div className="search-note" style={{ marginTop: '0.2rem' }}>
            <h5>搜素记录</h5>
            <div className="notes">
              {
                notesData.map((note, index) => {
                  return (
                    <span
                      onClick={() => { this.searchHotItem(note) }}
                      key={index}
                      style={{
                        border: '1px solid  rgba(243, 243, 243, 1)',
                        borderRadius: '8px',
                        padding: '0.1rem',
                        margin: '0.1rem',
                        display: 'inline-block'
                      }}>{note}</span>
                  )
                })
              }
            </div>
          </div>
        </div>


        {
          searchData.length === 0 ?
            ''
            :
            searchData.map((searchItem) => {
              return (
                <div
                  key={searchItem._id}
                  onClick={() => this.props.history.push(`/foodDetail/${searchItem._id}`)}
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
                      src={searchItem.imgUrl}
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
                    <div className="title" style={{ color: 'rgba(56, 56, 56, 1)', fontWeight: 'bold', fontSize: '0.28rem', marginTop: '0.16rem' }}>{searchItem.foodTitle}</div>
                    <div className="tips" style={{ color: 'rgba(166, 166, 166, 1)', fontSize: '0.22rem', marginTop: '0.1rem', marginLeft: '0.3rem' }}>
                      <span className="site" >{searchItem.foodSite}</span>
                      <span className="distance" style={{ float: 'right', marginRight: '0.32rem' }}>{searchItem.distance}</span>
                    </div>
                    <div className="content" style={{ color: 'rgba(166, 166, 166, 1)', fontSize: '0.22rem', marginTop: '0.3rem', marginLeft: '0.3rem' }}>{searchItem.content}</div>
                  </div>
                </div>
              )
            })
        }
      </div>
    )
  }
}

export default withRouter(index)