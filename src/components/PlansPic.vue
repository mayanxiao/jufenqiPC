<style lang="less" scoped>
	.plans-pic{
		width: 100%;
		height: 100%;
		p{
			position: absolute;
			bottom: 0;
			left: 0;
			height: 44px;
			line-height: 44px;
			background: rgba(0, 0, 0, 0.6);
			padding-left: 25px;
			font-size: 14px;
			color: #fff;
			width: 100%;
		}
		div{
			position: relative;
			width: 400px;
			height: 100%;
			width: 100%;
		}
		img{
			height: 100%;
			width: 100%;
		}
	}
</style>

<template>
	<div class="plans-pic">
		<div>
			<img :src="planspic.imgurl" alt="">
			<p>
				{{planspic.describe}}
			</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name: "PlansPic",
		components: {

		},
		data() {
			return{

			}
		},
		props: {
			planspic: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {

		},
		mounted(){

		}
	}
</script>