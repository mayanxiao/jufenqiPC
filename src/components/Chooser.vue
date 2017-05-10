<style lang="less">
	.chooser{
		width: 1231px;
		border: 1px solid #c3c3c3;
		&>div{
			display: flex;
			*{
				width: 88px;
				text-align: center;
				display: block;
				height: 44px;
				line-height: 44px;
				font-size: 16px;
			}
			div{
				display: flex;
				width: 100%;
				border-top: 1px dashed #f6f6f6;
				span{
					width: 88px;
					text-align: center;
					display: block;
					height: 44px;
					line-height: 44px;
					font-size: 16px;
				}
			}
			p{
				background: #ffb400;
				border-top: 1px dashed #fff;
				color: #fff;
			}
		}
		&:nth-child(1){
			p{
				border: 0;
			}
			&>div{
				border: 0;
			}
		}
	}
</style>

<template>
	<div class="chooser">
		<div v-for="chooser in choosers">
			<p>
				{{chooser.name}}
			</p>
			<div>
				<span v-for="space in chooser.spaces">
					{{space}}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'chooser',
		data () {
			return {
				choosers: [{
					name: "空间",
					spaces: ["客厅","餐厅","厨房"]
				},{
					name: "空间",
					spaces: ["客厅","餐厅","厨房"]
				},{
					name: "空间",
					spaces: ["客厅","餐厅","厨房"]
				}]
			}
		}
	}
</script>