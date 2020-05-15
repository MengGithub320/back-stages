<template>
  <div id="newgoods">
    <h1>这里是添加商品</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品id">
        <el-input v-model="form.id"></el-input>
      </el-form-item>
      <el-form-item label="商品图像">
        <el-input v-model="form.Pic"></el-input>
      </el-form-item>
      <!-- <el-form-item label="商品分类">
        <el-select v-model="form.classify" placeholder="请选择商品类别">
          <el-option label="爱情鲜花" value="loveflower"></el-option>
          <el-option label="亲情鲜花" value="familyflower"></el-option>
        </el-select>
      </el-form-item> -->
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
      fits: "fill",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
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
          goodsPic: this.form.Pic,
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