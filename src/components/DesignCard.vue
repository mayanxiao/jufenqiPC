<style lang="less" scoped>
@main: #f3a944;
@border: #ebebeb;
.design-card {
	width: 292px;
	height: 292px;
	border: 1px solid @border;
	margin: 0 20px 20px 0;
	cursor: pointer;
	transition: box-shadow 0.4s ease;
	&:hover {
		box-shadow: 2px 2px 2px #ccc;
		border: none;
	}
	.img-wrapper {
		width: 100%;
		height: 200px;
		overflow: hidden;
		.img-url {
			width: 100%;
			height: 100%;
			background-size: 100% 100%;
			transition: all 0.3s ease;
		}
		&:hover .img-url {
			transform: scale(1.2);
		}
	}
	.con-wrapper {
		padding: 10px;
		color: #666;
		.con-title {
			font-size: 14px;
		}
		.con-intro {
			display: flex;
			justify-content: space-between;
			width: 224px;
			font-size: 12px;
			margin: 6px 0;
			.item-sp {
				color: @main;
			}
		}
		.con-logo {
			display: flex;
			font-size: 12px;
			.logo {
				width: 60px;
				height: 20px;
				margin-right: 20px;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}

	}
}


</style>

<template>
	<div class="design-card" :style="isForth(sample.id)">
		<div class="img-wrapper">
			<div class="img-url" :style="backgroundImg(sample.imgUrl)"></div>
		</div>
		<div class="con-wrapper">
			<div class="con-title">{{sample.community}}</div>
			<div class="con-intro">
				<div class="item-sp">{{priceDcMethods(sample.price, sample.dcMethod)}}</div>
				<div class="item">{{sample.house}}</div>
				<div class="item" style="line-height: 20px">{{getTime(sample.time)}}</div>
			</div>
			<div class="con-logo">
				<div class="logo"><img :src="sample.logo"></div>
				<div class="company">{{sample.company}}</div>
			</div>

		</div>
	</div>
</template>

<script>
export default{
	name: "DesignCard",
	props: {
		sample: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	data() {
		return{
			dcMethods: ['清包', '半包', '全包']
		}
	},
	methods: {
		backgroundImg(img) {
			let ret = {}
			ret.backgroundImage = `url(${img})`
			return ret
		},
		findDc(id) {
			return this.dcMethods[id]
		},
		priceDcMethods(a, b) {
			return a + '元/' + this.findDc(b)
		},
		getTime(timeStamp) {
			var d = new Date(timeStamp * 1000)
			var Y = d.getFullYear() + '-'
			var M = (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + '-'
			var D = (d.getDate() < 10 ? '0' + (d.getDate()) : d.getDate())
			return Y + M + D
		},
		isForth(id) {
			let ret = {}
			if (id%3 === 0&& id > 0) {
				ret.marginRight = 0
			}
			return ret
		}
 	}

}
</script>