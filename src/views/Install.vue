<style lang="less" scoped>
@border-big: #999;
@border-lit: #ebebeb;
@main: #ff9736;
@border-el: #bfcbd9;
.install {
	width: 100%;
	.img-wp {
		width: 100%;
		position: relative;
		overflow: hidden;
		img {
			display: block;
		}
		.img-mainbody {
			position: absolute;
			height: 100%;
			width: 100%;
			left: 0;
			top: 0;
			.img-content {
				width: 1238px;
				margin: 0 auto;
				text-align: center;
				height: 100%;
				.flex-wp {
					display: flex;
					width: 100%;
					position: relative;
					justify-content: space-between;
					.flex-item {
						width: 248px;
						height: 130px;
						padding-top: 27px;
						padding-left: 24px;
						display: flex;
						background-color: #fff;
						border-radius: 10px;
						img {
							display: block;
							margin-right: 20px;
						}
						.text {
							text-align: left;
							h3 {
								font-size: 24px;
								color: #333;
								margin: -3px 0 10px 0;
							}
							p {
								font-size: 16px;
								color: #666;
							}
						}
					}
					.img-arr {
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						img {
							display: block;
						}
					}
				}
			}
		}
		.form-body {
			width: 1238px;
			padding-top: 72px;
			height: 680px;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			background-color: #fff;
			opacity: 0.9;
			text-align: center;
			.form-wp {
				width: 920px;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				.input-item {
					display: flex;
					border-bottom: 1px solid #ddd;
					margin-bottom: 40px;
					width: 366px;
					height: 36px;
					line-height: 36px;
					transition: all 0.3s cubic-bezier(.645,.045,.355,1);
					color: #999;
					input {
						outline: none;
						border: none;
						font-size: 18px;
						width: 75%;
						color: #333;
						display: block;	
						&::placeholder {
							color: #ccc;
							font-size: 18px;
						}
					}
					.input-title {
						font-size: 18px;
						width: 25%;
						cursor: default;
					}
				}
			}
			.btn {
				width: 146px;
				height: 46px;
				border: 1px solid @main;
				color: @main;
				text-align: center;
				line-height: 46px;
				margin: 30px auto;
				cursor: no-drop;
				transition: all 0.2s cubic-bezier(.645,.045,.355,1);
			}
			.btn-active {
				background-color: @main;
				color: #fff;
				cursor: pointer;
			}
		}
	}

	.content {
		width: 100%;
		background-color: #f4f4f4;
		padding-top: 80px;
		height: 740px;
		position: relative;
		.mainbody {
			width: 1238px;
			margin: 0 auto;
			text-align: center;
			.stage-wp {
				width: 1118px;
				display: flex;
				justify-content: space-between;
				margin: 0 auto;
				.stage-item {
					width: 207px;
					height: 308px;
					border-radius: 10px;
					overflow: hidden;
					background-color: #fff;
					font-size: 14px;
					color: #666;
					.block-1 {
						background-color: #e16131;
						height: 78px;
						line-height: 78px;
						color: #fff;
						font-weight: 600;
						font-size: 18px;
					}
					.block-2 {
						padding: 30px 0;
						transition: all 0.2s cubic-bezier(.645,.045,.355,1);
						font-weight: 900;
						font-size: 16px;
						&:hover {

						}
					}
					.block-3 {
						height: 65px;
						line-height: 65px;
						transition: all 0.2s cubic-bezier(.645,.045,.355,1);
					}
					.block-4 {
						padding: 30px 0;
						transition: all 0.2s cubic-bezier(.645,.045,.355,1);
					}
					.line-dash {
						width: calc(~"100% - 40px");
						height: 1px;
						margin: 0 auto;
						display: flex;
						justify-content: space-between;
						.dash-item {
							width: 12px;
							height: 1px;
							background-color: #ddd;
						}
					}
					p {
						height: 14px;
						margin-bottom: 10px;
					}
				}
			}
		}
	}
	.title-cn {
		font-size: 30px;
		color: #333;
		font-weight: 600;
		margin-bottom: 17px;
	}
	.title-en {
		font-size: 18px;
		color: #666;
		margin-bottom: 17px;
	}
	.line {
		width: 47px;
		height: 3px;
		margin: 0 auto;
		background-color: @main;
		margin-bottom: 72px;
	}
}
</style>
<style>
.input-item .el-select {
	width: 80%;
}
.input-item .el-select .el-input__inner::placeholder {
	font-size: 18px;
	color: #ccc;
}
.input-item .el-select .el-input__inner:focus {
	border-color: #ff9736;
}
.input-item .el-select:hover .el-input__inner {
	border-color: #ddd;
}
.input-item .el-input__inner {
    border-top: none;
    border-right: none;
    border-left: none;
    border-color: #ddd;
    border-radius: 0;
    padding-left: 0;
    font-size: 18px;
    color: #333;
}
.input-item .el-input .el-input__icon {
	display: none;
}
</style>

