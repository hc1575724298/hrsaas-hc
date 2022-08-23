<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-22 14:52:40
 * @LastEditors: sj
 * @LastEditTime: 2022-08-22 17:07:03
-->
<template>
  <div class="calendar">
    <el-row type="flex" justify="end">
      <el-col :span="5">
        <el-select v-model="currentYear" @change="updateCalendar">
          <el-option
            v-for="item in years"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-select v-model="currentMonth" @change="updateCalendar">
          <el-option v-for="item in 12" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-calendar v-model="currentDate">
      <template #dateCell="{ date }">
        <div class="cell_box">
          {{ date.getDate() }}
          <span v-if="isWeek(date)" class="isWeek">休</span>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      currentYear: '',
      currentMonth: '',
      currentDate: '',
      years: [2017, 2018, 2019, 2020, 2021, 2022]
    }
  },
  created() {
    this.initCalendar()
  },
  methods: {
    initCalendar() {
      const data = new Date()
      this.currentDate = data
      this.currentYear = data.getFullYear()
      this.currentMonth = data.getMonth() + 1
      this.years = Array(11)
        .fill(this.currentYear - 5)
        .map((item, index) => item + index)
    },
    // 是否为周末
    isWeek(date) {
      return date.getDay() === 0 || date.getDay() === 6
    },
    // 改变年月更新日历
    updateCalendar() {
      this.currentDate = this.currentYear + '-' + this.currentMonth
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-calendar {
  .el-calendar__header {
    display: none;
  }

  .el-calendar-table tr td {
    border: none !important;
  }

  .cell_box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .isWeek {
    display: block;
    width: 14px;
    height: 14px;
    background-color: orange;
    border-radius: 50%;
    font-size: 12px;
    text-align: center;
    line-height: 14px;
  }
}
</style>
