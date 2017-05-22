<style lang="less" scoped>
	@border-big: #999;
	@border-lit: #ebebeb;
	@main: #ff9736;
	@border-el: #bfcbd9;
	.plans{
		width: 1230px;
		display: flex;
		margin: 0 auto;
		background: #fff;
	}
	.left-bac{
		padding-top: 50px;
		width: 820px;
		margin-right: 20px;
	}
	.left-title{
		font-size: 30px;
		line-height: 30px;
		color: #666;
		border-bottom: 1px solid @border-lit;
		padding-bottom: 10px;
	}
	.pare-pics{
		margin-top: 20px;
		display: flex;
		p{
			position: absolute;
			bottom: 0;
			left: 0;
			height: 44px;
			line-height: 44px;
			background: rgba(0, 0, 0, 0.6);
			padding-left: 25px;
			font-size: 14px;
			color: #fff;
			width: 100%;
		}
		div{
			position: relative;
			width: 400px;
		}
		img{
			height: 100%;
			width: 100%;
		}
		&>div{
			&:nth-child(1){
				height: 400px;
				margin-right: 20px;
			}
			&:nth-child(2){
				div{
					height: 190px;
					&:nth-child(1){
						margin-bottom: 20px;
					}
				}
			}
		}
	}
	.pare-text{
		margin-top: 20px;
		display: flex;
		margin-bottom: 50px;
		div{
			width: 50%;
			p{
				margin-bottom: 10px;
				font-size: 14px;
				line-height: 14px;
				padding-left: 10px;
				position: relative;
				color: #666;
				cursor: pointer;
				&:before{
					content:"·";
					position: absolute;
					left: 2px;
					font-size: 50px;
					line-height: 50px;
					top: 50%;
					margin-top: -25px;
				}
				&:hover{
					color: @main;
				}
			}
		}
	}
	.com-bac{
		padding-top: 50px;
	}
	.com-pics{
		margin-top: 20px;
		display: flex;
		p{
			position: absolute;
			bottom: 0;
			left: 0;
			height: 44px;
			line-height: 44px;
			background: rgba(0, 0, 0, 0.6);
			padding-left: 25px;
			font-size: 14px;
			color: #fff;
			width: 100%;
		}
		div{
			position: relative;
			width: 260px;
			height: 260px;
			margin-right: 20px;
		}
		img{
			height: 100%;
			width: 100%;
		}
		&:nth-child(1){
			margin-right: 0px;
		}
	}
	.shop-bac{
		display: flex;
		margin-top: 20px;
		margin-bottom: 20px;
		&>div{
			&:nth-child(1){
				width: 450px;
				margin-right: 20px;
				height: 450px;
			}
			&:nth-child(2){
				width: 350px;
				height: 350px;
				div{
					width: 350px;
					height: 350px;
					margin-bottom: 10px;
				}
				p{
					width: 100%;
				}
				&>p{
					margin-bottom: 10px;
					font-size: 14px;
					line-height: 14px;
					padding-left: 10px;
					position: relative;
					color: #666;
					cursor: pointer;
					&:before{
						content:"·";
						position: absolute;
						left: 2px;
						font-size: 50px;
						line-height: 50px;
						top: 50%;
						margin-top: -25px;
					}
					&:hover{
						color: @main;
					}
					&:nth-child(1){
						margin-top: 10px;
					}
				}
			}
		}
	}
	.right-bac{
		padding-top: 108px;
	}
	.four{
		background-image: url(/static/imgPlans/bac.png);
		height: 122px;
		width: 390px;
		background-size: 100% 100%;
		position: relative;
		padding: 33px 41px 0 41px;
		display: flex;
		justify-content: space-between;
		p{
			position: absolute;
			width: 100%;
			height: 20px;
			line-height: 20px;
			text-align: center;
			top: -6px;
			font-size: 12px;
			color: #999;
			left: 0;
		}
		img{
			width: 54px;
			cursor: pointer;
			height: 65px;
		}
	}
	.serive{
		margin: 20px 0;
		height: 363px;
		padding: 20px 45px;
		width: 390px;
		border: 1px solid @border-lit;
		p{
			font-size: 30px;
			height: 40px;
			line-height: 30px;
			border-bottom: 1px solid @border-lit;
			text-align: center;
			color: @main;
		}
		input{
			margin-top: 30px;
			height: 34px;
			line-height: 34px;
			width: 100%;
			display: block;
			padding-left: 20px;
			color: #999;
			border-radius: 5px;
			box-shadow: 0 0 0;
			border: 1px solid @border-lit;
			&:focus {
				border-color: @main;
			}
		}
		span{
			display: block;
			height: 50px;
			border-radius: 5px;
			background: @main;
			color: #fff;
			font-size: 24px;
			line-height: 50px;
			text-align: center;
			cursor: pointer;
			margin-top: 30px;
		}
	}
	.steps{
		border: 1px solid @border-lit;
		padding-top: 30px;
		&>p{
			height: 20px;
			line-height: 20px;
			text-align: center;
			font-size: 16px;
			margin-bottom: 50px;
		}
		padding-bottom: 40px;
	}
	.wtf{
		margin-left: 60px;
		padding-left: 60px;
		border-left: 1px solid #666;
		position: relative;
		height: 260px;
		&:before{
			content: "";
			width: 60px;
			height: 60px;
			border-radius: 50%;
			border: 30px solid #666;
			display: block;
			box-sizing: border-box;
			position: absolute;
			left: -30px;
			top: -20px;
		}
		&.active{
			border-color: @main;
			&:before{
				border-color: @main;
			}
			&:after{
				border-color: @main!important;
			}
		}
		&:nth-child(7){
			&:after{
				content: "";
				width: 60px;
				height: 60px;
				border-radius: 50%;
				border: 30px solid #666;
				display: block;
				box-sizing: border-box;
				position: absolute;
				left: -30px;
				bottom: -30px;
			}
		}
		p{
			height: 20px;
			line-height: 20px;
			font-size: 18px;
			color: #666;
		}
		div{
			display: flex;
			flex-wrap: wrap;
			margin-top: 50px;
			span{
				width: 60px;
				height: 34px;
				border-radius: 5px;
				background: #999;
				color: #fff;
				font-size: 14px;
				margin-right: 20px;
				margin-bottom: 20px;
				line-height: 34px;
				display: block;
				text-align: center;
				cursor: pointer;
				&:hover{
					background: @main;
				}
				&.active1{
					background: @main;
				}
			}
		}
	}
