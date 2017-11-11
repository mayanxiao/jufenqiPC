<style>
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
body{
  background: #f7f7f7;
  font-family: 'Avenir', Helvetica, Arial, sans-serif, '微软雅黑';
}
.white-back {
  background-color: #fff;
}
input {
  outline: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, '微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1300px;
}

</style>
<template>
  <div id="app">
    <preload-image :imgUrlArr="imgUrls" @imgAllLoaded="picOn()" :animationShow="myFalse">
      <img src="/static/logo.gif" />
    </preload-image>
    <router-view v-if="preload"></router-view>
    <j-footer v-if="preload"></j-footer>
  </div>
</template>

<script>
import JFooter from '@/components/JFooter'
import PreloadImage from '@/components/PreloadImage'

export default {
  name: 'app',
  data() {
    return {
      imgUrls: ['/static/index/banner_01.png','/static/index/what.png'],
      preload: false,
      myFalse: false
    }
  },
  components: {
    JFooter,
    PreloadImage
  },
  mounted() {
  },
  methods: {
    picOn() {
      this.preload = true
    }
  },
  watch: {
  }
}
</script>