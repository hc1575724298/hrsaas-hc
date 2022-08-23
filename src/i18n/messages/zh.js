/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-23 12:17:36
 * @LastEditors: sj
 * @LastEditTime: 2022-08-23 16:42:28
 */
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
export default {
  name: '中文',
  dashboard: {
    calendar: '工作日历',
    process: '流程申请'
  },
  ...zhLocale,
  route: {
    首页: '首页',
    审批: '审批',
    组织架构: '组织架构',
    员工: '员工',
    权限管理: '权限管理',
    考勤: '考勤',
    工资: '工资',
    公司设置: '公司设置',
    社保: '社保'

  }
}
