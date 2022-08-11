<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-11 14:46:32
 * @LastEditors: sj
 * @LastEditTime: 2022-08-11 15:39:02
-->
<template>
  <el-card class="box-card">
    <el-row type="flex">
      <el-col v-if="isShowLeft">
         <el-tag>
          <i :class="leftIcon"></i>
          <slot name="left-tag"/>
          </el-tag>
      </el-col>
      <el-col>
        <el-row type="flex" justify="end">
           <slot name="right"/>
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'PageTools',
  data () {
    return {

    }
  },
  props:{
    leftIcon:{
      type: String,
      default:'el-icon-info'
    },
    isShowLeft:{
      type: Boolean,
      default: true
    }
  },
  created () {

  },

  methods: {

  }
}
</script>

<style scoped>

</style>
