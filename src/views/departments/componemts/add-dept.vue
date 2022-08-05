<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-05 15:54:35
 * @LastEditors: sj
 * @LastEditTime: 2022-08-05 15:54:35
-->
<template>
  <el-dialog
  title="添加部门"
  :visible.sync="dialogVisible"
  width="50%"
  >
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button >取 消</el-button>
    <el-button type="primary" >确 定</el-button>
  </span>
</el-dialog>
</template>

<script>
export default {
 props:{
  dialogVisible:{
    type:Boolean,
    default: false
  }
 }
}
</script>

<style>

</style>
