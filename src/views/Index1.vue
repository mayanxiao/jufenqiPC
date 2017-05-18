<style lang="less" scoped>
	@border-big: #999;
	@border-lit: #ebebeb;
	@main: #f3a944;
	.index1{
		padding: 20px 0;
		width: 1233px;
	}
	.banner-bac{
		height: 364px;
		display: flex;
		justify-content: space-between;
	}
	.bigbanner{
		width: 633px;
		.banner{
			height: 250px;
			width: 633px;
			margin-bottom: 10px;
			border: 1px solid #ccc;
		}
	}
	.three-logos{
		display: flex;
		justify-content: space-between;
		div{
			width: 204px;
			height: 104px;
			background: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			&:hover{
				box-shadow: 2px 2px 2px #ccc;
			}
			img{
				display: block;
				margin-right: 5px;
			}
			p{
				font-size: 16px;
				color: #666;
				span{
					display: block;
					font-size: 10px;
					color: #999;
				}
			}
		}
	}
	.review-bac{
		width: 280px;
		height: 364px;
		background: #fff;
		&>p{
			height: 246px;
			background-image: url(/static/imgIndex/bannerbac.png);
			background-repeat: no-repeat;
			padding-top: 20px;
			text-align: center;
			font-size: 14px;
			color: #fff;
		}
		&>div{
			padding: 0 20px;
			.own-speak{
				border-top: 1px solid #c3c3c3;
				position: relative;
				padding-top: 20px;
				&>p{
					font-size: 14px;
					color: #c3c3c3;
					height: 20px;
					line-height: 20px;
					background: #fff;
					width: 108px;
					position: absolute;
					top: -10px;
					span{
						color: #2d2d2d;
					}
				}
			}
		}
	}
	.review-body{
		display: flex;
		div{
			margin-right: 15px;
			img{
				height: 50px;
				width: 50px;
				margin-bottom: 5px;
			}
			p{
				font-size: 10px;
				color: #c3c3c3;
			}
		}
		&>p{
			font-size: 14px;
			color: #2d2d2d;
			span{
				display: block;
				font-size: 10px;
				color: #c3c3c3;
				margin-top: 10px;
				height: 54px;
				overflow: hidden;
				padding-left: 10px;
			}
		}
	}
	.steps{
		margin: 30px auto 60px;
		p{
			color: #c3c3c3;
			font-size: 14px;
			text-align: center;
			margin-bottom: 30px;
		}
		&>div{
			display: flex;
			justify-content: space-between;
			span{
				display: block;
				width: 100px;
				text-align: center;
				font-size: 16px;
				color: #c3c3c3;
				img{
					display: block;
					margin-bottom: 10px;
					height: 100px;
					width: 100px;
				}
			}
			div{
				cursor: pointer;
				&:hover{
					span{
						color: @main;
					}
				}
			}
		}
	}
	.effect-select{
		margin-top: 30px;
		display: flex;
		height: 24px;
		p{
			height: 100%;
			padding-left: 15px;
			border-left: 2px solid @main;
			color: #2d2d2d;
			font-size: 16px;
			line-height: 24px;
			width: 100px;
		}
		span{
			display: inline-block;
			padding: 0 2px;
			height: 24px;
			line-height: 25px;
			font-size: 14px;
			color: #c3c3c3;
			margin-right: 30px;
			cursor: pointer;
			&:hover{
				border-bottom: 2px solid @main;
				color: @main;
			}
		}
	}
	.effect-body{
		display: flex;
		justify-content: space-between;
		height: 350px;
		padding-top: 25px;
		margin-bottom: 60px;
		div{
			overflow: hidden;
		}
		.effect-main-l{
			width: 380px;
			position: relative;
			height: 350px;
			&:hover{
				p{
					bottom: 0;
				}
			}
		}
		.effect-main-m{
			height: 350px;
			&>div{
				&:nth-child(1){
					width: 604px;
					height: 165px;
					position: relative;
					margin-bottom: 20px;
					&:hover{
						p{
							bottom: 0;
						}
					}
				}
			}
			.effect-main-b{
				display: flex;
				justify-content: space-between;
				div{
					width: 292px;
					height: 165px;
					position: relative;
					&:hover{
						p{
							bottom: 0;
						}
					}
				}
			}
		}
		.effect-main-r{
			width: 209px;
			height: 350px;
		}
		img{
			display: block;
			height: 100%;
			width: 100%;
		}
		p{
			position: absolute;
			bottom: -30px;
			left: 0;
			width: 100%;
			height: 60px;
			background: #000;
			padding: 10px 0;
			transition: all 0.3s linear;
			span{
				height: 20px;
				line-height: 20px;
				display: block;
				color: #fff;
				padding-left: 20px;
				&:nth-child(1){
					font-size: 16px;
				}
				&:nth-child(2){
					font-size: 10px;
				}
			}
		}
	}
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}
	.block{
		height: 100%;
	}
	.el-carousel{
		height: 100%;
	}
	.el-carousel__container{
		height: 100%;
		img{
			height: 100%;
			width: 100%;
			display: block;
			cursor: pointer;
		}
	}
