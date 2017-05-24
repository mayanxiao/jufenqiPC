<style lang="less">
	.chooser{
		width: 100%;
		border: 1px solid #c3c3c3;
		transition: all 0.5s ease-in-out;
		&>div{
			display: flex;
			position: relative;
			*{
				// width: 8%;
				padding: 0 10px;

				display: block;
				line-height: 44px;
				font-size: 16px;
				text-align: center;
			}
			.chooserDom {
				display: flex;
				flex-wrap: wrap;
				width: 100%;
				padding: 0;
				padding-right: 100px;
				border-top: 1px dashed #f6f6f6;
				transition: all 0.5s ease-in-out;
				overflow: hidden;
				span{
					display: block;
					height: 34px;
					line-height: 34px;
					margin-top: 5px;
					font-size: 14px;
					color: #2d2d2d;
					margin-left: 10px;
					border-radius: 5px;
					cursor: pointer;
				}
				.active {
					background-color: #ff9736;
					color: #fff;
				}
			}
			p{
				background: #ff9736;
				border-top: 1px dashed #fff;
				color: #fff;
				width: 100px;
				transition: all 0.5s ease;
			}
			img{
				width: 24px;
				height: 24px;
				position: absolute;
				top: 10px;
				right: 13px;
				cursor: pointer;
				padding: 0;
				transform: rotate(180deg);
			}
		}
	}
</style>

<template>
<!--  -->
	<div class="chooser" :style="borderNone(chooseId, 0, 10)">
		<div >
			<p :style="lineBorder(chooseId, this.tmpList)">
				{{title}}
			</p>
			<div class="chooserDom" :style="{height: getHeight(this.tmpList)}">
				<span v-for="(space,id) in tmpList" @click="spaceId = id" :class="{'active': id == spaceId}">
					{{space}}
				</span>
			</div>
			<img v-if="isBtn()" src="/static/pressionimgs/arrowup.png" alt="" @click="showHide()">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'chooser',
		props: {
			title: {
				type: String,
				default: ''
			},
			spacesArr: {
				type: Array,
				default: []
			},
			first: {
				type: String,
				default: '10'
			},
			chooseindex: {
				type: Number,
				default: 0
			}
		},
		data () {
			return {
				tmpList: [],
				show: false,
				spaceId: 0
			}
		},
		computed: {
			listNum() {
				return Number(this.first)
			},
			chooseId() {
				return Number(this.chooseindex)
			}
		},
		methods: {
			getHeight(data) {
				let result = 44 * Math.ceil(data.length/this.listNum) + 'px'
				return result
			},
			showHide() {
				this.show = !this.show
				this.changeLength(this.show)
			},
			changeLength(boolean) {
				if (boolean) {
					this.tmpList = this.spacesArr
				} else {
					this.tmpList = this.spacesArr.slice(0, this.listNum)
				}
			},
			isBtn() {
				return this.spacesArr.length > this.listNum
			},
			borderNone(id,bottom,top) {
				let ret = {}
				if (id < top && id > bottom) {
					ret.borderTop = 'none'
				}
				return ret
			},
			lineBorder(id, data) {
				let ret = {}
				if (id == 0) {
					ret.borderTop = 'none'
				}
				ret.lineHeight = 44 * Math.ceil(data.length/this.listNum) + 'px'
				return ret
			}
 		},
		mounted() {
			this.changeLength(false)
			console.log(this.chooseindex)
		}
	}
</script>