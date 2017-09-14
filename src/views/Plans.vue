<style lang="less" scoped>
	@border-big: #999;
	@border-lit: #ebebeb;
	@main: #ff9736;
	@border-el: #bfcbd9;
	.white-back {
		width: 100%;
		background-color: #fff;
	}
	.plans{
		width: 1238px;
		display: flex;
		margin: 0 auto;
		padding-top: 92px;
	}
	.left-bac{
		width: 849px;
		margin-right: 20px;
		.art_section {
			padding-bottom: 97px;
		}
		.art_title {
			font-size: 24px;
			color: #333;
			margin-bottom: 39px;
			text-align: center;
		}
		.art_subtitle {
			font-size: 18px;
			color: #333;
			margin-bottom: 30px;
		}
		.art_intro {
			font-size: 16px;
			color: #999;
			text-indent: 16px;
			width: 80%;
			margin: 30px auto;
		}
		.art_text {
			font-size: 14px;
			color: #666;
			text-indent: 16px;
			width: 80%;
			margin: 0 auto;
		}
		.art_img_wp {
			width: 50%;
			margin: 30px auto;
			img {
				display: block;
				width: 100%;
			}
		}
		
	}
	
	.right-bac {
		width: 339px;
		.btn {
			width: 100%;
			height: 55px;
			line-height: 55px;
			text-align: center;
			font-size: 14px;
			color: #fff;
			background-color: @main;
			cursor: pointer;
		}
		.block {
			width: 100%;
			border: 1px solid #ddd;
			.title {
				width: 100%;
				height: 53px;
				line-height: 53px;
				background-color: #eee;
				padding-left: 20px;
				color: @main;
				font-size: 20px;
			}
			.rec-wp {
				width: 100%;
				padding: 18px 15px;
				.rec-item {
					display: flex;
					justify-content: space-between;
					margin-bottom: 18px;
					width: 100%;
					img {
						display: block;
						width: 109px;
						height: 84px;
					}
					.text-wp {
						width: calc(~"100% - 115px");
						padding-top: 9px;
						.title-wp {
							display: flex;
							justify-content: space-between;
							width: 100%;
							margin-bottom: 10px;
							color: #333;
							.text-title {
								width: calc(~"100% - 40px");
								overflow: hidden;
								text-overflow: ellipsis;
								height: 20px;
								line-height: 20px;
							}
							.thumb {
								width: 35px;
								height: 19px;
								text-align: center;
								line-height: 19px;
								background-color: @main;
								border-radius: 3px;
								color: #fff;
								font-size: 12px;
							}
						}
						.text {
							font-size: 14px;
							color: #666;
						}
					}
				}
			}
		}
	}
	
</style>

