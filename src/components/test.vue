<style lang="less" scoped>
@main: #ff9736;
@border: #ebebeb;
.test {
	width: 50%;
	height: 400px;
	margin: 60px auto;
	perspective: 2000px;
	transform-style: preserve-3d;
	.img-wrapper {
		margin: auto;
		background-image: url('https://source.unsplash.com/random');
		width: 100%;
		height: 100%;
		// box-shadow: 12px 10px 10px rgba(0, 0, 0, 0.1);
		transform: translateZ(0px);
		transform-style: preserve-3d;
		backface-visibility: hidden;
	}
}
</style>

<template>
	<div class="test" @mousemove="handle($event)">
		<div class="img-wrapper" id="xiaohei"></div>
	</div>
</template>

<script>
export default{
	name: "Test",
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
			
		}
	},
	methods: {
		handle(e) {
			let ex = -(720 - e.offsetX)/20
			let ey = (400 - e.offsetY)/10
			document.getElementById('xiaohei').style.transform = `rotateY(${ex}deg) rotateX(${ey}deg)`
		}
 	}

}
</script>