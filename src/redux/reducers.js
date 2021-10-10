// reducers本质是一个函数，会接受到两个参数
// preState 之前的状态  action 动作类型对象

// 将常量导入
import { RUSH_PURCHASE } from "./constant";

// 引入汇总的combineReducers
import { combineReducers } from "redux";

// 抢购
// 首先应该初始化状态
const initRushPurchaseState = []
// 抢购的reducers
export function rush_purchase_data(preState = initRushPurchaseState, action) {
  // 从action对象中取出加工数据的类型和要加工的数据
  const { type, data } = action
  switch (type) {
    // 抢购的话，就把数据添加到原始数组当中
    case RUSH_PURCHASE:
      return  [...preState,data]
    // 默认返回初始化状态
    default:
      return preState
  }
}

// 对所有的reducers进行汇总 然后进行导出
const allReducers = combineReducers({
  rush_purchase_data
})
export default allReducers
