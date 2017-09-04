<style lang="less" scoped>
@border-big: #999;
@border-lit: #ebebeb;
@main: #ff9736;
.product {
	width: 100%;
	background-color: #fff;
	padding-bottom: 60px;
}
.mainbody {
	width: 1238px;
	padding-top: 65px;
	text-align: center;
	margin: 0 auto;
}
.wrapper {
	width: 100%;
	display: flex;
	justify-content: space-between;
	.pic-wp {
		width: 380px;
		img {
			width: 100%;
			display: block;
		}
	}
	.pic-list {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 14px;
		.pic-item {
			width: 89px;
			height: 88px;
			cursor: pointer;
			img {
				display: block;
				width: 85px;
				height: 84px;
			}
		}
		.active {
			border: 2px solid @main;
		}
		
	}
	.text-wp {
		width: calc(~"100% - 420px");
		text-align: left;
		padding-top: 22px;
		font-size: 12px;
		color: #999;
		h3 {
			font-size: 18px;
			color: #333;
			margin-bottom: 20px;
		}
		p {
			font-size: 14px;
			margin-bottom: 50px;
		}
		.pro-label {
			display: flex;
			height: 42px;
			line-height: 42px;
			margin-bottom: 40px;
			.name {

			}
			.money {
				font-size: 24px;
				color: #ff410e;
				font-weight: 600;
				margin: 0 30px 0 19px;
			}
			.money-pre {
				font-size: 14px;
				color: #666;
				text-decoration: line-through;
				margin-left: 19px;
			}
			.item-list {
				display: flex;
				margin-left: 25px;
				.item {
					width: 41px;
					height: 41px;
					margin-right: 8px;
					img {
						display: block;
						width: 100%;
					}
				}
			}
			.count-box {
				display: flex;
				width: 90px;
				height: 30px;
				margin-top: 6px;
				color: #666;
				margin-left: 25px;
				.count {
					font-size: 20px;
					text-align: center;
					line-height: 30px;
					width: 30px;
					height: 30px;
					border: 1px solid #ddd;
				}
			}
		}
		.btn-box {
			display: flex;
			.btn {
				width: 144px;
				height: 50px;
				text-align: center;
				line-height: 50px;
				cursor: pointer;
			}
			.pay {
				background-color: #ff410e;
				color: #fff;
				margin-right: 24px;
			}
			.cart {
				border: 1px solid @main;
				color: @main;
				&:hover {
					background-color: @main;
					color: #fff;
				}
			}
		}
	}
}
.tabs {
	width: 100%;
	height: 50px;
	line-height: 50px;
	font-size: 14px;
	display: flex;
	background-color: #f4f4f4;
	color: #333;
	margin-top: 67px;
	.tab-item {
		margin: 0 45px;
		cursor: pointer;
	}
	.tab-active {
		border-bottom: 1px solid @main;
		color: @main;
	}
}
.content {
	width: 100%;
	img {
		display: block;
		width: 100%;
	}
}
</style>

<template>
	<div class="product">
		<header-new></header-new>
		<div class="mainbody">
			<div class="wrapper">
				<div class="pic-wp">
					<img src="/static/product/big.png">
					<div class="pic-list">
						<div class="pic-item" v-for="(img,id) in imgList" :class="{'active': imgIndex == id}" @click="imgIndex = id">
							<img :src="img">
						</div>
					</div>
				</div>

				<div class="text-wp">
					<h3>产品标题产品标题</h3>
					<p>产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介</p>
					<div class="pro-label">
						<div class="name">优惠价:</div>
						<div class="money">￥120</div>
						<div class="name">原价:</div>
						<div class="money-pre">￥120</div>
					</div>
					<div class="pro-label">
						<div class="name">型号:</div>
						<div class="item-list">
							<div class="item" v-for="n in 4"><img src="/static/product/icon.png"></div>
						</div>
					</div>
					<div class="pro-label" style="margin-bottom: 36px;">
						<div class="name">数量:</div>
						<div class="count-box">
							<div class="count" style="border-right: none; cursor: pointer">-</div>
							<div class="count">1</div>
							<div class="count" style="border-left: none; cursor: pointer">+</div>
						</div>
					</div>
					<div class="btn-box">
						<div class="btn pay" @click="goto('/order')">立即购买</div>
						<div class="btn cart">加入购物车</div>
					</div>
				</div>
			</div>
			<div class="tabs">
				<div class="tab-item" v-for="(tab, id) in tabList" :class="{'tab-active': tabIndex == id}" @click="tabIndex = id">{{tab}}</div>
			</div>
			<div class="content" v-if="tabIndex == 0">
				<img src="/static/product/content.png">
			</div>
		</div>	
	</div>
</template>

<script>
import HeaderNew from "@/components/header"

export default {
	name: 'Product',
	components: {
		HeaderNew
	},
	data () {
		return {
			imgList: ['/static/product/lit-1.png','/static/product/lit-2.png','/static/product/lit-3.png','/static/product/lit-4.png'],
			imgIndex: 0,
			tabList: ['规格参数', '买家秀', '评论（4530）'],
			tabIndex: 0
		}
	},
	methods: {
		goto(url) {
			if (url) {
				this.$router.push(url)
			}
		},
	},
	mounted() {
		document.title = '产品详情'
	},
	computed: {

	},
}
</script>