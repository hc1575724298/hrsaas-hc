/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-11 14:47:08
 * @LastEditors: sj
 * @LastEditTime: 2022-08-11 15:01:47
 */
import PageTools from '@/components/PageTools'

const components = [PageTools]
export default {
  install (Vue) {
    components.forEach(component => Vue.component(component.name, component))
    // Vue.component('PageTools',PageTools)
  }
}
