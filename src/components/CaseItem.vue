<style lang="less">
	.case-item{
		display: flex;
		width: 100%;
		margin-top: 169px;
		img {
			width: 622px;
			height: 417px;
			display: block;
		}
		.text-wp {
			position: relative;
			width: 616px;
			height: 417px;
			.text {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				.room-title {
					font-size: 24px;
					color: #333;
					font-weight: 600;
					margin-bottom: 34px;
				}
				.room-text {
					width: 352px;
					font-size: 14px;
					color: #666;
				}
			}
		}
	}
</style>

<template>
	<div class="case-item" :style="setContent(flexcontent, itemId)">
		<img :src="data.url">
		<div class="text-wp">
			<div class="text" :style='setPosition(flexcontent)'>
				<p class="room-title">{{data.name}}</p>
				<p class="room-text">{{data.disc}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'case-item',
		props: {
			flexcontent: {
				type: String,
				default: 'left'
			},
			itemId: {
				type: Number,
				default: 0
			},
			data: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data () {
			return {
				tmpList: [],
				show: false,
				spaceId: 0
			}
		},
		methods: {
			setContent(str, id) {
				let ret = {}
				if (str == 'left') {
					ret.flexDirection = 'row'
					ret.textAlign = 'left'
				} else if (str == 'right'){
					ret.flexDirection = 'row-reverse'
					ret.textAlign = 'right'
				}
				if (id > 0) {
					ret.marginTop = '169px'
				}
				return ret
			},
			setPosition(str) {
				let ret = {}
				if (str == 'left') {
					ret.left = '75px'
				} else if (str == 'right') {
					ret.right = '75px'
				}
				return ret
			}
 		},
		mounted() {
		}
	}
</script>