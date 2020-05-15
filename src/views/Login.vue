<template>
    <div id="Login">
        <div class="login">
            <div class="form">
                <h1 class="title">鲜花网后台管理系统</h1>
                <h5>使用手机验证码登录</h5>
                <form>
                    <div>
                        <input type="text" placeholder="请输入用户名" v-model="admin.name">
                    </div>
                    <div>
                        <input type="password" placeholder="请输入密码" v-model="admin.pass">
                    </div>
                    <div id="check">
                        <input class="check" type="checkbox">记住密码
                    </div>
                    <el-button id="subbtn" @click="loginHandle" type="success" plain>登录</el-button>
                </form>
            </div>
        </div>
    </div>
</template>
<style lang="less">
*{
    margin: 0;
    padding: 0;
}
.login{
    text-align: center;
    width: 100%;
    height: 574px;
    background:url("../assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 50px;

    .form{
        width: 500px;
        height: 500px;
        background:rgba(255, 255, 255, 0.5);
        margin: auto;
        padding: 10px;
        border-radius: 10px;
        .title{
            color: white;
            border-bottom: 1px solid gray;
        }
        form{
            padding: 100px;
            border: 1px;
        }
        input{
            background: none;
            margin-top: 20px;
            padding: 5px;
            width: 300px;
            border: none;
            border-bottom: 1px solid gray;
        }
        #check{
            text-align: left;
        }
        .check{
            width: 20px;
        }
        #subbtn{
            margin-top: 20px;
            width: 300px;
            height: 50px;
            background-color: green;
            opacity: 1;
            border: none;
            border-radius: 10px;
        }
    }
}
</style>
<script>
import { Message } from 'element-ui'
export default {
  name: 'Login',
  data() {
    return {
      admin: {
        name: '',
        pass: ''
      }
    }
  },
  methods: {
    loginHandle() {
      if(!this.admin.name) return Message(
                {
                message: '警告哦，请输入账号',
                type: 'warning'
                })
      if(!this.admin.pass) return Message(
                {
                message: '警告哦，请输入密码',
                type: 'warning'
                })

      // 将用户输入的内容发给服务器
      // 三方请求库：axios
      this.axios({
        method: 'POST',
        url: '/admin/login',
        data: {
          adminname: this.admin.name,
          adminpass: this.admin.pass
        }
      })
      .then(res => {
        console.log(res.data,this.admin.name)

        if(res.data.state === '200') {
            // 路由跳转
          this.$router.push({
              path: this.$route.query.redirect || '/home'
          })
        } else {
          console.log('账号密码错误')
          Message({
              message: '警告哦，账号密码错误',
              type: 'warning'
          })
        } 
        this.admin.name = ''
        this.admin.pass = ''
      })
      .catch(err => {
        console.log('请求失败：', err)
        Message({
          message: '警告哦，服务器出错，请稍后重试',
          type: 'warning'
        })
      })
    }
  }
}
</script>1