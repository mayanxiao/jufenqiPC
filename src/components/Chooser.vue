<style lang="less">
	.chooser{
		width: 1231px;
		border: 1px solid #c3c3c3;
		transition: all 0.5s ease;
		&>div{
			display: flex;
			position: relative;
			*{
				width: 88px;
				display: block;
				line-height: 44px;
				font-size: 16px;
				padding-left: 21px;
			}
			.chooserDom {
				display: flex;
				flex-wrap: wrap;
				width: 100%;
				padding: 0;
				padding-right: 100px;
				border-top: 1px dashed #f6f6f6;
				transition: all 0.5s ease;
				span{
					width: 88px;
					display: block;
					height: 44px;
					line-height: 44px;
					font-size: 14px;
					color: #2d2d2d;
					padding-left: 30px;
				}
			}
			p{
				background: #ffb400;
				border-top: 1px dashed #fff;
				color: #fff;
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
		&:nth-child(1){
			&>p{
				border: none;
			}
			&>div{
				border: none;
			}
		}
	}
</style>

<template>
<!--  -->
	<div class="chooser">
		<div >
			<p>
				{{title}}
			</p>
			<div class="chooserDom" :style="{height: getHeight(this.tmpList)}">
				<span v-for="space in tmpList">
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
				dafault: []
			}
		},
		data () {
			return {
				tmpList: [],
				show: false
			}
		},

		methods: {
			getHeight(data) {
				let result = 44 * Math.ceil(data.length/11) + 'px'
				console.log(result)
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
					this.tmpList = this.spacesArr.slice(0, 11)
				}
			},
			isBtn() {
				return this.spacesArr.length > 11
			}
		},
		mounted() {
			this.changeLength(false)
		}
	}
</script>