<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-23 09:24:34
 * @LastEditors: sj
 * @LastEditTime: 2022-08-23 10:23:44
-->
<template>
  <div class="radarEcharts" id="main"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'))
      // 绘制图表
      myChart.setOption({
        backgroundColor: '#f3f8fc',
        title: {
          text: '人员绩效考核',
          textStyle: {
            color: 'pink'
          }
        },
        legend: {
          data: ['zs', 'ls'],
          textStyle: {
            color: 'skyblue',
            fontSize: 14
          }
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '考勤', max: 100 },
            { name: '技术', max: 100 },
            { name: '助人', max: 100 },
            { name: '管理', max: 100 },
            { name: '分享', max: 100 },
            { name: 'bug', max: 100 }
          ],
          splitLine: {
            lineStyle: {
              color: ['hotpink', 'green']
            }
          },
          axisLine: {
            lineStyle: {
              color: 'green'
            }
          }
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [50, 30, 70, 100, 60, 80],
                name: 'zs'
              },
              {
                value: [100, 100, 100, 90, 90, 100],
                name: 'ls'
              }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.radarEcharts {
  width: 700px;
  height: 500px;
}
</style>
