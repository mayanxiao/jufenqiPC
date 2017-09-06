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
			top: -45px;
			left: 50%;
			transform: translateX(-50%);
			background-color: #fff;
			.style-item {
				width: 157px;
				height: 89px;
				line-height: 89px;
				text-align: center;
				font-size: 18px;
				color: #666;
				border-bottom: 1px solid #eee;
				border-right: 1px solid #eee;
				cursor: pointer;
				&:hover {
					color: @main;
				}
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
				<div class="style-item" v-for="(item, $index) in styleList" :style="setBorder($index)">{{item.name}}</div>
			</div>
			<div class="mainbody">
				<p class="style-title">风格标题</p>
				<div class="style-text">
					风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述<br/>风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述风格描述
				</div>
				<case-item v-for="(room, id) in roomList" :key="id" :data="room" :id="id" :flexcontent="setDirection(id)"></case-item>
			</div>
		</div>
	</div>
</template>

<script>
import CaseItem from '@/components/CaseItem'
import HeaderNew from '@/components/HeaderNew'

export default{
	components: {
		CaseItem,
		HeaderNew
	},
	data() {
		return{
			SrceenWidth: document.body.clientWidth,
			styleList: [{
				name: '时尚现代',
				id: 0,
			},{
				name: '新中式',
				id: 1
			},{
				name: '北欧现代',
				id: 2
			},{
				name: '北欧新竹',
				id: 3
			},{
				name: '现代八',
				id: 4
			},{
				name: '台湾温暖',
				id: 5
			},],
			roomList: [{
				name: '客厅',
				disc: '房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说',
				url: '/static/case-dc/case-0.png'
			},{
				name: '卧室',
				disc: '房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说',
				url: '/static/case-dc/case-1.png'
			},{
				name: '厨房',
				disc: '房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说',
				url: '/static/case-dc/case-2.png'
			},{
				name: '卫生间',
				disc: '房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说房间风格解说',
				url: '/static/case-dc/case-3.png'
			},]
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
		}
	},
	mounted(){
		document.title = '装修案例'
	}
}
</script>