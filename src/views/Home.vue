<template>
  <div class="home">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          text-color="#fff"
          active-text-color="#ffd04b">
          <h4><img src="@/assets/favicon.png"/>鲜家后台管理系统</h4>
          <el-menu-item index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">
                <router-link to="/home">店铺信息</router-link>
              </span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
            <span slot="title">
              <router-link to="/home/GoodsManage">商品管理</router-link>
              </span>
            </template>
          </el-menu-item>
          <el-menu-item index="3" >
            <i class="el-icon-document"></i>
            <span slot="title">
              <router-link to="/home/OrderManage">订单管理</router-link>
            </span>
          </el-menu-item>
           <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">退出登录</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style lang="less">
a{
  text-decoration: none;
  color: white;
}
*{
  margin: 0;
  padding: 0;
}
.home{
  width: 100%;
  text-align: center;
    width: 100%;
    height: 574px;
    background:url("../assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 50px;
    .tac{
      background: none;
      .el-menu{
        background: none;
        border: none;
      }
    }
  ul,li{
    list-style: none;
  }
  h4{

    img{
      width: 40px;
      height: 40px;
    }
  }
}

</style>
