<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-05 10:10:57
 * @LastEditors: sj
 * @LastEditTime: 2022-08-05 11:19:15
-->
<template>
   <el-row style="width: 100%" type="flex">
          <el-col>{{treeNode.name}}</el-col>
          <el-col :span="4">
            <el-row type="flex">
              <el-col>{{treeNode.manager}}</el-col>
              <el-col>
                <el-dropdown>
                  <span class="el-dropdown-link">
                    操作<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>添加部门</el-dropdown-item>
                    <template v-if="!isRoot">
                    <el-dropdown-item>编辑部门</el-dropdown-item>
                    <el-dropdown-item>删除部门</el-dropdown-item>
                    </template>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
</template>

<script>
export default {
 props:{
  treeNode:{
    type: Object,
    required: true,
  },
  isRoot:{
    type: Boolean,
    default: false
  }
 }
}
</script>

<style>

</style>
