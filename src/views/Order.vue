<style scoped lang="less">
@main: #ff9736;
.order {
	width: 100%;
	background-color: #fff;
	padding-bottom: 100px;
}
.user-info {
	width: 1238px;
	margin: 0 auto;
	padding-top: 60px;
	.item-list {
		display: flex;
		margin: 47px 0 37px 0;
		width: 100%;
		.item {
			.img-wp {
				width: 20px;
				height: 20px;
				margin-right: 5px;
				img {
					display: block;
				}
			}
			font-size: 18px;
			color: #333;
			margin-right: 85px;
			display: flex;
		}
	}
	.line {
		width: 100%;
		height: 1px;
		background-color: #ddd;
	}
	.btn-wp {
		display: flex;
		width: 100%;
		margin-top: 21px;
		justify-content: flex-end;
		.btn {
			width: 114px;
			height: 45px;
			line-height: 45px;
			text-align: center;
			cursor: pointer;
			background-color: @main;
			color: #fff;
			margin-left: 44px;
			font-size: 14px;
		}

	}

}
.block-title {
	font-size: 24px;
	color: #333;
	font-weight: 600;
}
.order-list {
	width: 1238px;
	margin: 0 auto;
	padding-top: 92px;
	.table-tr {
		width: 100%;
		height: 66px;
		padding-left: 32px;
		border: 1px solid #ddd;
		display: flex;
		margin-top: 50px;
		.cell {
			display: flex;
			height: 66px;
			width: calc(~"(100% - 60px)/6");
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			font-size: 14px; 
			color: #333;
			.input-inline {
				display: inline-block;
				margin-right: 5px;
			}
		}	
	}
	.order-item {
		width: 100%;
		height: 143px;
		display: flex;
		border-bottom: 1px solid #ddd;
		jusitify-content: space-between;
		padding: 20px 32px;
		img {
			margin: 0 10px;
		}
		.cell-wp {
			width: calc(~"100% - 240px");
			display: flex;
			justify-content: space-between;
		}
		.cell {
			display: flex;
			height: 100%;
			width: 120px;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: 14px; 
			color: #333;
			margin-left: 30px;
			.count-box {
				width: 60px;
				height: 20px;
				display: flex;
				.count-item {
					width: 20px;
					height: 100%;
					text-align: center;
					border: 1px solid #ddd;
					line-height: 20px;
				}
			}
			.cell-btn {
				width: 80px;
				height: 30px;
				line-height: 30px;
				color: #fff;
				background-color: #ff410e;
				text-align: center;
				cursor: pointer;
				border-radius: 15px;
			}
		}
	}
	.pay {
		width: 100%;
		background-color: #f4f4f4;
		height: 70px;
		line-height: 70px;
		font-size: 14px;
		color: #666;
		display: flex;
		justify-content: flex-end;
		span {
			font-size: 20px;
			color: #ff410e;
			font-weight: 600;
		}
		.pay-btn {
			width: 202px;
			text-align: center;
			background-color: #ff410e;
			color: #fff;
			cursor: pointer;
		}
		.deal {
			margin: 0 20px;
		}
	}
}
</style>

<template>
	<div class="order">
		<header-new></header-new>
		<div class="user-info">
			<div class="block-title">收货地址</div>
			<div class="item-list">
				<div class="item">
					<div class="img-wp"><img src="/static/order/user.png"></div>
					刘大年
				</div>
				<div class="item">
					<div class="img-wp"><img src="/static/order/address.png"></div>
					北京市大兴区高米店
				</div>
				<div class="item">
					<div class="img-wp"><img src="/static/order/mobile.png"></div>
					13242328334
				</div>
			</div>
			<div class="line"></div>
			<div class="btn-wp">
				<div class="btn">编辑地址</div>
				<div class="btn">新增地址</div>
			</div>
		</div>
		<div class="order-list">
			<div class="block-title">我的订单<span style="color: #ff9736;">（8）</span></div>
			<div class="table-tr">
				<div class="cell" style="width: 60px; margin-right: 26px;">
					<div>
						<input class="input-inline" type="checkbox">全选
					</div>
				</div>
				<div class="cell">商品</div>
				<div class="cell">型号</div>
				<div class="cell">数量</div>
				<div class="cell">单价</div>
				<div class="cell">小计</div>
				<div class="cell">操作</div>
			</div>
			<div class="order-item" v-for="(item, itemId) in itemList" :style="borderNone(itemId)">
				<div class="cell" style="width: 30px; align-items: center; margin: 0"><input type="checkbox"></div>
				<img src="/static/order/item.png">
				<div class="cell" style="width: 120px; margin: 0">
					<span style="font-size: 14px; margin-bottom: 11px">{{item.brand}}</span>
					<span style="font-size: 12px; color: #666;">{{item.disc}}</span>
				</div>
				<div class="cell-wp">
					<div class="cell">{{item.tip}}</div>
					<div class="cell">
						<div class="count-box">
							<div class="count-item" style="border-right: none; cursor: pointer">-</div>
							<div class="count-item">{{item.count}}</div>
							<div class="count-item" style="border-left: none; cursor: pointer">+</div>
						</div>
					</div>
					<div class="cell">￥{{item.amount}}</div>
					<div class="cell" style="color: #ff410e;">￥{{item.amount * item.count}}</div>
					<div class="cell">
						<div class="cell-btn">立即购买</div>
					</div>
				</div>
			</div>
			<div class="pay">
				<div class="deal" style="cursor: pointer">删除所选商品</div>
				<div class="deal">已选择<span style="font-size: 14px;">1</span>件商品</div>
				<div class="deal"><span style="margin-top: 20px">￥202323</span></div>
				<div class="pay-btn">立即购买</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import HeaderNew from '@/components/Header'

export default{
	name: "order",
	components: {
		HeaderNew
	},
	data() {
		return{
			itemList: [{
				brand: '品牌名称品牌名称',
				disc: '备注备注备注备注备注备注备注备注备注备注',
				tip: '产品型号产品型号',
				count: 1,
				amount: 234,
				brandImg: '/static/order/item.png'
			},{
				brand: '品牌名称品牌名称',
				disc: '备注备注备注备注备注备注备注备注备注备注',
				tip: '产品型号产品型号',
				count: 2,
				amount: 234,
				brandImg: '/static/order/item.png'
			},{
				brand: '品牌名称品牌名称',
				disc: '备注备注备注备注备注备注备注备注备注备注',
				tip: '产品型号产品型号',
				count: 3,
				amount: 234,
				brandImg: '/static/order/item.png'
			},{
				brand: '品牌名称品牌名称',
				disc: '备注备注备注备注备注备注备注备注备注备注',
				tip: '产品型号产品型号',
				count: 1,
				amount: 234,
				brandImg: '/static/order/item.png'
			},]
		}
	},
	methods: {
		borderNone(id) {
			let ret = {} 
			if (id == this.itemList.length - 1) {
				ret.border = 'none'
			}
			return ret
		}
	},
	mounted(){
		document.title = '确认订单'
	}
}
</script>