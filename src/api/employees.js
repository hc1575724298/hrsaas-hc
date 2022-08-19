/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-06 11:27:00
 * @LastEditors: sj
 * @LastEditTime: 2022-08-19 10:55:58
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

/**
 * 删除员工
 * @param {*} id
 * @returns
 */
export function delEmployeedInfoApi (id) {
  return request({
    url: '/sys/user/' + id,
    method: 'DELETE',
  })
}

/**
 * 新增员工
 * @returns
 */
export function addEmployeedInfoApi (data) {
  return request({
    url: '/sys/user',
    method: 'POST',
    data
  })
}

/**
 *批量导入员工
 * @param {*} data 员工数组
 * @returns
 */
export function importEmployeeApi (data) {
  return request({
    url: '/sys/user/batch',
    method: 'POST',
    data
  })
}

/** *
 *
 * 保存员工的基本信息
 * **/
export function saveUserDetailById (data) {
  return request({
    url: `/sys/user/${data.id}`,
    method: 'put',
    data
  })
}

/** *
 *  读取用户详情的基础信息
 * **/
export function getPersonalDetail (id) {
  return request({
    url: `/employees/${id}/personalInfo`
  })
}

/** *
 *  更新用户详情的基础信息
 * **/
export function updatePersonal (data) {
  return request({
    url: `/employees/${data.userId}/personalInfo`,
    method: 'put',
    data,
  })
}


/** **
 * 获取用户的岗位信息
 *
 * ****/
export function getJobDetail (id) {
  return request({
    url: `/employees/${id}/jobs`
  })
}
