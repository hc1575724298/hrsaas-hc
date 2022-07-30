/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-30 15:44:47
 * @LastEditors: sj
 * @LastEditTime: 2022-07-30 17:08:12
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally 注册全局组件
Vue.component('svg-icon', SvgIcon)

// 一次性加载所有的/svg目录下svg文件
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
