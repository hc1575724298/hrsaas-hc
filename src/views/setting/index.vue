<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-03 16:08:51
 * @LastEditors: sj
 * @LastEditTime: 2022-08-22 11:09:43
-->
<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-tabs v-model="activeName">
        <el-tab-pane label="角色管理" name="first">
          <el-button
            type="primary"
            @click="dialogAdd = true"
            v-if="isHas(point.roles.edit)"
            >新增角色</el-button
          >
          <!-- 表格 -->
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="角色" width="180">
            </el-table-column>
            <el-table-column prop="description" label="描述">
              <template slot-scope="{ row }">
                <el-button
                  size="small"
                  type="success"
                  @click="showRightsDialog(row.id)"
                  >分配权限</el-button
                >
                <el-button size="small" type="primary">编辑</el-button>
                <el-button size="small" type="danger" @click="delRoles(row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <el-pagination
            :page-size="pageSize"
            :page-sizes="[3, 5, 7, 10]"
            layout="sizes,prev, pager, next"
            @current-change="currentChange"
            @size-change="handleSizeChange"
            :total="total"
          >
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="公司信息" name="second">
          <el-alert
            title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改"
            type="info"
            show-icon
            :closable="false"
          >
          </el-alert>
          <el-form ref="form" label-width="80px">
            <el-form-item label="公司名称">
              <el-input disabled v-model="companyInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input
                disabled
                v-model="companyInfo.companyAddress"
              ></el-input>
            </el-form-item>
            <el-form-item label="公司邮箱">
              <el-input disabled v-model="companyInfo.mailbox"></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input disabled v-model="companyInfo.remarks"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 新增角色弹框 -->
    <el-dialog title="新增角色" :visible.sync="dialogAdd" @close="dialogClose">
      <el-form
        :model="addForm"
        :rules="addRoleFromRules"
        ref="from"
        label-width="100px"
      >
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

    <!-- 给角色分配权限 -->
    <el-dialog
      title="给角色分配权限"
      :visible.sync="setRightsDialog"
      width="50%"
      destroy-on-close
      @close="closeRightsDialog"
    >
      <el-tree
        default-expand-all
        show-checkbox
        :data="permission"
        :props="{ label: 'name' }"
        node-key="id"
        :default-checked-keys="defaultCheckKeys"
        ref="perTree"
      >
      </el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="setRightsDialog = false">取 消</el-button>
        <el-button type="primary" @click="onSaveRights">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getRoles,
  addRoles,
  delRoles,
  getRolesInfo,
  assignPerm
} from '@/api/role'
import { getCompanyInfo } from '@/api/setting'
import { getPermissionList } from '@/api/permission'
import { transListToTree } from '@/utils'
import mininsPermission from '@/mixins/permission'
export default {
  mixins: [mininsPermission],
  data() {
    return {
      activeName: 'first',
      tableData: [],
      total: 0,
      pageSize: 3,
      page: 1,
      dialogAdd: false,
      addForm: {
        name: '',
        description: ''
      },
      addRoleFromRules: {
        name: [{ required: true, message: '请输入', tirgger: 'blur' }]
      },
      companyInfo: {},
      setRightsDialog: false,
      permission: [], // 权限树形数据
      defaultCheckKeys: [],
      roleId: '' //角色ID
    }
  },

  created() {
    this.getRoles()
    this.getCompanyInfo()
    this.getPermission()
  },

  methods: {
    async getRoles() {
      const { rows, total } = await getRoles({
        page: this.page,
        pagesize: this.pageSize
      })
      this.tableData = rows
      this.total = total
    },
    currentChange(val) {
      this.page = val
      this.getRoles()
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.getRoles()
    },
    //点击取消
    onClose() {
      this.dialogAdd = false
    },
    //点击确定
    onAddRole() {
      this.$refs.from.validate(async (valid) => {
        if (!valid) return
        await addRoles(this.addForm)
        this.$message.success('添加成功')
        this.dialogAdd = false
        this.getRoles()
      })
    },
    // 监听对话框关闭
    dialogClose() {
      this.$refs.from.resetFields() // 只能重置有校验的表单
      this.addForm.description = ''
    },
    //删除
    async delRoles(row) {
      await delRoles(row.id)
      this.$message.success('删除成功')
      this.getRoles()
    },
    async getCompanyInfo() {
      const res = await getCompanyInfo(
        this.$store.state.user.userInfo.companyId
      )
      // console.log(res);
      this.companyInfo = res
    },
    // 点击分配权限
    async showRightsDialog(id) {
      this.roleId = id
      this.setRightsDialog = true
      const res = await getRolesInfo(id)
      this.defaultCheckKeys = res.permIds
    },
    // 获取权限列表
    async getPermission() {
      const res = await getPermissionList()
      const treePermission = transListToTree(res, '0')
      this.permission = treePermission
    },
    //关闭分配权限弹层
    closeRightsDialog() {
      this.defaultCheckKeys = []
    },
    // 点击分配权限弹层确定
    async onSaveRights() {
      await assignPerm({
        id: this.roleId,
        permIds: this.$refs.perTree.getCheckedKeys()
      })
      this.$message.success('角色分配成功')
      this.setRightsDialog = false
    }
  }
}
</script>

<style scoped lang="less"></style>
