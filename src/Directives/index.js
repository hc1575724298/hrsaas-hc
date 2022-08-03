/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-03 10:15:26
 * @LastEditors: sj
 * @LastEditTime: 2022-08-03 10:15:26
 */

export const imgError = {
  inserted: (el, { value }) => {
    el.onerror = function () {
      el.src = value
    }
  }
}
