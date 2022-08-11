/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-30 15:44:47
 * @LastEditors: sj
 * @LastEditTime: 2022-08-03 11:46:14
 */
import { login, getUserInfoAPI, getUserDetailAPI } from '@/api/user'
import { setTokenTime } from '@/utils/auth'
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
    },
    logout ({ commit }) {
      commit('setToken', '')
      commit('setUserInfo', {})
    }
  }
}
