<template>
  <div class="container">
    <div class="head clearfix">
      <i class="iconfont icon-return1"></i>
      <i class="iconfont icon-gengduo"></i>
    </div>
    <div class="content">
      <div class="audio">
        <audio id="audio":src="src"  :autoplay="playSet.autoplay"  controls="controls"></audio>
      </div>
      <div class="speed">
        <label>{{bpm}}</label>
        <span>BPM</span>
      </div>
      <div class="play-pic">
        <canvas id="canvas"></canvas>
        <img :src="url" alt="播放图片">
      </div>
      <div class="play-lryc">
        <div v-if="playing">
          <h2></h2>
          <label></label>
        </div>
        <div v-else>
          <label></label>
        </div>
      </div>
      <div class="">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
    <div class="bottom">
      <div class="playingList">
        <label for=""></label>
        <div></div>
        <span></span>
        <label for=""></label>
      </div>
      <div class="btn">
        <div>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <i></i>
        <div class="pla-btn clearfix" @click="playmusic($event)">
          <i v-if="play"  class="iconfont icon-bofang3" ></i>
          <i v-else class="iconfont icon-bofang4"></i>
        </div>
        <i></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      search: "",
      password: "",
      playing: '',
      bpm: 135,
      play: true,
      url: 'https://static.bootcss.com/www/assets/img/bootcdn.png?1522827096909',
      src: 'http://m10.music.126.net/20180410231011/c62a666ca517137ce95a4f8d03efaafe/ymusic/41f8/3c88/8b60/8454e61035dec41b9c906428e9bc218a.mp3',
      playSet: {
        autoplay: false,
        volume: 0.1
      }
    }
  },
  mounted() {
    this.$nextTick(function () {
  // DOM 更新了
  // 
      let ctx = document.getElementById("canvas").getContext('2d');
      ctx.strokeStyle="#396BC5";
      ctx.arc(100,0, 60, 0,  2*Math.PI, false);
      ctx.stroke();
    })

  },
  methods: {
    playmusic(event) {
      let className = event.toElement.className.split("-")[1];
      let myAudio = document.getElementById("audio");
      if (className == "bofang3") {
         myAudio.play();
         myAudio.volume = this.playSet.volume;
      }else {
         myAudio.pause();
      }
      this.play = !this.play;
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   @import "../styles/scss/play";

</style>
