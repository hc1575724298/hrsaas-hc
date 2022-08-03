/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-30 15:44:47
 * @LastEditors: sj
 * @LastEditTime: 2022-08-03 12:09:33
 */
// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'
import { getTokenTime } from '@/utils/auth'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
}) // 创建一个axios的实例

//  // 判断token是否过期函数封装
function isTimeout () {
  const currentTime = Date.now()
  const tokenTime = getTokenTime()
  const timeout = 2 * 60 * 60 * 1000
  return currentTime - tokenTime > timeout
}

// 请求拦截器  config 当前请求的配置
service.interceptors.request.use(async config => {
  // 在这个位置需要统一的去注入token
  if (store.state.user.token) {

    // 判断token是否过期
    if (isTimeout()) {
      await store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('登陆过期'))

    } else {
       // 如果token存在 注入token
    config.headers['Authorization'] = `Bearer ${store.state.user.token}`
    }
  }
  return config // 必须返回配置
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((res) => {
  // 请求成功的函数
  const { success, data, message } = res.data
  if (success) { return data }
  Message.error(message)
  return Promise.reject(new Error(message))
},
  async function (err) {

    if (err?.response?.status === 401) {
      await store.dispatch('user/logout')
      router.push('/login')
      Message.error('登陆过期')
    } else {
      Message.error(err.message)
    }

    return Promise.reject(err)
  }
)
export default service // 导出axios实例
