/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-03 16:08:51
 * @LastEditors: sj
 * @LastEditTime: 2022-08-22 13:57:24
 */
import Layout from '@/layout'
export default {
  path: '/departments',
  component: Layout,
  meta: {
    id: 'departments'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/departments'),
      meta: { title: '组织架构', icon: 'tree' },
      name: 'departments'
    }
  ]
}
