<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-03 16:08:51
 * @LastEditors: sj
 * @LastEditTime: 2022-08-14 14:33:43
-->
<template>
  <div class="dashboard-container">
    <div class="app-container">
      <page-tools>
        <span slot="left-tag">共166条记录</span>
        <template slot="right">
          <el-button size="small" type="warning" @click="$router.push('/import')">导入</el-button>
          <el-button size="small" type="danger" @click="exportExcel">导出</el-button>
          <el-button size="small" type="primary" @click="onShowAdd">新增员工</el-button>
        </template>
      </page-tools>
      <!-- 放置表格和分页 -->
      <el-card>
        <el-table border :data="employees">
          <el-table-column label="序号" sortable="" type="index" />
          <el-table-column label="姓名" sortable="" prop="username" />
          <el-table-column label="员工">
            <template slot-scope="{ row }">
              <img
                :src="row.staffPhoto"
                v-imgError="require('@/assets/common/head.jpg')"
                style="
                  width: 100px;
                  height: 100px;
                  border-radius: 50%;
                  padding: 10px;
                "
              />
            </template>
          </el-table-column>
          <el-table-column label="工号" sortable="" prop="workNumber" />
          <el-table-column
            label="聘用形式"
            sortable=""
            prop="formOfEmployment"
            :formatter="formatteFormOfEmploymentr"
          />
          <el-table-column label="部门" sortable="" prop="departmentName" />
          <el-table-column label="入职时间" sortable="" prop="timeOfEntry">
            <template slot-scope="{ row }">
              {{ row.timeOfEntry | formatTime }}
            </template>
          </el-table-column>
          <el-table-column label="账户状态">
            <template slot-scope="{ row }">
              <el-switch
                :value="row.enableState === 1"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" sortable="" fixed="right" width="280">
            <template slot-scope="{ row }">
              <el-button type="text" size="small">查看</el-button>
              <el-button type="text" size="small">转正</el-button>
              <el-button type="text" size="small">调岗</el-button>
              <el-button type="text" size="small">离职</el-button>
              <el-button type="text" size="small">角色</el-button>
              <el-button type="text" size="small" @click="onRemove(row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页组件 -->
        <el-row
          type="flex"
          justify="center"
          align="middle"
          style="height: 60px"
        >
          <el-pagination
            layout="prev, pager, next"
            :total="total"
            :page-size="pages.size"
            @current-change="currentChange"
          />
        </el-row>
      </el-card>
    </div>

    <!-- 新增员工 -->
    <add-employees :Visible.sync="showAddEmployees" @add-success="getEmployeedInfo"/>
  </div>
</template>

<script>
import { getEmployeedInfoApi ,delEmployeedInfoApi} from '@/api/employees'
import employees from '@/constant/employees'
import addEmployees from './components/add-employees.vue'
import employeesConst from '@/constant/employees'
const { exportExcelMapPath ,hireType} = employeesConst
export default {
  data() {
    return {
      employees: [],
      total: 0,
      pages: {
        page: 1,
        size: 10
      },
      showAddEmployees: false
    }
  },

  created() {
    this.getEmployeedInfo()
  },

  methods: {
    async getEmployeedInfo() {
      const { rows, total } = await getEmployeedInfoApi(this.pages)
      this.employees = rows
      this.total = total
      // console.log(this.employees);
    },
    currentChange(val) {
      this.pages.page = val
      this.getEmployeedInfo()
    },
    formatteFormOfEmploymentr(row, column, cellValue, index) {
      // if(cellValue===1) return '正式'
      // else if(cellValue===2) return '非正式'
      // else return '未知'

      const findItem = employees.hireType.find((item) => item.id === cellValue)
      return findItem ? findItem.value : '未知'
    },
    // 删除
    async onRemove(id){
      await this.$confirm('是否删除该员工')
     await delEmployeedInfoApi(id)
     this.$message.success('删除成功')
     this.getEmployeedInfo()
    },
    // 点击新增员工
    onShowAdd(){
      this.showAddEmployees=true
    },
    async exportExcel(){
      const {export_json_to_excel} =await import('@/vendor/Export2Excel') // 文件懒加载
       const { rows } = await getEmployeedInfoApi({
        page: 1,
        size: this.total
       })

       const header = Object.keys(exportExcelMapPath)
       const date = rows.map(item => {
          return header.map(h => {
            if(h === '聘用形式'){
            const findItem = hireType.find( hire => hire.id ===item[exportExcelMapPath[h]])
            return findItem ? findItem.value : '未知'
            } else {
              return item[exportExcelMapPath[h]]
            }
          })
       })
      //  console.log(date);
      export_json_to_excel({
    header, //表头 必填
    data:date, //具体数据 必填
    filename: 'excel-list', //非必填
    autoWidth: true, //非必填
    bookType: 'xlsx' //非必填
  })
    }
  },
  components:{
    addEmployees
  }
}
</script>

<style scoped lang="less"></style>
