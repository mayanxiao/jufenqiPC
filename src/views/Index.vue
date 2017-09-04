<style lang="less" scoped>
@width: document.body.clientWidth;
@main: #ff9736;
.index {
	width: 100%;
	.pic-bg {
		width: 100%;
		background-size: 100% auto;
		position: relative;
		display: block;
		.img-bg {
			display: block;
			width: 100%;
			z-index: 1;
		}
		.img-person {
			position: absolute;
			display: block;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			width: 813px;
		}
		.info {
			width: 748px;
			height: 403px;
			background-image: url('/static/index/what-item.png');
			background-size: 100% 100%;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: -100%;
			padding: 143px 0 80px 68px;
			color: #fff;
			transition: right 0.5s ease;
			.text {
				opacity: 0;
				transition: opacity 0.5s ease;
				transition-delay: 0.7s;
				h1 {
					font-size: 50px;
					font-weight: 600;
				}
				.line {
					width: 60px;
					height: 3px;
					background-color: #fff;
					margin: 35px 0 30px 0;
				}
				.tips {
					font-size: 20px;
				}
			}
		}
		.mainbody {
			width: 1238px;
			height: 100%;
			margin: 0 auto;
			position: relative;
			z-index: 5;
			.block-title {
				font-size: 42px;
				font-weight: 900;
				font-family: '微软雅黑'
			}
			.block-subtitle {
				font-size: 26px;
				font-weight: 400;
				font-family: '微软雅黑'
			}
			.line {
				width: 54px;
				height: 3px;
				margin: 35px auto 64px auto;
				background-color: @main;
			}
			.why-wrapper {
				width: 100%;
				height: 100%;
				padding-top: 40px;
				text-align: center;
				color: #fff;
				position: relative;
				.why-item {
					width: 318px;
					height: 190px;
					border-radius: 10px;
					background-color: #fff;
					padding-top: 20px;
					cursor: pointer;
					position: absolute;
					left: 467px;
					top: 291px;
					opacity: 0;
					transition: all 0.5s ease;
					box-shadow: 5px 6px 15px 5px rgba(0, 0, 0, 0.1);
					transform: scale(0.05);
					&:hover div{
						color: @main;
					}
					img {
						margin-bottom: 15px;
					}
					.text {
						color: #000;
						font-size: 24px;
						font-weight: 600;
					}
					.text-en {
						color: #999;
						font-size: 18px;
						font-weight: 300;
					}
				}
			}
			.deco-wp {
				width: 100%;
				height: 100%;
				padding-top: 79px;
				text-align: center;
				.btn {
					width: 160px;
					height: 46px;
					font-size: 16px;
					color: @main;
					border: 1px solid @main;
					text-align: center;
					line-height: 46px;
					margin: 68px auto 0 auto;
					cursor: pointer;
					&:hover {
						background-color: @main;
						color: #fff;
					}
				}
				.card {
					width: 1016px;
					height: 550px;
					display: flex;
					.left {
						width: 758px;
						height: 100%;
						.img-wp {
							width: 100%;
							height: 412px;
							img {
								height: 100%;
								display: block;
							}
						}
						.case-text {
							padding: 20px 0 0 16px;
							background-color: #fff;
							text-align: left;
							width: 100%;
							height: 138px;
							p {
								color: #333;
								font-size: 24px;
							}
						}
					}
					.right {
						width: 258px;
						height: 550px;
						.img-wp {
							width: 100%;
							height: 146px;
							position: relative;
							&:hover .mask{
								opacity: 1;
								transform: none;
							}
							img {
								width: 100%;
								display: block;
							}
							.mask {
								width: 100%;
								height: 100%;
								text-align: center;
								color: #fff;
								font-size: 18px;
								padding-top: 45px;
								background-color: rgba(255, 151, 54, 0.75);
								opacity: 0;
								transition: all 0.5s ease;
								transform: scale(0.01);
								position: absolute;
								left: 0;
								top: 0;
								.icon {
									margin-top: 10px;
									img {
										display: block;
										margin: 0 auto;
										width: 30px;
										height: 30px;
										cursor: pointer;
									}
								}
							}
						}
						.text {
							width: 100%;
							height: 258px;
							color: #ddd;
							background-color: #333;
							font-size: 16px;
							padding: 50px 34px 50px 34px;
							div {
								width: 190px;
								height: 158px;
								display: -webkit-box;
								-webkit-line-clamp: 7;
								-webkit-box-orient: vertical;
								overflow: hidden;
								text-align: left;
							}
						}
					}
				}
			}
			.text-wp {
				width: 100%;
				height: 100%;
				position: relative;
				padding: 68px 0 104px 0;
				.btn {
					width: 67px;
					height: 24px;
					text-align: center;
					font-size: 14px;
					border: 1px solid #999;
					color: #999;
					line-height: 24px;
					position: absolute;
					right: 0;
					top: 102px;
					cursor: pointer;
					&:hover {
						color: @main;
						border-color: @main;
					}
				}
				.tabs {
					display: flex;
					.tab-item {
						color: #333;
						font-size: 24px;
						padding: 18px 0;
						margin: 0 78px 46px 0;
						cursor: pointer;
					}
					.active {
						color: @main;
						border-bottom: 5px solid @main;
					}
				}
				.tab-content {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					.content-item {
						width: calc(~"(1238px - 55px)/2");
						height: 224px;
						margin-bottom: 31px;
						background-color: #fff;
						display: flex;
						box-shadow: 1px 1px 29px 2px rgba(0, 0, 0, 0.05);
						.img-wrapper {
							width: 294px;
							height: 100%;
							transition: all 1s ease;
							overflow: hidden;
							&:hover img {
								transform: scale(1.05);
							}
							img {
								display: block;
								width: 100%;
								height: 100%;
								transition: all 1s ease;
							}
						}
						.text {
							width: calc(~"100% - 294px");
							height: 100%;
							padding: 28px 0 0 15px;
							p {
								margin: 0;
								cursor: pointer;
								&:hover {
									color: @main !important;
								}
							}
						}
					}
				}
			}
			.prod-wp {
				width: 100%;
				height: 100%;
				position: relative;
				padding-top: 149px;
				text-align: center;
				.btn {
					width: 160px;
					height: 46px;
					font-size: 16px;
					color: @main;
					border: 1px solid @main;
					text-align: center;
					line-height: 46px;
					margin: 63px auto 0 auto;
					cursor: pointer;
					&:hover {
						background-color: @main;
						color: #fff;
					}
				}
				.prod-flex-wp {
					width: 100%;
					overflow: hidden;
					margin-top: 30px;
					.row { 
						display: flex;
						width: 100%;
						overflow: hidden;
					}
					.row:hover {
						& ~ .row .slide { transform: translateY(-100%); } 

						.slide { transform: translateX(100%); } 

						& .col:hover ~ .col .slide { transform: translateX(-100%); } 

						& .col:hover .slide {
							transform: none;
							visibility: visible;
							transition-delay: 0s; 
						}
					}
					.col {
						color: #fff;
						flex: 1 1 auto;
						min-height: 325px;
						position: relative;
						overflow: hidden;
						text-align: center;
						h2 { 
							font-weight: 600;
							font-size: 20px;
							margin: 94px 0 14px 0;
							z-index: 0;
						}
						p {
							font-size: 14px;
							margin-bottom: 32px;
						}
						.circle {
							img {
								display: block;
								cursor: pointer;
								margin: 0 auto;
							}
						}
						&:hover .photo-container {
							transform: scale(1.05);
						}
					}
					.photo-container {
						background: #0f0523 50% 50% / cover;
						position: absolute;
						top: 0; right: 0; bottom: 0; left: 0;
						transition: 1s;
						transform-origin: center;
					}
					.slide {
						background: rgba(255, 151, 54, 0.8);
						padding: 0 1.5rem;
						position: absolute;
						top: 0; 
						right: 0; 
						bottom: 0; 
						left: 0; 
						@speed: .3s;
						transition: all @speed ease-in-out, visibility 0s @speed;
						visibility: hidden; 
						will-change: transform;
						transform: translateY(100%); 
					}
				}
			}
			.loan-wp {
				width: 100%;
				height: 100%;
				position: relative;
				padding-top: 96px;
				text-align: center;
				.loan-fl {
					display: flex;
					justify-content: space-between;
					.loan-item {
						width: 230px;
						text-align: center;
						transition: all 0.5s ease;
						transform: scale(0.05);
						opacity: 0;
						.img-wp {
							width: 230px;
							height: 230px;
							border-radius: 50%;
							position: relative;
							background-color: #fff;
							margin-bottom: 50px;
							margin-top: 108px;
							box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 11px 3px;
							transition: all 1s ease;
							&:hover {
								transform: scale(1.1);
							}
							img {
								display: block;
								position: absolute;
								top: 50%;
								left: 50%;
								transform: translate(-50%, -50%);
							}
						}
						.item-text {
							font-size: 24px;
							color: #fff;
							font-weight: 600
						}
					}
				}
				.loan-btn {
					width: 205px;
					height: 68px;
					background-color: #fff;
					color: @main;
					text-align: center;
					line-height: 68px;
					border-radius: 34px;
					font-size: 24px;
					margin: 114px auto 0 auto;
					font-weight: 600;
					box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 11px 3px;
					cursor: pointer;
					transition: all 0.3s ease;
					&:hover {
						transform: scale(1.05);
					}
				}

			}
		}
	}

}
</style>
<style>
.mainbody .deco-wp .el-carousel__item {
	left: -198px ;
	width: 1016px ;
	cursor: default;
}

