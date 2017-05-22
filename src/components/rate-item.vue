<style lang="less" scoped>
@main: #ff9736;
@border: #ccc;

.rate-item {
	display: flex;
	width: 100%;
	height: 26px;
	margin-bottom: 3px;
	.label {
		width: 80px;
		height: 26px;
		text-align: left;
		line-height: 26px;
		margin-right: 10px;
		font-size: 14px;
	}
	.rate-wrapper {
		width: 225px;
		height: 16px;
		margin: 5px 0;
		border: 1px solid #f5f5f5;
		border-right: none;
		display: flex;
		.item {
			border-right: 1px solid #f5f5f5;
			width: 20%;
			height: 14px;
			color: #393939;
			text-align: center;
			line-height: 14px;
			font-size: 12px;
		}
	}
	.result {
		width: 60px;
		height: 26px;
		line-height: 26px;
		text-align: center;
		font-size: 12px;
		margin-left: 20px;
	}
}

</style>

<template>
	<div class="rate-item">
		<div class="label">{{title}}</div>	
		<div class="rate-wrapper">
			<div class="item" v-for="n in 5" :style="getBack(score, n)">{{n}}</div>
		</div>
		<div class="result">{{findResult(score)}}</div>
	</div>
</template>

<script>
export default{
	name: "rate-item",
	props: {
		title: {
			type: String,
			default: ''
		},
		count: {
			type: String,
			dafault: "0"
		},
	},
	data() {
		return{
			results: ['不满意','不太满意','一般满意','很满意','满意到流泪'],
			background: ['#ebebeb', '#F7BA2A', '#ff9736']
		}
	},
	methods: {
		findResult(id) {
			return this.results[id]
		},
		getBack(rate, id) {
			let ret = {}
			if (id <= (rate + 1)) {
			switch (rate) {
					case 0:
						ret.backgroundColor = '#ccc';
						break
					case 1:
					case 2:
						ret.backgroundColor = '#F7BA2A';
						break
					case 3:
					case 4:
						ret.backgroundColor = '#ff9736'
				}
			}
			return ret
		},
 	},
 	computed: {
 		score() {
 			return Number(this.count) - 1
 		}
 	},
	mounted(){
	}
}
</script>