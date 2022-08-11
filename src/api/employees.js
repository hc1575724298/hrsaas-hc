/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-06 11:27:00
 * @LastEditors: sj
 * @LastEditTime: 2022-08-11 15:54:00
 */
import request from '@/utils/request'

/**
 * 获取员工列表（简单）
 * @returns
 */
export function getEmployeedApi () {
  return request({
    url: '/sys/user/simple'
  })
}

/**
 * 获取员工列表
 * @param {*} params page ,size
 * @returns
 */
export function getEmployeedInfoApi (params) {
  return request({
    url: '/sys/user',
    params
  })
}
