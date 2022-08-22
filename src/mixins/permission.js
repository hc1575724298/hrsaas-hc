/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-22 11:04:33
 * @LastEditors: sj
 * @LastEditTime: 2022-08-22 11:07:50
 */
// mixins 逻辑代码的复用
// 可以定义一个对象，该对象最终会混入到组件中
// 组件有的，该对象都可以有
import permissionPoints from '@/constant/permission'
export default {
  data () {
    return {
      point: permissionPoints
    }
  },
  methods: {
    isHas (point) {
      return this.$store.state.permission.points.includes(point)
    }
  }
}
