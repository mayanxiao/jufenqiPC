<style lang="less" scoped>
@border-big: #999;
@border-lit: #ebebeb;
@main: #ff9736;
@border-el: #bfcbd9;
.white-back {
	background-color: #fff;
}
.strategy {
	width: 1230px;
	margin: 0 auto;
	padding-top: 20px;
	.s-area {
		width: 100%;
		height: 350px;
		border: 1px solid @border-lit;
		margin-bottom: 20px;
		padding: 20px;
		display: flex;
		.img-wrapper {
			width: 260px;
			height: 310px;
			margin-right: 20px;
			img {
				width: 100%;
				height: 100%;
				display: block;
			}
		}
		.con-wrapper {
			width: calc(~"100% - 280px");
			height: 310px;
			position: relative;
			.s-title {
				font-size: 18px;
				color: #393939;
				margin-bottom: 20px;
			}
			.s-role {
				color: @main;
				font-size: 14px;
				margin-bottom: 20px;
			}
			.content {
				font-size: 14px;
				color: #2d2d2d;
			}
			.s-btn {
				width: 120px;
				height: 40px;
				text-align: center;
				background-color: @main;
				color: #fff;
				line-height: 40px;
				position: absolute;
				right: 0px;
				top: 0px;
			}
		}
	}
	.process-wrapper {
		margin-bottom: 30px;
		display: flex;
		width: 100%;
		height: 332px;
	}
	.example {
		position: relative;
		.text {
			display: flex;
			font-size: 18px;
			color: #2d2d2d;
			margin-bottom: 10px;
			.thumb {
				width: 2px;
				height: 16px;
				margin-top: 5px;
				margin-left: 10px;
				background-color: @main;
			}
		}
		.flex-wrapper {
			display: flex;
			margin-bottom: 20px;
			.flex-item {
				height: 300px;
				position: relative;
				background-color: #000;
				width: 605px;
				overflow: hidden;
				&:hover .img-wrapper img{
					transform: scale(1.2);
				}
				.item-title {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					z-index: 100;
					font-size: 26px;
					font-weight: bold;
					width: 100%;
					text-align: center;
					color: #fff;
					span {
						cursor: pointer;
					}
					
				}

				.img-wrapper {
					position: absolute;
					width: 100%;
					height: 100%;
					z-index: 98;
					img {
						width: 100%;
						height: 100%;
						display: block;
						transition: all 0.5s ease;
					}
				}
				.mask {
					position: absolute;
					width: 100%;
					height: 100%;
					box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 30px 134px inset;
					z-index: 99;
				}
			}
		}
		.more {
			width: 80px;
			height: 20px;
			line-height: 20px;
			text-align: center;
			background-color: @main;
			color: #fff;
			position: absolute;
			top: 0;
			right: 0;
			font-size: 13px;
			border-radius: 3px;
		}
	}
}
</style>

