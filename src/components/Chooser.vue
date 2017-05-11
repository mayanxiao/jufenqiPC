<style lang="less">
	.chooser{
		width: 1231px;
		border: 1px solid #c3c3c3;
		&>div{
			display: flex;
			position: relative;
			*{
				width: 88px;
				display: block;
				line-height: 44px;
				font-size: 16px;
				padding-left: 21px;
			}
			div{
				display: flex;
				flex-wrap: wrap;
				width: 100%;
				padding: 0;
				padding-right: 100px;
				border-top: 1px dashed #f6f6f6;
				overflow: hidden;
				height: 44px;
				span{
					width: 88px;
					display: block;
					height: 44px;
					line-height: 44px;
					font-size: 14px;
					color: #2d2d2d;
					padding-left: 30px;
				}
			}
			p{
				background: #ffb400;
				border-top: 1px dashed #fff;
				color: #fff;
			}
			img{
				width: 24px;
				height: 24px;
				position: absolute;
				top: 10px;
				right: 13px;
				cursor: pointer;
				padding: 0;
				transform: rotate(180deg);
			}
		}
		&:nth-child(1){
			&>p{
				border: 0;
			}
			&>div{
				border: 0;
			}
		}
	}
	.hide-bar{
		height: 44px;
	}
</style>

<template>
	<div class="chooser">
		<div v-for="chooser in choosers">
			<p>
				{{chooser.name}}
			</p>
			<div class="chooserDom" :id="chooser.id">
				<span v-for="space in chooser.spaces">
					{{space}}
				</span>
			</div>
			<img src="/static/pressionimgs/arrowup.png" alt="" @click="showOrHide(chooser.id)">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'chooser',
		data () {
			return {
				choosers: [{
					id: 1,
					name: "空间",
					spaces: ["客厅","餐厅","厨房","餐厅","厨房","餐厅","厨房","餐厅","厨房","餐厅","厨房","餐厅","厨房","餐厅","厨房","餐厅","厨房","餐厅","厨房"]
				},{
					id: 2,
					name: "空间",
					spaces: ["客厅","餐厅","厨房"]
				},{
					id: 3,
					name: "空间",
					spaces: ["客厅","餐厅","厨房"]
				}]
			}
		},
		methods: {
			showOrHide(a){
				var obj = document.getElementById(a).style
				document.getElementById(a).style.height = "auto"
				console.log(obj)
			}
		},
		mounted() {
			// var chooserArr = document.getElementsByClassName("chooserDom")
			// console.log(chooserArr)
			// chooserArr.map(function(a){
			// 	a.style.height = 44+"px"
			// })
		}
	}
</script>