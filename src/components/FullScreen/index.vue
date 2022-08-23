<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-23 10:51:02
 * @LastEditors: sj
 * @LastEditTime: 2022-08-23 11:17:18
-->
<template>
  <div style="margin: 0 8px">
    <svg-icon
      @click="onFullScreen"
      iconClass="fullscreen"
      className="fullscreen"
    ></svg-icon>
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'FullScreen',
  data() {
    return {}
  },

  created() {},

  methods: {
    onFullScreen() {
      if (screenfull.isEnabled) {
        screenfull.toggle()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.fullscreen {
  color: #fff;
}
</style>
