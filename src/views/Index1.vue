<style lang="less" scoped>
	.index1{
		padding: 20px;
	}
	.banner-bac{
		height: 364px;
		display: flex;
		justify-content: space-between;
		.banner-con {
			width: 633px;
			height: 250px;

		}
		.user-section {
			width: 280px;
			height: 364px;
			background-color: #ccc;
		}
	}
</style>

<template>
	<div class="index1">
		<div class="banner-bac">
			<Enroll></Enroll>
			<div class="banner-con">
				<div class="banner-wrapper">
					<el-carousel height="250px" >
						<el-carousel-item v-for="item in imgList" :key="item">
							<img :src="item.url">
						</el-carousel-item>
					</el-carousel>
				</div>
				<div class="tab-wrapper">
					
				</div>
			</div>
			<div class="user-section">
				
			</div>
		</div>
		
	</div>
</template>

<script>
	import Enroll from "../components/Enroll"
	export default {
		name: 'impression',
		components: {
			Enroll
		},
		data () {
			return {
				imgList: [{
					url: 'http://'
				},{},{},{},{}]
			}
		}
	}
</script>