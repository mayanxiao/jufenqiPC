<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@main: #ff9736;

.input-item {
  width: 100%;
  height: 350px;
  // background-color: #ebebeb;
  border-top: 2px solid @main;
  padding: 25px 16px;
  text-align: center;
  margin-bottom: 20px;
  .input-title {
    margin-bottom: 20px;
  }
  input {
    background-color: #fff;
    padding-left: 10px;
    outline: none;
    width: 100%;
    height: 36px;
    line-height: 36px;
    border: 1px solid #ebebeb;
    transition: border-color 0.1s cubic-bezier(.645,.045,.355,1);
    margin-bottom: 15px;
    &:focus {
      border-color: @main;
    }
  }
  .input-btn {
    width: 100%;
    height: 36px;
    text-align: center;
    background-color: @main;
    line-height: 36px;
    margin-top: 40px;
  }
}
</style>

<template>
  <div class="input-item" :style="backGround()">
    <div class="input-title">{{title}}</div>
    <input type="text" placeholder="姓名">
    <input type="text" placeholder="电话">
    <input type="text" placeholder="房屋面积">
    <div class="input-btn">提交</div>
  </div>
</template>

<script>
export default {
  name: 'InputItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    back: {
      type: String,
      default: '#fff'
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    backGround() {
      let ret = {}
      ret.backgroundColor = this.back
      return ret
    }
  }
}
</script>
