/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-20 17:04:09
 * @LastEditors: sj
 * @LastEditTime: 2022-08-20 17:38:30
 */
import router, { constantRoutes, asyncRoutes } from '@/router'
export default {
  namespaced: true,
  state: {
    routes: [],// 自己维护的路由规则，所有的路由规则（静态路由+筛选后的动态路由）
    points: []
  },
  mutations: {
    setRoutes (state, routes) {
      state.routes = [...constantRoutes, ...routes]
    },
    setPoints (state, points) {
      state.points = points
    },
  },
  actions: {
    filterRoutes (context, roles) {
      const routes = asyncRoutes.filter(item => {
        // 如果权限标识在roles.menus,有这个权限， 返回true
        // 如果权限标识不在roles.menus,没有这个权限， 返回 false
        return roles.menus.includes(item.meta.id)
      })
      // 动态添加路由规则
      router.addRoutes([...routes, { path: '*', redirect: '/404', hidden: true }])

      context.commit('setRoutes', routes)
    },
    setPointsAction (context, points) {
      context.commit('setPoints', points)
    }
  }
}
