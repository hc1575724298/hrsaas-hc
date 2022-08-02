/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-30 15:44:47
 * @LastEditors: sj
 * @LastEditTime: 2022-08-02 16:47:42
 */
import { login, getUserInfoAPI, getUserDetailAPI } from '@/api/user'
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
    },
    async getUserInfo ({ commit }, payload) {
      const res = await getUserInfoAPI()
      const userInfo = await getUserDetailAPI(res.userId)
      console.log(res);
      console.log(userInfo);
      commit('setUserInfo', { ...res, ...userInfo })
    }
  }
}
