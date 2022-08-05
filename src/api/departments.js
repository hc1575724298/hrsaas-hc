/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-05 11:34:37
 * @LastEditors: sj
 * @LastEditTime: 2022-08-05 14:38:35
 */
import request from '@/utils/request'

export const getDeptsApi = () => request({
  url: '/company/department'
})
