<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-19 11:19:23
 * @LastEditors: sj
 * @LastEditTime: 2022-08-19 15:25:38
-->
<template>
  <el-dialog :visible="visible" title="分配角色" @close="close" @open="onOpen">
    <el-checkbox-group v-model="checkList">
      <el-checkbox :label="role.id" v-for="role in roles" :key="role.id">{{role.name}}</el-checkbox>
    </el-checkbox-group>
      <span slot="footer" class="dialog-footer">
    <el-button @click="close">取 消</el-button>
    <el-button type="primary" @click="assignRole">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
import { getRoles } from '@/api/role'
import { getUserDetailAPI} from '@/api/user'
import { assignRoles} from '@/api/employees'
export default {
   data(){
    return {
      checkList:[],
      roles:[]
    }
   },
   props:{
    visible:{
      type: Boolean,
      required: true
    },
    employeesId:{
      type: String,
      required: true
    }
   },
   created(){

   },
   methods:{
    close(){
      this.$emit('update:visible',false)
    },
    // 获取角色列表
    async getRoles(){
      const {rows} = await getRoles()
      this.roles = rows
    },
      onOpen(){
      this.getRoles()
      this.getEmployeesRoles()
    },
    // 获取员工角色
    async getEmployeesRoles(){
      const {roleIds} = await getUserDetailAPI(this.employeesId)
      this.checkList = roleIds
    },
    // 分配角色
   async assignRole(){
       if(!this.checkList.length)return this.$message.error('请选择角色')

       await assignRoles({
        id: this.employeesId,
        roleIds:this.checkList
       })
       this.$message.success('分配成功')
       this.close()
    }
    },

}
</script>

<style>

</style>
