<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-14 15:04:47
 * @LastEditors: sj
 * @LastEditTime: 2022-08-19 09:22:00
-->
<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录账户设置" name="acount">

            <!-- 放置表单 -->
            <el-form label-width="120px" style="margin-left: 120px; margin-top:30px">
              <el-form-item label="姓名:">
                <el-input style="width:300px" v-model="formData.username"/>
              </el-form-item>
              <el-form-item label="密码:">
                <el-input style="width:300px" type="password" v-model="formData.password"/>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSave">更新</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="个人详情" name="userInfo">
            <UserInfo/>
          </el-tab-pane>
          <el-tab-pane label="岗位信息">
            <JobInfo/>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import UserInfo from './components/user-info.vue'
import JobInfo from './components/job-info.vue'
import { getUserDetailAPI } from '@/api/user'
import { saveUserDetailById} from '@/api/employees'
import Cookie from 'js-cookie'
export default {
  data(){
    return {
      formData:{},
      activeName: Cookie.get('employeesTabs') || 'acount'
    }
  },
  created(){
    this.getUserDetail()
  },
  methods:{
    async getUserDetail(){
     this.formData = await getUserDetailAPI(this.$route.params.id)
    },
    async onSave(){
      await saveUserDetailById(this.formData)
      this.$message.success('更新成功')
    },
    handleClick(){
      console.log(this.activeName);
      Cookie.set('employeesTabs',this.activeName)
    }
  },
  components:{
    UserInfo,
    JobInfo
  }
}
</script>

<style></style>
