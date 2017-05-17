<style lang="less" scoped>
@main: #f3a944;
.enroll{
	border: 1px solid #ebebeb;
	width: 280px;
	background-color: #fff;
	.tab-wrapper {
		border-bottom: 1px solid #ebebeb;
		height: 50px;
		line-height: 50px;
		display: flex;
		font-size: 14px;
		.tab {
			background-color: #ebebeb;
			width: 50%;
			display: flex;
			justify-content: center;
			color: #393939;
			cursor: pointer;
			img {
				display: block;
				width: 13px;
				height: 15px;
				margin: 16px 4px 0 0;
			}
		}
		.active {
			background-color: #fff;
			color: @main;
		}
	}
	.content {
		padding: 16px 10px;
		text-align: center;
		font-size: 14px;
		position: relative;
		.input-con {
			width: 100%;
			height: 36px;
			line-height: 36px;
			border: 1px solid #ebebeb;
			padding-left: 10px;
			font-size: 14px;
			margin-bottom: 10px;
			color: #999;
			&::placeholder {
				color: #ccc;
				font-size: 14px;
				line-height: 36px;
			}
		}
		.checkbox {
			margin-top: 33px;
			font-size: 12px;
			text-align: left;
			span {
				color: #6fa139;
			}
		}
		.btn {
			width: 100%;
			height: 36px;
			line-height: 36px;
			text-align: center;
			color: #fff;
			background-color: @main;
		}
		.count-wrapper {
			display: flex;
			justify-content: center;
			margin: 10px 0; 
			.count {
				width: 14px;
				height: 20px;
				line-height: 20px;
				text-align: center;
				color: #fff;
				background-color: @main;
				margin: 0 2px;
			}
		}
		.price-title {
			text-align: left;
			font-size: 12px;
			color: #999;
			margin-bottom: 10px;
		}
		.select-wrapper {
			display: flex;
			margin-bottom: 10px;
			.selected {
				margin-right: 10px;
			}
		}
	}
}

</style>

<template>
	<div class="enroll">
		<div class="tab-wrapper">
			<div class="tab" v-for="(tab,id) in tabList" @click="tabIndex = id" :class="{'active': tabIndex == id}">
				<img :src="tab.imgAct" v-if="isTab(id)">
				<img :src="tab.img" v-if="!isTab(id)">
				<div class="text">{{tab.name}}</div>
			</div>
		</div>
		<div class="content" v-if="tabIndex == 0">
			<div class="input-title">抢{{tabList[tabIndex].name}}名额</div>
			<div class="count-wrapper">
				今天还剩<div class="count" v-for="num in numList">{{num}}</div>个名额
			</div>
			<input type="text" class="input-con" placeholder="请输入您的称呼">
			<input type="text" class="input-con" :placeholder="placeHolder">
			<input type="text" class="input-con" placeholder="请输入您的小区地址">
			<div class="checkbox">
				<input type="checkbox" class="check">
				我已经阅读并接受<span>《居分期服务条款》</span>
			</div>
			<div class="btn">立即申请</div>
		</div>
		<div class="content" v-if="tabIndex == 1">
			<div class="price-title">10秒获得装修报价</div>
			<input type="text" class="input-con" placeholder="请输入房屋面积">
			<div class="select-wrapper">
				<div class="selected"> 
					<el-select v-model="form.bedroom" placeholder="2室">
						<el-option label="1室" value="1B"></el-option>
						<el-option label="2室" value="2B"></el-option>
						<el-option label="3室" value="3B"></el-option>
						<el-option label="4室" value="4B"></el-option>
						<el-option label="5室" value="5B"></el-option>
					</el-select>
				</div>
				<div class="selected"> 
					<el-select v-model="form.livingroom" placeholder="2厅">
						<el-option label="1厅" value="1L"></el-option>
						<el-option label="2厅" value="2L"></el-option>
						<el-option label="3厅" value="3L"></el-option>
					</el-select>
				</div>
				<div class="selected" style="margin: 0"> 
					<el-select v-model="form.bathroom" placeholder="2厨">
						<el-option label="1厨" value="1K"></el-option>
						<el-option label="2厨" value="2K"></el-option>
					</el-select>
				</div>
			</div>
			<div class="select-wrapper">
				<div class="selected"> 
					<el-select v-model="form.bedroom" placeholder="2卫生间">
						<el-option label="1卫生间" value="1WC"></el-option>
						<el-option label="2卫生间" value="2WC"></el-option>
						<el-option label="3卫生间" value="3WC"></el-option>
					</el-select>
				</div>
				<div class="selected" style="margin: 0"> 
					<el-select v-model="form.bathroom" placeholder="2阳台">
						<el-option label="1阳台" value="1BC"></el-option>
						<el-option label="2阳台" value="2BC"></el-option>
						<el-option label="3阳台" value="3BC"></el-option>
					</el-select>
				</div>
			</div>
			<input type="text" class="input-con" placeholder="请填写手机号码，便于发送报价结果">
			<div class="checkbox" style="margin-top: 20px;">
				<input type="checkbox" class="check">
				我已经阅读并接受<span>《居分期服务条款》</span>
			</div>
			<div class="btn">立即申请</div>
		</div>
	</div>
</template>

<script>
export default{
	name: "Enroll",
	components: {

	},
	data() {
		return{
			checked: false,
			numList: [],
			tabList: [{
				name: '免费设计',
				img: '/static/enroll/design.png',
				imgAct: '/static/enroll/design-act.png'
			},{
				name: '免费报价',
				img: '/static/enroll/price.png',
				imgAct: '/static/enroll/price-act.png'
			}],
			tabIndex: 0,
			form: {}
		}
	},
	methods: {
		getNumList(num) {
			String(num).split('').map((e) => {
				this.numList.push(String(e))
			})
		},
		isTab(id) {
			return id == this.tabIndex
		}
 	},
 	computed: {
 		placeHolder() {
 			return '填写手机号码，获取' + this.tabList[this.tabIndex].name + '名额'
 		}
 	},
	mounted(){
		this.getNumList(786)
	}
}
</script>