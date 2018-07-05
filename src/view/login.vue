<template>
  <div class="wrap">
    <div class="head">
      <h2>tempo</h2>
      <p>让你爱上律动</p>
    </div>
    <!-- <div class="form">
       <Input v-model="username" class="username" clearable placeholder="用户" ></Input>
       <Input v-model="password" class="pasword" clearable  placeholder="密码" ></Input>
       <Button type="primary" class="button" @click='login()' @keydown='login(event)' shape="circle">登录</Button>
    </div> -->
    <Form ref="formInline" class="form" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" class="username" v-model="formInline.user" placeholder="Username">
            </Input>
        </FormItem>
        <FormItem prop="password" class="pasitem">
            <Input type="password" class="pasword" v-model="formInline.password" placeholder="Password">
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" class="button" @click="handleSubmit('formInline')" shape="circle">登录</Button>
        </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'start',
  mounted:function() {
    this.changeInputSize();
  },
  updated:  function () {
    this.changeInputSize();
  },
  data () {
    return {
      formInline: {
          user: '',
          password: ''
      },
      ruleInline: {
          user: [
              { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          password: [
              { required: true, message: 'Please fill in the password.', trigger: 'blur' },
              { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
      }
    }
  },
  methods: {
    login(e) {
      if (this.username == '1') {
        this.$router.push('index');
      }
    },
    changeInputSize() {
      let input = document.querySelectorAll(".ivu-input");
      input[0].classList.add("login-input");
      input[1].classList.add("login-input");
    },
    handleSubmit(name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
                let self = this;
                this.$Message.success({
                  content: '登录成功!',
                  onClose: function () {
                     self.$router.push("index")
                  }
                });
            } else {
                this.$Message.error('登录失败，请检查输入!');
            }
        })
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
      margin: 0 auto;
    }
    div.pasitem {
      margin-top: 52px;
    }
    .pasword {
      
      position: relative;
    }
  }
}

</style>
