<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@main: #ff9736;

.input-item {
  display: flex;
  border-bottom: 1px solid #ddd;
  input {
    outline: none;
    width: 100%;
    height: 36px;
    line-height: 36px;
    border: none;
    transition: border-color 0.1s cubic-bezier(.645,.045,.355,1);
    margin-bottom: 15px;
    &:focus {
      border-color: @main;
    }
  }
  .input-title {
    color: #666;
  }
}
</style>

<template>
  <div class="input-item" :style="setWidth()">
    <input type="text">
  </div>
</template>

<script>
export default {
  name: 'InputItem',
  props: {
    width: {
      type: String,
      default: '366px'
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
    setWidth(wid) {
      let ret = {}
      ret.width = this.width
      return ret
    }
  }
}
</script>