</style>

<style type="text/css" media="screen">
	.el-carousel__arrow{
		margin-top: -18px!important;
	}
</style>

<template>
	<div class="index1">
		<div class="banner-bac">
			<enroll></enroll>
			<div class="bigbanner">
				<div class="banner">
					<div class="block">
						<el-carousel trigger="click" height="250px;">
							<el-carousel-item v-for="item in banners" :key="item">
								<img :src="item.imgurl" alt="">
							</el-carousel-item>
						</el-carousel>
					</div>
				</div>
				<div class="three-logos">
					<div>
						<img src="/static/imgIndex/threelogo-1.png" alt="">
						<p>
							居装宝
							<span>
								装修界的安全卫士
							</span>
						</p>
					</div>
					<div>
						<img src="/static/imgIndex/threelogo-2.png" alt="">
						<p>
							居分期
							<span>
								互联网家装首选
							</span>
						</p>
					</div>
					<div>
						<img src="/static/imgIndex/threelogo-1.png" alt="">
						<p>
							免费监理
							<span>
								帮你搞定装修
							</span>
						</p>
					</div>
				</div>
			</div>
			<div class="review-bac">
				<p>
					居分期 － 独立 客观 第三方的家装领域平台
				</p>
				<div>
					<div class="own-speak">
						<p>
							居点评/
							<span>
								业主说
							</span>
						</p>
<<<<<<< HEAD
						<div class="review-body">
							<div>
								<img src="/static/imgIndex/head.png" alt="">
								<p>
									只有王硕
								</p>
							</div>
							<p>
								［日记］幸福的小黑
								<span>
									小黑的世界里只有王硕，是的，没有错，真的只有王硕，他已经融入了小黑的生活。
								</span>
							</p>
						</div>
=======
					</div>
					<div class="block">
						<el-carousel trigger="click" height="84px;" indicator-position="none" arrow="never">
							<el-carousel-item v-for="item in ownSpeak" :key="item">
								<div class="own-speak" style="padding:0; border:0;">
									<div class="review-body">
										<div>
											<img :src="item.imgurl" alt="">
											<p>
												{{item.name}}
											</p>
										</div>
										<p>
											{{item.title}}
											<span>
												{{item.describe}}
											</span>
										</p>
									</div>
								</div>
							</el-carousel-item>
						</el-carousel>
>>>>>>> origin/master
					</div>
				</div>
			</div>
		</div>
		<div class="steps">
			<p>
				选择您当前所处的阶段可以找到您可能需要的服务
			</p>
			<div id="steps">
				<div v-for="step in steps">
					<span>
						<img :src="step.imgurl" alt="">
						{{step.name}}
					</span>
				</div>
			</div>
		</div>
		<lit-title :plansList="plansList"></lit-title>
		<div class="effect-select">
			<p>
				效果图
			</p>
			<span v-for="style in styles">
				{{style}}
			</span>
		</div>
		<div class="effect-body">
			<div class="effect-main-l">
				<img src="/static/imgIndex/plans1.png" alt="">
				<p>
					<span>
						美式风格二居设计
					</span>
					<span>
						美式风格二居设计啊今晚 i 欧冠那否定空间
					</span>
				</p>
			</div>
			<div class="effect-main-m">
				<div>
					<img src="/static/imgIndex/plans1.png" alt="">
					<p>
						<span>
							美式风格二居设计
						</span>
						<span>
							美式风格二居设计啊今晚 i 欧冠那否定空间
						</span>
					</p>
				</div>
				<div class="effect-main-b">
					<div>
						<img src="/static/imgIndex/plans1.png" alt="">
						<p>
							<span>
								美式风格二居设计
							</span>
							<span>
								美式风格二居设计啊今晚 i 欧冠那否定空间
							</span>
						</p>
					</div>
					<div>
						<img src="/static/imgIndex/plans1.png" alt="">
						<p>
							<span>
								美式风格二居设计
							</span>
							<span>
								美式风格二居设计啊今晚 i 欧冠那否定空间
							</span>
						</p>
					</div>
				</div>
			</div>
			<div class="effect-main-r">
				<img src="/static/imgIndex/plans1.png" alt="">
			</div>
		</div>
		<get-price></get-price>
	</div>
