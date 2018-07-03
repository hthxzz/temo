<template>
  <div class="container">
    <div class="head">
        <div>
          <img src="" alt="">
          <label></label>
          <span></span>
            <Icon type="navicon-round" class="icon" @click.native='gotoIndex()'></Icon>
        </div>
        <div>
          <h2>账号设置</h2>
          <p>密码修改</p>
          <p>个人设置</p>
        </div>
    </div>
    <div>
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
$mainColor:#fafafb;
.container{
    background-color: #222342;
     color: $mainColor;
}



</style>
