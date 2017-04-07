<style lang="less">
.JFooterItem {
  background-color: #fff;
  width: 13%;
  margin-right: 1.2%;
  text-align: center;
  .f-title {
    font-size: 18px;
    font-family: '微软雅黑';
    font-weight: bold;
    margin-bottom: 8px;
  }
  .item-wrapper {
    font-size: 14px;
    margin-bottom: 20px;
  }
}

</style>

<template>
	<div class="JFooterItem">
    <div class="f-title">{{title}}</div>
		<div class="item-wrapper" v-for="item in footer">{{item}}</div>
	</div>
</template>

<script>
export default {
  name: 'JFooterItem',
  data () {
    return {
    }
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    footer() {
      return this.data
    },
    fTitle() {
      return this.title
    }
  }
}
</script>