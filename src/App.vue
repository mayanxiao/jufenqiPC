<style>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    /* color: #2c3e50; */
  }
  .mainbody {
    min-width: 1220px;
    width: 62.5%;
    margin: 0 auto;
  }
</style>
<template>
  <div id="app">
    <div class="mainbody">
      <router-view></router-view>
    </div>
    <!-- <j-footer></j-footer> -->
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
