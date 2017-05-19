<style lang="less" scoped>
	@border-big: #999;
	@border-lit: #ebebeb;
	@main: #ff9736;
	.lit-title{

	}
	.titles{
		height: 15px;
		border-bottom: 1px solid @border-big;
		position: relative;
		p{
			position: absolute;
			background: #f7f7f7;
			font-size: 30px;
			width: 140px;
			height: 41px;
			line-height: 41px;
			top: -3px;
		}
	}
	.plans{
		padding-top: 45px;
		display: flex;
		justify-content: space-between;
		div{
			position: relative;
			height: 190px;
			width: 190px;
			cursor: pointer;
			overflow: hidden;
			img{
				display: block;
				height: 100%;
				width: 100%;
				position: absolute;
				top: 0;
				left: 0;
				transition: all 0.2s linear;
			}
			span{
				display: block;
				height: 190px;
				width: 190px;
				line-height: 190px;
				text-align: center;
				position: absolute;
				top: 0;
				left: 0;
				font-size: 18px;
				color: #fff;
				font-weight: bold;
			}
			&:hover{
				img{
					height: 120%;
					width: 120%;
					top: -10%;
					left: -10%;
				}
				span{
					color: @main;
				}
			}
		}
	}
</style>

<template>
	<div class="lit-title">
		<div class="titles">
			<p>
				{{plansList.title}}
			</p>
		</div>
		<div class="plans">
			<div v-for="plan in plansList.plans">
				<img :src="plan.imgurl" alt="">
				<span>
					{{plan.name}}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "LitTitle",
		components: {

		},
		data() {
			return{

			}
		},
		props: {
			plansList: {
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