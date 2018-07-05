<template>
  <div class="container">
    <div class="head">
        <div class="user-img">
          <div>
            <img src="http://img0.imgtn.bdimg.com/it/u=637974712,3659654094&fm=27&gp=0.jpg" alt="">
            <label>linyu</label>
          </div>
          <Icon type="navicon-round" class="icon" @click.native='gotoIndex()'></Icon>
        </div>
        <div class="username">
          <h2>账号设置</h2>
          <p>密码修改</p>
          <p>个人设置</p>
          <em></em>
        </div>
    </div>
    <div class="music-set">
        <h2>音乐设置</h2>
        <p>音乐品质</p>
        <p>内容过滤</p>
        <p>音乐时长</p>
        <p>待机时长</p>
    </div>
    <div>
        <h2>连接设置</h2>
        <p>我的设备</p>
        <p>小白的蓝牙</p>
        <p>BEAT</p>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      search: "",
    }
  },
  methods: {
    login() {
      if (this.username == '1') {
        alert("123");
      }
    },
    gotoIndex() {
      this.$router.push('index');
    }
    }
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
$mainColor:#0CD4BA;
.container{
    background-color: #222342;
    color: #fefefe;
    text-align: left;
    .head {
      position: relative;
      .user-img {
        position: relative;
        div {
          img {
          width: 82px;
          height: 82px;
          border-radius: 82px;
          margin-top: 70px;
          margin-left: 90px;
        }
        }
        label {
          display: block;
          padding-left: 110px;
          font-size: 28px;
        }
        .icon {
          font-size: 72px;
          right: 60px;
          top: 70px;
          position: absolute;
        }
      }
      .username {
        margin-top: 42px;
           
        h2 {
          margin-top: 45px;
          font-size: 45px;
          color: $mainColor;
          margin-left: 90px;
          font-weight: 200;
        }
        p {
          margin-top: 50px;
          font-size: 36px;
          margin-left: 90px;
           font-weight: 200;
        }
        em{
          height: 1px;
          width: 100%;
          display: inline-block;
          margin-top: 64px;
          margin-bottom: 45px;
          color: #4e4e61;
          background-color: #4e4e61;
        }
      }
    }
    .music-set {
      h2 {
        font-size: 45px;
        color: $mainColor;
        margin-left: 90px;
        font-weight: 200;
      }
      p {
        margin-top: 50px;
        font-size: 36px;
        margin-left: 90px;
          font-weight: 200;
      }      
    }
}



</style>
