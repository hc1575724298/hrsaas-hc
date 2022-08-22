/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-03 16:08:51
 * @LastEditors: sj
 * @LastEditTime: 2022-08-20 15:25:35
 */
import Layout from '@/layout'
export default {
  path: '/approvals',
  component: Layout,
  mate: {
    id: 'approvals'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/approvals'),
      meta: { title: '审批', icon: 'tree-table' }
    }
  ]
}
