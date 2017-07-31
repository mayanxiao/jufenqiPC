<style lang="less">
	.impression{
		width: 1231px;
		padding-top: 20px;
		margin: 0 auto;
	}
	.impre-pics{
		margin-top: 30px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		&>div{
			flex-shrink: 0;
			height: 390px;
			width: 390px;
			position: relative;
			margin-bottom: 30px;
			cursor: pointer;
			&:hover{
				div{
					display: block;
				}
			}
			img{
				width: 100%;
				height: 100%;
				display: block;
			}
			p{
				position: absolute;
				bottom: 0;
				left: 0;
				height: 50px;
				line-height: 50px;
				padding-left: 20px;
				font-size: 16px;
				color: #2d2d2d;
				background: #f5f5f5;
				width: 100%;
			}
			div{
				height: 340px;
				width: 390px;
				line-height: 340px;
				text-align: center;
				font-size: 24px;
				font-weight: bold;
				color: #fff;
				background: rgba(0,0,0,0.5);
				position: absolute;
				top: 0;
				left: 0;
				display: none;
				cursor: pointer;
			}
		}
	}
</style>

<template>
	<div class="impression">
		<div v-for="(space,spid) in spaceData">
			<chooser title="空间" :spacesArr="space" first="12" :chooseindex="spid"></chooser>
		</div>
		
		<div class="impre-pics">
			<div v-for="impression in impressions">
				<img :src="impression.imgsrc" >
				<p @click="goto('/case-info')">
					{{impression.name}}
				</p>
				<div @click="goto('/case-info')">
					来报名免设计费
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Chooser from "../components/Chooser"
	export default {
		name: 'impression',
		components: {
			Chooser
		},
		data () {
			return {
				impressions: [{
					name: "中式复古别墅设计室内书房效果图",
					imgsrc: "/static/pressionimgs/wtf.png"
				},{
					name: "中式复古别墅设计室内书房效果图",
					imgsrc: "/static/pressionimgs/wtf.png"
				},{
					name: "中式复古别墅设计室内书房效果图",
					imgsrc: "/static/pressionimgs/wtf.png"
				},{
					name: "中式复古别墅设计室内书房效果图",
					imgsrc: "/static/pressionimgs/wtf.png"
				},{
					name: "中式复古别墅设计室内书房效果图",
					imgsrc: "/static/pressionimgs/wtf.png"
				},{
					name: "中式复古别墅设计室内书房效果图",
					imgsrc: "/static/pressionimgs/wtf.png"
				},{
					name: "中式复古别墅设计室内书房效果图",
					imgsrc: "/static/pressionimgs/wtf.png"
				},{
					name: "中式复古别墅设计室内书房效果图",
					imgsrc: "/static/pressionimgs/wtf.png"
				},{
					name: "中式复古别墅设计室内书房效果图",
					imgsrc: "/static/pressionimgs/wtf.png"
				},],
				spaceData: [["客厅","餐厅","厨房","餐厅","厨房","餐厅","厨房","餐厅","厨房","餐厅","厨房","餐厅","厨房","餐厅","厨房","餐厅","厨房","餐厅","厨房"],["客厅","餐厅","厨房","餐厅","厨房","餐厅"],["餐厅","厨房","餐厅","厨房","餐厅"]]
			}
		},
		mounted() {
			document.title = '效果图'
		},
		methods: {
			goto(url) {
				this.$router.push(url)
			}
		}
	}
</script>