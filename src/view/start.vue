<template>
  <div class="wrap">
    <div class="head">
      <h2>tempo</h2>
      <p>让你爱上音乐的律动</p>
    </div>
    <div class="form">
       <Input v-model="username" class="username" placeholder="用户" ></Input>
       <Input v-model="password" class="pasword" placeholder="密码" ></Input>
       <Button type="primary" class="button" @click='login()' @keydown='login(event)' shape="circle">登录</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'start',
  mounted:function() {
    this.changeColor();
  },
  data () {
    return {
      username: "1",
      password: ""
    }
  },
  methods: {
    login(e) {
      if (this.username == '1') {
        this.$router.push('index');
      }
    },
    changeColor() {
      let input = document.querySelectorAll(".ivu-input");
      input[0].classList.add("login-input");
      input[1].classList.add("login-input");
    }    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap {
  background-color: #222342;
  .head {
    margin-top: 234px;
    h2  {
      text-transform: uppercase;
      letter-spacing: 12px;
      font-size: 36px;
      color: #FEFEFE;
      margin-top: 20px;
      text-shadow: 1px 1px rgba(254,254,254,0.6);
    }
    p   {
      color: #A0A0AD;
      letter-spacing: 7px;
      margin-top: 35px;
      font-size: 16px;
      text-shadow: 0.1px 0.1px rgba(254,254,254,0.6);
    }
  }
  .form {
    margin-top: 154px;
    .button {
      width: 430px;
      height: 57px;
      font-size: 30px;
      word-spacing: 160px;
      letter-spacing: 12px;
      border-radius: 20px;
      margin-top: 112px;
      background: linear-gradient(to right, #29CAAD 0%, #32B1B2 25%, #3F90C0 70%, #4978C5 100%);
    }
    div  {
      width: 432px;
      height: 51px;
      display: block;
      margin: 0 auto;
    }
    .pasword {
      margin-top: 52px;
    }
  }
}

</style>
