<style lang="less" scoped>
	@border-big: #999;
	@border-lit: #ebebeb;
	@main: #ff9736;
	@border-el: #bfcbd9;
	.index1{
		padding: 20px 0;
		width: 1230px;
		margin: 0 auto;
	}
	.banner1-bac{
		height: 364px;
		display: flex;
		justify-content: space-between;
	}
	.bigbanner1{
		width: 630px;
		.banner1{
			height: 250px;
			width: 630px;
			margin-bottom: 10px;
			border: 1px solid #ccc;
			div{
				overflow: hidden;
			}
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
			transition: all 0.4s linear;
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
				overflow:hidden; 
				text-overflow:ellipsis;
				display:-webkit-box; 
				-webkit-box-orient:vertical;
				-webkit-line-clamp:3;
			}
		}
	}
	.steps{
		margin: 30px auto 60px;
		position: relative;
		z-index: 10000000;
		p{
			color: #999;
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
			width: 206px;
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
	.com-titles{
		height: 15px;
		border-bottom: 1px solid @border-big;
		position: relative;
		p{
			position: absolute;
			background: #f7f7f7;
			font-size: 30px;
			width: 200px;
			height: 41px;
			line-height: 41px;
			top: -3px;
		}
	}
	.componey-head{
		margin-top: 50px;
		span{
			margin-top: 36px;
			height: 14px;
			font-size: 14px;
			line-height: 14px;
			color: #666;
			display: block;
		}
		.three-coms{
			height: 170px;
			display: flex;
			margin-top: 10px;
			div{
				background-size: auto 170px;
				background-position: bottom;
				line-height: 170px;
				font-size: 20px;
				font-weight: bold;
				text-align: center;
				width: 20%;
				color: #fff;
				cursor: pointer;
				&:nth-child(1){
					background-image: url(/static/imgIndex/plans1.png);
					width: 60%;
				}
				&:nth-child(2){
					background-image: url(/static/imgIndex/plans2.png);
				}
				&:nth-child(3){
					background-image: url(/static/imgIndex/plans3.png);
				}
			}
		}
		.coms-slect{
			margin-top: 20px;
			height: 34px;
			display: flex;
			position: relative;
			p{
				height: 34px;
				margin-right: 30px;
				display: inline-block;
				padding: 0 2px;
				line-height: 34px;
				color: #666;
				font-size: 16px;
				cursor: pointer;
				&:hover{
					border-bottom: 1px solid @main;
					color: @main;
				}
			}
			span{
				display: block;
				position: absolute;
				right: 0;
				color: #c3c3c3;
				font-size: 14px;
				bottom: 9px;
				cursor: pointer;
			}
		}
		.coms-body{
			margin-top: 10px;
			border: 1px solid @border-lit;
			.coms-body-name{
				display: flex;
				height: 124px;
				p{
					width: 10%;
					border-left: 1px solid @border-lit;
					border-bottom: 1px solid @border-lit;
					height: 124px;
					line-height: 124px;
					text-align: center;
					cursor: pointer;
					&:nth-child(1){
						border-left: 0;
					}
					&:hover{
						box-shadow: 2px 2px 2px #ccc inset, -2px 2px 2px #ccc inset;
						border-bottom: 0;
					}
				}
				.active{
					box-shadow: 2px 2px 2px #ccc inset, -2px 2px 2px #ccc inset;
					border-bottom: 0;
				}
			}
			.coms-body-main{
				height: 260px;
				padding: 50px 88px;
				display: flex;
				&>div{
					padding-top: 20px;
					width: 50%;
					border-right: 1px solid @border-lit;
					display: flex;
					img{
						display: block;
						width: 120px;
						height: 120px;
						border-radius: 50%;
						margin-right: 14px;
						flex-shrink: 0;
					}
					&>div{
						p{
							font-size: 18px;
							margin-bottom: 14px;
						}
					}
					.coms-body-judge{
						margin-top: 14px;
						display: flex;
						flex-wrap: wrap;
						height: 88px;
						overflow: hidden;
						p{
							display: inline-block;
							padding: 0 13px;
							height: 30px;
							line-height: 30px;
							margin: 0 11px 11px 0;
							background: #e5e5e5;
							font-size: 14px;
						}
					}
				}
				&>p{
					width: 50%;
					padding-top: 50px;
					padding-left: 45px;
					text-overflow:ellipsis;
					display:-webkit-box; 
					-webkit-box-orient:vertical;
					-webkit-line-clamp:3;
					overflow: hidden;
					color: #999;
					font-size: 14px;
				}
			}
		}
	}
	.chiefs-select{
		margin-top: 20px;
		border: 1px solid @border-lit;
		padding: 20px;
		display: flex;
		justify-content: space-between;
		.chief-sel{
			width: 230px;
			height: 44px;
			input{
				height: 100%!important;
			}
		}
		&>p{
			width: 189px;
			height: 44px;
			border-radius: 5px;
			line-height: 44px;
			text-align: center;
			font-size: 16px;
			cursor: pointer;
			border: 1px solid #bfcbd9;
			color: #999;
			&:hover{
				color: @main;
				border-color: @main;
			}
		}
	}
	.chiefs{
		margin-top: 20px;
		height: 235px;
		display: flex;
		justify-content: space-between;
		margin-bottom: 70px;
		div{
			height: 235px;
			width: 188px;
			position: relative;
			img{
				display: block;
				height: 235px;
				width: 188px;
			}
			p{
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				line-height: 235px;
				text-align: center;
				color: #fff;
				font-size: 25px;
				font-weight: bold;
			}
		}
	}
	.material{
		.mat-slect{
			margin-top: 20px;
			height: 34px;
			display: flex;
			position: relative;
			p{
				height: 34px;
				margin-right: 30px;
				display: inline-block;
				padding: 0 2px;
				line-height: 34px;
				color: #666;
				font-size: 16px;
				cursor: pointer;
				&:hover{
					border-bottom: 1px solid @main;
					color: @main;
				}
			}
			span{
				display: block;
				position: absolute;
				right: 0;
				color: #c3c3c3;
				font-size: 14px;
				bottom: 9px;
				cursor: pointer;
			}
		}
		.mat-body{
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			margin-top: 10px;
			&>div{
				height: 190px;
				width: 190px;
				margin-bottom: 20px;
				img{
					display: block;
					height: 100%;
					width: 100%;
				}
			}
		}
	}
	.card-wrapper {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	.des-exam{
		margin-top: 20px;
		margin-bottom: 10px;
		height: 15px;
		line-height: 15px;
		color: #999;
		font-size: 14px;
		position: relative;
		span{
			position: absolute;
			right: 0;
			font-size: 12px;
			color: #c3c3c3;
			cursor: pointer;
		}
	}
</style>

<style type="text/css" media="screen">
	.el-carousel__arrow{
		margin-top: -18px!important;
	}
	.chief-sel input{
		height: 44px;
	}
	.coms-body .block{
		height: 260px;
	}
	.coms-body .block .el-carousel__container{
		height: 260px!important;
	}
</style>

<template>
	<div class="index1">
		<div class="banner1-bac">
			<enroll></enroll>
			<div class="bigbanner1">
				<div class="banner1">
					<div class="block">
						<el-carousel trigger="click" height="250px;">
							<el-carousel-item v-for="item in banner1s" :key="item">
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
		<div class="componey-head">
			<div class="com-titles">
				<p>
					选择装修公司
				</p>
			</div>
			<span>
				热门装修公司
			</span>
			<div class="three-coms">
				<div>
					奔跑吧
				</div>
				<div>
					奔跑吧
				</div>
				<div>
					奔跑吧
				</div>
			</div>
			<div class="coms-slect">
				<p>
					综合
				</p>
				<p>
					最具设计感的
				</p>
				<p>
					口碑最好的
				</p>
				<p>
					价位最低的
				</p>
				<span>
					更多
				</span>
			</div>
			<div class="coms-body">
				<div class="coms-body-name"> 
					<p v-for="combody in comBodys" @click="comsTag(combody.id)" :class="{ active: combody.isActive }">
						{{combody.name}}
					</p>
				</div>
				<div  class="block">
					<el-carousel indicatorPosition="none" :autoplay="comsHaha()" arrow="never" ref="carousel" trigger="click" height="150px">
						<el-carousel-item v-for="item in comBodys" :key="item">
							<div class="coms-body-main">
								<div>
									<img :src="item.imgurl" alt="">
									<div>
										<p>
											{{item.name}}
										</p>
										<div class="block" style="height: auto">
											<el-rate disabled text-color="#ff9900" v-model="item.val"></el-rate>
										</div>
										<div class="coms-body-judge">
											<p v-for="judge in item.judges">
												{{judge}}
											</p>
										</div>
									</div>
								</div>
								<p>
									{{item.describe}}
								</p>
							</div>
						</el-carousel-item>
					</el-carousel>
				</div>
				
			</div>
		</div>
		<div class="chiefs-select">
			<el-select v-model="chiefValue" placeholder="请选择" class="chief-sel">
				<el-option v-for="item in chiefOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
			</el-select>
			<el-select v-model="chiefValue" placeholder="请选择" class="chief-sel">
				<el-option v-for="item in chiefOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
			</el-select>
			<el-select v-model="chiefValue" placeholder="请选择" class="chief-sel">
				<el-option v-for="item in chiefOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
			</el-select>
			<el-select v-model="chiefValue" placeholder="请选择" class="chief-sel">
				<el-option v-for="item in chiefOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
			</el-select>
			<p>
				匹配
			</p>
		</div>
		<div class="chiefs">
			<div v-for="chief in chiefs">
				<img :src="chief.imgurl" alt="">
				<p>
					{{chief.name}}
				</p>
			</div>
		</div>
		<lit-title :plansList="designersList"></lit-title>
		<div class="des-exam">
			设计完工案例
			<span>
				更多
			</span>
		</div>
		<div class="card-wrapper">
			<design-card :sample="card" v-for="card in cards"></design-card>
		</div>
		<lit-title :plansList="materialsList" style="margin-top: 60px;"></lit-title>
		<div class="material">
			<div class="mat-slect">
				<p>
					泥瓦
				</p>
				<p>
					水电
				</p>
				<p>
					地板
				</p>
				<p>
					墙壁
				</p>
				<p>
					门
				</p>
				<span>
					所有品牌
				</span>
			</div>
			<div class="mat-body">
				<div v-for="matbody in materialBody">
					<img :src="matbody.imgurl" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Enroll from "../components/Enroll"
	import LitTitle from "../components/LitTitle"
	import GetPrice from "../components/GetPrice"
	import DesignCard from "../components/DesignCard"
	export default {
		name: 'impression',
		components: {
			Enroll,
			LitTitle,
			GetPrice,
			DesignCard
		},
		data () {
			return {
				cards: [{
					id: 0,
					imgUrl: 'https://source.unsplash.com/random',
					community: '北京王硕听了都想打人小区',
					price: '10000',
					dcMethod: 1,
					logo: 'https://source.unsplash.com/random',
					time: 1463033653,
					house: '三室一厅一卫',
					company: '北京王硕被打的稀碎公司'
				},{
					id: 1,
					imgUrl: 'https://source.unsplash.com/random',
					community: '北京王硕听了都想打人小区',
					price: '10000',
					dcMethod: 1,
					logo: 'https://source.unsplash.com/random',
					time: 1473033653,
					house: '三室一厅一卫',
					company: '北京王硕被打的满脸血公司'
				},{
					id: 2,
					imgUrl: 'https://source.unsplash.com/random',
					community: '北京王硕冲了上去小区',
					price: '10000',
					dcMethod: 1,
					logo: 'https://source.unsplash.com/random',
					time: 1483033653,
					house: '三室一厅一卫',
					company: '北京王硕被打的稀碎公司'
				},{
					id: 3,
					imgUrl: 'https://source.unsplash.com/random',
					community: '北京王硕听了都想打人小区',
					price: '10000',
					dcMethod: 1,
					logo: 'https://source.unsplash.com/random',
					time: 1463033653,
					house: '三室一厅一卫',
					company: '北京王硕被打成猪头公司'
				},{
					id: 4,
					imgUrl: 'https://source.unsplash.com/random',
					community: '北京王硕听了都想打人小区',
					price: '10000',
					dcMethod: 1,
					logo: 'https://source.unsplash.com/random',
					time: 1463033653,
					house: '三室一厅一卫',
					company: '北京王硕被打的稀碎公司'
				},{
					id: 5,
					imgUrl: 'https://source.unsplash.com/random',
					community: '北京王硕听了都想打人小区',
					price: 10000,
					dcMethod: 1,
					logo: 'https://source.unsplash.com/random',
					time: 1473033653,
					house: '三室一厅一卫',
					company: '北京王硕被打的满脸血公司'
				},{
					id: 6,
					imgUrl: 'https://source.unsplash.com/random',
					community: '北京王硕冲了上去小区',
					price: '10000',
					dcMethod: 1,
					logo: 'https://source.unsplash.com/random',
					time: 1483033653,
					house: '三室一厅一卫',
					company: '北京王硕被打的稀碎公司'
				},{
					id: 7,
					imgUrl: 'https://source.unsplash.com/random',
					community: '北京王硕冲了上去小区',
					price: '10000',
					dcMethod: 1,
					logo: 'https://source.unsplash.com/random',
					time: 1483033653,
					house: '三室一厅一卫',
					company: '北京王硕被打的稀碎公司'
				}],
				materialBody: [{
					imgurl: "static/imgIndex/plans6.png"
				},{
					imgurl: "static/imgIndex/plans6.png"
				},{
					imgurl: "static/imgIndex/plans6.png"
				},{
					imgurl: "static/imgIndex/plans6.png"
				},{
					imgurl: "static/imgIndex/plans6.png"
				},{
					imgurl: "static/imgIndex/plans6.png"
				},{
					imgurl: "static/imgIndex/plans6.png"
				},{
					imgurl: "static/imgIndex/plans6.png"
				},{
					imgurl: "static/imgIndex/plans6.png"
				},{
					imgurl: "static/imgIndex/plans6.png"
				},{
					imgurl: "static/imgIndex/plans6.png"
				},{
					imgurl: "static/imgIndex/plans6.png"
				},],
				materialsList:{
					title: "建材选购",
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
				designersList:{
					title: "寻设计",
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
				chiefs: [{
					name: "小黑",
					imgurl: "/static/imgIndex/plans5.png"
				},{
					name: "小黑",
					imgurl: "/static/imgIndex/plans5.png"
				},{
					name: "小黑",
					imgurl: "/static/imgIndex/plans5.png"
				},{
					name: "小黑",
					imgurl: "/static/imgIndex/plans5.png"
				},{
					name: "小黑",
					imgurl: "/static/imgIndex/plans5.png"
				},{
					name: "小黑",
					imgurl: "/static/imgIndex/plans5.png"
				},],
				chiefOption: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				chiefValue: "",
				comBody:{
					id: 1,
					name: "不知道公司",
					isActive: true,
					describe: "哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿",
					imgurl: "/static/imgIndex/plans4.png",
					val: 2,
					judges: ["优秀","好优秀","非常优秀","非常非常优秀","不优秀","非常不优秀","非常非常不优秀"]
				},
				comBodys: [{
					id: 0,
					name: "不知道公司",
					isActive: true,
					describe: "哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿",
					imgurl: "/static/imgIndex/plans4.png",
					val: 2,
					judges: ["优秀","好优秀","非常优秀","非常非常优秀","不优秀","非常不优秀","非常非常不优秀"]
				},{
					id: 1,
					name: "嘿哈哈",
					isActive: false,
					describe: "哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿",
					imgurl: "/static/imgIndex/plans4.png",
					val: 2,
					judges: ["优秀","好优秀","非常优秀","非常非常优秀","不优秀","非常不优秀","非常非常不优秀"]
				},{
					id: 2,
					name: "哈哈黑",
					isActive: false,
					describe: "哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿",
					imgurl: "/static/imgIndex/plans4.png",
					val: 2,
					judges: ["优秀","好优秀","非常优秀","非常非常优秀","不优秀","非常不优秀","非常非常不优秀"]
				},{
					id: 3,
					name: "不知道公司",
					isActive: false,
					describe: "哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿",
					imgurl: "/static/imgIndex/plans4.png",
					val: 2,
					judges: ["优秀","好优秀","非常优秀","非常非常优秀","不优秀","非常不优秀","非常非常不优秀"]
				},{
					id: 4,
					name: "呵呵",
					isActive: false,
					describe: "哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿",
					imgurl: "/static/imgIndex/plans4.png",
					val: 2,
					judges: ["优秀","好优秀","非常优秀","非常非常优秀","不优秀","非常不优秀","非常非常不优秀"]
				},{
					id: 5,
					name: "呵呵",
					isActive: false,
					describe: "哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿",
					imgurl: "/static/imgIndex/plans4.png",
					val: 2,
					judges: ["优秀","好优秀","非常优秀","非常非常优秀","不优秀","非常不优秀","非常非常不优秀"]
				},{
					id: 6,
					isActive: false,
					name: "嘿嘿",
					describe: "哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿",
					imgurl: "/static/imgIndex/plans4.png",
					val: 2,
					judges: ["优秀","好优秀","非常优秀","非常非常优秀","不优秀","非常不优秀","非常非常不优秀"]
				},{
					id: 7,
					name: "哈哈",
					isActive: false,
					describe: "哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿",
					imgurl: "/static/imgIndex/plans4.png",
					val: 2,
					judges: ["优秀","好优秀","非常优秀","非常非常优秀","不优秀","非常不优秀","非常非常不优秀"]
				},{
					id: 8,
					name: "不知道公司",
					isActive: false,
					describe: "哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿",
					imgurl: "/static/imgIndex/plans4.png",
					val: 2,
					judges: ["优秀","好优秀","非常优秀","非常非常优秀","不优秀","非常不优秀","非常非常不优秀"]
				},{
					id: 9,
					name: "不知道公司",
					isActive: false,
					describe: "哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿哈哈嘿嘿",
					imgurl: "/static/imgIndex/plans4.png",
					val: 2,
					judges: ["优秀","好优秀","非常优秀","非常非常优秀","不优秀","非常不优秀","非常非常不优秀"]
				},],
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
				banner1s: [{
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
			},
			comsTag(id){
				let that = this
				this.comBodys.map(function(a){
					a.isActive = false
					if(a.id == id){
						that.comBody = a
						a.isActive = true
					}
				})
				this.$refs.carousel.setActiveItem(id)
			},
			comsHaha(){
				return false
			}
		},
		mounted() {
			this.hoverChange()

		}
	}
</script>