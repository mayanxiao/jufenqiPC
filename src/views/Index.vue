<style lang="less">
	.index{
		padding-top: 100px;
		min-width: 1220px;
		margin: 0 auto;
	}
	.banner-bac{
		display: flex;
	}
	.banner-bac div:nth-child(1){
		width: 298px;
		margin-right: 22px;
		height: 530px;
		background: #555;
	}
	.banner-bac>div:nth-child(2){
		margin: 0;
	}
	.banner-bac>div:nth-child(2) div:nth-child(1){
		width: 620px;
		height: 400px;
		background: #666;
		margin: 0;
	}
	.banner-bac>div:nth-child(2) div:nth-child(2){
		width: 620px;
		height: 130px;
		background: #777;
		margin: 0;
	}
	.banner-bac div:nth-child(3){
		width: 280px;
		height: 530px;
		background: #888;
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
				background: #888;
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
				background: #777;
				font-size: 20px;
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
				&:nth-child(1){
					margin: 0 60px 0 100px;
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
					background: #666;
				}
				&:nth-child(2){
					display: block;	
					div{
						&:nth-child(1){
							width: 476px;
							height: 160px;
							margin-bottom: 20px;
							background: #666;
						}
						&:nth-child(2){
							display: flex;
							div{
								width: 228px;
								height: 160px;
								background: #666;
								&:nth-child(1){
								}
							}
						}
					}
				}
				&:nth-child(3){
					height: 340px;
					width: 228px;
					background: #666;
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
</style>

<template>
	<div class="index">
		<div class="banner-bac">
			<div>
				
			</div>
			<div>
				<div>
					
				</div>
				<div>
					
				</div>
			</div>
			<div>
				
			</div>
			<div>
				
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
					关于知识的攻略
				</p>
				<p>
					关于知识的攻略
				</p>
				<p>
					关于知识的攻略
				</p>
				<p>
					关于知识的攻略
				</p>
				<p>
					关于知识的攻略
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
			</p>
			<div>
				<div>
					
				</div>
				<div>
					<div>
						
					</div>
					<div>
						<div>
							
						</div>
						<div>
							
						</div>
					</div>
				</div>
				<div>
					
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
	</div>
</template>

<script type="text/javascript">
	
</script>