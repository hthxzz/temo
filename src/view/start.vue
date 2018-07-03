<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <div>
      <h2>tempo</h2>
      <p>让你爱上音乐的律动</p>
    </div>
    <div class="wrap-form">
       <Input v-model="username" class="input" placeholder="用户" ></Input>
       <Input v-model="password" class="input" placeholder="密码" ></Input>
       <Button type="primary" class="button" @click='login()' @keydown='login(event)' shape="circle">登录</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'start',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: "1",
      password: ""
    }
  },
  methods: {
    login(e) {
      if (this.username == '1') {
        this.$router.push('index');
      }
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  background-color: #222342;
}
h2{
  text-transform: uppercase;
  letter-spacing: 12px;
  font-size: 36px;
  color: #FEFEFE;
  margin-top: 20px;
  text-shadow: 1px 1px rgba(254,254,254,0.6);
  
}
p{
  color: #A0A0AD;
  letter-spacing: 7px;
  margin-top: 10px;
  font-size: 12px;
  text-shadow: 0.1px 0.1px rgba(254,254,254,0.6);
  margin-bottom:60px;
}
.ivu-input{
  background-color: #222342 !important;
}
.input{
  margin-bottom: 10px;
  width: 240px;
  display: block;
  width: 230px;
  margin-left: auto;
  border-radius: 20px;
  margin-right: auto;
  margin-top: 20px;
  
}
.input input{
   background-color: #222342 !important;
}
.button{
  background: linear-gradient(to right, #29CAAD 0%, #32B1B2 25%, #3F90C0 70%, #4978C5 100%);
  width: 230px;
  word-spacing: 60px;
  letter-spacing: 12px;
  border-radius: 20px;
  margin-top: 25px;
}
</style>
