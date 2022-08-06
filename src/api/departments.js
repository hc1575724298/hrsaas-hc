/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-05 11:34:37
 * @LastEditors: sj
 * @LastEditTime: 2022-08-06 17:03:34
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

/**
 * 新增部门
 * @param {object} data
 * @returns promis
 */
export const addDeptsApi = (data) => request({
  url: '/company/department',
  method: 'POST',
  data
})

// 根据ID查询部门详情
export const detDeptsByIdApi = (id) => request({
  url: `/company/department/${id}`
})

// 根据ID修改部门详情
export const editDeptsByIdApi = (data) => request({
  url: `/company/department/${data.id}`,
  method: 'PUT',
  data
})