.mainbody .deco-wp .el-carousel__arrow {
    border: none;
    padding: 0;
    width: calc(223px / 2);
    height: 115px;
    background-color: rgb(255,151,54);
    border-radius: 0;
    color: #fff;
    position: absolute;
    top: 446px;
    z-index: 10;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
    font-size: 34px;
    border-top: 2px solid #eee;
}
.mainbody .deco-wp .el-carousel__arrow--right {
    right: 0;
}
.mainbody .deco-wp .el-carousel__arrow--left {
    left: 0;
}
.mainbody .deco-wp .el-carousel__mask {
	opacity: 0.7 !important;
	z-index: 100;
	background-color: #000;
}
</style>
<template>
	<div class="index" id="Index">
		<nav-bar></nav-bar>
		<!-- banner -->
		<div class="pic-bg">
			<img class="img-bg" src="/static/index/banner_01.png">
		</div>
		<!-- what -->
		<div class="pic-bg">
			<img class="img-bg" src="/static/index/what.png">
			<div class="info" :style="setAnimation(animation1, 1)">
				<div class="text" :style="setAnimation(animation1, 2)">
					<h1 >什么是居分期</h1>
					<div class="line"></div>
					<div class="tips">居分期是根据家庭成员的性格、喜好、工作来配置+定制</div>
					<div class="tips">家居风格和产品并以管家式追踪贯彻各个流程</div>
				</div>
			</div>
		</div>
		<!-- why -->
		<div class="pic-bg" :style="setHeight(2)">
			<img class="img-person" src="/static/index/person.png"></img>
			<div class="mainbody">
				<div class="why-wrapper">
					<div class="block-title">为什么选择居分期</div>
					<div class="block-subtitle">OUR ADVANTAGE</div>
					<div class="why-item" v-for="(item, id) in whyList" :style="setPosition(animation2,id)">
						<img :src="item.url">
						<div class="text">{{item.text}}</div>
						<div class="text-en">{{item.textEn}}</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 案例 -->
		<div class="pic-bg" :style="setHeight(3)">
			<div class="mainbody">
				<div class="deco-wp">
					<div class="block-title"  style="font-size: 30px; font-weight: 400;margin-bottom: 12px">装 修 案 例</div>
					<div class="block-subtitle" style="font-size: 40px; font-weight: 600;">DECORATION CASE</div>
					<div class="line"></div>
					<el-carousel :interval="3500" arrow="always" indicator-position="none" type="card" height="550px">
						<el-carousel-item v-for="item in decoList" :key="item.name">
							<div class="card">
								<div class="left">
									<div class="img-wp" :style="setProdImg(item.imgUrl)"></div>
									<div class="case-text">
										<p>{{item.name}}</p>
										<p style="font-size: 14px; color: #666; margin-top: 16px;">{{item.intro}}</p>
									</div>
								</div>
								<div class="right">
									<div class="img-wp" v-for="room in item.itemUrl">
										<img :src="room.url">
										<div class="mask">
											{{room.name}}
											<div class="icon"><img src="/static/more-arrow.png"></div>
										</div>
									</div>
									<div class="text"><div>{{item.styles}}</div></div>
								</div>
							</div>
						</el-carousel-item>
					</el-carousel>
					<div class="btn">查看更多</div>
				</div>
			</div>
		</div>
		<!-- 攻略日记 -->
		<div class="pic-bg" :style="setHeight(4)">
			<div class="mainbody">
				<div class="text-wp">
					<div class="btn">更多 +</div>
					<div class="tabs">
						<div class="tab-item" v-for="(tab, tabId) in tabList" @click="tabIndex = tabId" :class="{'active': tabIndex == tabId}">
							{{tab.name}}
						</div>
					</div>
					<div class="tab-content">
						<div class="content-item" v-for="content in tabContent[tabIndex]">
							<div class="img-wrapper"><img :src="content.coverImg"></div>
							<div class="text">
								<p style="font-size: 14px; color: #999; font-weight: 400">{{getTime(content.createdAt)}}</p>
								<p style="font-size: 18px; color: #333; margin: 29px 0 10px 0"><b>{{content.title}}</b></p>
								<p style="font-size: 16px; color: #666; height: 60px; margin-bottom: 10px; padding-right: 27px;">{{content.intro}}</p>
								<p style="font-size: 14px; color: #ff9736">MORE+</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 产品 -->
		<div class="pic-bg" :style="setHeight(5)">
			<div class="mainbody">
				<div class="prod-wp">
					<div class="block-title" style="font-size: 30px; font-weight: 400">软装商城</div>
					<div class="block-subtitle" style="font-size: 40px; font-weight: 900; margin-top: 17px;">SOFT SHOP</div>
					<div class="line"></div>
					<div class="prod-flex-wp">
						<div class="row" v-for="n in 2">
							<div class="col" v-for= "(col, id) in prodList[n - 1]" :style="colStyle(id, n)">
							<div class="photo-container" :style="setProdImg(col.url)"></div>
								<div class="slide">
									<h2>{{col.name}}</h2>
									<p>{{col.disc}}</p>
									<div class="circle">
										<img src="/static/more-arrow.png">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="btn">查看更多</div>
				</div>
			</div>
		</div>
		<!-- 贷款流程 -->
		<div class="pic-bg" :style="setHeight(6)" id="animation3">
			<div class="mainbody">
				<div class="loan-wp" :style="{'padding-top': screenWidth * 96 / 1920 + 'px'}">
					<div class="block-title" style="color: #fff">贷 款 流 程</div>
					<div class="line" style="background-color: #fff; margin: 26px auto 13px auto"></div>
					<div class="block-subtitle" style="color: #fff">LOAN FLOW</div>
					<div class="loan-fl">
						<div class="loan-item" v-for="(item, id) in loanList" :style="setLoanStyle(animation3, id)">
							<div class="img-wp"><img :src="item.url"></div>
							<div class="item-text">{{item.name}}</div>
						</div>
					</div>
					<div class="loan-btn">去分期</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import NavBar from '@/components/NavBar'

