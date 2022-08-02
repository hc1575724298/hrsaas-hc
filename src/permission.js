/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-30 15:44:47
 * @LastEditors: sj
 * @LastEditTime: 2022-08-02 11:59:21
 */
import router from '@/router'
import store from '@/store'
// 路由全局前置守卫： 所有路由进入之前触发
// to 去哪里路由信息
// from： 来自于
// next 是否进入

const whiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  // 进行权限控制
  // 调用next 进入该路由，如果没有则无法进入
  // if (to.path === '/login') { next() }
  // else { next('/login') }

  const token = store.state.user.token
  if (token) {
    if (to.path === '/login') return next('/')
    next()
  } else {
    const isCludes = whiteList.includes(to.path)
    if (isCludes) return next()
    next('/login')
  }
  // 1.登陆
  // 是否进入登陆页
  // 1.1 是 跳到首页
  // 1.2  不是，直接进入
  // 2. 未登录
  //访问的是否在白名单（未登录也可以访问的页面）
  // 2.1 在白名单 放行
  // 2.2 不在， 跳到登陆页
})
