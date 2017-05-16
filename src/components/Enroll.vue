<style lang="less" scoped>
	.enroll{
		border: 1px solid #c3c3c3;
		width: 280px;
	}
	.header-bac{
		height: 60px;
		padding: 20px 10px 0;
		&>div{
			height: 40px;
			border-bottom: 1px solid #c3c3c3;
			display: flex;
			div{
				width: 100%;
				text-align: center;
				height: 100%;
				height: 20px;
				display: flex;
				padding: 0 10px;
				justify-content: center;
				img{
					display: block;
					margin-right: 5px;
					margin-top: 2px;
					height: 16px;
					width: 16px;
				}
				p{
					height: 20px;
					line-height: 20px;
					color: #ffb400;
					font-size: 16px;
				}
			}
		}
	}
	.body-bac{
		padding: 20px 20px 30px;
		input{
			width: 100%;
			height: 34px;
			line-height: 30px;
			display: block;
			margin-bottom: 20px;
			font-size: 14px;
			color: #2d2d2d;
			padding-left: 20px;
			border-radius: 5px;
			border: 1px solid #c3c3c3;
		}
		p{
			height: 44px;
			background: #ffb400;
			color: #fff;
			font-size: 16px;
			font-weight: bold;
			text-align: center;
			line-height: 44px;
			border-radius: 5px;
			cursor: pointer;
			margin-bottom: 5px;
		}
		span{
			font-size: 10px;
			display: block;
			text-align: center;
			color: #999;

		}
	}
	.icons-bac{
		display: flex;
		height: 44px;
		line-height: 44px;
		text-align: center;
		div{
			display: flex;
			height: 100%;
			align-items: center;
			justify-content: center;
			width: 94px;
			border-top: 1px solid #c3c3c3;
			border-right: 1px solid #c3c3c3;
			&:nth-child(3){
				border-right: 0;
			}
			img{
				height: 12px;
				width: 12px;
				display: block;
				margin-right: 5px;
			}
			p{
				font-size: 12px;
				color: #2d2d2d;
			}
		}
	}
</style>

<template>
	<div class="enroll">
		<div class="header-bac">
			<div>
				<div>
					<img src="/static/imgIndex/icon-qus.png" alt="">
					<p>
						专业顾问·免费服务
					</p>
				</div>
			</div>
		</div>
		<div class="body-bac">
			<input type="text" name="" placeholder="您的手机号码">
			<input type="text" name="" placeholder="您的地区">
			<p>
				立即报名
			</p>
			<span>
				已经为1000名用户提供服务
			</span>
		</div>
		<div class="icons-bac">
			<div>
				<img src="/static/imgIndex/icons-1.png" alt="">
				<p>
					免费验房
				</p>
			</div>
			<div>
				<img src="/static/imgIndex/icons-2.png" alt="">
				<p>
					免费量房
				</p>
			</div>
			<div>
				<img src="/static/imgIndex/icons-3.png" alt="">
				<p>
					免费设计
				</p>
			</div>
		</div>
		<div class="icons-bac">
			<div>
				<img src="/static/imgIndex/icons-4.png" alt="">
				<p>
					免费报价
				</p>
			</div>
			<div>
				<img src="/static/imgIndex/icons-5.png" alt="">
				<p>
					免费监理
				</p>
			</div>
			<div>
				<img src="/static/imgIndex/icons-3.png" alt="">
				<p>
					装修保障
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>