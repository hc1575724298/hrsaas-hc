/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-03 16:08:51
 * @LastEditors: sj
 * @LastEditTime: 2022-08-20 15:18:38
 */
import Layout from '@/layout'
export default {
  path: '/attendances',
  component: Layout,
  mate: {
    id: 'attendances'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/attendances'),
      meta: { title: '考勤', icon: 'skill' }
    }
  ]
}
