<style lang="less" scoped>
	@border-big: #999;
	@border-lit: #ebebeb;
	@main: #ff9736;
	@border-el: #bfcbd9;
	.build{
		padding-top: 20px;
		background: #f7f7f7;
		&>div{
			width: 1230px;
			margin: 0 auto;
		}
	}
	.build-top{
		display: flex;
		height: 350px;
		justify-content: space-between;
		&>div{
			overflow: hidden;
			&:nth-child(1){
				width: 450px;
				height: 350px;
			}
			&:nth-child(2){
				width: 450px;
				height: 350px;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				img{
					width: 215px;
					height: 165px;
					display: block;
					margin-bottom: 20px;
				}
			}
			&:nth-child(3){
				width: 290px;
				height: 350px;
				background: #fff;
			}
		}
	}
	.choose{
		margin-top: 20px;
	}
	.goods-bac{
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;
	}
	.goods{
		width: 400px;
		padding-bottom: 10px;
		background: #fff;
		transition: all 0.3s linear;
		margin: 0 15px 15px 0;
		&:nth-child(3n){
			margin-right: 0!important;
		}
		&:hover{
			box-shadow: 2px 2px 2px #ddd;
		}
		&>img{
			width: 400px;
			height: 250px;
			display: block;
			margin-bottom: 10px;
			cursor: pointer;
		}
		.good-title{
			height: 20px;
			font-size: 16px;
			color: #393939;
			line-height: 20px;
			padding: 0 10px;
		}
		.good-red{
			padding: 0 10px;
			font-size: 14px;
			height: 15px;
			line-height: 15px;
			margin: 10px 0;
			color: #fd4e50;
		}
		.good-des{
			color: #999;
			font-size: 14px;
			height: 30px;
			line-height: 15px;
			overflow: hidden;
			padding: 0 10px;
			text-overflow:ellipsis;
			display:-webkit-box; 
			-webkit-box-orient:vertical;
			-webkit-line-clamp:2;
			margin-bottom: 12px;
		}
		&>div{
			height: 30px;
			padding: 0 10px;
			display: flex;
			position: relative;
			p{
				color: #999;
				font-size: 14px;
				height: 30px;
				line-height: 30px;
				cursor: pointer;
				margin-right: 20px;
				&:hover{
					color: @main;
				}
			}
			div{
				height: 30px;
				line-height: 30px;
				font-size: 14px;
				color: #999;
				background-image: url(/static/build/icon.png);
				background-repeat: no-repeat;
				background-position: 0 7px;
				cursor: pointer;
				&:hover{
					color: @main;
					background-image: url(/static/build/icon-active.png)
				}
			}
			&>span{
				position: absolute;
				right: 10px;
				top: 0;
				height: 30px;
				width: 100px;
				text-align: center;
				line-height: 30px;
				background: #fd4e50;
				cursor: pointer;
				color: #fff;
				font-size: 14px;
			}
		}
	}
</style>
<style type="text/css">
	.choose p{
		width: 0!important;
		padding: 0!important;
	}
	.choose span{
		margin: 5px 25px!important;
	}
	.choose div{
		background: #fff;
	}
	.choose .chooser{
		border: 0!important;
		padding: 0 20px!important;
	}
	.chooser>div>div{
		border-top: 1px solid #f6f6f6!important;
	}
</style>

<template>
	<div class="build">
		<div>
			<div class="build-top">
				<div>
					<img src="/static/build/top1.png" alt="">
				</div>
				<div>
					<img src="/static/build/top2.png" alt="">
					<img src="/static/build/top3.png" alt="">
					<img src="/static/build/top2.png" alt="">
					<img src="/static/build/top3.png" alt="">
				</div>
				<div>
					
				</div>
			</div>
			<div class="choose">
				<chooser :spacesArr="tab.tabs" first="11" :chooseindex="id" v-for="(tab, id) in tabList"></chooser>
			</div>
			<div class="goods-bac">
				<div class="goods" v-for="item in goodsList">
					<img :src="item.imgurl" alt="">
					<p class="good-title">
						{{item.name}}
					</p>
					<p class="good-red">
						{{item.alert}}
					</p>
					<p class="good-des">
						{{item.describe}}
					</p>
					<div>
						<p>
							值 
							<span>
								{{item.value}}
							</span>
						</p>
						<div>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.discuss}}
						</div>
						<span>
							查看店铺
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Chooser from "../components/Chooser"
	export default {
		name: 'Build',
		components: {
			Chooser
		},
		data () {
			return {
				tabList: [{
					tabs: ["沙发","马桶","洁具","沙发","马桶","洁具","沙发","马桶","洁具","沙发","马桶","洁具"]
				},{
					tabs: ["沙发","马桶","洁具","沙发","马桶","洁具","沙发","马桶","洁具","沙发","马桶","洁具"]
				},{
					tabs: ["沙发","马桶","洁具","沙发","马桶","洁具","沙发","马桶","洁具","沙发","马桶","洁具"]
				},{
					tabs: ["沙发","马桶","洁具","沙发","马桶","洁具","沙发","马桶","洁具","沙发","马桶","洁具"]
				},],
				goodsList: [{
					name: "Meiling 美菱 BCD-448ZP34Fd 448升 双开门冰箱",
					alert: "1.99包邮",
					describe: "描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道",
					value: 0,
					discuss: 12,
					imgurl: "/static/build/good.png"
				},{
					name: "Meiling 美菱 BCD-448ZP34Fd 448升 双开门冰箱",
					alert: "1.99包邮",
					describe: "描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道",
					value: 0,
					discuss: 12,
					imgurl: "/static/build/good.png"
				},{
					name: "Meiling 美菱 BCD-448ZP34Fd 448升 双开门冰箱",
					alert: "1.99包邮",
					describe: "描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道",
					value: 0,
					discuss: 12,
					imgurl: "/static/build/good.png"
				},{
					name: "Meiling 美菱 BCD-448ZP34Fd 448升 双开门冰箱",
					alert: "1.99包邮",
					describe: "描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道",
					value: 0,
					discuss: 12,
					imgurl: "/static/build/good.png"
				},{
					name: "Meiling 美菱 BCD-448ZP34Fd 448升 双开门冰箱",
					alert: "1.99包邮",
					describe: "描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道描述不知道",
					value: 0,
					discuss: 12,
					imgurl: "/static/build/good.png"
				},]
			}
		},
		methods: {
			
		},
		mounted() {

		},
		computed: {

		},
	}
</script>