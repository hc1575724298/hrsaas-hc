/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-30 15:44:47
 * @LastEditors: sj
 * @LastEditTime: 2022-08-22 14:42:07
 */
const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  token: (state) => state.user.token,
  avatar: (state) => state.user.userInfo.staffPhoto,
  name: (state) => state.user.name,
}
export default getters
