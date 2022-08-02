/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-30 15:44:47
 * @LastEditors: sj
 * @LastEditTime: 2022-08-02 16:07:35
 */
// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
}) // 创建一个axios的实例

// 请求拦截器  config 当前请求的配置
service.interceptors.request.use(config => {
  // 在这个位置需要统一的去注入token
  if (store.state.user.token) {
    // 如果token存在 注入token
    config.headers['Authorization'] = `Bearer ${store.state.user.token}`
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
  function (err) {
    Message.error('系统异常')
    return Promise.reject(err)
  }
)
export default service // 导出axios实例
