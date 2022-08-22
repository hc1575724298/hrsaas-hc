/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-11 09:42:48
 * @LastEditors: sj
 * @LastEditTime: 2022-08-20 10:14:18
 */
import request from '@/utils/request'

/**
 *
 * @param {Object} params
 * page	是	1	页码
 * pagesize	是	10	每页条数
 */
export function getRoles (params) {
  return request({
    url: '/sys/role',
    params
  })
}

export function addRoles (data) {
  return request({
    url: '/sys/role',
    data,
    method: 'POST',
  })
}

export function delRoles (id) {
  return request({
    url: '/sys/role/' + id,
    method: 'DELETE',
  })
}

/**
 * 根据ID获取角色详情
 * @param {*} id 角色ID
 * @returns
 */
export function getRolesInfo (id) {
  return request({
    url: '/sys/role/' + id,
  })
}

/**
 * 给角色分配权限
 * @param {*} data { id. permIds}
 * @returns
 */
export function assignPerm (data) {
  return request({
    url: '/sys/role/assignPrem',
    method: 'PUT',
    data
  })
}
