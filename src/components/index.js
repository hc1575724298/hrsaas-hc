/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-11 14:47:08
 * @LastEditors: sj
 * @LastEditTime: 2022-08-23 14:40:07
 */
import PageTools from '@/components/PageTools'
import UploadExcel from './UploadExcel'
import UploadImg from './UploadImg'
import Calendar from './Calendar'
import FullScreen from './FullScreen'
import ToggleLang from './ToggleLang'

const components = [PageTools, UploadExcel, UploadImg, Calendar, FullScreen, ToggleLang]
export default {
  install (Vue) {
    components.forEach(component => Vue.component(component.name, component))
    // Vue.component('PageTools',PageTools)
  }
}
