/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-12 10:41:51
 * @LastEditors: sj
 * @LastEditTime: 2022-08-22 13:51:38
 */
//在该文件中定义的函数可以变为过滤器

// 引入dayjs
import dayjs from 'dayjs'

export const formatTime = (val) => dayjs(val).format('YYYY-MM-DD')
