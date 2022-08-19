<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-15 09:01:04
 * @LastEditors: sj
 * @LastEditTime: 2022-08-17 14:25:53
-->
<template>
<div>
    <el-upload
    v-loading="loading"
    element-loading-text="上传中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  :file-list="fileList"
  action="#"
  :http-request="onRequest"
  list-type="picture-card"
  :on-change="onChange"
  :on-remove="onRemove"
  :on-preview="onPreview"
  :before-upload="beforeUpload"
  :limit="1"
  :class="fileList.length? 'hide': ''"
  class="custom-upload"
  >
  <i class="el-icon-plus"></i>
</el-upload>

<el-dialog :visible.sync="previewImgDialog">
  <img :src="imgUrl" alt="">
</el-dialog>
</div>

</template>

<script>
//  id: AKIDA7oENFqADzVkhOpyqRL0OVKtBCvOZT6R
//  key : 6vTklVyA5i48vSigNoyqSotiFVVEfpiL
import COS from 'cos-js-sdk-v5'
var cos = new COS({
  SecretId: 'AKIDA7oENFqADzVkhOpyqRL0OVKtBCvOZT6R',
  SecretKey: '6vTklVyA5i48vSigNoyqSotiFVVEfpiL'
})
console.log(cos);
export default {
  name:"UploadImg",
  data () {
    return {
      fileList:[],
      imgUrl:'',
      previewImgDialog: false,
      loading: false
    }
  },

  created () {

  },

  methods: {
   onRequest({file}){
    cos.putObject({
    Bucket: 'hc-hr-1313341629', /* 必须 */
    Region: 'ap-nanjing',     /* 存储桶所在地域，必须字段 */
    Key: file.name,              /* 必须 */
    StorageClass: 'STANDARD',
    Body: file, // 上传文件对象
    onProgress: function(progressData) {
        console.log(JSON.stringify(progressData));
    }
}, (err, data) =>{
    if(err||data.statusCode !== 200) {
      console.log(err)
      return this.$message.error('上传失败')
    }
    this.$emit('success',{
      url: 'https://'+data.Location
    })
});
   },
   onChange(file,fileList){
      this.fileList = fileList;
   },
   onRemove(file,fileList){
      this.fileList = fileList;
   },
   onPreview(file) {
     this.previewImgDialog = true;
     this.imgUrl = file.url
   },
   beforeUpload(file) {
    // 限制上传图片的类型
    const types = ['image/jpeg', 'image/gif']
    if(!types.includes(file.type)){
      this.$message.error(`请选择${types.join('、')}图片`)
      return false
    }

    // 限制上传的图片大小
    const maxSize = 2 * 1024 * 1024
    if(file.size > maxSize) {
      this.$message.error('选择图片不能超出2Mb')
      return false
    }
   }
  }
}
</script>

<style scoped lang="scss">
 ::v-deep.hide .el-upload--picture-card {
  display: none;
 }

 .custom-upload {
  width: 148px;
  height: 148px;
  overflow: hidden;
 }
</style>
