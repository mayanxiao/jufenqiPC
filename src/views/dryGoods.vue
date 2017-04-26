<style scoped>
	.dry-goods{
		min-width: 1220px;
		margin: 0 auto;
		padding-top: 20px;
	}
	.head-bac{
		width: 1000px;
		border: 1px solid #ccc;
		background: #ddd;
		height: 300px;
		margin: 0 auto;
		padding: 20px;
		position: relative;
	}
	.head-title{
		font-size: 25px;
		font-weight: bold;
	}
	.head-btn-check{
		height: 40px;
		width: 150px;
		line-height: 40px;
		position: absolute;
		top: 40px;
		right: 40px;
		border: 1px solid #333;
		text-align: center;
		cursor: pointer;
	}
	.head-bac img{
		display: inline-block;
		height: 200px;
		width: 200px;
		border-radius: 50%;
		margin-right: 40px;
	}
</style>

<template>
	<div class="dry-goods">
		<div class="head-bac">
			<p class="head-title">
				装修攻略
			</p>
			<img src="../assets/7.jpg">
			<p class="head-btn-check">
				查看攻略
			</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name: "dryGoods",
		components: {

		},
		data() {
			return{

			}
		},
		methods: {

		},
		mounted(){

		}
	}
</script>