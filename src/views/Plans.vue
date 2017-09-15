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
		.content {
			width: 100%;
			padding-bottom: 50px;
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
	
</style>
<style>
.content p {
	font-size: 14px;
	text-indent: 28px;
	width: 100%;
	color: #666;
}
.content p img {
	width: 50%;
	margin: 0 auto;
	display: block;
}
.content h4 {
	text-align: center;
	color: #333;
}
</style>

<template>
	<div class="white-back">
		<header-new></header-new>
		<div class="plans">
			<div class="left-bac">
				<div class="art_title">{{artTitle}}</div>
				<div class="content" v-html="artHtml"></div>
			</div>
			<div class="right-bac">
				<div class="block">
					<div class="title">相关推荐</div>
					<div class="rec-wp">
						<div class="rec-item" v-for="rec in recList">
							<img :src="rec.imgUrl">
							<div class="text-wp">
								<div class="title-wp">
									<div class="text-title" @click="getCon(rec.id)">{{rec.title}}</div>
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
import HeaderNew from "@/components/HeaderNew"
import axios from 'axios'

export default{
	name: "Plans",
	components: {
		HeaderNew,
	},
	data() {
		return{
			recList: [],
			artId: Number(this.getRequest().artId),
			artHtml: '',
			artTitle: '',
		}
	},
	props: {
		
	},
	methods: {
		getRequest() {
			let url = window.location.hash
			let theRequest = {}
			if (url.indexOf('?') !== -1) {
				let strs = url.split("?")[1].split('&')
				for (let str of strs) {
					theRequest[str.split('=')[0]] = decodeURIComponent(str.split('=')[1])
				}
			}
			return theRequest
		},
		getCon(id) {
			axios.get(`http://wx.jufenqi.com:8080/content/api/articles/${id}`).then((res) => {
				this.artHtml = res.data.data.contentHtml
				this.artTitle = res.data.data.title
			}).catch((err) => {
				console.log(err)
				throw err
			})
		},
		getArticle() {
			axios.get('http://wx.jufenqi.com:8080/content/api/articles', {
				params: {
					filter: `enabled:true`,
					size: 5,
					sort: 'createdAt,DESC'
				}
			}).then((res) => {
				let arr = res.data.data
				arr.map((e, id) => {
					let content = JSON.parse(e.contentDelta)
					let imgList = []
					content.ops.map((l) => {
						if (l.insert.image) {
							imgList.push(l.insert.image)
						}
					})
					if (e.id != this.artId) {
						this.recList.push({
							id: e.id,
							title: e.title,
							introduction: e.introduction,
							imgUrl: imgList[0],
						})
					}
				})
				document.body.scrollTop = 0
			}).catch((err) => {
				console.log(err)
				throw err
			})
		},
	},
	mounted(){
		document.title = '装修攻略'
		document.body.scrollTop = 0
		this.getCon(this.artId)
		this.getArticle()
	}
}
</script>