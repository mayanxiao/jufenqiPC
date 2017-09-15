<style lang="less">
@main: #ff9736;

.sign {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 99;
	.mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 100;
	}
	.sign-wp {
		position: absolute;
		width: 600px;
		height: 500px;
		z-index: 101;
		background-color: #fff;
		border-radius: 10px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 50px 77px;
		.tab-wp {
			width: 100%;
			height: 50px;
			line-height: 50px;
			display: flex;
			.tab {
				width: 80px;
				font-size: 18px;
				color: #666;
				text-align: center;
				cursor: pointer;
				&:hover {
					color: @main;
				}
			}
			.active {
				color: @main;
				border-bottom: 1px solid @main;
			}
		}
	}
	.input-item {
		display: flex;
		border-bottom: 1px solid #ddd;
		margin: 45px auto;
		width: 400px;
		height: 36px;
		line-height: 36px;
		transition: all 0.3s cubic-bezier(.645,.045,.355,1);
		position: relative;
		color: #999;
		input {
			outline: none;
			border: none;
			font-size: 18px;
			width: 75%;
			color: #333;
			display: block;	
			&::placeholder {
				color: #ddd;
				font-size: 18px;
			}
		}
		.input-title {
			font-size: 18px;
			width: 25%;
			cursor: default;
		}
		.code-btn {
			position: absolute;
			top: 0;
			right: 0;
			width: 100px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			font-size: 14px;
			border: 1px solid #ddd;
			cursor: no-drop;
			color: #ccc;
			transition: all 0.3s cubic-bezier(.645,.045,.355,1);
		}
		.code-active {
			color: @main;
			border-color: @main;
			cursor: pointer;
		}
	}
	.btn {
		width: 100px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-size: 16px;
		border: 1px solid #ddd;
		cursor: no-drop;
		margin: 0 auto;
		color: #ccc;
		position: relative;
	}
	.btn-active {
		color: @main;
		border-color: @main;
		cursor: pointer;
	}
	.tip {
		position: absolute;
		bottom: 20px;
		right: 20px;
		font-size: 14px;
		color: #ccc;
		cursor: pointer;
		&:hover {
			color: @main;
		}
	}
}
</style>

<template>
	<div class="sign" v-if="sign.signShow">
		<div class="mask" @click='sign.signShow = false'></div>
		<div class="sign-wp">
			<div class="tab-wp">
				<div class="tab" v-for="(tab, id) in tabs" :class="{'active': sign.signIndex == id}" @click="sign.signIndex = id">{{tab.name}}</div>
			</div>
			<div class="sign-up" v-if="sign.signIndex == 1">
				<div class="input-item" :style="setBorder(rMobile.focus)">
					<div class="input-title">手机号</div>
					<input type="text" name="申请人" placeholder="请输入您的手机号" v-model="rMobile.value" @focus="focusChange('rMobile')" @blur="focusChange('rMobile')">
					<div class="code-btn" :class="{'code-active': isTruePhoneNum('r')}" v-if="!isSend" @click="send('r')">获取验证码</div>
					<div class="code-btn" v-if="isSend">{{time}} 秒后可重试</div>
				</div>
				<div class="input-item" :style="setBorder(rPass.focus)">
					<div class="input-title">密码</div>
					<input type="password" name="申请人" placeholder="请设置您的密码" v-model="rPass.value" @focus="focusChange('rPass')" @blur="focusChange('rPass')">
				</div>
				<div class="input-item" :style="setBorder(rCode.focus)">
					<div class="input-title">验证码</div>
					<input type="text" name="申请人" placeholder="请输入对应手机收到的验证码" v-model="rCode.value" @focus="focusChange('rCode')" @blur="focusChange('rCode')">
				</div>
				<div class="btn" @click="isFinished('r', true)?signUp():false" :class="{'btn-active': isFinished('r', true)}">注册</div>
				<div class="tip" @click="sign.signIndex = 0">已有账号？直接登录</div>
			</div>
			<div class="sign-in" v-if="sign.signIndex == 0">
				<div class="input-item" :style="setBorder(lMobile.focus)">
					<div class="input-title">手机号</div>
					<input type="text" name="申请人" placeholder="请输入您的手机号" v-model="lMobile.value" @focus="focusChange('lMobile')" @blur="focusChange('lMobile')">
					<div class="code-btn" :class="{'code-active': isTruePhoneNum('l')}" v-if="!isSend&&!useCode" @click="send('l')">获取验证码</div>
					<div class="code-btn" v-if="isSend&&!useCode">{{time}} 秒后可重试</div>
				</div>
				<div class="input-item" :style="setBorder(lPass.focus)" v-if="useCode">
					<div class="input-title">密码</div>
					<input type="password" name="申请人" placeholder="请设置您的密码" v-model="lPass.value" @focus="focusChange('lPass')" @blur="focusChange('lPass')">
				</div>
				<div class="input-item" :style="setBorder(lCode.focus)" v-if="!useCode">
					<div class="input-title">验证码</div>
					<input type="text" name="申请人" placeholder="请输入对应手机收到的验证码" v-model="lCode.value" @focus="focusChange('lCode')" @blur="focusChange('lCode')">
				</div>
				<div class="btn" style="margin-top: 80px;" :class="{'btn-active': isFinished('l', useCode)}" @click="isFinished('l', useCode)?signIn(useCode):false">登录</div>
				<div class="tip" @click="useCode = !useCode" v-if="!useCode">使用密码登录</div>
				<div class="tip" @click="useCode = !useCode" v-if="useCode">使用验证码登录</div>
			</div>
		</div>
		
	</div>
</template>

