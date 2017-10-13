<style lang="less" scoped>
@border-big: #999;
@border-lit: #ebebeb;
@main: #ff9736;
@border-el: #bfcbd9;
.case-dc {
	width: 100%;

	.img-wp {
		width: 100%;
		position: relative;
		img {
			display: block;
			width: 100%;
		}
	}

	.text-wp {
		color: #fff;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		.title {
			font-size: 50px;
			margin-bottom: 9px;
			font-weight: 600;
		}
		.text {
			font-size: 30px;
			margin-bottom: 5px;
			font-weight: 600;
		}
	}

	.content {
		width: 100%;
		background-color: #fff;
		padding-top: 131px;
		padding-bottom: 178px;
		position: relative;
		.style-list {
			display: flex;
			width: 942px;
			position: absolute;
			top: -33px;
			left: 50%;
			transform: translateX(-50%);
			background-color: #fff;
			.style-item {
				width: 10%;
				height: 60px;
				line-height: 60px;
				text-align: center;
				font-size: 14px;
				color: #666;
				border-bottom: 1px solid #eee;
				border-right: 1px solid #eee;
				cursor: pointer;
				&:hover {
					color: @main;
				}
			}
			.active {
				color: @main;
			}
		}
		.mainbody {
			width: 1238px;
			margin: 0 auto;
			text-align: center;
			.style-title {
				font-size: 24px;
				color: #333;
				font-weight: 600;
			}
			.style-text {
				width: 737px;
				margin: 34px auto 140px auto;
				text-align: center;
				font-size: 14px;
				color: #666;
			}
		}
	}
}
</style>

<template>
	<div class="case-dc">
		<header-new></header-new>
		<div class="img-wp">
			<img src="/static/case-dc/bg.png">
			<div class="text-wp" :style="setLeft()">
				<p class="title">配定生活方式的家居平台</p>
				<p class="text">根据客户家庭成员的性格、喜好、工作定制家居风格</p>
				<p class="text">管家式追踪贯彻各个流程</p>
			</div>
		</div>
		<div class="content">
			<div class="style-list">
				<div class="style-item" :class="{'active': $index == tabIndex}" v-for="(item, $index) in tabList" :style="setBorder($index)" @click="getDecStyleId(item.id, $index)">{{item.name}}</div>
			</div>
			<div class="mainbody">
				<p class="style-title">{{itemDisc.name}}</p>
				<div class="style-text">{{itemDisc.disc}}</div>
				<div class="layout-wp"></div>
				<case-item v-for="(room, id) in itemDisc.itemList" :key="id" :data="room" :id="id" :flexcontent="setDirection(id)"></case-item>
			</div>
		</div>
	</div>
</template>

<script>
import CaseItem from '@/components/CaseItem'
import HeaderNew from '@/components/HeaderNew'
import axios from 'axios'
import Conf from '../assets/conf.js'

export default{
	components: {
		CaseItem,
		HeaderNew
	},
	data() {
		return{
			SrceenWidth: document.body.clientWidth,
			tabList: [],
			itemDisc: {
				name: '',
				disc: '',
				itemList: [],
			},
			tabIndex: 0
		}
	},
	methods: {
		goto(url) {
			this.$router.push(url)
		},
		setLeft() {
			let ret = {}
			ret.left = (this.SrceenWidth - 1238)/2 + 'px'
			if (ret.left < 0) {
				ret.left = 0
			}
			return ret
		},
		setBorder(id) {
			let ret = {}
			if (id == 0) {
				ret.borderLeft = '1px solid #eee';
			}
			return ret
		},
		setDirection(id) {
			let result = ''
			if (id % 2 == 0) {
				result = 'left'
			} else {
				result = 'right'
			}
			return result
		},
		getDecStyle() {
			axios.get(`http://wx.jufenqi.com:8080/content/api/decoration-styles`).then((res) => {
				res.data.data.map((e) => {
					this.tabList.push({
						id: e.id,
						name: e.name
					})
				})
				this.itemDisc.name = res.data.data[0].name
				this.itemDisc.disc = res.data.data[0].description
				res.data.data[0].decorationComponents.map((e) => {
					// if (e.enabled) {
						this.itemDisc.itemList.push({
							id: e.id,
							name: e.name,
							disc: e.description,
							url: Conf.imgUrl + e.componentImg
						})
					// }
				})
			}).catch((err) => {
				console.log(err)
				throw err
			})
		},
		getDecStyleId(id, tab) {
			this.tabIndex = tab
			this.itemDisc.itemList = []
			axios.get(`http://wx.jufenqi.com:8080/content/api/decoration-styles/${id}`).then((res) => {
				// console.log(res.data.data)
				this.itemDisc.name = res.data.data.name
				this.itemDisc.disc = res.data.data.description
				res.data.data.decorationComponents.map((e) => {
					this.itemDisc.itemList.push({
						id: e.id,
						name: e.name,
						disc: e.description,
						url: Conf.imgUrl + e.componentImg
					})
				})
				console.log(this.itemDisc)
			}).catch((err) => {
				console.log(err)
				throw err
			})
		}
	},
	mounted(){
		document.title = '装修案例'
		document.body.scrollTop = 0
		this.getDecStyle()
	}
}
</script>