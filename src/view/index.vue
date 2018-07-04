<template>
  <div class="wrap">
    <div class="head">
       <Icon type="navicon-round" class="icon" @click.native='gotoSet()'></Icon>
       <Input v-model="search" icon="ios-search" class="search" placeholder="Enter something.."></Input>
       <img src="../assets/tran.png" alt="">
    </div>
    <div class="serching">
      <label class="hot-serching">大家正在搜</label>
      <div>
        <ul class="clearfix search-label">
          <li v-for="item in mostSearch">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
    <div class="week-hot">
        <div class="hot-title">
          <label>本周热门</label>
          <span>查看所有</span>
        </div>
        <div>
          <ul>
            <li v-for="item in weekHotList">
              <img  :src="`${item.url}`" alt="aaa" height="45px" width="45px">
              <label>{{ item.listener}}人在听</label>
              <h4>{{ item.title }}</h4>
            </li>
          </ul>
        </div>
    </div>
    <div class="new-music">
        <div class="hot-title">
          <label>本周热门</label>
          <span>查看所有</span>
        </div>
        <div>
          <ul>
            <li v-for="item in newMusic">
              <img src="" alt="aaa" height="45px" width="45px">
              <h4>{{ item.title }}</h4>
            </li>
          </ul>
        </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'index',
  mounted:function() {
    this.changeInputSize();
  },
  data () {
    return {
      search: "",
      password: "",
      mostSearch: ["周杰伦","薛之谦","刘若英","划水","夜跑"],
      weekHotList: [
        {url: '../assets/tran.png', listener:100, title: '野兽派必备音乐'}
      ],
      newMusic: [
        {url: 'aaa', listener:100, title: '野兽派必备音乐'}
      ]
    }
  },
  methods: {
    login() {
      if (this.username == '1') {
        alert("123");
      }
    },
  changeInputSize() {
      let input = document.querySelectorAll(".ivu-input");
      input[0].classList.add("login-input");
    },
    gotoSet() {
      this.$router.push('setting');
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap {
    background-color: #26263E;
    font-size: 18px;
    text-align: left;
    .head {
      height: 160px;
      .icon {
        height: 38px;
        margin-left: 40px;
      }
      .search {
        width: 500px;
        height: 52px;
        margin-left: 39px;
      }
      img {
        height: 57px;
        width: 57px;
        margin-left: 30px;
      }
    }
    .serching {
      height: 230px;
    }


}
.hot-title label{
  color: #0EAC98;
}
.hot-title span{
  color: #5F5F6E;
}
.hot-serching{
    color: #0CD4BA;
}
.icon {
    font-size: 36px;
    vertical-align: middle;
    color: #fff;
    margin-left: 20px;
}
.search {
      margin-left: 16px;
      width: 220px;
}
.search-label li {
  color: #fff;
  border: 1px solid #fff;
  border-radius: 20px;
  width: fit-content;
  padding: 4px;
  font-size: 15px;
  float: left;
  padding: 0 14px;
  margin-left: 10px;
}
.clearfix:after{
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
.head {
    height: 136px;
    text-align: left;
    line-height: 136px;
    background: linear-gradient(to right, #323D6D 0%, #375481 25%, #356F86 70%, #368E90 100%);
}
.head img{
      vertical-align: middle;
   animation:animations 6.5s linear infinite;
}
@keyframes animations{
  0%{ transform: rotate(0deg);}
  25%{ transform: rotate(90deg);}
  50%{ transform: rotate(180deg);}
  100%{ transform: rotate(360deg);}
}


</style>
