/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-19 15:53:19
 * @LastEditors: sj
 * @LastEditTime: 2022-08-20 14:32:54
 */

import request from '@/utils/request'

// 获取权限
export function getPermissionList () {
  return request({
    url: '/sys/permission',
  })
}

/**
 * 添加权限
 * enVisible	string	非必须
name	string	非必须
code	string	非必须
description	string	非必须
type	number	非必须
pid
 * @param {Object} data
 * @returns
 */
export function addPermission (data) {
  return request({
    url: '/sys/permission',
    method: 'POST',
    data
  })
}