<template>
	<div class="white-back">
		<header-new></header-new>
		<div class="plans">
			<div class="left-bac">
				<div class="art_title">爱情里最长情的告白，他们决定在这样的地方继续</div>
				<div class="art_section">
					<div class="art_intro">
						陪伴 是最长情的告白，既然爱情的果实到了该落地的时候，就该考虑换个时间和地点慢慢发酵，而家，正是爱情最该归宿的地方。
					</div>
					<div class="art_text">
						雯洁与小伟是标准的90后新生代夫妻，他们的恋情开始与高中时代，经历了7年的爱情长跑，才得以共同生活在这85㎡的空间里。这也使得他们下定决心好好规划一下自己的家。
					</div>
					<div class="art_img_wp"><img src="/static/plans/1.jpg"></div>
					<div class="art_text">
						入门的玄关处多隔断的收纳柜让这一狭小区域的空间得到最大限度的利用，开放式的设计不会让鞋子的气味过多的发酵；鞋柜上方的座位很大程度上方便了进出门的换装和取用。
					</div>
					<div class="art_img_wp"><img src="/static/plans/2.jpg"></div>
					<div class="art_text">
						走进客厅前的一处，也是出门前的必经之处，起到了玄关镜子的作用，虽然看不到全身，但胜在造型足够，为家里增添了不少光彩。
					</div>
					<div class="art_img_wp"><img src="/static/plans/3.jpg"></div>
					<div class="art_text">
						从玄关看过去的客厅和餐厅，右半部是厨房的一角。客厅的设计完全摒弃了传统的中式理念，没有电视北京墙的参与，空间上也不允许，餐厅与客厅没有明显的区分界线却也能一目了然。
					</div>
					<div class="art_img_wp"><img src="/static/plans/4.jpg"></div>
					<div class="art_text">
						餐厅，也可以是工作区。工业线条感十足的座椅，另一面是固定在墙面的褐色沙发，两边的颜色很是和谐；角落里是管架和木板搭建而成的多层次的置物架，工业感和后现代感十足。出彩之处还在于那盏吊灯，韵味凸显，让人灵感乍现。
					</div>
					<div class="art_img_wp"><img src="/static/plans/5.jpg"></div>
					<div class="art_text">
						置物架的一角，连装饰物都采用的是后现代工业风。
					</div>
					<div class="art_img_wp"><img src="/static/plans/6.jpg"></div>
					<div class="art_text">
						从餐厅的角度看过去客厅与厨房的轮廓尽显，紧凑却不凌乱。
					</div>
					<div class="art_img_wp"><img src="/static/plans/7.jpg"></div>
					<div class="art_text">
						厨房全貌，橱柜与橱具保持着主色调的一致，各种餐具通过精致的置物架归置到一起，通过敞开一面墙体设计的平台与家庭内部相连，实际效果上拓宽了厨房的可操作空间。
					</div>
					<div class="art_img_wp"><img src="/static/plans/8.jpg"></div>
					<div class="art_text">
						厨房一角，操作台与烹饪台分割开来又相距在很短的距离内，合乎习惯，便于操作。
					</div>
					<div class="art_img_wp"><img src="/static/plans/9.jpg"></div>
					<div class="art_text">
						烹饪操作台，外表的金属质感很浓重，整体的设计很是精巧，看上去却很厚重。
					</div>
					<div class="art_img_wp"><img src="/static/plans/10.jpg"></div>
					<div class="art_text">
						卧室，两面的落地窗使得室内足够通透，即使空间狭小也不会显得沉闷，窗台完美的将床头柜与工作区的功能展现出来。大大的床铺温馨尽显。
					</div>
					<div class="art_img_wp"><img src="/static/plans/11.jpg"></div>
					<div class="art_text">
						卫生间，淋浴房的干湿分离设计，不影响其他成员对卫生间使用，通风、采光和私密性都通过细节设计发挥出来。
					</div>
					<!-- <img src="/static/plans/12.png">
					<div class="art_text">
						从玄关看过去的客厅和餐厅，右半部是厨房的一角。客厅的设计完全摒弃了传统的中式理念，没有电视北京墙的参与，空间上也不允许，餐厅与客厅没有明显的区分界线却也能一目了然。
					</div>
					<img src="/static/plans/13.png">
					<div class="art_text">
						从玄关看过去的客厅和餐厅，右半部是厨房的一角。客厅的设计完全摒弃了传统的中式理念，没有电视北京墙的参与，空间上也不允许，餐厅与客厅没有明显的区分界线却也能一目了然。
					</div> -->
				</div>
			</div>
			<div class="right-bac">
				<div class="block">
					<div class="title">相关攻略</div>
					<div class="rec-wp">
						<div class="rec-item" v-for="rec in recList">
							<img :src="rec.coverImg">
							<div class="text-wp">
								<div class="title-wp">
									<div class="text-title">{{rec.title}}</div>
									<div class="thumb" v-if="rec.recShow">推荐</div>
								</div>
								<div class="text">
									{{rec.text}}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderNew from "@/components/HeaderNew"

export default{
	name: "Plans",
	components: {
		HeaderNew
	},
	data() {
		return{
			recList: [{
			title: '推荐文章推荐文章推荐文章推荐文章',
			text: '文章说明文章说明文章说明文章说明文章说明文章说明',
			recShow: true,
			coverImg: '/static/diary/cover.png'
		},{
			title: '推荐文章推荐文章推荐文章推荐文章',
			text: '文章说明文章说明文章说明文章说明文章说明文章说明',
			recShow: true,
			coverImg: '/static/diary/cover.png'
		},{
			title: '推荐文章推荐文章推荐文章推荐文章',
			text: '文章说明文章说明文章说明文章说明文章说明文章说明',
			recShow: false,
			coverImg: '/static/diary/cover.png'
		},{
			title: '推荐文章推荐文章推荐文章推荐文章',
			text: '文章说明文章说明文章说明文章说明文章说明文章说明',
			recShow: true,
			coverImg: '/static/diary/cover.png'
		},{
			title: '推荐文章推荐文章推荐文章推荐文章',
			text: '文章说明文章说明文章说明文章说明文章说明文章说明',
			recShow: false,
			coverImg: '/static/diary/cover.png'
		},]
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
		document.title = '装修攻略'
	}
}
</script>