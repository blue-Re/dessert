import { ajax } from "./ajax";

// 登陆
export function reqLogin(username, password) {
  return ajax({
    url: '/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

// 注册
export function reqRegister(username, password) {
  return ajax({
    url: '/register',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

// 获取食物信息
export const reqFoods = () => ajax({ url: '/foods' })
// 获取精品信息
export const reqBest = () => ajax({ url: '/best' })
// 获取关注信息
export const reqFocus = () => ajax({ url: '/focus' })
// 获取晒单信息
export const reqBasks = () => ajax({ url: '/bask' })
// 获取推荐信息
export const reqNews = () => ajax({ url: '/news' })

// 通过id寻找指定食物信息
export const reqFoodById = (_id) => ajax({ url: '/food_id', params: { _id } })
// 通过关键字搜素食物信息
export const searchFoodByKey = (searchText) => ajax({ url: '/food_key', params: { searchText } })
// 通过食物id寻找对应的评论内容
export const reqFoodRemarkContent = (food_id) => ajax({ url: '/find_remark_content', params: { food_id } })
// 对指定食物进行评论
export const foodRemark = (food_id, username, content) => ajax({
  url: '/food_remark',
  method: 'POST',
  data: {
    food_id, username, content
  }
})