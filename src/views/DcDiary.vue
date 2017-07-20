<style lang="less" scoped>
	@border-big: #999;
	@border-lit: #ebebeb;
	@main: #ff9736;
	.dc-diary{
		width: 1320px;
		margin: 0 auto;
		padding-top: 20px;
		display: flex;
		justify-content: space-between;
	}
	.left-bar{
		width: 930px;
	}
	.left-card{
		height: 200px;
		background: #ebebeb;
		padding: 20px;
		position: relative;
		display: flex;
		img{
			width: 100px;
			height: 100px;
			display: block;
			margin-right: 20px;
		}
		&>div{
			padding-top: 20px;
			p{
				font-size: 14px;
				color: #2d2d2d;
				height: 15px;
				margin-bottom: 20px;
				span{
					display: inline-block;
					margin-right: 20px;
				}
				&:nth-child(1){
					font-size: 16px;
					color: #000;
				}
			}
		}
		&>p{
			position: absolute;
			right: 20px;
			top: 40px;
			background: @main;
			font-size: 14px;
			color: #fff;
			height: 34px;
			width: 120px;
			line-height: 34px;
			text-align: center;
			cursor: pointer;
			border-radius: 5px;
		}
	}
	.left-title{
		margin-top: 30px;
		display: flex;
		p{
			border-bottom: 1px solid @border-lit;
			&:nth-child(2n+1){
				width: 80px;
				text-align: center;
				font-size: 16px;
				color: #2d2d2d;
				cursor: pointer;
			}
			&:nth-child(2){
				width: 30px;
			}
			&:nth-child(4){
				width: 740px;
			}
		}
		.active{
			border-bottom: 1px solid @main;
			color: @main!important;
		}
	}
	.main-bac{
		.main-title{
			position: relative;
			border-bottom: 1px solid @main;
			margin-top: 60px;
			p{
				height: 60px;
				width: 60px;
				position: absolute;
				border-radius: 50%;
				background: @main;
				color: #fff;
				text-align: center;
				padding: 11px 10px;
				line-height: 19px;
				top: -30px;
			}
		}
		.main-body{
			margin-top: 10px;
			padding-left: 80px;
			.main-body-top{
				p{
					font-size: 16px;
					color: @main;
				}
				span{
					font-size: 14px;
					color: #2d2d2d;
					overflow:hidden; 
					text-overflow:ellipsis;
					display:-webkit-box; 
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2;
					margin-top: 20px;
				}
				div{
					margin-top: 20px;
					display: flex;
					img{
						height: 150px;
						width: 150px;
						display: block;
						margin-right: 20px;
					}
				}
			}
			.main-body-table{

			}
		}
	}
</style>

<template>
	<div class="white-back">
		<div class="dc-diary">
			<div class="left-bar">
				<div class="left-card">
					<img src="/static/imgDcDiary/head.png" alt="">
					<div>
						<p>
							40平米小猪自装
						</p>
						<p>
							<span>
								房屋信息：141平米
							</span>
							<span>
								风格：田园   半包
							</span>
						</p>
						<p>
							所在小区：鱼头的头里
						</p>
						<p>
							装修公司：幸福一家
						</p>
					</div>
					<p>
						查看他的日记
					</p>
				</div>
				<div class="left-title">
					<p class="active">
						业主日记
					</p>
					<p>
						
					</p>
					<p>
						购物清单
					</p>
					<p>
						
					</p>
				</div>
				<div class="main-bac" v-for="maindata in mainData">
					<div class="main-title">
						<p>
							前期准备
						</p>
					</div>
					<div class="main-body">
						<div class="main-body-top">
							<p>
								2018年7月1日
							</p>
							<span>
								描述啊描述啊描述！！！！描述啊描述啊描述！！！！描述啊描述啊描述！！！！描述啊描述啊描述！！！！描述啊描述啊描述！！！！描述啊描述啊描述！！！！描述啊描述啊描述！！！！描述啊描述啊描述！！！！描述啊描述啊描述！！！！描述啊描述啊描述！！！！描述啊描述啊描述！！！！描述啊描述啊描述！！！！描述啊描述啊描述！！！！描述啊描述啊描述！！！！描述啊描述啊描述！！！！描述啊描述啊描述！！！！描述啊描述啊描述！！！！描述啊描述啊描述！！！！
							</span>
							<div>
								<img src="/static/imgDcDiary/body1.png" alt="">
								<img src="/static/imgDcDiary/body1.png" alt="">
								<img src="/static/imgDcDiary/body1.png" alt="">
								<img src="/static/imgDcDiary/body1.png" alt="">
								<img src="/static/imgDcDiary/body1.png" alt="">
							</div>
						</div>
						<div class="main-body-table">
							<div v-for="tablelist in maindata.tableList">
								<div v-for="content in tablelist.contents">
								{{content.des}}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="right-bar">
				
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
				mainData: [{
					tableList:[{
						id: 0,
						contents: [{
							name: "名称",
							des: "名称"
						},{
							name: "品牌",
							des: "品牌"
						},{
							name: "款式/规格",
							des: "款式/规格"
						},{
							name: "购买地址",
							des: "购买地址"
						},{
							name: "价格",
							des: "价格"
						},{
							name: "数量",
							des: "数量"
						},{
							name: "备注",
							des: "备注"
						},{
							name: "评价",
							des: "评价"
						},]
					},{
						id: 1,
						contents: [{
							name: "名称",
							des: "家电"
						},{
							name: "品牌",
							des: ""
						},{
							name: "款式/规格",
							des: ""
						},{
							name: "购买地址",
							des: ""
						},{
							name: "价格",
							des: ""
						},{
							name: "数量",
							des: ""
						},{
							name: "备注",
							des: ""
						},{
							name: "评价",
							des: ""
						},{
						id: 2,
						contents: [{
							name: "名称",
							des: "小鱼头"
						},{
							name: "品牌",
							des: "大西洋"
						},{
							name: "款式/规格",
							des: "商务"
						},{
							name: "购买地址",
							des: "居然之家"
						},{
							name: "价格",
							des: "$5500"
						},{
							name: "数量",
							des: "1"
						},{
							name: "备注",
							des: ""
						},{
							name: "评价",
							des: ""
						},]
					},]
					},]
				}]
			}
		},
		props: {
			
		},
		methods: {

		},
		mounted(){

		}
	}
</script>