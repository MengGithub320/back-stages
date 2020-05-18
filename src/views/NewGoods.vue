<template>
  <div id="newgoods">
    <h1>这里是添加商品</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品id">
        <el-input v-model="form.id"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="form.Price"></el-input>
      </el-form-item>
      <el-form-item label="进货数量">
        <el-input v-model="form.Sum"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Sub">发布</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    Sub() {
      console.log('aaa');
      this.axios({
        method: "POST",
        url: "/goods/addgoods",
        data: {
          goodsId: this.form.id,
          goodsPrice: this.form.Price,
          goodsSum: this.form.Sum
        }
      })
        .then(res => {
          console.log("新增货物信息成功", res);
        })
        .catch(err => {
          console.log("新增货物信息失败", err);
        });
    },
  },
  computed: {}
};
</script>
<style lang="less">
#newgoods {
  width: 26%;
  margin: auto;
  label {
    font-weight: 400;
    color: white;
  }
}
</style>