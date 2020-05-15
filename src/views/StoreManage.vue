<template>
    <div id="storemanage">
        <h1>店铺管理</h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="店铺名">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="店铺logo">
                <div @click="refit" class="demo-fit">
                <div class="block">
                    <span class="title">{{ fit }}</span>
                    <el-avatar shape="square" :size="60" :fit="fit" :src="url"></el-avatar>
                </div>
                </div>
        </el-form-item>
        <el-form-item label="店铺位置">
            <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系老板">
                <el-input></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">修改</el-button>
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
        console.log('submit!');
      },
      refit(){
          console.log('请重新选择图片')
      }
    }
  }
</script>
<style lang="less">
#storemanage{
    width: 30%;
    margin: auto;
    font-weight: 400;
    h1{
      margin: 20px;
    }
    label{
      color:white;
    }
}
</style>