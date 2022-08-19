/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-30 15:44:47
 * @LastEditors: sj
 * @LastEditTime: 2022-08-19 10:04:45
 */
import request from '@/utils/request'

/**
 *
 * @param {Object} data mobile password
 * @returns promis
 */
export function login (data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 *
 * @returns promis
 */
// 获取用户信息
export const getUserInfoAPI = () => request({
  url: '/sys/profile',
  method: 'POST'
})

/**
 * 根据ID获取员工详情数据
 * @param {*} id
 * @returns
 */
export const getUserDetailAPI = (id) => request({
  url: `/sys/user/${id}`,
})

/**
 * 保存员工基本信息
 * @param {*} data
 * @returns
 */
export const saveUserDetailById = (data) => request({
  url: `/sys/user/${datd.id}`,
  method: "PUT",
  data
})
