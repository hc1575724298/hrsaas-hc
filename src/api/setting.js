/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-11 11:57:27
 * @LastEditors: sj
 * @LastEditTime: 2022-08-11 12:09:27
 */
import request from '@/utils/request'

export function getCompanyInfo (companyId) {
  return request({
    url: `/company/${companyId}`,
  })
}
