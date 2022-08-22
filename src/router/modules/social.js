/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-03 16:08:51
 * @LastEditors: sj
 * @LastEditTime: 2022-08-20 18:17:40
 */
import Layout from '@/layout'
export default {
  path: '/social',
  component: Layout,
  mate: {
    id: 'social_securitys'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/social'),
      meta: { title: '社保', icon: 'table' }
    }
  ]
}
