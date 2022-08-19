<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-19 09:07:11
 * @LastEditors: sj
 * @LastEditTime: 2022-08-19 11:03:54
-->
<template>
  <div>
     <i class="el-icon-printer" @click="$router.push(`/employees/print/${userId}?type=job`)"></i>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userId: this.$route.params.id
    }
  }
}
</script>

<style>

</style>
