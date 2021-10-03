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