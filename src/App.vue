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
}

</style>
<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <!-- <j-footer></j-footer> -->
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import JFooter from '@/components/JFooter'

export default {
  name: 'app',
  data() {
    return {
      scroll: ''
    }
  },
  components: {
    JFooter,
    NavBar
  },
  mounted() {
    // window.addEventListener('scroll', this.getScroll)
  },
  methods: {
    getScroll() {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;  

      if(document.body.scrollTop)
        {
          this.scroll= document.body.scrollTop;
        }
        else{
          this.scroll= document.documentElement.scrollTop
        }
    }
  },
  watch: {
    scroll: function(val) {
      if (val > this.scrollLimit) {
        this.scrollShow = true
      } else {
        this.scrollShow = false
      }
    }
  }
}
</script>