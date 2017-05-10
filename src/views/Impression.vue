<style lang="less">
	.impression{
		width: 1231px;
		padding-top: 20px;
	}
	.impre-pics{
		margin-top: 30px;
		display: flex;
		flex-wrap: warp;
		div{
			height: 390px;
			width: 390px;
			position: relative;
		}
	}
</style>

<template>
	<div class="impression">
		<chooser></chooser>
		<div class="impre-pics">
			<div>
				<img src="" alt="">
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

			}
		}
	}
</script>