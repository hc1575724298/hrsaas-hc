/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-30 15:44:47
 * @LastEditors: sj
 * @LastEditTime: 2022-08-20 18:16:26
 */
import { login, getUserInfoAPI, getUserDetailAPI } from '@/api/user'
import { setTokenTime } from '@/utils/auth'
import { resetRouter } from '@/router'
export default {
  namespaced: true,
  state: {
    token: '',
    userInfo: {}
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
    },
    setUserInfo (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    async getToken (context, payload) {
      const res = await login(payload)
      // console.log(data);
      context.commit('setToken', res)
      setTokenTime()
    },
    async getUserInfo ({ commit }, payload) {
      const res = await getUserInfoAPI()
      const userInfo = await getUserDetailAPI(res.userId)
      // console.log(res);
      // console.log(userInfo);
      commit('setUserInfo', { ...res, ...userInfo })
      // actions  内部可以通过return 将数据传递出去，类似 then中的return
      return res
    },
    logout ({ commit }) {
      commit('setToken', '')
      commit('setUserInfo', {})
      resetRouter()
      //  { root: true } context.commit 相当于全局的context
      commit('permission/setRoutes', [], { root: true })
    }
  }
}