<script>
import axios from 'axios'
import Conf from '../assets/conf.js'

export default {
	name: 'sign',
	props: {
		sign: {
			type: Object,
			default: function() {
				return {}
			}
 		}
	},
	// computed: {
	// 	sign.signShow: {
	// 		get: function () {
	// 			return this.tabIndex
	// 		},
	// 		set: function (newValue) {
	// 			let ret = this.tabIndex
	// 			ret = newValue
	// 			return ret
	// 		}
	// 	},
	// 	isShow: {
	// 		get: function () {
	// 			return this.toShow
	// 		},
	// 		set: function (newValue) {
	// 			return newValue
	// 		}
	// 	}
	// },
	data () {
		return {
			tabs: [{
				name: '登录'
			},{
				name: '注册'
			},],
			tabId: '',
			isShow: this.toShow,
			time: 60,
			timekeeper: null,
			isSend: false,
			useCode: false,
			rMobile: {
				value: '',
				focus: false
			},
			rPass: {
				value: '',
				focus: false
			},
			rCode: {
				value: '',
				focus: false
			},
			lMobile: {
				value: '',
				focus: false
			},
			lPass: {
				value: '',
				focus: false
			},
			lCode: {
				value: '',
				focus: false
			},
		}
	},
	methods: {
		focusChange(val) {
			switch(val) {
				case 'rMobile':
					this.rMobile.focus = !this.rMobile.focus
					break
				case 'rPass':
					this.rPass.focus = !this.rPass.focus
					break
				case 'rCode':
					this.rCode.focus = !this.rCode.focus
					break
				case 'lMobile':
					this.lMobile.focus = !this.lMobile.focus
					break
				case 'lPass':
					this.lPass.focus = !this.lPass.focus
					break
				case 'lCode':
					this.lCode.focus = !this.lCode.focus
					break
			}
		},
		setBorder(val) {
			let ret = {}
			if (val) {
				ret.borderColor = '#ff9736'
				ret.color = '#ff9736'
			}
			return ret
		},
		hide() {
			console.log(this.$parent)
			// this.$emit('update:toShow', this.isShow)
		},
		isTruePhoneNum(type) {
			let reg = /^1[3|4|5|7|8]\d{9}$/
			if (type == 'l') {
				return reg.test(Number(this.lMobile.value))
			} else if (type == 'r') {
				return reg.test(Number(this.rMobile.value))
			}
		},
		isFinished(type, useCode) {
			let regVerti = /^\d{6}$/
			if (type == 'r') {
				return this.isTruePhoneNum(type)&&regVerti.test(Number(this.rCode.value))&&this.rPass
			} else if (type == 'l' && useCode == false) {
				return this.isTruePhoneNum(type)&&regVerti.test(Number(this.lCode.value))
			} else if (type == 'l' && useCode == true) {
				return this.isTruePhoneNum(type)&&this.lPass.value
			}
			
		},
		send(type) {
			console.log(`${Conf.userApi}sms/sendCode`)
			let that = this
			if (!this.isTruePhoneNum(type)) {
				alert('请输入正确的手机号码')
			} else {
				axios.post(`${Conf.userApi}sms/sendCode`, {}, {
					params: {
						mobile: type == 'l'? Number(this.lMobile.value): Number(this.rMobile.value)
					},
					withCredentials: true,
				}).then(

				(res)=>{
					console.log('heihei')
					this.isSend = true
					this.time = 60
					this.timekeeper = setInterval(() => {
						that.time --
						if (that.time === 0) {
							clearInterval(that.timekeeper)
							this.isSend = false
						}
					}, 1000)
				}).catch((res) => {
					this.loading = false
					alert('服务器繁忙，请稍后重试')
					this.isSendId = false
				})
			}
		},
		signUp() {
			axios.post(`${Conf.userApi}auth/registerByMobile?code=${this.rCode.value}`, {
				mobile: Number(this.rMobile.value),
				password: this.rPass.value,
			}).then((res) => {
				this.$message({
					message: '注册成功！',
					type: 'success'
				});
				this.sign.signIndex = 0
				this.useCode = true
			}).catch((err) => {
				console.log(err.response.data.message)
				if (err.response.data.message) {
					this.$message.error(err.response.data.message);
				}
				throw err
			})
		},
		signIn(useCode) {
			let ret = this.lMobile.value
			if (useCode) {
				axios.post(`${Conf.userApi}auth/login?account=${this.lMobile.value}&password=${this.lPass.value}&type=2`).then((res) => {
					this.$message({
						message: '登录成功！',
						type: 'success'
					});
					localStorage.setItem('userInfo', JSON.stringify(res.data.data))
					localStorage.setItem('userName', JSON.stringify({name: this.lMobile.value}))
					this.sign.signShow = false
					console.log(this.lMobile.value)
				}).catch((err) => {
					if (err.response.data.message) {
						this.$message.error(err.response.data.message);
					}
					throw err
				})
			} else {
				axios.post(`${Conf.userApi}auth/loginByMobile?mobile=${this.lMobile.value}&code=${this.lCode.value}&type=2`).then((res) => {
					this.$message({
						message: '登录成功！',
						type: 'success'
					});
					localStorage.setItem('userInfo', JSON.stringify(res.data.data))
					localStorage.setItem('userName', JSON.stringify({name: this.lMobile.value}))
					this.sign.signShow = false
					console.log(this.lMobile.value)
				}).catch((err) => {
					if (err.response.data.message) {
						this.$message.error(err.response.data.message);
					}
					throw err
				})
			}
		}
	},
	mounted() {
		this.tabId = this.tabIndex
	}
}
</script>