/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-03 10:15:26
 * @LastEditors: sj
 * @LastEditTime: 2022-08-12 09:44:08
 */

export const imgError = {
  // 当被绑定的元素插入到DOM中
  // 令绑定的元素插入到dom的时候，图片数据还没请求回来
  inserted: (el, { value }) => {
    if (!el.src) {
      el.src = value
    } else {
      el.onerror = function () {
        el.src = value
      }
    }
  },
  // 指令所绑定的元素更新时触发
  update (el, { value }) {
    if (!el.src) {
      el.src = value
    }
  }
}
