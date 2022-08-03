/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-30 15:44:47
 * @LastEditors: sj
 * @LastEditTime: 2022-08-03 11:32:13
 */
import Cookies from 'js-cookie' // 封装了操作cookie方法

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setTokenTime () {
  return Cookies.set('tokenTokenTime', Date.now())
}

export function getTokenTime () {
  return Cookies.get('tokenTokenTime')
}
