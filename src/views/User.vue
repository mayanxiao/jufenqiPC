<style lang="less" scoped>
@border-big: #999;
@border-lit: #ebebeb;
@main: #ff9736;
.user{
	background-color: #ececec;
	width: 100%;
}
.more {
	position: absolute;
	font-size: 14px;
	right: 33px;
	top: 41px;
	color: @main;
	cursor: pointer;
	:hover {
		text-decoration: underline;
	}
}
.block {
	position: absolute;
	font-size: 18px;
	color: #333;
	font-weight: bold;
	left: 33px;
	top: 40px;
}
.mainbody {
	width: 1238px;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	padding-top: 74px;

	.sidebar {
        width: 226px;
        height: 568px;
        padding-top: 35px;
        padding-bottom: 27px;
        background-color: #fff;
        text-align: center;
        .list-1 {
            font-size: 18px;
            font-weight: 600;
            height: 40px;
            line-height: 40px;
            color: #333;
            display: flex;
            margin-bottom: 8px;
            img {
            	display: block;
            	width: 20px;
            	height: 20px;
            	margin: 10px 5px 0 50px;
            }
        }
        .list-2 {
        	height: 34px;
        	line-height: 34px;
        	color: #666;
        	font-size: 14px;
        	cursor: pointer;
        	margin-bottom: 8px;
        	&:hover {
        		background-color: @main;
        		color: #fff;
        	}
        }
    }
    .user-info {
    	width: 977px;
    	.intro {
    		width: 100%;
    		height: 186px;
    		position: relative;
    		background-color: #fff;
    		margin-bottom: 22px;
    		.info-wp {
    			width: calc(~"100% - 66px");
    			display: flex;
    			position: absolute;
    			top: 50%;
    			left: 50%;
    			transform: translate(-50%, -50%);
    			img {
    				display: block;
    				width: 110px;
    				height: 110px;
    				margin-right: 32px;
    			}
    			.name-phone {
    				width: calc(~"100% - 142px");
    				padding-top: 16px;
    				.user-name {
    					font-size: 18px;
    					color: #333;
    					font-weight: bold;
    					margin-bottom: 40px;
    				}
    				.item-wp {
    					display: flex;
    					.item {
    						position: relative;
    						span {
    							margin-left: 14px;
    							color: @main;
    						}
    						.line {
    							width: 1px;
    							height: 12px;
    							background-color: #ddd;
    							position: absolute;
    							top: 6px;
    							right: 0;
    						}
    					}
    				}
    			}
    		}
    	}
    	.instalment {
    		width: 100%;
    		height: 294px;
    		padding: 74px 33px 37px 33px;
    		position: relative;
    		background-color: #fff;
    		margin-bottom: 22px;
    		.tabs {
    			width: 100%;
    			height: 100%;
    			display: flex;
    			.tab-item {
    				width: 50%;
    				height: 100%;
    				text-align: center;
    				padding-top: 22px;
    				p {
    					font-size: 30px;
    					color: #ff410e;
    					font-weight: 600;
    					margin-bottom: 22px;
    				}
    				span {
    					font-size: 18px;
    					color: #666;
    				}
    				.loan-btn {
    					width: 116px;
    					height: 38px;
    					line-height: 38px;
    					text-align: center;
    					border-radius: 19px;
    					background-color: @main;
    					color: #fff;
    					font-size: 14px;
    					margin: 38px auto;
    					transition: all 0.3s cubic-bezier(.645,.045,.355,1);
    					box-shadow: 3px 3px 14px 0px rgba(0, 0, 0, 0.2);
    					cursor: pointer;
     					&:hover {
    						font-size: 15px;
    					}
    				}
    			}
    			.line {
    				width: 1px;
    				height: 100%;
    				.line-item {
    					width: 1px;
    					height: 11px;
    					background-color: #ddd;
    					margin-bottom: 8px;
    				}
    			}
    		}
    	}
    	.material {
    		position: relative;
    		width: 100%;
    		height: 788px;
    		padding: 98px 33px 139px 33px;
    		background-color: #fff;
    		margin-top: 22px;
    		margin-bottom: 107px;
    		.mt-item {
    			width: 100%;
    			height: 121px;
    			display: flex;
    			position: relative;
    			border-bottom: 1px solid #ddd;
    			margin-bottom: 21px;
    			img {
    				width: 100px;
    				height: 100px;
    				display: block;
    				margin-right: 31px;
    			}
    			.text-wp {
    				display: flex;
    				justify-content: space-between;
    				width: calc(~"100% - 131px");
    				height: 121px;
    				color: #333;
    				font-size: 14px;
    				.money {
    					color: #ff410e;
    				}
    				.item {
    					display: flex;
    					width: calc(~"(100% - 73px) / 4.5");
    					height: 100px;  
    					color: #333; 
    					font-size: 14px; 
    					flex-direction: column;
    					justify-content: center;
    					align-items: center;
    				} 
    				.view-btn {
    					width: 73px;
    					height: 24px;
    					line-height: 24px;
    					text-align: center;
    					background-color: @main;
    					color: #fff;
    					font-size: 12px;
    					border-radius: 9px;
    					margin-top: 36px;
    				}
    			}
    			.time {
    				font-size: 12px;
    				color: #999;
    				position: absolute;
    				right: 0;
    				top: 0;
    			}
    		}
    	}
    }
}
</style>

