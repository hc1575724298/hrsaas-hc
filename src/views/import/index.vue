<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-12 16:00:27
 * @LastEditors: sj
 * @LastEditTime: 2022-08-14 12:04:08
-->
<template>
 <div class="dashboard-container">
    <div class="app-container">
      <upload-excel :beforeUpload="excelSuccess" :onSuccess="onSuccess"/>
    </div>
  </div>
</template>

<script>
import employees from '@/constant/employees'
import {importEmployeeApi} from '@/api/employees'
import { formatTime } from '@/filters'
const { importMapKeyPath } = employees
export default {
methods:{
  excelSuccess({name}){
     if(!name.endsWith(".xlsx")){
      this.$message.error('请选择xlsx文件')
      return false
     }
    return true
  },
  async onSuccess({results,header}){
    const NewArr = results.map(item => {
      // 写法一
      const obj ={}
      for(let k in importMapKeyPath){
        if(k === '入职日期'||k === '转正日期'){
          // excel时间戳
          const timestamp = item[k]
          // 转换
          const date = new Date((timestamp - 1)* 24 * 3600000)
          date.setFullYear(date.getFullYear() - 70)
          obj[importMapKeyPath[k]] = formatTime(date)
        }else {
          obj[importMapKeyPath[k]] = item[k]

        }
      }
      return obj

      // 写法二
      // return Object.keys(importMapKeyPath).reduce((sum,k) => {
      //   sum[importMapKeyPath[k]] = item[k]
      //   return sum
      // },{})
    })
    await importEmployeeApi(NewArr)
    this.$message.success('导入成功')
    this.$router.go(-1)
  }

}
}
</script>

<style>

</style>
