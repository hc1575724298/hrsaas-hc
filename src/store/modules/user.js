/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-30 15:44:47
 * @LastEditors: sj
 * @LastEditTime: 2022-08-02 09:46:37
 */
import { login } from '@/api/user'
export default {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
    }
  },
  actions: {
    async getToken (context, payload) {
      const res = await login(payload)
      // console.log(data);
      context.commit('setToken', res)
    }
  }
}