export default{
	components: {
		NavBar
	},
	data(){
		return {
			tabIndex: 0,
			screenWidth: document.body.clientWidth,
			scrollBegin: '',
			notPlay: false,
			animation1: false,
			animation2: false,
			animation3: false,
			whyList: [{
				url: '/static/index/why-item-1.png',
				text: '家装流行产品及装修咨询',
				textEn: 'Product decoration consulting'
			},{
				url: '/static/index/why-item-2.png',
				text: '整体家装',
				textEn: 'Product decoration consulting'
			},{
				url: '/static/index/why-item-3.png',
				text: '家装流行产品及装修咨询',
				textEn: 'Product decoration consulting'
			},{
				url: '/static/index/why-item-4.png',
				text: '家装流行产品及装修咨询',
				textEn: 'Product decoration consulting'
			},],
			tabList: [{
				name: '家装攻略',
			},{
				name: '家装日记',
			},],
			tabContent: [[{
					coverImg: '/static/index/tab-item-1.png',
					title: '攻略攻略',
					intro: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
					createdAt: 1483278433
				},{
					coverImg: '/static/index/tab-item-2.png',
					title: '攻略攻略',
					intro: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
					createdAt: 1483278433
				},{
					coverImg: '/static/index/tab-item-3.png',
					title: '攻略攻略',
					intro: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
					createdAt: 1483278433
				},{
					coverImg: '/static/index/tab-item-4.png',
					title: '攻略攻略',
					intro: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
					createdAt: 1483278433
				},],[{
					coverImg: '/static/index/tab-item-3.png',
					title: '日记日记',
					intro: '简介简介简介简介简介简介简介',
					createdAt: 1483278433
				},{
					coverImg: '/static/index/tab-item-2.png',
					title: '日记日记',
					intro: '简介简介简介简介简介简介简介',
					createdAt: 1483278433
				},{
					coverImg: '/static/index/tab-item-1.png',
					title: '日记日记',
					intro: '简介简介简介简介简介简介简介',
					createdAt: 1483278433
				},{
					coverImg: '/static/index/tab-item-4.png',
					title: '日记日记',
					intro: '简介简介简介简介简介简介简介',
					createdAt: 1483278433
				},]],
			prodList: [[{
					name: '古典沙发',
					url: '/static/index/prod-1.png',
					disc: '产品说明产品说明产品说明产品说明产品说明产品说明产品说明产品'
				},{
					name: '现代吊灯',
					url: '/static/index/prod-2.png',
					disc: '产品说明产品说明产品说明产品说明产品说明产品说明产品说明产品'
				},{
					name: '清新书桌',
					url: '/static/index/prod-3.png',
					disc: '产品说明产品说明产品说明产品说明产品说明产品说明产品说明产品'
				},],[{
					name: '优雅烛台',
					url: '/static/index/prod-4.png',
					disc: '产品说明产品说明产品说明产品说明产品说明产品说明产品说明产品'
				},{
					name: '北欧花盆',
					url: '/static/index/prod-5.png',
					disc: '产品说明产品说明产品说明产品说明产品说明产品说明产品说明产品'
				},{
					name: '温馨餐桌',
					url: '/static/index/prod-6.png',
					disc: '产品说明产品说明产品说明产品说明产品说明产品说明产品说明产品'
				},{
					name: '简约烛台',
					url: '/static/index/prod-7.png',
					disc: '产品说明产品说明产品说明产品说明产品说明产品说明产品说明产品'
				},]],
			loanList: [{
					name: '进入家装分期页面',
					url: '/static/index/loan-1.png'
				},{
					name: '填写个人信息',
					url: '/static/index/loan-2.png'
				},{
					name: '信息后台审核',
					url: '/static/index/loan-3.png'
				},{
					name: '分期贷款通过',
					url: '/static/index/loan-4.png'
				},],
			decoList: [{
				name: '时尚现代',
				styles: '从小使用名牌，对时尚遥遥领先的把握，不屑于使用各种明显的图案纹理的物品，唯独钟情于圆形的风格，相信生活是完美没有缺陷的。娇艳欲滴的青春，并蓄着活泼与恬静。新锐、色彩、浪漫，童话般的情节拼接出懵懂女孩的心事。流畅的直线条，去掉所有不需要的装饰，空间生活因归还本位而美丽得随意、可爱、陶醉，就像《芳芳》中苏菲玛索饰演的角色，俏皮、天真，纯净得象水象空气。',
				intro: `包括：瓷砖 地板 洁具 卫浴 五金 橱柜 室内门 吊顶 开关面板  家具软装部分：619 /㎡  包括：家具 配饰 窗帘 灯 壁纸  
				以上价格均为参考价格，不同户型，不同需求，价格略有变化`,
				imgUrl: '/static/index/kebo/kebo1.jpg',
				itemUrl: [{
					url: '/static/index/case-2.png',
					name: '卫生间'
				},{
					url: '/static/index/case-2.png',
					name: '厨房'
				}]
			},{
				name: '北欧风格',
				styles: '就像村上春树所说：“没有小确幸的人生，不过是干巴巴的沙漠罢了”。一种不同于文艺复兴时期喧闹的新型 “文艺范”悄然兴起。有一定阅历和沉淀，平静过着自己的生活，木质的温润搭配富有艺术沉淀的配饰，造就了于闹市中诗意存在的处事态度。',
				intro: `包括：瓷砖 地板 洁具 卫浴 五金 橱柜 室内门 吊顶 开关面板  家具软装部分：619 /㎡  包括：家具 配饰 窗帘 灯 壁纸  
				以上价格均为参考价格，不同户型，不同需求，价格略有变化`,
				imgUrl: '/static/index/kebo/kebo2.jpg',
				itemUrl: [{
					url: '/static/index/case-2.png',
					name: '卫生间'
				},{
					url: '/static/index/case-2.png',
					name: '厨房'
				}]
			},{
				name: '台湾温暖',
				styles: '欧洲现代主义大师风起云涌的50年代，马歇·布劳耶、密斯·凡·德·罗、伊姆斯等设计大师对经济衰退后舒适生活致敬，高级工艺、舒适家具备受推崇。跳脱自然风的清新唯美，潇洒反叛自由浪漫的波西米亚风格被推向主流，就像大野洋子与甲壳虫乐队主唱列侬位于纽约曼哈顿美国名流聚集区“达科塔”公寓的家，彩色书柜、经典休闲单椅与部落风格皮质沙发看似无章混搭，其实是不羁与反叛的内心宣泄。',
				intro: `包括：瓷砖 地板 洁具 卫浴 五金 橱柜 室内门 吊顶 开关面板  家具软装部分：619 /㎡  包括：家具 配饰 窗帘 灯 壁纸  
				以上价格均为参考价格，不同户型，不同需求，价格略有变化`,
				imgUrl: '/static/index/kebo/kebo4.jpg',
				itemUrl: [{
					url: '/static/index/case-2.png',
					name: '卫生间'
				},{
					url: '/static/index/case-2.png',
					name: '厨房'
				}]
			},{
				name: '都市简约',
				styles: '随着女性力量的日渐强大，女人对男性美的定义也发生了转变，继而一个新的物种暖男应运而生。将暖男温柔细腻的情感渗透到现代家居空间，运用最暖的色彩爱马仕橙与冷峻工业风，共同点缀现代家具的时尚之感。冷与暖的矛盾调性在橙色的调和下完美衔接，扑面而至的都市气息展现了主人如日光般温暖的内心世界。',
				intro: `包括：瓷砖 地板 洁具 卫浴 五金 橱柜 室内门 吊顶 开关面板  家具软装部分：619 /㎡  包括：家具 配饰 窗帘 灯 壁纸  
				以上价格均为参考价格，不同户型，不同需求，价格略有变化`,
				imgUrl: '/static/index/kebo/kebo3.jpg',
				itemUrl: [{
					url: '/static/index/case-2.png',
					name: '卫生间'
				},{
					url: '/static/index/case-2.png',
					name: '厨房'
				}]
			},{
				name: '北欧新竹',
				styles: '当现代风与海洋风相遇时，一代文豪海明威在古巴海岛发现了他人生的新大陆。明媚的阳光、浓烈的Mojito、令人陶醉的雪茄、还有他钟爱的渔船。就如他所说“我热爱这个国家、感觉就像在家里”。海魂条纹成为设计的神魂所在，完成跨时空的对话；原木色餐椅与灰蓝背景相互交织，感受无处不在的大海气息。彼此成就，这也许就是人与空间最好的关系。',
				intro: `包括：瓷砖 地板 洁具 卫浴 五金 橱柜 室内门 吊顶 开关面板  家具软装部分：619 /㎡  包括：家具 配饰 窗帘 灯 壁纸  
				以上价格均为参考价格，不同户型，不同需求，价格略有变化`,
				imgUrl: '/static/index/kebo/kebo5.jpg',
				itemUrl: [{
					url: '/static/index/case-2.png',
					name: '卫生间'
				},{
					url: '/static/index/case-2.png',
					name: '厨房'
				}]
			},{
				name: '现代八',
				styles: '作为曾经的海上殖民强国，阿姆斯特丹现为欧洲最开放城市。当古老而有韵味的欧式建筑与当代设计相结合，与生俱来的内敛傲娇姿态在现代家居中展现的淋漓尽致。打破空间沉闷，古典糅合时尚，深色家具与黑白灰中的华丽色调完美交融，无彩色风格优雅塑造低奢格调，演绎自信空间的绝妙气质。',
				intro: `包括：瓷砖 地板 洁具 卫浴 五金 橱柜 室内门 吊顶 开关面板  家具软装部分：619 /㎡  包括：家具 配饰 窗帘 灯 壁纸  
				以上价格均为参考价格，不同户型，不同需求，价格略有变化`,
				imgUrl: '/static/index/kebo/kebo6.jpg',
				itemUrl: [{
					url: '/static/index/case-2.png',
					name: '卫生间'
				},{
					url: '/static/index/case-2.png',
					name: '厨房'
				}]
			},],
		}
	},
	methods: {
		setHeight(type) {
			let ret = {}
			switch (type) {
				case 0:
					ret.backgroundImage = `url('/static/index/banner_01.png')`
					ret.backgroundRepeat = `no-repeat`
					ret.height = `${this.screenWidth * 800 / 1920}px`
					break
				case 1:
					ret.backgroundImage = `url('/static/index/what.png')`
					ret.backgroundRepeat = `no-repeat`
					ret.height = `${this.screenWidth * 750 / 1920}px`
					break
				case 2: 
					ret.backgroundImage = `url('/static/index/why.png')`
					// ret.height = `${this.screenWidth * 712 / 1920}px`
					ret.height = '712px'
					break
				case 3: 
					ret.backgroundImage = `url('/static/index/case-bg.png')`
					// ret.height = `${this.screenWidth * 1024 / 1920}px`
					ret.height = '1024px'
					ret.backgroundSize = 'cover'
					break
				case 4:
					ret.backgroundColor = `#f6f6f6`
					ret.height = `749px`
					break
				case 5:
					ret.backgroundColor = `#fff`
					ret.height = `1187px`
					break
				case 6:
					ret.backgroundImage = `url('/static/index/loan-bg.png')`
					// ret.height = `${this.screenWidth * 884 / 1920}px`
					ret.height = `884px`
					ret.backgroundSize = 'cover'
					break
			}
			return ret
		},
		setPosition(judge, id) {
			let ret = {}
			if (judge) {
				switch (id) {
					case 0:
						ret.left = '0px'
						ret.top = '196px'
						
						break
					case 1:
						ret.left = '920px'
						ret.top = '196px'
						ret.transitionDelay = '0.5s'
						break
					case 2:
						ret.left = '0px'
						ret.top = '457px'
						ret.transitionDelay = '1s'
						break
					case 3:
						ret.left = '920px'
						ret.top = '457px'
						ret.transitionDelay = '1.5s'
						break
					}
				ret.opacity = '1'
				ret.transform = 'none'
			}
			return ret
		},
		setLoanStyle(type, id) {
			let ret = {}
			if (type) {
				switch (id) {
					case 0:
						ret.transitionDelay = '0s'
						break
					case 1: 
						ret.transitionDelay = '0.3s'
						break
					case 2:
						ret.transitionDelay = '0.6s'
						break
					case 3:
						ret.transitionDelay = '0.9s'
						break
				}
				ret.opacity = '1'
				ret.transform = 'none'
			}
			return ret
		},
		setProdImg(imgUrl) {
			let ret = {}
			ret.backgroundImage = `url(${imgUrl})`
			ret.backgroundSize = '100% auto'
			return ret
		},
		colStyle(id, n) {
			let ret = {}
			if (id == 0&&n == 1) {
				ret.flex = '2 2 auto'
			}
			return ret 
		},
		getTime(timeStamp) {
			const d = new Date(timeStamp * 1000)
			const Y = `${d.getFullYear()}-`
			const M = `${d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1}-`
			const D = (d.getDate() < 10 ? `0${d.getDate()}` : d.getDate())
			return Y + M + D
		},
		getScrollBegin() {
			this.scrollBegin = document.documentElement.scrollTop || document.body.scrollTop 

			if(document.body.scrollTop) {
				this.scrollBegin = document.body.scrollTop;
			} else{
				this.scrollBegin = document.documentElement.scrollTop
			}
		},
		setAnimation(a, b) {
			let ret = {}
			if (a && b == 1) {
				ret.right = (this.screenWidth - 1238)/2 + 'px'
			} else if (a && b == 2) {
				ret.opacity = 1
			}
			return ret
		},
		scrollLimit(type) {
			let result = 0
			switch(type) {
				case 1:
					result = document.body.clientWidth * 600/1920
					break
				case 2:
					result = document.body.clientWidth * 1350/1920
					break
				case 3:
					result = document.body.clientWidth * 1250/1920 + 3672
					break
			}
			return result
		}
	},
		
	mounted(){
		console.log(this.screenWidth)
		document.title = '居分期-提供美好生活方式'
		window.addEventListener('scroll', this.getScrollBegin)	
		console.log(Number(this.srceenWidth) - 1238)		
	},
	watch: {
		scrollBegin: function(val) {
			if (val > this.scrollLimit(3)) {
				this.animation3 = true
			} else if (val > this.scrollLimit(2)) {
				this.animation2 = true
			} else if (val > this.scrollLimit(1)) {
				this.animation1 = true
			}
			
		}
	}
}
</script>