<style lang="less" scoped>
@border-big: #999;
@border-lit: #ebebeb;
@main: #ff9736;
.mall {
	width: 100%;
	background-color: #fff;
	padding-bottom: 90px;
}
.mainbody {
	width: 1238px;
	padding-top: 80px;
	text-align: center;
	margin: 0 auto;
}
.block-title {
	font-size: 30px;
	font-weight: 900;
	font-family: '微软雅黑'
}
.block-subtitle {
	font-size: 20px;
	font-weight: 400;
	font-family: '微软雅黑'
}
.product-list {
	margin-top: 71px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	.item {
		width: 298px;
		height: 374px;
		background-color: #fff;
		padding: 7px 8px;
		position: relative;
		margin-right: 15px;
		margin-bottom: 51px;
		overflow: hidden;
		transition: all 1s ease;
		&:hover {
			box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 22px 3px
		}
		&:hover .info-wp{
			border-color: #fff;
		}
		.img-wp {
			width: 100%;
			height: 275px;
			overflow: hidden;
			cursor: pointer;
			&:hover img{
				transform: scale(1.05);
			}
			img {
				display: block;
				transition: all 1s ease;
			}
		}
		.info-wp {
			width: 100%;
			height: 85px;
			border: 1px solid #f7f7f7;
			text-align: left;
			position: relative;
			padding: 22px 5px 0 5px;
			transition: all 0.3s ease;
		}
		.item-title {
			font-size: 16px;
			color: #333;
			margin-bottom: 11px;
			cursor: pointer;
		}
		.amount {
			font-size: 18px;
			color: #ff410e;
		}
		.pre-amount {
			font-size: 12px;
			color: #999;
			position: absolute;
			left: 120px;
			bottom: 5px;
			text-decoration: line-through;
		}
		.brand {
			font-size: 12px;
			color: #666;
			position: absolute;
			right: 5px;
			top: 27px;
		}
	}
}
</style>

<template>
	<div class="mall">
		<header-new></header-new>
		<div class="mainbody">
			<div class="block-title">产品商城</div>
			<div class="block-subtitle">OUR PRODUCT</div>
			<div class="product-list">
				<div class="item" v-for="(item, id) in goodsList" :style="marginNone(id + 1)">
					<div class="img-wp" @click="goto('/product')"><img :src="item.imgurl"></div>
					<div class="info-wp">
						<div class="item-title" @click="goto('/product')">{{item.name}}</div>
						<div class="amount">￥{{(item.amount).toFixed(2)}}</div>
						<div class="pre-amount">￥{{(item.preAmount).toFixed(2)}}</div>
						<div class="brand">{{item.brand}}</div>
					</div>
				</div>
			</div>		
		</div>	
	</div>
</template>

<script>
	import HeaderNew from "@/components/header"
	export default {
		name: 'Mall',
		components: {
			HeaderNew
		},
		data () {
			return {
				goodsList: [{
					name: "北欧布艺简约沙发",
					amount: 5000,
					preAmount: 6000,
					brand: '品牌名称',
					imgurl: "/static/mall-item.png"
				},{
					name: "北欧布艺简约沙发",
					amount: 5000,
					preAmount: 6000,
					brand: '品牌名称',
					imgurl: "/static/mall-item.png"
				},{
					name: "北欧布艺简约沙发",
					amount: 5000,
					preAmount: 6000,
					brand: '品牌名称',
					imgurl: "/static/mall-item.png"
				},{
					name: "北欧布艺简约沙发",
					amount: 5000,
					preAmount: 6000,
					brand: '品牌名称',
					imgurl: "/static/mall-item.png"
				},{
					name: "北欧布艺简约沙发",
					amount: 5000,
					preAmount: 6000,
					brand: '品牌名称',
					imgurl: "/static/mall-item.png"
				},{
					name: "北欧布艺简约沙发",
					amount: 5000,
					preAmount: 6000,
					brand: '品牌名称',
					imgurl: "/static/mall-item.png"
				},{
					name: "北欧布艺简约沙发",
					amount: 5000,
					preAmount: 6000,
					brand: '品牌名称',
					imgurl: "/static/mall-item.png"
				},{
					name: "北欧布艺简约沙发",
					amount: 5000,
					preAmount: 6000,
					brand: '品牌名称',
					imgurl: "/static/mall-item.png"
				},{
					name: "北欧布艺简约沙发",
					amount: 5000,
					preAmount: 6000,
					brand: '品牌名称',
					imgurl: "/static/mall-item.png"
				},{
					name: "北欧布艺简约沙发",
					amount: 5000,
					preAmount: 6000,
					brand: '品牌名称',
					imgurl: "/static/mall-item.png"
				},{
					name: "北欧布艺简约沙发",
					amount: 5000,
					preAmount: 6000,
					brand: '品牌名称',
					imgurl: "/static/mall-item.png"
				},{
					name: "北欧布艺简约沙发",
					amount: 5000,
					preAmount: 6000,
					brand: '品牌名称',
					imgurl: "/static/mall-item.png"
				},]
			}
		},
		methods: {
			marginNone(id) {
				let ret = {}
				if (id % 4 == 0) {
					ret.marginRight = 0
				}
				return ret
			},
			goto(url) {
				if (url) {
					this.$router.push(url)
				}
			},
		},
		mounted() {
			document.title = '建材家居'
		},
		computed: {

		},
	}
</script>