<style lang="less" scoped>
.Footer {
	width: 100%;
	img {

	}
}
.items {
	display: flex;
}
</style>

<template>
	<div class="j-footer">
		<img src="http://placehold.it/350x150">
		<div class="items" v-for="item in footers">
			<j-footer-item :title="item.title" :data="item.items"></j-footer-item>
		</div>
		
	</div>
</template>

<script>
import JFooterItem from '@/components/JFooterItem'

export default {
  name: 'j-footer',
  components: {
  	JFooterItem
  },
  data () {
    return {
      footers: [{
      	title: '选购指南',
      	items: ['会员注册', '如何订购', '如何支付']
      },{
      	title: '装修服务',
      	items: ['居装宝', '第三方免费监理']
      }]
    }
  }
}
</script>