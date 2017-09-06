<style lang="less" scoped>
@border-big: #999;
@border-lit: #ebebeb;
@main: #ff9736;
.dc-diary {
	width: 100%;
	background-color: #fff;
}
.mainbody {
	display: flex;
	width: 1238px;
	margin: 0 auto;
	padding-top: 86px;
	justify-content: space-between;
	.left {
		width: 849px;
		padding-bottom: 122px;
		.diary-item {
			display: flex;
			width: 100%;
			height: 162px;
			margin-bottom: 38px;
			border-bottom: 1px solid #ddd;
			img {
				display: block;
				width: 60px;
				height: 60px;
				margin-right: 25px;
			}
			.text-wp {
				padding-top: 6px;
				width: 764px;
				.diary-title {
					font-size: 18px;
					color: #333;
					cursor: pointer;
					margin-bottom: 10px;
					width: fit-content;
					&:hover {
						text-decoration: underline;
					}
				}
				.item-wp {
					display: flex;
					margin-bottom: 24px;
					.item {
						position: relative;
						padding: 0 19px;
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
				.comment {
					font-size: 14px;
					color: #666;
				}
			}
		}
	}
	.right {
		width: 337px;
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
			margin-top: 28px;
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
}
</style>

<template>
	<div class="dc-diary">
		<header-new></header-new>
		<div class="mainbody">
			<div class="left">
				<div class="diary-item" v-for="(diary, $index) in diaryList" :style="setBorder($index)">
					<img :src="diary.avatar">
					<div class="text-wp">
						<div class="diary-title" @click="goto('/plans')">{{diary.title}}</div>
						<div class="item-wp">
							<div class="item" v-for="(item,id) in diary.itemList" :style="setPadding(id)">
								{{item.name}}
								<div class="line" v-if="lineShow(id, diary.itemList)"></div>
							</div>
						</div>
						<div class="comment">
							{{diary.comment}}
						</div>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="btn">写装修日记</div>
				<div class="block">
					<div class="title">热门日记</div>
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
import HeaderNew from '@/components/HeaderNew'

export default{
	name: "DcDiary",
	components: {
		HeaderNew
	},
	data() {
		return{
			diaryList: [{
				title: '40㎡ 小猪窝自装',
				avatar: '/static/diary/avatar.png',
				itemList: [{
					name: '北京市',
				},{
					name: '55㎡',
				},{
					name: '简约',
				},{
					name: '半包',
				},],
				comment: '日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介'
			},{
				title: '40㎡ 小猪窝自装',
				avatar: '/static/diary/avatar.png',
				itemList: [{
					name: '北京市',
				},{
					name: '55㎡',
				},{
					name: '简约',
				},{
					name: '半包',
				},],
				comment: '日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介'
			},{
				title: '40㎡ 小猪窝自装',
				avatar: '/static/diary/avatar.png',
				itemList: [{
					name: '北京市',
				},{
					name: '55㎡',
				},{
					name: '简约',
				},{
					name: '半包',
				},],
				comment: '日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介'
			},{
				title: '40㎡ 小猪窝自装',
				avatar: '/static/diary/avatar.png',
				itemList: [{
					name: '北京市',
				},{
					name: '55㎡',
				},{
					name: '简约',
				},{
					name: '半包',
				},],
				comment: '日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介日记简介'
			},],
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
		setPadding(id) {
			let ret = {}
			if (id == 0) {
				ret.paddingLeft = 0
			} 
			return ret
		},
		setBorder(id) {
			let ret = {}
			if (id == this.diaryList.length - 1) {
				ret.border = 'none'
			} 
			return ret
		},
		lineShow(id, arr) {
			if (id < arr.length - 1) {
				return true
			}
			return false
		},
		goto(url) {
			if (url) {
				this.$router.push(url)
			}
		},
	},
	mounted(){
		document.title = '家装日记'
	}
}
</script>