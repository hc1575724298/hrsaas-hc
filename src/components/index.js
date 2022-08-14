/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-11 14:47:08
 * @LastEditors: sj
 * @LastEditTime: 2022-08-12 16:41:35
 */
import PageTools from '@/components/PageTools'
import UploadExcel from './UploadExcel'

const components = [PageTools, UploadExcel]
export default {
  install (Vue) {
    components.forEach(component => Vue.component(component.name, component))
    // Vue.component('PageTools',PageTools)
  }
}