</template>

<script>
	import Enroll from "../components/Enroll"
	import LitTitle from "../components/LitTitle"
	import GetPrice from "../components/GetPrice"
	export default {
		name: 'impression',
		components: {
			Enroll,
			LitTitle,
			GetPrice
		},
		data () {
			return {
				ownSpeak: [{
					name: "只有鱼头",
					title: "［日记］幸福的鱼头",
					imgurl: "static/imgIndex/head.png",
					describe: "我的世界里只有鱼头，是的，没有错，真的只有鱼头，而且鱼头已经成为了我生活中的一部分。"
				},{
					name: "只有鱼头",
					title: "［日记］大鱼头",
					imgurl: "static/imgIndex/head.png",
					describe: "我的世界里只有鱼头，是的，没有错，真的只有鱼头，而且鱼头已经成为了我生活中的一部分。"
				},{
					name: "只有鱼头",
					title: "［日记］小鱼头",
					imgurl: "static/imgIndex/head.png",
					describe: "我的世界里只有鱼头，是的，没有错，真的只有鱼头，而且鱼头已经成为了我生活中的一部分。"
				},{
					name: "只有鱼头",
					title: "［日记］大大鱼头",
					imgurl: "static/imgIndex/head.png",
					describe: "我的世界里只有鱼头，是的，没有错，真的只有鱼头，而且鱼头已经成为了我生活中的一部分。"
				},{
					name: "只有鱼头",
					title: "［日记］小小鱼头",
					imgurl: "static/imgIndex/head.png",
					describe: "我的世界里只有鱼头，是的，没有错，真的只有鱼头，而且鱼头已经成为了我生活中的一部分。"
				},],
				banners: [{
					imgurl: "/static/imgIndex/plans3.png"
				},{
					imgurl: "/static/imgIndex/plans3.png"
				},{
					imgurl: "/static/imgIndex/plans3.png"
				},{
					imgurl: "/static/imgIndex/plans3.png"
				}],
				steps: [{
					imgurl: "/static/imgIndex/step1.png",
					name: "准备阶段"
				},{
					imgurl: "/static/imgIndex/step2.png",
					name: "装修公司"
				},{
					imgurl: "/static/imgIndex/step3.png",
					name: "设计阶段"
				},{
					imgurl: "/static/imgIndex/step4.png",
					name: "建材选购"
				},{
					imgurl: "/static/imgIndex/step5.png",
					name: "施工阶段"
				},{
					imgurl: "/static/imgIndex/step6.png",
					name: "家居选购"
				}],
				plansList: {
					title: "准备阶段",
					plans: [{
						imgurl: "static/imgIndex/plans1.png",
						name: "关于知识的攻略"
					},{
						imgurl: "static/imgIndex/plans2.png",
						name: "关于资金的攻略"
					},{
						imgurl: "static/imgIndex/plans3.png",
						name: "关于时间的攻略"
					},{
						imgurl: "static/imgIndex/plans4.png",
						name: "关于资金托管的攻略"
					},{
						imgurl: "static/imgIndex/plans5.png",
						name: "关于量房的攻略"
					},{
						imgurl: "static/imgIndex/plans6.png",
						name: "关于报价的攻略"
					},]
				},
				styles: ["美式","美式","美式","美式","美式","美式","美式","美式","美式","美式"]
			}
		},
		methods: {
			hoverChange(){
				let that = this
				let newImgurl = ""
				let step = document.getElementById("steps").getElementsByTagName("div")
				for(let i=0; i<6; i++){
					step[i].onmouseover = function(){
						newImgurl = that.steps[i].imgurl.split(".png")[0]
						that.steps[i].imgurl = newImgurl + "-active.png"
					}
					step[i].onmouseout = function(){
						newImgurl = that.steps[i].imgurl.split("-active.png")[0]
						that.steps[i].imgurl = newImgurl + ".png"
					}
				}
			}
		},
		mounted() {
			this.hoverChange()
		}
	}
</script>