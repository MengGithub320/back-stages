<template>
    <div id="newgoods">
        <h1>这里是添加商品</h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="商品名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="商品图像">
                <el-upload
                  class="avatar-uploader"
                  :class="{disabled:Disableuploadd}"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"
                  :file-list = "imagelist"
                  :headers="headers"
                  name = "logoImage"
                  :on-success="handleUploadSuccess"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
        </el-form-item>
        <el-form-item label="商品分类">
            <el-select v-model="form.classify" placeholder="请选择商品类别">
                <el-option label="爱情鲜花" value="loveflower">
                </el-option>
                <el-option label="亲情鲜花" value="familyflower">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="商品价格">
                <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="进货数量">
                <el-input v-model="form.num"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">发布</el-button>
            <el-button>取消</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        fits: 'fill',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        if(!this.form.name) return
        if(!this.form.classify) return
        console.log('submit!');
        this.axios({
          methods:'POST',
          url:'/goods/add',
          data:{
            goodsName:this.form.name,
            goodsClassify:this.form.classify
          }
        })
        .then(res =>{
          console.log('新增货物信息成功',res)
        })
        .catch(err => {
          console.log('新增货物信息失败',err)
        })
      },
      refit(){
          console.log('请重新选择图片')
      }
    },
    computed:{
      uploadDisabled:function(){
        return this.imagelist.length > 0
      }
    }
  }
</script>
<style lang="less">
#newgoods{
    width: 26%;
    margin: auto;
    label{
      font-weight: 400;
      color: white;
    }
}
 .disabled .el-upload--picture-card{
      display: none;
    }
</style>