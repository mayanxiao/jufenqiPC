<style scoped>
	.j-rank-list{
		width: 1000px;
		margin: 0 auto;
		margin-top: 40px;
	}
	.title{
		font-size: 20px;
		font-weight: bold;
		height: 30px;
		line-height: 30px;
		position: relative;
	}
	.title span{
		float: right;
		font-size: 14px;
		display: block;
		height: 30px;
		line-height: 30px;
		color: #999;
		cursor: pointer;
	}
	.imgs{
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;
		width: 100%;
		justify-content: space-between
	}
	.imgs img{
		height: 230px;
		display: block;
		margin-bottom: 30px;
	}
</style>

<template>
	<div class="j-rank-list">
		<p class="title">
			{{rank.rankName}}
			<span>
				{{rank.rankMore}}
			</span>
		</p>
		<div class="imgs">
			<img v-for="img in rankImgs" :src="img.url">
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name: "JRankList",
		components: {

		},
		data() {
			return{

			}
		},
		props: {
			data: {
				type: Object,
				default() {
					return {}
				}
			},
			imgArr: {
				type: Array,
				default() {
					return []
				}
			}
		},
		methods: {

		},
		computed:{
			rank() {
				return this.data
			},
			rankImgs() {
				return this.imgArr
			}
		},
		mounted(){

		}
	}
</script>