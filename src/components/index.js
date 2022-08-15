/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-11 14:47:08
 * @LastEditors: sj
 * @LastEditTime: 2022-08-15 09:02:08
 */
import PageTools from '@/components/PageTools'
import UploadExcel from './UploadExcel'
import UploadImg from './UploadImg'

const components = [PageTools, UploadExcel, UploadImg]
export default {
  install (Vue) {
    components.forEach(component => Vue.component(component.name, component))
    // Vue.component('PageTools',PageTools)
  }
}
