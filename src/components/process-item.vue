<style lang="less" scoped>
@border-big: #999;
@border-lit: #ebebeb;
@main: #ff9736;
@border-el: #bfcbd9;
.process {
	position: relative;
	.process-line {
		width: 3px;
		height: 332px;
		background-color: @main;
		position: absolute;
		top: 0;
		left: 50px;
	}
	.process-item-wrapper {
		width: 100px;
		height: 332px;
		position: absolute;
		left: 30px;
		border: 1px solid #ebebeb;
	}
}
</style>
<style type="text/css" media="screen">
body {
	background-color: #fff;
}
</style>
<template>
	<div class="process" :style="setWidth()">
		<div class="process-line"></div>
		<div class="process-item-wrapper">
			
		</div>
	</div>
</template>

<script>

export default{
	name: "process-item",
	components: {
	},
	data() {
		return{
			
		}
	},
	props: {
		width: {
			type: String,
			default: '205px'
		}
	},
	methods: {
		setWidth() {
			let ret = {}
			ret.width = this.width
			return ret
		}
	},
	mounted(){

	}
}
</script>