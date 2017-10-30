<style lang="less" scoped>
@main: #ff9736;
@border: #ebebeb;
.test {
	width: 50%;
	height: 400px;
	margin: 60px auto;
	perspective: 1728px;
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
.wangshuo {
	width: 100%;
	height: 2000px;
	position: relative;
	.center {
		width: 1000px;
		height: 1000px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		box-shadow: 0px 35px 80px 25px rgb(245, 245, 245);
	}
}
</style>

<template>
	<div>
		<div class="test" @mousemove="handle($event)" @mouseleave="leave()">
			<div class="img-wrapper" id="xiaohei"></div>
		</div>
		<div class="wangshuo">
			<div class="center"></div>
		</div>
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
			let ex = -(360 - e.offsetX)/80
			let ey = (200 - e.offsetY)/44.4
			document.getElementById('xiaohei').style.transform = `rotateY(${ex}deg) rotateX(${ey}deg)`
			document.getElementById('xiaohei').style.boxShadow = `${-ex}px ${ey}px 40px rgba(0, 0, 0, 0.4)`
		},
		leave() {
			document.getElementById('xiaohei').style.transform = `none`
			document.getElementById('xiaohei').style.boxShadow = 'none'
		}
 	}

}
</script>