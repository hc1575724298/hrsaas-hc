/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-12 16:04:18
 * @LastEditors: sj
 * @LastEditTime: 2022-08-20 15:23:19
 */

import Layout from '@/layout'
export default {
  path: '/import',
  component: Layout,
  hidden: true,
  mate: {
    id: 'import'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/import'),
      meta: { title: '员工', icon: 'people' }
    }
  ]
}
