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
		}
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
	.j-block {
		margin-top: 100px;
		.block-name {
			text-align: center;
			font-size: 24px;
			margin-bottom: 76px;
		}
		.flex-name {
			font-size: 24px;
			width: 60%;
			display: flex;
			justify-content: space-between;
			margin-bottom: 20px;
		}
		.con-wrapper {
			display: flex;
			height: 250px;
			.con-left {
				width: 20%;
				background-color: #00f;
			}
			.con-right {
				width: 80%;
			}
		}
	}
</style>

<template>
	<div class="index">
		<div class="banner-bac">
			<div class="info-input">
				
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
		<div class="j-block">
			<p class="block-name">选择装修公司</p>
			<div class="con-wrapper">
				<div style="width: 50%; background-color: #0f0;"></div>
				<div style="width: 25%; background-color: #f00;"></div>
				<div style="width: 25%; background-color: #0f0;"></div>
			</div>
		</div>
		<div class="j-block" >
			<div class="flex-name">
				<span>综合</span><span>最有设计感的</span><span>口碑最好的</span><span>价位最低的</span>
			</div>
			<div class="con-wrapper" style="height: 400px;">
				<div class="con-left"></div>
				<div class="con-right">
					<div style="background-color: #0f0; height: 50%"></div>
					<div style="background-color: #f00; height: 50%"></div>
				</div>
			</div>
		</div>
		<div class="j-block">
			<div class="flex-name" style="width: 100%;justify-content: flex-end;">浏览所有工长</div>
			<div class="con-wrapper" style="height: 350px;">
				<div style="width: 40%; background-color: #f00"></div>
				<div style="width: 20%; background-color: #0f0"></div>
				<div style="width: 20%; background-color: #f00"></div>
				<div style="width: 20%; background-color: #0f0"></div>
			</div>
		</div>
		<div class="j-block">
			<div class="prepare">
				<p>
					寻设计
				</p>
				<div>
					<p>风水攻略</p>
					<p>颜色搭配攻略</p>
					<p></p>
					<p></p>
					<p></p>
					<p></p>
				</div>
			</div>
		</div>
		<div class="j-block">
			<div class="flex-name" style="margin-bottom: 60px;"><span>设计完工案例</span></div>
			<div class="con-wrapper" style="height: 360px; justify-content: space-between;">
				<div style="width: 23%; background-color: #0f0"></div>
				<div style="width: 23%; background-color: #f00"></div>
				<div style="width: 23%; background-color: #0f0"></div>
				<div style="width: 23%; background-color: #f00"></div>
			</div>
		</div>
		<div class="j-block" >
			<div class="flex-name">
				<span>综合</span><span>最有设计感的</span><span>口碑最好的</span><span>价位最低的</span>
			</div>
			<div class="con-wrapper" style="height: 400px;">
				<div class="con-left"></div>
				<div class="con-right">
					<div style="background-color: #0f0; height: 50%"></div>
					<div style="background-color: #f00; height: 50%"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	
</script>