<template>
	<div class="white-back">
	<div class="strategy">
		<div class="s-area">
			<div class="img-wrapper"><img src="https://source.unsplash.com/random"></div>
			<div class="con-wrapper">
				<div class="s-title">准备阶段</div>
				<div class="s-role">角色：业主、量房员</div>
				<div class="content">
					王硕微微一笑上刊登了就分手了肯德基是登录开发及是两地分居我诶UFO诶人个奇偶我小妇女泷泽秀明凉飕飕附件 手里的会计分录几点睡了副科级没V字形短裤女明早，。需，那这次序幕小处女，想买车，梦想城女，想买车女，下次，从女性从女性，处女星陈，。v喜绿女明星岔路口，女性从，v新材料款，想买车女搜到就佛罗；党风建设离开的房间奥；的恐惧感第三空间法律手段会计法律；谁离开房间塑料袋开发熟练度空间放上来的咖啡机收代理费会计师代理费空间都放不下，母女，厦门市可令肌肤乐山大佛科技馆搜房网IE欧五个人就手动if苏饿哦if今日发的那个哦四度佛寺U盾发手动方式的六块腹肌乔恩手里的快捷方式老地方，吃v局水电费离开家水电费了水电费可令肌肤请饿哦if局v去外婆去潍坊了坚实的v怒IE不vv三德科技二佛吴江市劳动局搜到积分我呢个地方来看，xcm.vjbdujfosdncvlvxnvdlfkgjddsoifwejglkfnvdlf,vs西山煤电女睡了么丰盛的十多个司法机关领导人攻击力的空间地方了苦尽甘来的人孔盖接待来访刚上来枫蓝国际第六感看见对方理工大搞定了房管局的发了个的法轮功大力哥登录连接线翠绿奶昔绿那稍等v发票金额房间看电视了房间老师看带附加手里的分内事，代码女常旅客搜到就佛罗刷卡机防守打法三等奖水电费吉林省的看法聚少离多福建省地方了电放费是氯碱厂来看搭配佛圣诞节快乐分别居哦草吗那我尘那么是的发送到色地方胜多负少的色地方胜多负少大法师对方水电费水电费水电费水电费水电费水电费水电费水电费水电费水电费水电费是的发送到热让他也同样容易恢复的说法VB尼玛，京汉股份大肆宣传VB那么快咯已一头热东方红更健康的饭馆好久好久
				</div>
				<div class="s-btn">查看攻略</div>
			</div>
		</div>
		<div class="process-wrapper">
			<process-item></process-item>
		</div>
		<strategy-item title="产品评测" :itemData="products"></strategy-item>
		<strategy-item title="专题" :itemData="subjects"></strategy-item>
		<div class="example">
			<div class="text">
				案例
				<div class="thumb"></div>
			</div>
			<div class="flex-wrapper">
				<div class="flex-item" style="margin-right: 20px;">
					<div class="img-wrapper"><img src="https://source.unsplash.com/random"></div>
					<div class="mask"></div>
					<div class="item-title"><span>王硕的墙根一踹</span></div>
				</div>
				<div class="flex-item">
					<div class="img-wrapper"><img src="https://source.unsplash.com/random"></div>
					<div class="mask"></div>
					<div class="item-title"><span>王硕的拄拐生涯</span></div>
				</div>
			</div>
			<div class="more">更多案例 >> </div>
		</div>
	</div>
	</div>
</template>

<script>
import ProcessItem from '@/components/process-item'
import StrategyItem from '@/components/strategy-item'
export default{
	name: "Plans",
	components: {
		ProcessItem,
		StrategyItem
	},
	data() {
		return{
			products: [{
				title: '王硕的发蜡',
				imgUrl: 'https://source.unsplash.com/random'
			},{
				title: '王硕的抬头纹',
				imgUrl: 'https://source.unsplash.com/random'
			},{
				title: '王硕的哈利波特小眼镜',
				imgUrl: 'https://source.unsplash.com/random'
			},{
				title: '王硕的青春痘',
				imgUrl: 'https://source.unsplash.com/random'
			},{
				title: '王硕的蜜汁微笑',
				imgUrl: 'https://source.unsplash.com/random'
			},{
				title: '王硕的率直眼神',
				imgUrl: 'https://source.unsplash.com/random'
			},],
			subjects: [{
				title: '王硕的蓝色衬衫',
				imgUrl: 'https://source.unsplash.com/random'
			},{
				title: '于头的机智挑衅',
				imgUrl: 'https://source.unsplash.com/random'
			},{
				title: '王硕的愤怒眼神',
				imgUrl: 'https://source.unsplash.com/random'
			},{
				title: '于头的阴险笑容',
				imgUrl: 'https://source.unsplash.com/random'
			},{
				title: '王硕的电炮飞脚',
				imgUrl: 'https://source.unsplash.com/random'
			},{
				title: '于头的夺路而逃',
				imgUrl: 'https://source.unsplash.com/random'
			},]
		}
	},
	methods: {

	},
	mounted(){

	}
}
</script>