<template>
	<div class="install">
		<header-new></header-new>
		<div class="content">
			<div class="mainbody">
				<p class="title-cn"><span style="font-weight: 400">居分期</span>分期优势</p>
				<p class="title-en">ADVANTAGE OF INSTALMENT</p>
				<div class="line"></div>
				<div class="stage-wp">
					<div class="stage-item" v-for="(item,id) in stageList" :style="setHeight(id)">
						<div class="block-1">{{item.name}}</div>
						<div class="block-2" :style="setPadding(id)"><p v-for="text in item.first">{{text.text}}</p></div>
						<div class="line-dash">
							<div class="dash-item" v-for="n in 9"></div>
						</div>
						<div class="block-3" v-for="text in item.second">{{text.text}}</div>
						<div class="line-dash">
							<div class="dash-item" v-for="n in 9"></div>
						</div>
						<div class="block-4"><p v-for="text in item.third">{{text.text}}</p></div>			
					</div>
				</div>
			</div>
		</div>
		<div class="img-wp" style="height: 514px;">
			<img src="/static/install/bg-1.png">
			<div class="img-mainbody" :style="{'width': SrceenWidth + 'px'}">
				<div class="img-content" style="padding-top: 60px">
					<p class="title-cn">分期流程</p>
					<p class="title-en">居分期贷款消费 <span style="font-weight: 600">轻松搞定</span></p>
					<div class="line"></div>
					<div class="flex-wp">
						<div class="flex-item" v-for="(item,id) in itemList">
							<img :src="item.url" :style="setImg(id)">
							<div class="text">
								<h3>{{item.name}}</h3>
								<p>{{item.disc}}</p>
							</div>
						</div>
						<div class="img-arr" style="left: 270px;">
							<img src="/static/install/ins-arr.png">
						</div>
						<div class="img-arr" style="left: 600px;">
							<img src="/static/install/ins-arr.png">
						</div>
						<div class="img-arr" style="left: 930px;">
							<img src="/static/install/ins-arr.png">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="img-wp">
			<img src="/static/install/bg-2.png" style="width: 100%;">
			<div class="form-body" v-if="">
				<p class="title-cn">贷款申请</p>
				<p class="title-en" style="margin-bottom: 52px;">线上极速提交申请 VIP客服全程跟进</p>
				<div class="form-wp">
					<div class="left">
						<div class="input-item" :style="setBorder(name.focus, 0)">
							<input type="text" name="申请人" placeholder="请输入您的真实姓名" v-model="name.value" @focus="focusChange('name')" @blur="focusChange('name')">
							<div class="input-title">申请人</div>
						</div>
						<div class="input-item" :style="setBorder(phone.focus, 0)">
							<input type="text" name="手机号" placeholder="请输入您的手机号" v-model="phone.value" @focus="focusChange('phone')" @blur="focusChange('phone')">
							<div class="input-title">手机号</div>
						</div>
						<div class="input-item" :style="setBorder(bankBranch.focus, 0)">
							<!-- <input type="text" name="银行网点" placeholder="请输入您的手机号" v-model="bankBranch.value" @focus="focusChange('bankBranch')" @blur="focusChange('bankBranch')"> -->
							<el-select v-model="bankBranch.value" no-data-text="请先选择您要申请的银行" clearable placeholder="请选择申请银行网点" @change="bankBranchChoose(bankBranch.value)">
								<el-option
									v-for="item in bankBranchOptions"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
							<div class="input-title">银行网点</div>
						</div>
						<div class="input-item" :style="setBorder(money.focus, 0)">
							<input type="text" name="期望额度" placeholder="请输入您的期望额度" v-model="money.value" @focus="focusChange('money')" @blur="focusChange('money')">
							<div class="input-title">期望额度</div>
						</div>
					</div>
					<div class="right">
						<div class="input-item" :style="setBorder(idCard.focus, 1)">
							<div class="input-title">身份证</div>
							<input type="text" name="身份证" placeholder="请输入您的身份证号" v-model="idCard.value" @focus="focusChange('idCard')" @blur="focusChange('idCard')">	
						</div>
						<div class="input-item" :style="setBorder(bank.focus, 1)">
							<div class="input-title">申请银行</div>
							<!-- <input type="text" name="申请银行" v-model="bank.value" @focus="focusChange('bank')" @blur="focusChange('bank')">	 -->
							<el-select v-model="bank.value" clearable placeholder="请选择申请银行" @change="bankChoose(bank.value)">
								<el-option
									v-for="item in bankOptions"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</div>
						<div class="input-item" :style="setBorder(bankBranchPeriod.focus, 1)">
							<div class="input-title">分期期数</div>
							<!-- <input type="text" name="分期期数" v-model="bankBranchPeriod.value" @focus="focusChange('bankBranchPeriod')" @blur="focusChange('bankBranchPeriod')">	 -->
							<el-select v-model="bankBranchPeriod.value" no-data-text="请先选择您要申请的银行网点" clearable placeholder="请选择申请分期期数">
								<el-option
									v-for="item in periodOptions"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</div>
					</div>
				</div>
				<div class="btn" :class="{'btn-active': isFinished()}" @click="isFinished()?submit():false">立即申请</div>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderNew from '@/components/HeaderNew'
