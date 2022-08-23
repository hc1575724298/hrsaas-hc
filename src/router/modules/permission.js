/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-03 16:08:51
 * @LastEditors: sj
 * @LastEditTime: 2022-08-20 15:20:12
 */
import Layout from '@/layout'
export default {
  path: '/permission',
  component: Layout,
  meta: {
    id: 'permissions'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/permission'),
      meta: { title: '权限管理', icon: 'lock' },
      name: 'permission'
    }
  ]
}
