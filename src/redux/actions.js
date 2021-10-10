// 该模块包含了各个状态对象

// 导入抢购常量
import { RUSH_PURCHASE } from "./constant";

// 抢购的同步action
export function rush_purchase(data) {
  return {type:RUSH_PURCHASE,data}
}