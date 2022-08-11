<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-03 16:08:51
 * @LastEditors: sj
 * @LastEditTime: 2022-08-11 11:55:11
-->
<template>
  <div class="dashboard-container">
    <div class="app-container">
    <el-tabs v-model="activeName">
     <el-tab-pane label="角色管理" name="first">
       <el-button type="primary" @click="dialogAdd=true">新增角色</el-button>
       <!-- 表格 -->
       <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="index"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="角色"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述">
        <template slot-scope="{row}">
           <el-button size="small" type="success">分配权限</el-button>
           <el-button size="small" type="primary">编辑</el-button>
           <el-button size="small" type="danger" @click="delRoles(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
         <!-- 分页 -->
  <el-pagination
  :page-size="pageSize"
  :page-sizes="[3,5,7,10]"
    layout="sizes,prev, pager, next"
    @current-change="currentChange"
    @size-change="handleSizeChange"
    :total="total">
  </el-pagination>
   </el-tab-pane>
    <el-tab-pane label="公司信息" name="second">配置管理</el-tab-pane>
  </el-tabs>
    </div>

    <!-- 新增角色弹框 -->
    <el-dialog title="新增角色" :visible.sync="dialogAdd" @close="dialogClose">
  <el-form :model="addForm" :rules="addRoleFromRules" ref="from" label-width="100px">
    <el-form-item label="角色名称:" prop="name">
      <el-input v-model="addForm.name"></el-input>
    </el-form-item>
    <el-form-item label="角色描述:">
      <el-input v-model="addForm.description"></el-input>
    </el-form-item>

  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="onClose">取 消</el-button>
    <el-button type="primary" @click="onAddRole">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
import {getRoles,addRoles,delRoles} from '@/api/role'
export default {
  data() {
    return {
      activeName:'first',
       tableData: [],
       total:0,
       pageSize:3,
       page:1,
       dialogAdd: false,
       addForm:{
        name:'',
        description:''
       },
       addRoleFromRules: {
        name:[{required:true, message: '请输入',tirgger:'blur'}]
        }

    }
  },

  created() {
    this.getRoles()
  },

  methods: {
    async getRoles(){
      const {rows,total}= await getRoles({
        page:this.page,
        pagesize: this.pageSize
      })
     this.tableData =rows
     this.total =total
    },
    currentChange(val){
     this.page = val
      this.getRoles()
    },
    handleSizeChange(val){
      this.pageSize = val
      this.getRoles()
    },
    //点击取消
    onClose(){
     this.dialogAdd=false
    },
    //点击确定
    onAddRole(){
      this.$refs.from.validate(async (valid)=>{
        if(!valid) return
        await addRoles(this.addForm)
        this.$message.success('添加成功')
        this.dialogAdd=false
        this.getRoles()
      })
    },
    // 监听对话框关闭
    dialogClose(){
      this.$refs.from.resetFields() // 只能重置有校验的表单
      this.addForm.description=''
    },
    //删除
    async delRoles(row){
      await delRoles
      (row.id)
      // this.$message.success('删除成功')
    }
  }
}
</script>

<style scoped lang="less"></style>
