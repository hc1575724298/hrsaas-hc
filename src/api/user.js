/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-30 15:44:47
 * @LastEditors: sj
 * @LastEditTime: 2022-07-31 15:48:11
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


