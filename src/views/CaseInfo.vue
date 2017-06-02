<style lang="less" scoped>
	@border-big: #999;
	@border-lit: #ebebeb;
	@main: #ff9736;
	@border-el: #bfcbd9;
	.case-info{
		width: 1230px;
		margin: 0 auto;
		padding-top: 20px;
		display: flex;
		justify-content: space-between;
	}
	.left-bac{
		width: 930px;
		margin-right: 20px;
	}
	.right-bac{
		width: 280px;
	}
	.case-banner{
		margin-bottom: 20px;
	}
	.right-fir{
		height: 500px;
		background: #fff;
		padding: 20px 10px;
		.title{
			height: 34px;
			width: 100px;
			margin: 0 auto;
			color: #fff;
			background: @main;
			line-height: 34px;
			text-align: center;
		}
		.orgs{
			margin-top: 20px;
			display: flex;
			flex-wrap: wrap;
			div{
				padding-bottom: 10px;
				padding-top: 10px;
				border-bottom: 1px solid @border-lit;
				width: 50%;
				display: flex;
				p{
					display: inline-block;
					padding: 0 2px;
					height: 20px;
					text-align: center;
					line-height: 20px;
					font-size: 14px;
					background: @main;
					color: #fff;
					margin-right: 10px;
				}
				span{
					display: inline-block;
					color: #2d2d2d;
					height: 20px;
					line-height: 20px;
					font-size: 14px;
				}
			}
		}
		.case-des-title{
			margin-top: 20px;
			padding-bottom: 10px;
			font-size: 16px;
			border-bottom: 1px solid @border-lit;
		}
		.case-des-body{
			overflow:hidden; 
			text-overflow:ellipsis;
			display:-webkit-box; 
			-webkit-box-orient:vertical;
			-webkit-line-clamp:5;
			margin: 5px 0 20px;
			font-size: 12px;
			color: #666;
		}
		.case-des-cause{
			display: flex;
			div{
				width: 50%;
				display: flex;
				p{
					font-size: 12px;
					height: 20px;
					line-height: 20px;
					display: inline-block;
				}
				span{
					font-size: 16px;
					height: 20px;
					line-height: 20px;
					display: inline-block;
					color: @main;
				}
			}
		}
		.case-btn{
			height: 30px;
			width: 150px;
			margin: 20px auto 0;
			text-align: center;
			line-height: 30px;
			cursor: pointer;
			color: #fff;
			background: @main;
			font-size: 14px;
		}
	}
	.right-sec{
		background: #fff;
		margin-top: 20px;
		padding: 20px;
		.sec-title{
			font-size: 16px;
			text-align: center;
			font-weight: bold;
		}
		.sec-imgs{
			width: 240px;
			height: 100px;
			margin-top: 20px;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
	.left-mid{
		display: flex;
		margin-top: 20px;
		justify-content: space-between;
		margin-bottom: 20px;
		&>div{
			width: 455px;
			.left-mid-body{

			}
		}
	}
	.left-mid-title{
		height: 16px;
		line-height: 18px;
		font-size: 18px;
		padding-right: 6px;
		border-right: 2px solid @main;
		display: inline-block;
	}
	.left-mid-body{
		height: 200px;
		background: #fff;
		margin-top: 20px;
		padding: 20px 12px;
		&>p{
			margin-top: 20px;
			overflow:hidden; 
			text-overflow:ellipsis;
			display:-webkit-box; 
			-webkit-box-orient:vertical;
			-webkit-line-clamp:5;
			font-size: 12px;
			color: #666;
		}
	}
	.left-head{
		display: flex;
		img{
			display: block;
			height: 50px;
			width: 50px;
			border-radius: 50%;
			margin-right: 10px;
		}
		&>div{
			height: 50px;
			p{
				height: 25px;
				line-height: 25px;
				margin-bottom: 4px;
				font-size: 14px;
			}
			.left-head-cards{
				display: flex;
				span{
					background: rgb(102, 211, 141);
					color: #fff;
					display: inline-block;
					padding: 0 3px;
					height: 15px;
					line-height: 15px;
					font-size: 12px;
					margin-right: 5px;
				}
			}
		}
	}
	.left-allcash{
		margin: 20px 0;
		height: 34px;
		background: #fff;
		display: flex;
		padding: 0 20px;
		justify-content: space-between;
		p{
			height: 34px;
			line-height: 34px;
			display: inline-block;
			font-size: 14px;
			color: #666;
		}
	}
	.left-head-stars{
		display: flex;
	}
	.left-main-table{
		margin-top: 10px;
		padding: 0 10px;
		background: #fff;
		margin-bottom: 20px;
		&>div{
			height: 34px;
			display: flex;
			padding-left: 20px;
			border-bottom: 1px dashed @border-lit;
			p{
				height: 34px;
				line-height: 34px;
				font-size: 14px;
				color: #666;
				&:nth-child(1){
					width: 131px;
				}
				&:nth-child(2){
					width: 127px;
				}
				&:nth-child(3){
					width: 162px;
				}
				&:nth-child(4){
					width: 128px;
				}
				&:nth-child(5){
					width: 155px;
				}
				&:nth-child(6){
					width: 187px;
				}
			}
			&:nth-child(1){
				width: 930px;
				position: relative;
				left: -10px;
				background: #ebebeb;
				padding-left: 30px;
				border-bottom: 0;
				p{
					font-size: 16px;
				}
			}
		}
	}
	.left-input{
		margin-top: 10px;
		textarea{
			height: 200px;
			width: 100%;
			padding: 20px;
			font-size: 14px;
			color: #666;
			border: 1px solid @border-lit;
			resize:none;
			&::placeholder{
				color: #ebebeb;
			}
		}
		&>div{
			display: flex;
			margin-top: 10px;
			justify-content: space-between;
			p{
				font-size: 14px;
				color: #ccc;
				span{
					font-size: 16px;
					color: @main;
					cursor: pointer;
				}
			}
			div{
				height: 44px;
				width: 100px;
				text-align: center;
				line-height: 44px;
				cursor: pointer;
				color: #fff;
				background: @main;
				font-size: 16px;
			}
		}
	}
</style>

<style type="text/css" media="screen">
	.case-banner div{
		height: 400px;
	}
</style>

<template>
	<div class="case-info">
		<div class="left-bac">
			<div class="case-banner">
				<div class="block">
					<el-carousel trigger="click" height="400px;">
						<el-carousel-item v-for="item in banners" :key="item">
							<img :src="item.imgurl" alt="">
						</el-carousel-item>
					</el-carousel>
				</div>
			</div>
			<div class="left-mid">
				<div>
					<div class="left-mid-title">
						居点评
					</div>
					<div class="left-mid-body">
						<div class="left-head">
							<img src="/static/imgIndex/plans1.png" alt="">
							<div>
								<p>
									居分期小官
								</p>
								<div class="left-head-cards">
									<span>
										颜值担当
									</span>
									<span>
										颜值担当
									</span>
									<span>
										颜值担当
									</span>
								</div>
							</div>
						</div>
						<p>
							评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！
						</p>
					</div>
				</div>
				<div>
					<div class="left-mid-title">
						业主点评
					</div>
					<div class="left-mid-body">
						<div class="left-head">
							<img src="/static/imgIndex/plans1.png" alt="">
							<div>
								<p>
									傻白羊的大白牙
								</p>
								<div class="left-head-stars">
									
								</div>
							</div>
						</div>
						<p>
							评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！评论评论啊我叫评论！！！
						</p>
					</div>
				</div>
			</div>
			<div class="left-mid-title">
				造价清单
			</div>
			<div class="left-allcash">
				<p v-for="item in allCashs">
					{{item.name}}：{{item.price}}
				</p>
			</div>
			<div class="left-mid-title">
				主材选购清单
			</div>
			<div class="left-main-table">
				<div v-for="mainTable in mainTables">
					<p v-for="con in mainTable.content">
						{{con.des}}
					</p>
				</div>
			</div>
			<div class="left-mid-title">
				案例评论
			</div>
			<div class="left-input">
				<textarea name="case-discuss" placeholder="请文明评论"></textarea>
				<div>
					<p>
						请
						<span>
							登录
						</span>
						后评价
					</p>
					<div>
						发表评论
					</div>
				</div>
			</div>
			<user-comment :comList="comList" title="全部评论"></user-comment>
		</div>
		<div class="right-bac">
			<div class="right-fir">
				<div class="title">
					120平米改造
				</div>
				<div class="orgs">
					<div v-for="item in orgs">
						<p>
							{{item.name}}
						</p>
						<span>
							{{item.des}}
						</span>
					</div>
				</div>
				<div class="case-des-title">
					案例说明
				</div>
				<div class="case-des-body">
					案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！案例描述描述草泥马的这是描述！！
				</div>
				<div class="case-des-cause">
					<div>
						<p>
							总花费：
						</p>
						<span>
							3.4万元
						</span>
					</div>
					<div>
						<p>
							节省：
						</p>
						<span>
							0.4万元
						</span>
					</div>
				</div>
				<div class="case-btn">
					我也想这样装
				</div>
			</div>
			<div class="right-sec">
				<div class="sec-title">
					主材提供商
				</div>
				<div class="sec-imgs">
					<img src="/static/imgIndex/plans1.png" alt="">
				</div>
				<div class="sec-imgs">
					<img src="/static/imgIndex/plans1.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import UserComment from "../components/user-comment"
	export default{
		name: "CaseInfo",
		components: {
			UserComment
		},
		data() {
			return{
				comList: [{
					username: '王硕',
					imgUrl: 'https://source.unsplash.com/random',
					comment: '显锋这个工长非常靠谱，不仅能对每个户型进行精准定位，快速给出解决方案并执行，服务态度还特别好，最令人敬佩的就是显锋具有一般工长所没有的抗击打和打击能力，他曾经单手拧钢筋，双手拆飞机，这些都不是常人说着玩的',
					isNew: false,
					house: '8室9厅10卫',
					createdAt: 1491029234,
					time: 1482310164
				},{
					username: '王硕',
					imgUrl: 'https://source.unsplash.com/random',
					comment: '显锋这个工长非常靠谱，不仅能对每个户型进行精准定位，快速给出解决方案并执行，服务态度还特别好，最令人敬佩的就是显锋具有一般工长所没有的抗击打和打击能力，他曾经单手拧钢筋，双手拆飞机，这些都不是常人说着玩的',
					isNew: false,
					house: '8室9厅10卫',
					createdAt: 1491029234,
					time: 1482310164
				},{
					username: '王硕',
					imgUrl: 'https://source.unsplash.com/random',
					comment: '显锋这个工长非常靠谱，不仅能对每个户型进行精准定位，快速给出解决方案并执行，服务态度还特别好，最令人敬佩的就是显锋具有一般工长所没有的抗击打和打击能力，他曾经单手拧钢筋，双手拆飞机，这些都不是常人说着玩的',
					isNew: false,
					house: '8室9厅10卫',
					createdAt: 1491029234,
					time: 1482310164
				},{
					username: '王硕',
					imgUrl: 'https://source.unsplash.com/random',
					comment: '显锋这个工长非常靠谱，不仅能对每个户型进行精准定位，快速给出解决方案并执行，服务态度还特别好，最令人敬佩的就是显锋具有一般工长所没有的抗击打和打击能力，他曾经单手拧钢筋，双手拆飞机，这些都不是常人说着玩的',
					isNew: false,
					house: '8室9厅10卫',
					createdAt: 1491029234,
					time: 1482310164
				},],
				mainTables: [{
					id: 0,
					content: [{
						name: "名称",
						des: "名称"
					},{
						name: "品牌",
						des: "品牌"
					},{
						name: "款式/规格",
						des: "款式/规格"
					},{
						name: "数量",
						des: "数量"
					},{
						name: "购买方式",
						des: "购买方式"
					},{
						name: "备注",
						des: "备注"
					}]
				},{
					id: 1,
					content: [{
						name: "名称",
						des: "地板"
					},{
						name: "品牌",
						des: "博洛尼"
					},{
						name: "款式/规格",
						des: "欧式"
					},{
						name: "数量",
						des: "9"
					},{
						name: "购买方式",
						des: "建材城"
					},{
						name: "备注",
						des: "无"
					}]
				},{
					id: 1,
					content: [{
						name: "名称",
						des: "地板"
					},{
						name: "品牌",
						des: "博洛尼"
					},{
						name: "款式/规格",
						des: "欧式"
					},{
						name: "数量",
						des: "9"
					},{
						name: "购买方式",
						des: "建材城"
					},{
						name: "备注",
						des: "无"
					}]
				},{
					id: 1,
					content: [{
						name: "名称",
						des: "地板"
					},{
						name: "品牌",
						des: "博洛尼"
					},{
						name: "款式/规格",
						des: "欧式"
					},{
						name: "数量",
						des: "9"
					},{
						name: "购买方式",
						des: "建材城"
					},{
						name: "备注",
						des: "无"
					}]
				},{
					id: 1,
					content: [{
						name: "名称",
						des: "地板"
					},{
						name: "品牌",
						des: "博洛尼"
					},{
						name: "款式/规格",
						des: "欧式"
					},{
						name: "数量",
						des: "9"
					},{
						name: "购买方式",
						des: "建材城"
					},{
						name: "备注",
						des: "无"
					}]
				},{
					id: 1,
					content: [{
						name: "名称",
						des: "地板"
					},{
						name: "品牌",
						des: "博洛尼"
					},{
						name: "款式/规格",
						des: "欧式"
					},{
						name: "数量",
						des: "9"
					},{
						name: "购买方式",
						des: "建材城"
					},{
						name: "备注",
						des: "无"
					}]
				},{
					id: 1,
					content: [{
						name: "名称",
						des: "地板"
					},{
						name: "品牌",
						des: "博洛尼"
					},{
						name: "款式/规格",
						des: "欧式"
					},{
						name: "数量",
						des: "9"
					},{
						name: "购买方式",
						des: "建材城"
					},{
						name: "备注",
						des: "无"
					}]
				},{
					id: 1,
					content: [{
						name: "名称",
						des: "地板"
					},{
						name: "品牌",
						des: "博洛尼"
					},{
						name: "款式/规格",
						des: "欧式"
					},{
						name: "数量",
						des: "9"
					},{
						name: "购买方式",
						des: "建材城"
					},{
						name: "备注",
						des: "无"
					}]
				},{
					id: 1,
					content: [{
						name: "名称",
						des: "地板"
					},{
						name: "品牌",
						des: "博洛尼"
					},{
						name: "款式/规格",
						des: "欧式"
					},{
						name: "数量",
						des: "9"
					},{
						name: "购买方式",
						des: "建材城"
					},{
						name: "备注",
						des: "无"
					}]
				},{
					id: 1,
					content: [{
						name: "名称",
						des: "地板"
					},{
						name: "品牌",
						des: "博洛尼"
					},{
						name: "款式/规格",
						des: "欧式"
					},{
						name: "数量",
						des: "9"
					},{
						name: "购买方式",
						des: "建材城"
					},{
						name: "备注",
						des: "无"
					}]
				},{
					id: 1,
					content: [{
						name: "名称",
						des: "地板"
					},{
						name: "品牌",
						des: "博洛尼"
					},{
						name: "款式/规格",
						des: "欧式"
					},{
						name: "数量",
						des: "9"
					},{
						name: "购买方式",
						des: "建材城"
					},{
						name: "备注",
						des: "无"
					}]
				},{
					id: 1,
					content: [{
						name: "名称",
						des: "地板"
					},{
						name: "品牌",
						des: "博洛尼"
					},{
						name: "款式/规格",
						des: "欧式"
					},{
						name: "数量",
						des: "9"
					},{
						name: "购买方式",
						des: "建材城"
					},{
						name: "备注",
						des: "无"
					}]
				}],
				allCashs: [{
					name: "辅料",
					price: 10000
				},{
					name: "辅料",
					price: 10000
				},{
					name: "辅料",
					price: 10000
				},{
					name: "辅料",
					price: 10000
				},{
					name: "辅料",
					price: 10000
				},{
					name: "辅料",
					price: 10000
				},{
					name: "辅料",
					price: 10000
				},{
					name: "辅料",
					price: 10000
				}],
				orgs: [{
					name: "房屋面积",
					des: "老房"
				},{
					name: "户型",
					des: "二居室"
				},{
					name: "面积",
					des: "40平米"
				},{
					name: "风格",
					des: "现代简约"
				},{
					name: "工期",
					des: "2个月"
				},{
					name: "装修人群",
					des: "三口之家"
				},{
					name: "管家名称",
					des: "傻白羊"
				},{
					name: "小区名称",
					des: "甘露园"
				}],
				banners: [{
					imgurl: "/static/imgCaseinfo/banner.png"
				},{
					imgurl: "/static/imgCaseinfo/banner.png"
				},{
					imgurl: "/static/imgCaseinfo/banner.png"
				},{
					imgurl: "/static/imgCaseinfo/banner.png"
				},]
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