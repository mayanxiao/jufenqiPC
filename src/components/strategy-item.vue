<style lang="less" scoped>
@border-big: #999;
@border-lit: #ebebeb;
@main: #ff9736;
@border-el: #bfcbd9;
.strategy-item {
	position: relative;
	.text {
		display: flex;
		font-size: 18px;
		color: #2d2d2d;
		margin-bottom: 10px;
		.thumb {
			width: 2px;
			height: 16px;
			margin-top: 5px;
			margin-left: 10px;
			background-color: @main;
		}
	}
	.flex-wrapper {
		display: flex;
		margin-bottom: 20px;
		.flex-item {
			height: 300px;
			position: relative;
			background-color: #000;
			.item-title {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				z-index: 100;
				font-size: 26px;
				font-weight: bold;
				width: 100%;
				text-align: center;
				color: #fff;
			}
			.img-wrapper {
				position: absolute;
				width: 100%;
				height: 100%;
				z-index: 99;
				img {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
		}
	}
	.more {
		width: 80px;
		height: 20px;
		line-height: 20px;
		text-align: center;
		background-color: @main;
		color: #fff;
		position: absolute;
		top: 0;
		right: 0;
		font-size: 13px;
		border-radius: 3px;
	}
}
</style>

<template>
	<div class="strategy-item">
		<div class="text">
			{{title}}
			<div class="thumb"></div>
		</div>
		<div class="flex-wrapper">
			<div class="flex-item" :style="setStyle(id+1)" v-for="(item, id) in dataA">
				<div class="img-wrapper"><img :src="item.imgUrl"></div>
				<div class="item-title">{{item.title}}</div>
			</div>
		</div>
		<div class="flex-wrapper">
			<div class="flex-item" :style="setStyle(id+4)" v-for="(item, id) in dataB">
				<div class="img-wrapper"><img :src="item.imgUrl"></div>
				<div class="item-title">{{item.title}}</div>
			</div>
		</div>
		<div class="more">更多评测 >> </div>
	</div>
</template>

<script>

export default{
	name: "strategy-item",
	components: {
	},
	data() {
		return{
			dataA: [],
			dataB: []
		}
	},
	props: {
		title: {
			type: String,
			default: '专题'
		},
		itemData: {
			type: Array,
			default() {
				return []
			}
		}
	},
	methods: {
		setStyle(id) {
			let ret = {}
			switch (id) {
				case 1: 
					ret.width = '590px'
					ret.marginRight = '20px'
					break
				case 2: 
					ret.width = '300px'
					ret.marginRight = '20px'
					break
				case 3: 
					ret.width = '300px'
					break
				case 4:
				case 5: 
					ret.width = '397px'
					ret.marginRight = '20px'
					break
				case 6: 
					ret.width = '396px'
					break
			}
			return ret
		}
	},
	mounted(){
		if (this.itemData.length !== 0) {
			this.dataA = this.itemData.slice(0, 3)
			this.dataB = this.itemData.slice(3, 6)
			console.log(this.dataA, this.dataB)
		}
	}
}
</script>