<style lang="less" scoped>
@border-big: #999;
@border-lit: #ebebeb;
@main: #ff9736;
.dc-strategy {
	width: 100%;
	background-color: #fff;
}
.bg {
	width: 100%;
	position: relative;
	img {
		display: block;
		width: 100%;
	}
	h3 {
		color: #fff;
		font-size: 42px;
		font-weight: 600;
		text-align: center;
	}
	p {
		color: #fff;
		font-size: 35px;
		text-align: center;
	}
	.text {
		position: absolute;
		text-align: center;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
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
			.diary-img {
				width: 200px;
				height: 130px;
				margin-right: 25px;
				overflow: hidden;
				img {
					display: block;
					width: 100%;
					height: auto;
				}
			}
			.text-wp {
				padding-top: 6px;
				width: 624px;
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
				padding: 18px 15px 0 15px;
				.rec-item {
					display: flex;
					justify-content: space-between;
					width: 100%;
					height: 113px;
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
							white-space: nowrap;
							margin-bottom: 10px;
							color: #333;
							.text-title {
								width: calc(~"100% - 40px");
								overflow: hidden;
								text-overflow: ellipsis;
								height: 20px;
								line-height: 20px;
								cursor: pointer;
								&:hover {
									text-decoration: underline;
								}
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
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
							height: 40px;
							width: 100%;
							// white-space: nowrap;
							overflow: hidden;
						}
					}
				}
			}
		}
	}
}
</style>

<template>
	<div class="dc-strategy">
		<header-new></header-new>
		<div class="bg">
			<img src="/static/case-dc/bg.png">
			<div class="text">
				<h3>家 装 日 记</h3>
				<p>DECORATION DIARY</p>
			</div>
		</div>
		<div class="mainbody">
			<div class="left">
				<div class="diary-item" v-for="(diary, $index) in newDiaryList" :style="setBorder($index)">
					<div class="diary-img"><img :src="diary.imgUrl"></div>
					<div class="text-wp">
						<div class="diary-title" @click="gotoCon(diary.id)">{{diary.title}}</div>
						<div class="item-wp">
							<!-- <div class="item" v-for="(item,id) in diary.itemList" :style="setPadding(id)">
								{{item.name}}
								<div class="line" v-if="lineShow(id, diary.itemList)"></div>
							</div> -->
						</div>
						<div class="comment">
							{{diary.introduction}}
						</div>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="block">
					<div class="title">相关推荐</div>
					<div class="rec-wp">
						<div class="rec-item" v-for="rec in newRecList">
							<img :src="rec.imgUrl">
							<div class="text-wp">
								<div class="title-wp">
									<div class="text-title" @click="gotoCon(rec.id)"><span>{{rec.title}}</span></div>
									<div class="thumb">推荐</div>
								</div>
								<div class="text">
									{{rec.introduction}}
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
import axios from 'axios'
import Conf from '../assets/conf.js'

export default{
	name: "DcDiary",
	components: {
		HeaderNew
	},
	data() {
		return{
			newDiaryList: [],
			newRecList: []
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
			if (id == this.newDiaryList.length - 1) {
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
		gotoCon(id) {
			this.$router.push(`/plans?artId=${id}`)
		},
		getStrategy() {
			axios.get('http://wx.jufenqi.com:8080/content/api/articles', {
				params: {
					filter: `enabled:true`,
					size: 100,
					sort: 'createdAt,DESC'
				}
			}).then((res) => {
				let arr = res.data.data
				let arr1 = [], arr2 = []
				arr.map((e, id) => {
					let content = JSON.parse(e.contentDelta)
					let imgList = []
					content.ops.map((l) => {
						if (l.insert.image) {
							imgList.push(l.insert.image)
						}
					})
					if (e.type == 0) {
						this.newDiaryList.push({
							id: e.id,
							title: e.title,
							introduction: e.introduction,
							imgUrl: imgList[0],
						})
					}
					if (e.type == 1) {
						arr2.push({
							id: e.id,
							title: e.title,
							introduction: e.introduction,
							imgUrl: imgList[0],
						})
						this.newRecList = arr2.slice(0, 4)
					}
				})
			}).catch((err) => {
				console.log(err)
				throw err
			})
		},
	},
	mounted(){
		document.title = '家装日记'
		window.scrollTop = 0
		this.getStrategy()
	}
}

</script>