import axios from 'axios'
import Conf from '../assets/conf.js'

export default {
	components: {
		HeaderNew
	},
	data() {
		return{
			SrceenWidth: document.body.clientWidth,
			options: [{
				value: '选项1',
				label: '黄金糕'
			}, {
				value: '选项2',
				label: '双皮奶'
			}, {
				value: '选项3',
				label: '蚵仔煎'
			}, {
				value: '选项4',
				label: '龙须面'
			}, {
				value: '选项5',
				label: '北京烤鸭'
			}],
			name: {
				value: '',
				focus: false
			},
			phone: {
				value: '',
				focus: false
			},
			bank: {
				value: '',
				focus: false
			},
			money: {
				value: '',
				focus: false
			},
			idCard: {
				value: '',
				focus: false
			},
			bankBranch: {
				value: '',
				focus: false
			},
			bankBranchPeriod: {
				value: '',
				focus: false
			},
			stageList: [{
				name: '申请渠道',
				first: [{
					text: '通过居分期申请'
				}],
				second: [{
					text: '金融公司申请'
				}],
				third: [{
					text: '传统银行申请'
				}]
			},{
				name: '申请形式',
				first: [{
					text: '在线预约'
				},{
					text: 'VIP客服全程服务'
				},],
				second: [{
					text: '自行咨询跑流程'
				}],
				third: [{
					text: '自行去网点申请'
				},{
					text: '个别银行不对'
				},{
					text: '个人开放此业务'
				}]
			},{
				name: '审核周期与额度',
				first: [{
					text: '最快当天审批，最高100万'
				}],
				second: [{
					text: '一般1-7天内，最高50万'
				}],
				third: [{
					text: '审核周期为7-15个工作日'
				},{
					text: '需要客户自行跟进'
				},{
					text: '最高额度50万'
				},]
			},{
				name: '手续费',
				first: [{
					text: '合作商家最高可贴息12期'
				}],
				second: [{
					text: '年利率为5%-10%'
				}],
				third: [{
					text: '年利率4.44%-7.5%'
				}]
			},{
				name: '门槛',
				first: [{
					text: '门槛低、无抵押、无担保'
				}],
				second: [{
					text: '有抵押'
				}],
				third: [{
					text: '无抵押、有担保'
				}]
			},],
			itemList: [{
				name: '报名',
				disc: '注册会员 线上申请',
				url: '/static/install/ins-1.png'
			},{
				name: '准备',
				disc: '身份证 房产证',
				url: '/static/install/ins-2.png'
			},{
				name: '面签',
				disc: 'VIP客服全程跟进',
				url: '/static/install/ins-3.png'
			},{
				name: '发卡',
				disc: '五家银行 极速发卡',
				url: '/static/install/ins-4.png'
			},],
			bankOptions: [],
			bankBranchOptions: [],
			periodOptions: [],
			tmpBank: '',
			tmpBankBranch: '',

		}
	},
	methods: {
		goto(url) {
			this.$router.push(url)
		},
		setPadding(id) {
			let ret = {}
			if (id == 1) {
				ret.padding = '18px 0'
			}
			return ret
		},
		setHeight(id) {
			let ret = {}
			if (id == 1||id == 2) {
				ret.height = '357px'
			}
			return ret
		},
		setImg(id) {
			let ret = {}
			switch (id) {
				case 0:
					ret.width = '60px'
					ret.height = '67px'
					break
				case 1:
					ret.width = '55px'
					ret.height = '48px'
					break
				case 2:
					ret.width = '51px'
					ret.height = '58px'
					break
				case 3:
					ret.width = '51px'
					ret.height = '52px'
					break
			}
			return ret
		},
		focusChange(val) {
			switch(val) {
				case 'name':
					this.name.focus = !this.name.focus
					break
				case 'phone':
					this.phone.focus = !this.phone.focus
					break
				case 'bank':
					this.bank.focus = !this.bank.focus
					break
				case 'idCard':
					this.idCard.focus = !this.idCard.focus
					break
				case 'bankBranch':
					this.bankBranch.focus = !this.bankBranch.focus
					break
				case 'bankBranchPeriod':
					this.bankBranchPeriod.focus = !this.bankBranchPeriod.focus
					break
				case 'money':
					this.money.focus = !this.money.focus
					break
			}
		},
		blurChange(obj) {
			if (obj.value !== '') {

			}
		},
		setBorder(val, id) {
			let ret = {}
			if (id == 0) {
				ret.justifyContent =  'flex-end'
				ret.textAlign = 'right'
			} else {
				ret.justifyContent = 'flex-start'
				ret.textAlign = 'left'
			}
			if (val) {
				ret.borderBottom = '1px solid #ff9736'
				ret.color = '#ff9736'
			}
			return ret
		},
		setColor(val) {
			let ret = {}
			if (val) {
				ret.color = '#ff9736'
			} 
			return ret
		},
		bankChoose(val) {
			console.log(val)
			this.bankBranchOptions = []
			axios.get(`${Conf.loanApi}bank-branches?filter=bank.id:${val}`).then((res) => {
				res.data.data.map((e) => {
					this.bankBranchOptions.push({
						value: e.id,
						label: e.name
					})
				})
			}).catch((err) => {
				console.log(err)
				throw err
			})
			// this.bankBranch.value = ''
			// this.bankBranchPeriod = ''
		},
		bankBranchChoose(val) {
			console.log(val)
			this.periodOptions = []
			axios.get(`${Conf.loanApi}bank-branch-periods?filter=bankBranch.id:${val}`).then((res) => {
				res.data.data.map((e) => {
					this.periodOptions.push({
						value: e.id,
						label: e.name
					})
				})
			}).catch((err) => {
				console.log(err)
				throw err
			})
			// this.bankBranchPeriod = ''
		},
		getBanks() {
			axios.get(`${Conf.loanApi}banks`).then((res) => {
				res.data.data.map((e) => {
					this.bankOptions.push({
						value: e.id,
						label: e.name
					})
				})
			}).catch((err) => {
				console.log(err)
				throw err
			})
		},
		// 各种验证
		isIdCard() {
			let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
			return reg.test(Number(this.idCard.value))
		},
		isTruePhoneNum() {
			let reg = /^1[3|4|5|7|8]\d{9}$/
			return reg.test(Number(this.phone.value))
		},
		isNumber() {
			let reg = /(^[0-9]*$)/
			return reg.test(Number(this.money.value))
		},
		isFinished() {
			return this.isIdCard() && this.isTruePhoneNum() && this.isNumber() && this.bank.value && this.bankBranch.value && this.bankBranchPeriod.value && this.name.value
		},
		submit() {
			let result = {
				userId: JSON.parse(localStorage.getItem('userInfo')).userId,
				idCardNo: this.idCard.value,
				mobile: this.phone.value,
				bank: {id: Number(this.bank.value)},
				bankBranch: {id: Number(this.bankBranch.value)},
				bankBranchPeriod: {id:Number(this.bankBranchPeriod.value)},
				fullname: this.name.value,
				expectQuota: this.money.value,
				statusEnum: 1
			}
			axios.post(`${Conf.loanApi}loan-applications`, result).then((res) => {
				this.$message({
					message: '贷款申请已提交！后续会有工作人员继续为您服务',
					type: 'success'
				});
			}).catch((err) => {
				console.log(err)
				this.$message.error('连接服务器失败，请稍后再试。。');
				throw err
			})
		}
	},
	mounted(){
		document.title = '家装分期'
		document.body.scrollTop = 0
		this.phone.value = JSON.parse(localStorage.getItem('userName')).name
		this.getBanks()
	}
}
</script>