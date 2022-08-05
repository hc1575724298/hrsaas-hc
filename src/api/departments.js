/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-05 11:34:37
 * @LastEditors: sj
 * @LastEditTime: 2022-08-05 15:22:18
 */
import request from '@/utils/request'

export const getDeptsApi = () => request({
  url: '/company/department'
})

/**
 * 删除部门
 * @param {*} id 要删除的ID
 * @returns
 */
export const delDeptsApi = (id) => request({
  url: '/company/department/' + id,
  method: 'DELETE',
})
