<template>
  <div id="app">
    <navigator></navigator>
    <router-view/>
  </div>
</template>
<script>
import navigator from '../src/components/navigator.vue'

export default {
  name: 'App',
  components: { navigator }
}
</script>

<style>
#app {
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", STHeiti, "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-left: 320px;
  line-height: 1.8;
}
@media (min-width: 1400px) {
  #app {
    padding-left: 400px;
  }
}
</style>