</style>

<template>
	<div class="plans">
		<div class="left-bac">
			<div class="left-title">
				准备阶段
			</div>
			<div class="pare-pics">
				<plans-pic :planspic="planspics[0]"></plans-pic>
				<div>
					<plans-pic :planspic="planspics[0]"></plans-pic>
					<plans-pic :planspic="planspics[0]"></plans-pic>
				</div>
			</div>
			<div class="pare-text">
				<div>
					<p v-for="paretext in pareTexts">
						{{paretext.text}}
					</p>
				</div>
				<div>
					<p v-for="paretext in pareTexts">
						{{paretext.text}}
					</p>
				</div>
			</div>
			<div class="left-title">
				装修公司
			</div>
			<div class="com-pics">
				<plans-pic :planspic="planspics[0]"></plans-pic>
				<plans-pic :planspic="planspics[0]"></plans-pic>
				<plans-pic :planspic="planspics[0]"></plans-pic>
			</div>
			<div class="pare-text">
				<div>
					<p v-for="paretext in pareTexts">
						{{paretext.text}}
					</p>
				</div>
				<div>
					<p v-for="paretext in pareTexts">
						{{paretext.text}}
					</p>
				</div>
			</div>
			<div class="left-title">
				建材选购
			</div>
			<div class="shop-bac">
				<div>
					<plans-pic :planspic="planspics[0]"></plans-pic>
				</div>
				<div>
					<plans-pic :planspic="planspics[0]"></plans-pic>
					<p v-for="paretext in pareTexts">
						{{paretext.text}}
					</p>
				</div>
			</div>
			<div class="left-title">
				施工
			</div>
			<div class="com-pics">
				<plans-pic :planspic="planspics[0]"></plans-pic>
				<plans-pic :planspic="planspics[0]"></plans-pic>
				<plans-pic :planspic="planspics[0]"></plans-pic>
			</div>
			<div class="pare-text">
				<div>
					<p v-for="paretext in pareTexts">
						{{paretext.text}}
					</p>
				</div>
				<div>
					<p v-for="paretext in pareTexts">
						{{paretext.text}}
					</p>
				</div>
			</div>
			<div class="left-title">
				家具选购
			</div>
			<div class="com-pics">
				<plans-pic :planspic="planspics[0]"></plans-pic>
				<plans-pic :planspic="planspics[0]"></plans-pic>
				<plans-pic :planspic="planspics[0]"></plans-pic>
			</div>
			<div class="pare-text">
				<div>
					<p v-for="paretext in pareTexts">
						{{paretext.text}}
					</p>
				</div>
				<div>
					<p v-for="paretext in pareTexts">
						{{paretext.text}}
					</p>
				</div>
			</div>
		</div>
		<div class="right-bac">
			<div class="four">
				<p>
					平台服务保障
				</p>
				<img src="/static/imgPlans/1.png" alt="">
				<img src="/static/imgPlans/2.png" alt="">
				<img src="/static/imgPlans/3.png" alt="">
				<img src="/static/imgPlans/4.png" alt="">
			</div>
			<div class="serive">
				<p>
					免费报价服务
				</p>
				<input type="text" name="" placeholder="姓名">
				<input type="text" name="" placeholder="电话">
				<input type="text" name="" placeholder="房屋面积">
				<span>
					提       交
				</span>
			</div>
			<div class="steps">
				<p>
					热门装修阶段
				</p>
				<div class="wtf" v-for="step in steps" :class="{active: step.status}">
					<p>
						{{step.name}}
					</p>
					<div>
						<span v-for="btn in step.btns" @click="taggleStep(step.id,btn.id)" :class="{active1: btn.status}">
							{{btn.name}}
						</span>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PlansPic from "../components/PlansPic"
	export default{
		name: "Plans",
		components: {
			PlansPic
		},
		data() {
			return{
				planspics: [{
					describe: "介绍不知道。。介绍不知道。。",
					imgurl: "/static/imgIndex/plans1.png"
				}],
				pareTexts: [{
					text: "［家具］欧式布艺沙发图片及价格大全"
				},{
					text: "［家具］欧式布艺沙发图片及价格大全"
				},{
					text: "［家具］欧式布艺沙发图片及价格大全"
				},{
					text: "［家具］欧式布艺沙发图片及价格大全"
				},],
				steps: [{
					id: 0,
					status: 1,
					name: "准备阶段",
					btns: [{
						name: "准备",
						id: 0,
						status: 0
					},{
						name: "准备",
						id: 1,
						status: 0
					},{
						name: "准备",
						id: 2,
						status: 0
					},{
						name: "准备",
						id: 3,
						status: 0
					},{
						name: "准备",
						id: 4,
						status: 0
					},{
						name: "准备",
						id: 5,
						status: 0
					}]
				},{
					id: 1,
					status: 0,
					name: "装修公司",
					btns: [{
						name: "准备",
						id: 0,
						status: 0
					},{
						name: "准备",
						id: 1,
						status: 0
					},{
						name: "准备",
						id: 2,
						status: 0
					},{
						name: "准备",
						id: 3,
						status: 0
					},{
						name: "准备",
						id: 4,
						status: 0
					},{
						name: "准备",
						id: 5,
						status: 0
					}]
				},{
					id: 2,
					status: 0,
					name: "设计",
					btns: [{
						name: "准备",
						id: 0,
						status: 0
					},{
						name: "准备",
						id: 1,
						status: 0
					},{
						name: "准备",
						id: 2,
						status: 0
					},{
						name: "准备",
						id: 3,
						status: 0
					},{
						name: "准备",
						id: 4,
						status: 0
					},{
						name: "准备",
						id: 5,
						status: 0
					}]
				},{
					id: 3,
					status: 0,
					name: "建材选购",
					btns: [{
						name: "准备",
						id: 0,
						status: 0
					},{
						name: "准备",
						id: 1,
						status: 0
					},{
						name: "准备",
						id: 2,
						status: 0
					},{
						name: "准备",
						id: 3,
						status: 0
					},{
						name: "准备",
						id: 4,
						status: 0
					},{
						name: "准备",
						id: 5,
						status: 0
					}]
				},{
					id: 4,
					status: 0,
					name: "施工",
					btns: [{
						name: "准备",
						id: 0,
						status: 0
					},{
						name: "准备",
						id: 1,
						status: 0
					},{
						name: "准备",
						id: 2,
						status: 0
					},{
						name: "准备",
						id: 3,
						status: 0
					},{
						name: "准备",
						id: 4,
						status: 0
					},{
						name: "准备",
						id: 5,
						status: 0
					}]
				},{
					id: 5,
					status: 0,
					name: "家居选购",
					btns: [{
						name: "准备",
						id: 0,
						status: 0
					},{
						name: "准备",
						id: 1,
						status: 0
					},{
						name: "准备",
						id: 2,
						status: 0
					},{
						name: "准备",
						id: 3,
						status: 0
					},{
						name: "准备",
						id: 4,
						status: 0
					},{
						name: "准备",
						id: 5,
						status: 0
					}]
				}]
			}
		},
		props: {
			
		},
		methods: {
			taggleStep(id,btnId){
				this.steps.map((a) => {
					a.btns.map((c) => {
						c.status = 0
					})
					if(a.id != id){
						a.status = 0

					}
					else{
						a.status = 1
						a.btns.map((b) => {
							if(b.id == btnId){
								b.status = 1
							}
							else{
								b.status = 0
							}
						})
					}
				})
			}
		},
		mounted(){

		}
	}
</script>