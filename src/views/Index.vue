<style lang="less">
	.index{
		padding-top: 100px;
		min-width: 1220px;
		margin: 0 auto;
	}
	.banner-bac{
		display: flex;
		.info-input {
			padding: 12px;
			font-size: 14px;
			text-align: center;
			p{
				&:nth-child(1){
					margin-top: 30px;
					margin-bottom: 15px;
					font-size: 16px;
					font-weight: bold;
				}
				&:nth-child(6){
					font-size: 12px;
					color: #999;
					text-align: center;
					margin-top: 20px;
				}
			}
			span{
				font-size: 14px;
				display: block;
				text-align: center;
				line-height: 20px;
			}
			input{
				width: 95%;
				margin: 30px auto;
				padding-left: 20px;
				height: 50px;
				line-height: 40px;
				border: 1px solid #aaa;
			}
		}
	}
	.banner-bac>div:nth-child(1){
		width: 298px;
		margin-right: 22px;
		height: 530px;
		border: 1px solid #ccc;
	}
	.banner-bac>div:nth-child(2){
		margin-right: 20px;
	}
	.banner-bac>div:nth-child(2)>div:nth-child(1){
		width: 600px;
		height: 380px;
		border: 1px solid #ccc;
		line-height: 380px;
		text-align: center;
		margin-bottom: 20px;
	}
	.banner-bac>div:nth-child(2)>div:nth-child(2){
		width: 600px;
		height: 130px;
		margin: 0;
		display: flex;
		div{
			width: 180px;
			height: 100%;
			margin-right: 30px;
			border: 1px solid #ccc;
			line-height: 130px;
			text-align: center;
			&:nth-child(3){
				margin: 0;
			}
		}
	}
	.banner-bac>div:nth-child(3){
		width: 280px;
		height: 530px;
		border: 1px solid #ccc;
		padding: 20px 30px;
		font-size: 16px;
		div{
			height: 380px;
		}
		p{
			border-top: 1px solid #ccc;
			font-size: 12px;
			position: relative;
			padding-top: 30px;
			span{
				position: absolute;
				display: block;
				height: 30px;
				font-size: 14px;
				width: 100px;
				top: -15px;
				background: #fff;
				line-height: 30px;
				font-weight: bold;
			}
		}
	}
	.severs-bac{
		padding-top: 76px;
		margin-bottom: 130px;
		p{
			font-size: 24px;
			font-weight: bold;
			margin-bottom: 76px;
			text-align: center;
		}
		div{
			display: flex;
			justify-content: space-between;
			p{
				width: 170px;
				height: 170px;
				border-radius: 50%;
				border: 1px solid #ccc;
				line-height: 170px;
				text-align: center;
				font-size: 20px;
				font-weight: normal;
				margin: 0;
			}
		}
	}
	.prepare{
		position: relative;
		p{
			font-size: 24px;
			margin-bottom: 76px;
			text-align: center;
			font-weight: bold;
		}
		span{
			display: block;
			position: absolute;
			top: 70px;
			right: 0;
			font-size: 14px;
			color: #333;
			cursor: pointer;
		}
		div{
			display: flex;
			justify-content: space-between;
			p{
				height: 177px;
				width: 177px;
				line-height: 177px;
				text-align: center;
				border: 1px solid #ccc;
				font-size: 16px;
				font-weight: normal;
				margin: 0;
			}
		}
	}
	.effectpic-bac{
		margin-top: 100px;
		p{
			font-size: 24px;
			font-weight: bold;
			margin-bottom: 20px;
			span{
				display: inline-block;
				font-size: 14px;
				margin-right: 40px;
				&:nth-child(1){
					margin-left: 80px;
				}
			}
		}
		div{
			display: flex;
			justify-content: space-between;
			div{
				&:nth-child(1){
					width: 476px;
					height: 340px;
					border: 1px solid #ccc;
					line-height: 340px;
					text-align: center;
					display: block;
				}
				&:nth-child(2){
					display: block;	
					div{
						&:nth-child(1){
							width: 476px;
							height: 160px;
							margin-bottom: 20px;
							border: 1px solid #ccc;
							line-height: 160px;
							text-align: center;
							display: block;
						}
						&:nth-child(2){
							display: flex;
							div{
								width: 228px;
								height: 160px;
								border: 1px solid #ccc;
								line-height: 160px;
								text-align: center;
								display: block;
								&:nth-child(1){
								}
							}
						}
					}
				}
				&:nth-child(3){
					height: 340px;
					width: 228px;
					line-height: 340px;
					text-align: center;
					border: 1px solid #ccc;
					display: block;
				}
			}
		}
	}
	.online{
		margin-top: 100px;
		display: flex;
		div{
			&:nth-child(1){
				display: block;
				p{
					height: 180px;
					width: 180px;
					line-height: 180px;
					text-align: center;
					font-size: 20px;
					&:nth-child(1){
						background: #555;
					}
					&:nth-child(2){
						background: #666;
					}
				}
			}
			&:nth-child(2){
				width: 1040px;
				height: 360px;
				background: #777;
			}
		}
	}
	.choose-comp{
		margin-top: 60px;
		.name{
			width: 100%;
			position: relative;
			border-bottom: 1px solid #ccc;
			p{
				position: absolute;
				height: 30px;
				font-size: 20px;
				font-weight: bold;
				line-height: 30px;
				top: -15px;
				width: 150px;
				background: #fff;
			}
		}
		.choose-body-bac{
			border: 1px solid #ccc;
			margin-top: 40px;
			padding: 40px;
			.choose-name{
				p{
					font-size: 18px;
					font-weight: bold;
					margin-bottom: 20px;
				}
				span{
					font-size: 14px;
				}
			}
			.body-comps{
				display: flex;
				border: 1px solid #ccc;
				margin-top: 20px;
				p{
					height: 250px;
					width: 25%;
					line-height: 250px;
					font-size: 12px;
					text-align: center;
					&:nth-child(1){
						width: 50%;
						border-right: 1px solid #ccc;
					}
					&:nth-child(2){
						border-right: 1px solid #ccc;
					}
				}
			}
			.allcomps-bac{
				margin-top: 40px;
				position: relative;
				.allcomps-title{
					display: flex;
					justify-content: space-between;
					width: 500px;
					p{
						font-size: 14px;
						height: 20px;
						line-height: 20px;
						font-weight: bold;
					}
					span{
						display: block;
						position: absolute;
						font-size: 12px;
						color: #aaa;
						right: 20px;
						height: 20px;
						line-height: 20px;
						cursor: pointer;
					}
				}
				.allcomps-body{
					height: 400px;
					border: 1px solid #ccc;
					margin-top: 15px;
					display: flex;
					div{
						&:nth-child(1){
							border-right: 1px solid #ccc;
							width: 30%;
							p{
								height: 199px;
								line-height: 199px;
								text-align: center;
							}
						}
						&:nth-child(2){
							width: 70%;
							border: 0;
							div{
								width: 100%;
								border: 0;
								&:nth-child(1){
									display: flex;
									height: 150px;
									border-bottom: 1px solid #ccc;
									div{
										border-left: 1px solid #ccc;
										line-height: 150px;
										height: 150px;
										display: block;
										text-align: center;
										padding: 0;
										&:nth-child(1){
											border: 0;
										}
									}
								}
								&:nth-child(2){
									padding: 50px 0 0 40px;
									position: relative;
									div{
										&:nth-child(1){
											display: flex;
											border: 0;
											div{
												height: 60px;
												width: 80px;
												border: 1px solid #ccc;
												border-radius: 50%;
											}
											p{
												height: 60px;
												padding-left: 40px;
												line-height: 60px;
												font-size: 14px;
											}
										}
										&:nth-child(2){
											position: absolute;
											right: 40px;
											bottom: -10px;
											border: 1px solid #ccc;
											line-height: 40px;
											width: 130px;
											height: 40px;
											text-align: center;
											font-size: 14px;
											background: #aaa;
											padding: 0;
											cursor: pointer;
										}
									}
								}
							}
						}
					}
				}
			}
			.choose-chief{
				margin-top: 60px;
				position: relative;
				border: 1px solid #ccc;
				display: flex;
				span{
					display: block;
					position: absolute;
					border: 0;
					font-size: 14px;
					color: #aaa;
					right: 0;
					top: -20px;
					cursor: pointer;
				}
				div{
					border-left: 1px solid #ccc;
					width: 20%;
					height: 250px;
					&:nth-child(2){
						border: 0;
						width: 40%;
						p{
							width: 100%;
							text-align: center;
							height: 50px;
							line-height: 50px;
							font-size: 14px;
						}
						.choose-chief-btns{
							display: flex;
							justify-content: space-between;
							flex-wrap: wrap;
							width: 100%;
							height: 150px;
							div{
								width: 150px;
								display: block;
								border: 1px solid #ccc;
								margin: 0 30px;
								height: 40px;
								text-align: center;
								line-height: 40px;
							}
						}
						span{
							display: block;
							height: 40px;
							width: 150px;
							margin: 0 auto;
							border: 1px solid #ccc;
							text-align: center;
							cursor: pointer;
							position: relative;
							color: #444;
							line-height: 40px;
						}
					}
					img{
						width: 100px;
						height: 100px;
						border-radius: 50%;
						margin: 50px auto;
						display: block;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="index">
		<div class="banner-bac">
			<div class="info-input">
				<p>
					专业顾问 免费服务
				</p>
				<span>
					报名后我们会为您分配最匹配的顾问联系您，还会为您提供免费验房、量房、设计、报价、监理等服务
				</span>
				<input type="text" name="" placeholder="您的手机号">
				<input type="text" name="" placeholder="您的地区">
				<input type="text" name="" placeholder="立即报名">
				<p>
					已为99999业主提供服务
				</p>
			</div>
			<div>
				<div>
					banner
				</div>
				<div>
					<div>
						居装宝
					</div>
					<div>
						居分期
					</div>
					<div>
						免费监理
					</div>
				</div>
			</div>
			<div>
				<div>
					居分期－独立、客观、第三方的家装领域平台
				</div>
				<p>
					<span>
						居点评/业主说
					</span>
					我们一家很喜欢这套简约风，尤其是客厅与卫生间的设计，深受家人的喜欢，与家人住在这里很开心
				</p>
			</div>
		</div>
		<div class="severs-bac">
			<p>
				选择您当前所处的阶段以找到您可能需要的服务
			</p>
			<div>
				<p>
					准备阶段
				</p>
				<p>
					装修公司
				</p>
				<p>
					设计阶段
				</p>
				<p>
					建材选购
				</p>
				<p>
					施工阶段
				</p>
				<p>
					家具选购
				</p>
			</div>
		</div>
		<div class="prepare">
			<p>
				准备阶段
			</p>
			<span>
				更多
			</span>
			<div>
				<p>
					关于知识的攻略
				</p>
				<p>
					关于资金的攻略
				</p>
				<p>
					关于时间的攻略
				</p>
				<p>
					关于资金托管的攻略
				</p>
				<p>
					关于量房的攻略
				</p>
				<p>
					关于报价的攻略
				</p>
			</div>
		</div>
		<div class="effectpic-bac">
			<p>
				效果图
				<span>
					美式
				</span>
				<span>
					现代
				</span>
				<span>
					简约
				</span>
				<span>
					田园
				</span>
				<span>
					日式
				</span>
				<span>
					混搭
				</span>
			</p>
			<div>
				<div>
					美式风格二居设计
				</div>
				<div>
					<div>
						美式风格公寓设计
					</div>
					<div>
						<div>
							一居设计
						</div>
						<div>
							三居设计
						</div>
					</div>
				</div>
				<div>
					免费设计咨询
				</div>
			</div>
		</div>
		<div class="online">
			<div>
				<p>
					在线报价
				</p>
				<p>
					免费量房
				</p>
			</div>
			<div>
				
			</div>
		</div>
		<div class="choose-comp">
			<div class="name">
				<p>
					选择装修公司
				</p>
			</div>
			<div class="choose-body-bac">
				<div class="choose-name">
					<p>
						居分期装修榜
					</p>
					<span>
						热门装修公司
					</span>
				</div>
				<div class="body-comps">
					<p>
						一生家
					</p>
					<p>
						奔跑吧装修
					</p>
					<p>
						齐家网
					</p>
				</div>
				<div class="allcomps-bac">
					<div class="allcomps-title">
						<p>
							综合
						</p>
						<p>
							最有设计感的
						</p>
						<p>
							口碑最好的
						</p>
						<p>
							价格最低的
						</p>
						<span>
							查看所有公司
						</span>
					</div>
					<div class="allcomps-body">
						<div>
							<p>
								装修公司排行
							</p>
							<p>
								教我怎么选 >
							</p>
						</div>
						<div>
							<div>
								<div>
									公司1
								</div>
								<div>
									公司2
								</div>
								<div>
									公司3
								</div>
								<div>
									公司4
								</div>
								<div>
									公司5
								</div>
								<div>
									公司6
								</div>
								<div>
									公司7
								</div>
								<div>
									公司8
								</div>
								<div>
									公司9
								</div>
								<div>
									公司10
								</div>
							</div>
							<div>
								<div>
									<div>
										
									</div>
									<p>
										装修公司介绍
									</p>
								</div>
								<div>
									查看详情
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="choose-chief">
					<span>
						浏览所有工长
					</span>
					<div>
						<p>
							挑工长
						</p>
						<div class="choose-chief-btns">
							<div>
								户型
							</div>
							<div>
								面积
							</div>
							<div>
								风格
							</div>
							<div>
								风格
							</div>
						</div>
						<span>
							匹配
						</span>
					</div>
					<div>
						<img src="/static/imgs/1.jpg">
					</div>
					<div>
						<img src="/static/imgs/1.jpg">
					</div>
					<div>
						<img src="/static/imgs/1.jpg">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	
</script>