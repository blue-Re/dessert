// 引入createStore() 用于创建store的核心库
// applyMiddleware中间件，用来对异步action进行操作
import { createStore, applyMiddleware } from 'redux'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入所有的reduces
import allReducers from './reducers'

// 引入开发者工具
import { composeWithDevTools } from 'redux-devtools-extension'
// 创建store然后导出
export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))