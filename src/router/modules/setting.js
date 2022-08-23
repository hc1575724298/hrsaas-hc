/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-03 16:08:51
 * @LastEditors: sj
 * @LastEditTime: 2022-08-20 15:45:04
 */
import Layout from '@/layout'
export default {
  path: '/setting',
  component: Layout,
  meta: {
    id: 'settings'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/setting'),
      meta: { title: '公司设置', icon: 'setting' },
      name: 'setting'
    }
  ]
}
