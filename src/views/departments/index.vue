<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-03 16:08:51
 * @LastEditors: sj
 * @LastEditTime: 2022-08-06 17:19:13
-->
<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="box-card">
        <!-- 头部 -->
        <TreeTools :treeNode="company" :isRoot="true" @addDept="dialogVisible=true"></TreeTools>
        <!-- 树形结构 -->
        <el-tree :data="dataTree" :props="defaultProps" default-expand-all>
          <!-- 作用域插槽 -->
          <!-- v-slot获取组件内部slot提供的数据 -->
          <template v-slot="{ data }">
             <TreeTools
             :treeNode="data"
              @remove="loadDepts()"
              @addDept="showAddDepts"
              @edit="showEdit"></TreeTools>
          </template>

        </el-tree>
      </el-card>
    </div>

    <!-- 添加部门弹出层 -->
     <add-dept
     :visible.sync="dialogVisible"
     :currentTreeNode="currentTreeNode"
      @add-success ="loadDepts"
      ref="addDept"
      />
  </div>
</template>

<script>
import TreeTools from './componemts/TreeTools.vue'
import addDept from './componemts/add-dept.vue'
import { getDeptsApi } from '@/api/departments'
import { transListToTree } from '@/utils/index'
export default {
  data() {
    return {
      dataTree:[],
      defaultProps:{
        label: 'name'
      },
      company:{
      name: '创指教育',
      manager: '负责人'
    },
    dialogVisible: false,
    currentTreeNode:{}
    }

  },
  components:{
   TreeTools,
   addDept
  },
  created() {
    this.loadDepts()
  },

  methods: {
    async loadDepts(){
      this.loading = false
      const res = await getDeptsApi()
      console.log(res);
      this.dataTree = transListToTree(res.depts, '')
      this.loading = true

    },
    showAddDepts(val){
      this.dialogVisible=true
      this.currentTreeNode = val
    },
    showEdit(val){
      this.dialogVisible=true
      this.$refs.addDept.getDeptById(val.id)
    }
  }
}
</script>

<style scoped lang="less"></style>
