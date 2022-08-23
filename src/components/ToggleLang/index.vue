<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-23 14:39:01
 * @LastEditors: sj
 * @LastEditTime: 2022-08-23 15:36:44
-->
<template>
  <el-dropdown @command="onCommand">
    <span class="el-dropdown-link">
      <svg-icon style="color: #fff; font-size: 20px" icon-class="language" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        :disabled="key === $i18n.locale"
        :command="key"
        v-for="(value, key) in messages"
        :key="key"
        >{{ value.name }}</el-dropdown-item
      >
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { messages } from '@/i18n'
import Cookie from 'js-cookie'
export default {
  name: 'ToggleLang',
  data() {
    return {
      messages
    }
  },
  methods: {
    onCommand(val) {
      this.$i18n.locale = val
      this.$router.go(0) // 刷新页面
      Cookie.set('lang', val)
    }
  }
}
</script>

<style></style>
