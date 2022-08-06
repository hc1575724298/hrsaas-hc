/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-06 11:27:00
 * @LastEditors: sj
 * @LastEditTime: 2022-08-06 11:29:43
 */
import request from '@/utils/request'

export function getEmployeedApi () {
  return request({
    url: '/sys/user/simple'
  })
}
