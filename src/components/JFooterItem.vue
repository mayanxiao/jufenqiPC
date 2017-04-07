<style lang='less'>
.JFooterItem {

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
      default: []
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