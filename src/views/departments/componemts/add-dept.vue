<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-05 15:54:35
 * @LastEditors: sj
 * @LastEditTime: 2022-08-06 17:11:18
-->
<template>
  <el-dialog
    :title="dialogTitle"
    :visible="visible"
    @close="onClose"
    width="50%"
  >
    <el-form
      :model="formData"
      :rules="formRules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="部门名称" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="部门编码" prop="code">
        <el-input v-model="formData.code"></el-input>
      </el-form-item>
      <el-form-item label="部门负责人" prop="manager">
        <el-select placeholder="请选择部门负责人" v-model="formData.manager">
          <el-option
            :label="item.username"
            :value="item.username"
            v-for="item in employees"
            :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="部门介绍" prop="introduce">
        <el-input
          type="textarea"
          placeholder="部门介绍"
          v-model="formData.introduce"
        ></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="onClose">取 消</el-button>
      <el-button type="primary" @click="onSave">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { getEmployeedApi } from '@/api/employees'
import { getDeptsApi, addDeptsApi , detDeptsByIdApi, editDeptsByIdApi} from '@/api/departments'
export default {
  data(){
    const checkDeptName = async (rule,value,callback) => {
      let isRepeat
       if(this.formData.id ){
        // 编辑
         const {depts } = await getDeptsApi()
         isRepeat = depts.filter(item => item.pid === this.formData.pid && item.id !== this.formData.id).some(item => item.name === value)

       } else {
        // 添加

         if(!this.currentTreeNode.children) return callback()
      // 1. 判断value是否与添加部门是否重复（获取到同级部门）
      isRepeat = this.currentTreeNode.children?.some(item => item.name === value)
      // 2. 重复callback(new Error('部门重复')) 不重复callback()
       }
       isRepeat? callback(new Error('部门重复')) : callback()

    }

      const checkDeptCode = async (rule,value,callback) => {
        const {depts } = await getDeptsApi()

        let isRepeat
        if(this.formData.id){
          //编辑: 去除自己本身部门之后不重复
          isRepeat = depts.filter(item => item.id !== this.formData.id).some(item => item.code === value)
        }else {
          //添加
        // 1. 判断value是否与添加部门是否重复（获取到同级部门）
      isRepeat = depts.some(item => item.code === value)
        }

      // 2. 重复callback(new Error('部门重复')) 不重复callback()
       isRepeat? callback(new Error('部门编码重复')) : callback()
    }
    return {
        employees:[],
        formData: {
        name: '', // 部门名称
        code: '', // 部门编码
        manager: '', // 部门管理者
        introduce: '' // 部门介绍
  },
  formRules:{
    name:[
      { required: true, message: '请输入部门名称',tiggers: 'blur'},
      { validator:checkDeptName, tiggers: 'blur'}
    ],
     code:[
      { required: true, message: '请输入部门编码',tiggers: 'blur'},
      { validator:checkDeptCode, tiggers: 'blur'}
    ],
     manager:[
      { required: true, message: '请选择部门管理者',tiggers: 'change'}
    ],
     introduce:[
      { required: true, message: '请输入部门介绍',tiggers: 'blur'}
    ],
  }
    }
  },
 props:{
  visible:{
    type:Boolean,
    default: false
  },
  currentTreeNode:{
    type: Object,
    required: true
  }
 },
 created(){
  this.getEmployeed()
 },
 methods:{
   async getEmployeed(){
    this.employees = await getEmployeedApi()
   },
   onClose(){
    this.$emit('update:visible',false)
    this.$refs.ruleForm.resetFields()
    this.formData = {
        name: '', // 部门名称
        code: '', // 部门编码
        manager: '', // 部门管理者
        introduce: '' // 部门介绍
  }
   },
   async onSave(){
     await this.$refs.ruleForm.validate()
     try {
      if(this.formData.id){
        // 编辑
     await editDeptsByIdApi(this.formData)
      this.onClose()
      this.$message.success('编辑成功')
      this.$emit('add-success')
       }else {
        //添加
       this.formData.pid = this.currentTreeNode.id

      await addDeptsApi(this.formData)
      this.onClose()
      this.$message.success('新增成功')
      this.$emit('add-success')
       }
     } catch (error) {
       this.$message.error('新增失败')

     }

   },
   async getDeptById(id){
    this.formData = await detDeptsByIdApi(id)
   },
 },
 computed:{
   dialogTitle(){
    return this.formData.id ? '编辑部门' : '添加部门'
   }
 }
}
</script>

<style></style>
