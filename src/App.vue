<template>
  <div id="app">
    <transition name="slide-leftt">
      <router-view id="view"></router-view>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 750px;
  height: 1340px;
  color: #2c3e50;
}
#view {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
/*.slide-left-leave {
   -webkit-transform: translateX(200px);
      -moz-transform: translateX(200px);
       -ms-transform: translateX(200px);
        -o-transform: translateX(200px);
           transform: translateX(200px);
}*/
    .slide-leftt-leave-active {
        opacity: 0;
    }
    .slide-leftt-enter {
        opacity: 0;
        transform: translate(100%, 0);
    }

/* .slide-fade-leave-active {
  transition: all 6.3s ease;
}
.slide-fade-enter
 .slide-fade-leave-active for below version 2.1.8  {
  transform: translateX(200px);
  opacity: 0;
}
.slide-fade-leave-to{
  transform: translateX(-200px);
} */
</style>
11