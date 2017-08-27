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
    <router-view></router-view>
    <j-footer></j-footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import JFooter from '@/components/JFooter'

export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    JFooter,
    NavBar
  },
  mounted() {
  },
  methods: {
  },
  watch: {
  }
}
</script>