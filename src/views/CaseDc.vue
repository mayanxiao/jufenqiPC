<style lang="less" scoped>
@border-big: #999;
@border-lit: #ebebeb;
@main: #ff9736;
@border-el: #bfcbd9;
.white-back {
	background-color: #fff;
	padding-top: 20px;
}
.case-dc {
	width: 1230px;
	margin: 0 auto;
	.choose-wrapper {
		width: 100%;
	}
	.flex-pic-wrapper {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding-top: 20px;
		.pic-item {
			width: 396px;
			margin: 0 21px 20px 0;
			height: 335px;
			overflow: hidden;
			border: 1px solid @border-lit;
			&:hover .pic-wrapper img{
				transform: scale(1.05);
			}
			.pic-wrapper {
				width: 100%;
				height: 257px;
				overflow: hidden;
				img {
					width: 100%;
					height: 100%;
					display: block;
					transition: all 3s ease;
					cursor: pointer;
				}
			}
			.title-wrapper {
				width: 100%;
				height: 78px;
				padding-top: 15px;
				padding-left: 15px;
				.title-text {
					font-size: 18px;
					margin-bottom: 6px;
					color: #666;
					cursor: pointer;
					&:hover {
						color: @main;
					}
				}
				.title-tip {
					display: flex;
					.tip-item {
						padding-right: 30px;
						display: flex;
						color: #d9d9d9;
						.tip-icon {
							width: 16px;
							height: 13px;
							margin-right: 2px;
						}
						.tip-text {
							font-size: 14px;
							cursor: pointer;
							&:hover {
								color: @main;
							}
						}
					}
				}
			}
		}
	}
}
</style>

<template>
	<div class="white-back">
		<div class="case-dc">
			<div class="choose-wrapper">
				<chooser :title="tab.title" :spacesArr="tab.list" first="14" :chooseindex="id" v-for="(tab, id) in tabList"></chooser>
			</div>
			<div class="flex-pic-wrapper">
				<div class="pic-item" v-for="(item, $index) in picList" :style="clearMargin($index + 1)">
					<div class="pic-wrapper">
						<img :src="item.imgUrl" @click="goto('/case-info')">
					</div>
					<div class="title-wrapper">
						<div class="title-text" @click="goto('/case-info')">{{item.title}}</div>
						<div class="title-tip">
							<div class="tip-item">
								<div class="tip-icon" v-if="!item.viewShow">
									<img src="/static/case-dc/view/view.png">
								</div>
								<div class="tip-icon" v-if="item.viewShow">
									<img src="/static/case-dc/view/view-act.png">
								</div>
								<div class="tip-text" @mouseenter="changeShow(0, $index)" @mouseleave="changeShow(0, $index)">浏览（{{item.view}}）</div>
							</div>
							<div class="tip-item">
								<div class="tip-icon" v-if="!item.commentShow">
									<img src="/static/case-dc/comment/comment.png">
								</div>
								<div class="tip-icon" v-if="item.commentShow">
									<img src="/static/case-dc/comment/comment-act.png">
								</div>
								<div class="tip-text" @mouseenter="changeShow(1, $index)" @mouseleave="changeShow(1, $index)">评论（{{item.comment}}）</div>
							</div>
							<div class="tip-item">
								<div class="tip-icon" style="cursor: pointer" v-if="!item.collectShow">
									<img src="/static/case-dc/collect/collect.png">
								</div>
								<div class="tip-icon" style="cursor: pointer" v-if="item.collectShow">
									<img src="/static/case-dc/collect/collect-act.png">
								</div>
								<div class="tip-text" @click="changeShow(2, $index)">收藏（{{item.collect}}）</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Chooser from '@/components/Chooser'

export default{
	name: "Plans",
	components: {
		Chooser
	},
	data() {
		return{
			tabList: [{
				title: '房屋',
				list: ['新房','旧房']
			},{
				title: '面积',
				list: ['60㎡以下', '60-90㎡', '90-120㎡', '120-150㎡', '200㎡以上']
			},{
				title: '户型',
				list: ['一室一厅', '两室一厅', '两室两厅', '三室一厅', '三室两厅', '四室两厅', '四室三厅']
			},{
				title: '风格',
				list: ['现代','中式','美式','新古典','现代','中式','美式','新古典','现代','中式','美式','新古典',]
			},{
				title: '花费',
				list: ['5万元以下','5-8万元','8-12万元','12-16万元','16-20万元','20-25万元','25-30万元','30-35万元','35-40万元','40万元以上']
			}],
			picList: [{
				imgUrl: 'https://source.unsplash.com/random',
				title: '某小区别墅装修',
				view: 24,
				comment: 35,
				collect: 49,
				viewShow: false,
				commentShow: false,
				collectShow: false
			},{
				imgUrl: 'https://source.unsplash.com/random',
				title: '某小区别墅装修',
				view: 24,
				comment: 35,
				collect: 49,
				viewShow: false,
				commentShow: false,
				collectShow: false
			},{
				imgUrl: 'https://source.unsplash.com/random',
				title: '某小区别墅装修',
				view: 24,
				comment: 35,
				collect: 49,
				viewShow: false,
				commentShow: false,
				collectShow: false
			},{
				imgUrl: 'https://source.unsplash.com/random',
				title: '某小区别墅装修',
				view: 24,
				comment: 35,
				collect: 49,
				viewShow: false,
				commentShow: false,
				collectShow: false
			},{
				imgUrl: 'https://source.unsplash.com/random',
				title: '某小区别墅装修',
				view: 24,
				comment: 35,
				collect: 49,
				viewShow: false,
				commentShow: false,
				collectShow: false
			},{
				imgUrl: 'https://source.unsplash.com/random',
				title: '某小区别墅装修',
				view: 24,
				comment: 35,
				collect: 49,
				viewShow: false,
				commentShow: false,
				collectShow: false
			},],
			
		}
	},
	methods: {
		clearMargin(id) {
			let ret = {}
			if (id%3 == 0) {
				ret.marginRight = 0
			}
			return ret
		},
		changeShow(type, id) {
			switch (type) {
				case 0:
					this.picList[id].viewShow = !this.picList[id].viewShow
					break
				case 1:
					this.picList[id].commentShow = !this.picList[id].commentShow
					break
				case 2:
					this.picList[id].collectShow = !this.picList[id].collectShow
					break
			}
		},
		goto(url) {
			this.$router.push(url)
		}
	},
	mounted(){
		document.title = '装修案例'
	}
}
</script>