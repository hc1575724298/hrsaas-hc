/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-03 16:08:51
 * @LastEditors: sj
 * @LastEditTime: 2022-08-20 15:19:10
 */
import Layout from '@/layout'
export default {
  path: '/employees',
  component: Layout,
  mate: {
    id: 'employees'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/employees'),
      meta: { title: '员工', icon: 'people' }
    },
    {
      path: 'detail/:id',
      hidden: true,
      component: () => import('@/views/employees/detail'),
    },
    {
      path: 'print/:id',
      hidden: true,
      component: () => import('@/views/employees/print'),
    }
  ]
}
