<style lang="less" scoped>
	.index1{
		padding: 20px;
	}
	.banner-bac{
		height: 364px;
	}
</style>

<template>
	<div class="index1">
		<div class="banner-bac">
			<Enroll></Enroll>
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
				
			}
		}
	}
</script>