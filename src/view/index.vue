<template>
  <div class="wrap"  @load.native="changeInputSize()">
    <div class="head">
       <Icon type="navicon-round" class="icon" @click.native='gotoSet()'></Icon>
       <Input v-model="search" icon="ios-search" class="search" placeholder="Enter something.."></Input>
       <img src="../assets/tran.png" alt="">
    </div>
    <div class="serching">
      <label class="hot-serching">大家正在搜</label>
      <div class="hot-bar">
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
        <div class="music-menu">
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
          <label>新歌速递</label>
          <span>查看所有</span>
        </div>
        <div class="new-menu">
          <ul>
            <li v-for="item in newMusic">
              <img :src="`${item.url}`" alt="aaa">
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
    let api = this.HOST + 'query';
    this.axios.get(api).then((response) => {
      console.log(response.data)
    })
  },
  updated:  function () {
    this.changeInputSize();
  },
  mounted:  function () {
    this.changeInputSize();
  },
  activated: function () {
    this.changeInputSize();
  },
  data () {
    return {
      search: "",
      password: "",
      mostSearch: ["周杰伦","薛之谦","刘若英","划水","夜跑","肌肉爆发"],
      weekHotList: [
         {url: 'http://img5.imgtn.bdimg.com/it/u=1459496973,4239757056&fm=27&gp=0.jpg', listener:100, title: '野兽派必备音乐'}
      ],
      newMusic: [
        {url: 'http://g.hiphotos.baidu.com/image/h%3D300/sign=fb8af6169d2397ddc9799e046983b216/0823dd54564e92584fbb491f9082d158cdbf4eb0.jpg',
         listener:100, title: '野兽派必备音乐'},
        {url: 'http://b.hiphotos.baidu.com/image/h%3D300/sign=ff1d01f98b94a4c21523e12b3ef51bac/a8773912b31bb051d18c53de3a7adab44bede098.jpg',
         listener:100, title: '野兽派必备音乐'},
        {url: 'http://e.hiphotos.baidu.com/image/h%3D300/sign=4d11b8949422720e64cee4fa4bc90a3a/4a36acaf2edda3cc383fa5d60de93901203f9268.jpg',
         listener:100, title: '野兽派必备音乐'}
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
     color: #FEFEFC;
    .head {
      height: 160px;
      text-align: left;
      line-height: 136px;
      background: linear-gradient(to right, #323D6D 0%, #375481 25%, #356F86 70%, #368E90 100%);
      .icon {
        height: 45px;
        width: 45px;
        margin-left: 40px;
        display: inline-block;
        font-size: 50px;
        transform: translateY(12px);
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
        vertical-align: middle;
        animation:animations 6.5s linear infinite;
      }
    }
    .serching {
      height: 280px;
      label {
         color: #0CD4BA;
        height: 80px;
        display: inline-block;
        margin-left: 43px;
        font-size: 20px;
        letter-spacing: 5px;
        transform: translateY(24px);
      }
      .hot-bar  {
        ul  {
          margin-left: 43px;
          li  {
              color: #FEFEFC;
              border: 2px solid #fff;
              border-radius: 32px;
              width: fit-content;
              padding: 4px;
              font-size: 24px;
              float: left;
              padding: 12px 25px;
              margin-left: 10px;
              margin-bottom: 12px;
          }
        }
      }
    }
    .week-hot {
      height: 420px;
      .hot-title {
        label {
            height: 80px;
            display: inline-block;
            margin-left: 43px;
            font-size: 20px;
            letter-spacing: 5px;
            transform: translateY(24px);
            color: #0EAC98;
        }
        span  {
            height: 80px;
            display: inline-block;
            margin-left: 143px;
            font-size: 20px;
            letter-spacing: 5px;
            transform: translateY(24px);
            color: #5F5F6E;
        }

      }
      .music-menu {
        position: relative;
        ul  {
          // position: absolute;
          li {
            width: 438px;
            height: 238px;
            display: inline-block;
             margin-left: 43px;
            color: #ffffff;
          }
          img {
            height: 100%;
            width: 100%;
          }
        }
      }
    }
    .new-music  {
      .hot-title {
        label {
            height: 80px;
            display: inline-block;
            margin-left: 43px;
            font-size: 20px;
            letter-spacing: 5px;
            transform: translateY(24px);
            color: #0EAC98;
        }
        span  {
            height: 80px;
            display: inline-block;
            margin-left: 143px;
            font-size: 20px;
            letter-spacing: 5px;
            transform: translateY(24px);
            color: #5F5F6E;
        }

      }
      .new-menu {
        ul {
          li {
            width: 200px;
            height: 200px;
            display: inline-block;
             margin-left: 43px;
            img {
              width: 100%;
              height: 100%;
              
            }
          }
        }
      }
    }


}
.clearfix:after{
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
@keyframes animations{
  0%{ transform: rotate(0deg);}
  25%{ transform: rotate(90deg);}
  50%{ transform: rotate(180deg);}
  100%{ transform: rotate(360deg);}
}


</style>
