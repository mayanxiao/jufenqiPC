<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
.mainbody {
  min-width: 1200px;
  width: 62.5%;
  margin: 0 auto;
}
</style>
<template>
  <div id="app">
    <!-- <j-header></j-header> -->
    <div class="mainbody">
      <router-view></router-view>
    </div>
    <j-footer></j-footer>
  </div>
</template>

<script>
import JFooter from '@/components/JFooter'

export default {
  name: 'app',
  components: {
    JFooter
  }
}
</script>
