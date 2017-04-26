<style scoped>
	.dry-goods{
		min-width: 1220px;
		margin: 0 auto;
		padding-top: 20px;
	}
	.head-bac{
		width: 1000px;
		border: 1px solid #ccc;
		background: #ddd;
		height: 300px;
		margin: 0 auto;
		padding: 20px;
		position: relative;
	}
	.head-title{
		font-size: 25px;
		font-weight: bold;
	}
	.head-btn-check{
		height: 40px;
		width: 150px;
		line-height: 40px;
		position: absolute;
		top: 40px;
		right: 40px;
		border: 1px solid #333;
		text-align: center;
		cursor: pointer;
	}
	.head-bac img{
		display: inline-block;
		height: 200px;
		width: 200px;
		border-radius: 50%;
		margin: 11px 40px;
	}
	.head-body{
		height: 222px;
		overflow: hidden;
		display: inline-block;
		width: 670px;
	}
	.head-body p:nth-child(1){
		font-size: 20px;
		font-weight: bold;
		margin-bottom: 20px;
	}
	.head-body p:nth-child(2){
		font-size: 14px;
		margin-bottom: 10px;
	}
	.head-body p:nth-child(3){
		font-size: 12px;
		color: #777;
	}
</style>

<template>
	<div class="dry-goods">
		<div class="head-bac">
			<p class="head-title">
				装修攻略
			</p>
			<img src="../assets/7.jpg">
			<p class="head-btn-check">
				查看攻略
			</p>
			<div class="head-body">
				<p>
					准备阶段
				</p>
				<p>
					角色：
					<span>
						业主、量房员
					</span>
				</p>
				<p>
					介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
				</p>
			</div>
		</div>
		<j-rank-list v-for="rank in ranks" :data="rank" :imgArr="rank.rankImgs"></j-rank-list>
	</div>
</template>

<script type="text/javascript">
	import JRankList from "../components/JRankList"
	export default{
		name: "dryGoods",
		components: {
			JRankList
		},
		data() {
			return{
				ranks: [{
					rankName: "品牌排行榜",
					rankMore: "更多排行",
					rankImgs: [{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					},{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					},{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					},{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					},{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					},{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					}]
				},{
					rankName: "品牌排行榜",
					rankMore: "更多排行",
					rankImgs: [{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					},{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					},{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					},{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					},{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					},{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					}]
				},{
					rankName: "品牌排行榜",
					rankMore: "更多排行",
					rankImgs: [{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					},{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					},{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					},{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					},{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					},{
						title: "最具性价比装修公司排行",
						url: "/static/imgs/1.jpg"
					}]
				}]
			}
		},
		methods: {

		},
		mounted(){

		}
	}
</script>