<template>
	<div class="user">
		<header-new></header-new>
		<div class="mainbody">
			<div class="sidebar">
				<div v-for="list in sideBars">
					<div class="list-1">
						<img :src="list.img">
						{{list.name}}
					</div>
					<div class="list-2" v-for="sub in list.subList">{{sub}}</div>
				</div> 
			</div>
			<div class="user-info">
				<div class="intro">
					<div class="info-wp">
						<img src="/static/user/avatar.png">
						<div class="name-phone">
							<div class="user-name">用户名称</div>
							<div class="item-wp">
								<div class="item">
									手机号
									<span>18792788035</span>
								</div>
							</div>
						</div>
					</div>
					<div class="more" style="top: 57px;">修改资料</div>
				</div>
				<div class="instalment">
					<div class="block">我的分期</div>
					<div class="more">我的钱包</div>
					<div class="tabs">
						<div class="tab-item">
							<p>￥{{loanAmount.toFixed(2)}}元</p>
							<span>{{bankBranchPeriod}}期</span>
							<div class="loan-btn">我要提额</div>
						</div>
						<div class="line">
							<div class="line-item" v-for="n in 10"></div>
						</div>
						<div class="tab-item">
							<p>￥{{(loanAmount * 1.04 / 12).toFixed(2)}} 元</p>
							<span>每月应还</span>
							<div class="loan-btn">查看明细</div>
						</div>
					</div>
				</div>
				<div class="material">
					<div class="block">我的订单</div>
					<div class="more">查看全部订单</div>
					<div class="mt-item" v-for="order in mOrders">
						<img :src="order.brandImg">
						<div class="text-wp">
							<div class="item">{{order.brandName}}</div>
							<div class="item">{{order.merchantName}}</div>
							<div class="item"><span class="money">￥{{(order.totalAmount).toFixed(2)}}元</span></div>
							<div class="item">{{findName(order.status)}}</div>
							<div class="view-btn">查看订单</div>
						</div>
						<div class="time">{{getTime(order.createdAt)}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderNew from '@/components/HeaderNew'

export default{
	name: "LitTitle",
	components: {
		HeaderNew
	},
	data() {
		return{
			sideBars: [{
				name: '我的收藏',
				img: '/static/user/icon-1.png',
				subList: ['装修日记','装修攻略']
			},{
				name: '我的分期',
				img: '/static/user/icon-2.png',
				subList: ['查看分期',]
			},{
				name: '我的订单',
				img: '/static/user/icon-3.png',
				subList: ['主材订单',]
			},{
				name: '个人资料',
				img: '/static/user/icon-4.png',
				subList: ['昵称修改','绑定手机号修改','地址管理',]
			}],
			mOrders: [{
				brandName: '品牌名称品牌名称',
				brandImg: '/static/user/brand.png',
				merchantName: '门店名称门店名称门店名称',
				totalAmount: 20000,
				status: 2,
				createdAt: 1493232323
			},{
				brandName: '品牌名称品牌名称品牌名称品牌名称品牌名称品牌名称',
				brandImg: '/static/user/brand.png',
				merchantName: '门店名称门店名称门店名称',
				totalAmount: 20000,
				status: 3,
				createdAt: 1493232323
			},{
				brandName: '品牌名称品牌名称',
				brandImg: '/static/user/brand.png',
				merchantName: '门店名称门店名称门店名称',
				totalAmount: 20000,
				status: 4,
				createdAt: 1503976928
			},{
				brandName: '品牌名称品牌名称',
				brandImg: '/static/user/brand.png',
				merchantName: '门店名称门店名称门店名称门店名称门店名称门店名称门店名称门店名称门店名称门店名称门店名称门店名称',
				totalAmount: 20000,
				status: 5,
				createdAt: 1504013332
			},],
			loanAmount: 200000,
			bankBranchPeriod: 12,
			statusArr: [{
				id: 0,
				value: '已预约'
			},{
				id: 1,
				value: '已取消'
			},{
				id: 2,
				value: '待支付'
			},{
				id: 3,
				value: '待确认'
			},{
				id: 4,
				value: '待收货'
			},{
				id: 5,
				value: '已完成'
			},]
		}
	},
	props: {
		
	},
	methods: {
		getTime(timeStamp) {
			var d = new Date(timeStamp * 1000)
			var Y = d.getFullYear() + '-'
			var M = (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + '-'
			var D = (d.getDate() < 10 ? '0' + (d.getDate()) : d.getDate())
			return Y + M + D
		},
		findName(id) {
			let result = ''
			this.statusArr.map((e) => {
				if (id == e.id) {
					result = e.value
				}
			})
			return result
		}
	},
	mounted(){
		document.title = '个人中心'
	}
}
</script>