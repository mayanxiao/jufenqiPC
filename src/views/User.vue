<style lang="less" scoped>
@border-big: #999;
@border-lit: #ebebeb;
@main: #ff9736;
.user{
	background-color: #ececec;
	width: 100%;
}
.more {
	position: absolute;
	font-size: 14px;
	right: 33px;
	top: 41px;
	color: @main;
	cursor: pointer;
	:hover {
		text-decoration: underline;
	}
}
.block {
	position: absolute;
	font-size: 18px;
	color: #333;
	font-weight: bold;
	left: 33px;
	top: 40px;
}
.mainbody {
	width: 1238px;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	padding-top: 74px;

	.sidebar {
        width: 226px;
        height: 568px;
        padding-top: 35px;
        padding-bottom: 27px;
        background-color: #fff;
        text-align: center;
        .list-1 {
            font-size: 18px;
            font-weight: 600;
            height: 40px;
            line-height: 40px;
            color: #333;
            display: flex;
            margin-bottom: 8px;
            img {
            	display: block;
            	width: 20px;
            	height: 20px;
            	margin: 10px 5px 0 50px;
            }
        }
        .list-2 {
        	height: 34px;
        	line-height: 34px;
        	color: #666;
        	font-size: 14px;
        	cursor: pointer;
        	margin-bottom: 8px;
        	&:hover {
        		background-color: @main;
        		color: #fff;
        	}
        }
    }
    .user-info {
    	width: 977px;
    	.intro {
    		width: 100%;
    		height: 186px;
    		position: relative;
    		background-color: #fff;
    		margin-bottom: 22px;
    		.info-wp {
    			width: calc(~"100% - 66px");
    			display: flex;
    			position: absolute;
    			top: 50%;
    			left: 50%;
    			transform: translate(-50%, -50%);
    			img {
    				display: block;
    				width: 110px;
    				height: 110px;
    				margin-right: 32px;
    			}
    			.name-phone {
    				width: calc(~"100% - 142px");
    				padding-top: 16px;
    				.user-name {
    					font-size: 18px;
    					color: #333;
    					font-weight: bold;
    					margin-bottom: 40px;
    				}
    				.item-wp {
    					display: flex;
    					.item {
    						position: relative;
    						span {
    							margin-left: 14px;
    							color: @main;
    						}
    						.line {
    							width: 1px;
    							height: 12px;
    							background-color: #ddd;
    							position: absolute;
    							top: 6px;
    							right: 0;
    						}
    					}
    				}
    			}
    		}
    	}
    	.instalment {
    		width: 100%;
    		height: 294px;
    		padding: 74px 33px 37px 33px;
    		position: relative;
    		background-color: #fff;
    		margin-bottom: 22px;
    		.tabs {
    			width: 100%;
    			height: 100%;
    			display: flex;
    			.tab-item {
    				width: 50%;
    				height: 100%;
    				text-align: center;
    				padding-top: 22px;
    				p {
    					font-size: 30px;
    					color: #ff410e;
    					font-weight: 600;
    					margin-bottom: 22px;
    				}
    				span {
    					font-size: 18px;
    					color: #666;
    				}
    				.loan-btn {
    					width: 116px;
    					height: 38px;
    					line-height: 38px;
    					text-align: center;
    					border-radius: 19px;
    					background-color: @main;
    					color: #fff;
    					font-size: 14px;
    					margin: 38px auto;
    					transition: all 0.3s cubic-bezier(.645,.045,.355,1);
    					box-shadow: 3px 3px 14px 0px rgba(0, 0, 0, 0.2);
    					cursor: pointer;
     					&:hover {
    						font-size: 15px;
    					}
    				}
    			}
    			.line {
    				width: 1px;
    				height: 100%;
    				.line-item {
    					width: 1px;
    					height: 11px;
    					background-color: #ddd;
    					margin-bottom: 8px;
    				}
    			}
    		}
    	}
        .loan-app {
            width: 100%;
            height: 157px;
            background-color: #fff;
            display: flex;
            margin-bottom: 20px;
            position: relative;
            .item-down {
                width: 50%;
                height: 100%;
                flex-direction: column;
                display: flex;
                padding-top: 30px;
                .text-wp {
                    display: flex;
                    justify-content: center;
                    font-size: 18px;
                    margin-bottom: 20px;
                    width: 100%;
                    .text-title {
                        color: #999;
                        margin-right: 30px;
                        width: 35%;
                        text-align: right;
                    }
                    .text-con {
                        color: #333;
                        width: 60%;
                        text-align: left;
                    }
                }
            }
            .hide {
                position: absolute;
                color: #999;
                font-size: 14px;
                cursor: pointer;
                top: 10px;
                right: 33px;
                &:hover {
                    color: @main;
                }
            }
        }
    	.material {
    		position: relative;
    		width: 100%;
    		height: 788px;
    		padding: 98px 33px 139px 33px;
    		background-color: #fff;
    		margin-top: 22px;
    		margin-bottom: 107px;
    		.mt-item {
    			width: 100%;
    			height: 121px;
    			display: flex;
    			position: relative;
    			border-bottom: 1px solid #ddd;
    			margin-bottom: 21px;
    			img {
    				width: 100px;
    				height: 100px;
    				display: block;
    				margin-right: 31px;
    			}
    			.text-wp {
    				display: flex;
    				justify-content: space-between;
    				width: calc(~"100% - 131px");
    				height: 121px;
    				color: #333;
    				font-size: 14px;
    				.money {
    					color: #ff410e;
    				}
    				.item {
    					display: flex;
    					width: calc(~"(100% - 73px) / 4.5");
    					height: 100px;  
    					color: #333; 
    					font-size: 14px; 
    					flex-direction: column;
    					justify-content: center;
    					align-items: center;
    				} 
    				.view-btn {
    					width: 73px;
    					height: 24px;
    					line-height: 24px;
    					text-align: center;
    					background-color: @main;
    					color: #fff;
    					font-size: 12px;
    					border-radius: 9px;
    					margin-top: 36px;
    				}
    			}
    			.time {
    				font-size: 12px;
    				color: #999;
    				position: absolute;
    				right: 0;
    				top: 0;
    			}
    		}
    	}
    }
    .user-setting {
        width: 977px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 300px;
        background-color: #fff;
        p {
            font-size: 24px;
            font-weight: 600;
            color: #666;
            margin-bottom: 40px;
        }
        .input-item {
            display: flex;
            border-bottom: 1px solid #ddd;
            position: relative;
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
    }
}
.no-login {
    width: 100%;
    height: 294px;
    padding: 74px 33px 37px 33px;
    position: relative;
    margin-bottom: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-size: 24px;
        color: #999;
        margin-top: 20px;
    }
    .btn {
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        border: 1px solid #ddd;
        cursor: no-drop;
        margin-top: 20px;
        color: #ccc;
        position: relative;
        transition: all 0.3s cubic-bezier(.645,.045,.355,1);
        &:hover {
            color: #fff;
            background-color: @main;
        }
    }
    .btn-active {
        color: @main;
        border-color: @main;
        cursor: pointer;
    }
}
</style>
<style>
.el-message-box .el-message-box__btns .el-button--primary {
    background-color: #ff9736;
    border-color: #ff9736;
    color: #fff;
}
.el-dialog .el-dialog__footer .dialog-footer .el-button--primary {
    background-color: #ff9736;
    border-color: #ff9736;
}
.el-button:focus, .el-button:hover {
    color: #ff9736;
    border-color: #ff9736;
}
.el-dialog__headerbtn:hover {
    color: #ff9736;
}
</style>
<template>
	<div class="user">
		<header-new></header-new>
		<div class="mainbody">
			<div class="sidebar">
				<div v-for="(list,id) in sideBars" @click="logOut(id)" :style="setMouse(id)">
					<div class="list-1">
						<img :src="list.img">
						{{list.name}}
					</div>
					<div class="list-2" v-for="(sub, subId) in list.subList" @click="settingChange(id, subId)">{{sub}}</div>
				</div> 
			</div>
			<div class="user-info" v-if="infoSetting == 0">
				<div class="intro">
					<div class="info-wp">
						<img src="/static/user/avatar.png">
						<div class="name-phone">
							<div class="user-name">{{userName}}</div>
							<div class="item-wp">
								<div class="item">
									手机号
									<span>{{userMobile}}</span>
								</div>
							</div>
						</div>
					</div>
					<!-- <div v-if="isLog" class="more" style="top: 57px;" @click="infoSetting = 4">修改资料</div> -->
				</div>
				<div class="instalment" v-if="isLog&&loanApps.length > 0">
					<div class="block">我的分期</div>
					<!-- <div class="more">我的钱包</div> -->
					<div class="tabs">
						<div class="tab-item">
							<p>￥{{loanAmount}}元</p>
							<span>{{loanTitle}}</span>
							<div class="loan-btn" @click="gotoPhone()">我要提额</div>
						</div>
						<div class="line">
							<div class="line-item" v-for="n in 10"></div>
						</div>
						<div class="tab-item">
							<p>{{hasIns}}项</p>
							<span>已申请贷款数</span>
							<div class="loan-btn" @click="showLoan = true">查看我的方案</div>
						</div>
					</div>
				</div>
				<!-- <div class="material">
					<div class="block">我的订单</div>
					<div class="more">查看全部订单</div>
					<div class="mt-item" v-for="order in mOrders">
						<img :src="order.brandImg">
						<div class="text-wp">
							<div class="item">{{order.brandName}}</div>
							<div class="item">{{order.merchantName}}</div>
							<div class="item"><span class="money">￥{{(order.totalAmount).toFixed(2)}}元</span></div>
							<div class="item">{{findName(order.status)}}</div>
							<div class="view-btn">查看订单</div>
						</div>
						<div class="time">{{getTime(order.createdAt)}}</div>
					</div>
				</div> -->
                <div class="no-login" v-if="!isLog">
                    <img src="/static/user/nologin.png">
                    <p>请登录后查看您的信息哦</p>
                </div>
                <div class="no-login" v-if="isLog&&loanApps.length == 0">
                    <img src="/static/user/noapply.png">
                    <p>您还未申请分期，点击下方按钮进行申请</p>
                    <div class="btn btn-active" @click="goto('/installment')">立即申请</div>
                </div>
                <div v-if="showLoan">
                    <div class="loan-app" v-for="(loan, $index) in loanApps" :style="color(loan.status, 0)">
                        <div class="item-down">
                            <div class="text-wp">
                                <div class="text-title">申请人</div>
                                <div class="text-con">{{loan.fullname}}</div>
                            </div>
                            <div class="text-wp">
                                <div class="text-title">申请银行</div>
                                <div class="text-con" :style="red(loan.bankName)">{{loan.bankName}}</div>
                            </div>
                            <div class="text-wp">
                                <div class="text-title">申办期数</div>
                                <div class="text-con" :style="red(loan.period)">{{loan.period}}</div>
                            </div>
                        </div>
                        <div class="item-down">
                            <div class="text-wp">
                                <div class="text-title">激活人</div>
                                <div class="text-con" :style="red(loan.activatorFullname)">{{loan.activatorFullname}}</div>
                            </div>
                            <div class="text-wp">
                                <div class="text-title">办理状态</div>
                                <div class="text-con" :style="color(loan.status, 1)">{{statusArr[Number(loan.status)]}}</div>
                            </div>
                            <div class="text-wp">
                                <div class="text-title">申办时间</div>
                                <div class="text-con">{{getTime(loan.createdAt)}}</div>
                            </div>
                        </div>
                        <div class="hide" v-if="$index == 0" @click="showLoan = false">收起</div>
                    </div>
                </div>
			</div>
<!--             bankName: e.bankBranch.name,
            period: e.bankBranchPeriod.name,
            createdAt: e.createdAt,
            activatorFullname: e.activatorFullname,
            fullname: e.fullname,
            logo: Conf.imgUrl + e.bank.logoImg,
            status: e.statusEnum -->
            <div class="user-setting-wp" style="padding-bottom: 40px;">
                <div class="user-setting" v-if="infoSetting == 1||infoSetting == 4">
                    <p>修改昵称</p>
                    <div class="input-item" :style="setBorder(tmpName.focus)">
                        <div class="input-title">昵称</div>
                        <input type="text" name="新昵称" placeholder="请输入您的新昵称" v-model="tmpName.value" @focus="focusChange('tmpName')" @blur="focusChange('tmpName')">  
                    </div>
                    <div class="btn" :class="{'btn-active': isFinished(1)}" @click="isFinished(1)?changeName():false">确认修改</div>
                </div>
                <div class="user-setting" v-if="infoSetting == 2||infoSetting == 4">
                    <p>修改手机号</p>
                    <div class="input-item" :style="setBorder(tmpMobile.focus)">
                        <div class="input-title">修改手机</div>
                        <input type="text" name="新手机" placeholder="请输入您的新手机号" v-model="tmpMobile.value" @focus="focusChange('tmpMobile')" @blur="focusChange('tmpMobile')">  
                        <div class="code-btn" :class="{'code-active': isTruePhoneNum()}" v-if="!isSend" @click="send()">获取验证码</div>
                        <div class="code-btn" v-if="isSend">{{time}} 秒后可重试</div>
                    </div>
                    <div class="input-item" :style="setBorder(tmpVerti.focus)">
                        <div class="input-title">验证码</div>
                        <input type="text" name="验证码" placeholder="请输入您收到的验证码" v-model="tmpVerti.value" @focus="focusChange('tmpVerti')" @blur="focusChange('tmpVerti')">  
                    </div>
                    <div class="btn" :class="{'btn-active': isFinished(2)}" @click="isFinished(2)?changeMobile():false">确认修改</div>
                </div>
            </div>
		</div>
        <el-dialog
        title="确认退出"
        :visible.sync="dialogVisible"
        size="tiny">
        <span>您确认退出吗</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirmLogOut()">确 定</el-button>
        </span>
    </el-dialog>
	</div>
</template>

<script>
import HeaderNew from '@/components/HeaderNew'
import axios from 'axios'
import Conf from '../assets/conf.js'

export default{
	name: "User",
	components: {
		HeaderNew
	},
	data() {
		return{
			sideBars: [{
				name: '我的分期',
				img: '/static/user/icon-2.png',
				subList: ['查看分期',]
			},{
				name: '个人资料',
				img: '/static/user/icon-4.png',
				subList: ['昵称修改','绑定手机号修改',]
			},{
                name: '退出',
                img: '/static/user/icon-1.png',
                subList: []
            }],
            statusArr: ['申请失败', '待激活', '激活中', '激活成功', '激活失败'],
            // {
            //     name: '我的收藏',
            //     img: '/static/user/icon-1.png',
            //     subList: ['装修日记','装修攻略']
            // },
            // {
            //     name: '我的订单',
            //     img: '/static/user/icon-3.png',
            //     subList: ['主材订单',]
            // },
			// mOrders: [{
			// 	brandName: '品牌名称品牌名称',
			// 	brandImg: '/static/user/brand.png',
			// 	merchantName: '门店名称门店名称门店名称',
			// 	totalAmount: 20000,
			// 	status: 2,
			// 	createdAt: 1493232323
			// },{
			// 	brandName: '品牌名称品牌名称品牌名称品牌名称品牌名称品牌名称',
			// 	brandImg: '/static/user/brand.png',
			// 	merchantName: '门店名称门店名称门店名称',
			// 	totalAmount: 20000,
			// 	status: 3,
			// 	createdAt: 1493232323
			// },{
			// 	brandName: '品牌名称品牌名称',
			// 	brandImg: '/static/user/brand.png',
			// 	merchantName: '门店名称门店名称门店名称',
			// 	totalAmount: 20000,
			// 	status: 4,
			// 	createdAt: 1503976928
			// },{
			// 	brandName: '品牌名称品牌名称',
			// 	brandImg: '/static/user/brand.png',
			// 	merchantName: '门店名称门店名称门店名称门店名称门店名称门店名称门店名称门店名称门店名称门店名称门店名称门店名称',
			// 	totalAmount: 20000,
			// 	status: 5,
			// 	createdAt: 1504013332
			// },],
			loanAmount: 0,
			loanTitle: '已贷款总额',
			// statusArr: [{
			// 	id: 0,
			// 	value: '已预约'
			// },{
			// 	id: 1,
			// 	value: '已取消'
			// },{
			// 	id: 2,
			// 	value: '待支付'
			// },{
			// 	id: 3,
			// 	value: '待确认'
			// },{
			// 	id: 4,
			// 	value: '待收货'
			// },{
			// 	id: 5,
			// 	value: '已完成'
			// },]
            dialogVisible: false,
            userName: '',
            userMobile: localStorage.getItem('userName')?JSON.parse(localStorage.getItem('userName')).name:'您还未登录',
            infoSetting: 0,
            tmpName: {
                value: '',
                focus: false
            },
            tmpMobile: {
                value: '',
                focus: false
            },
            tmpVerti: {
                value: '',
                focus: false
            },
            time: 60,
            timekeeper: null,
            isSend: false,
            hasIns: 0,
            isLog: false,
            loanApps: [],
            showLoan: false,
		}
	},
	props: {
		
	},
	methods: {
		getTime(timeStamp) {
			var d = new Date(timeStamp * 1000)
			var Y = d.getFullYear() + '-'
			var M = (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + '-'
			var D = (d.getDate() < 10 ? '0' + (d.getDate()) : d.getDate())
			return Y + M + D
		},
		findName(id) {
			let result = ''
			this.statusArr.map((e) => {
				if (id == e.id) {
					result = e.value
				}
			})
			return result
		},
        getName() {
            if (localStorage.getItem('userInfo')) {
                if (JSON.parse(localStorage.getItem('userInfo')).profile.nickname) {
                    this.userName = JSON.parse(localStorage.getItem('userInfo')).profile.nickname
                } else {
                    this.userName = '您还未设置用户昵称'
                }
            } else {
                this.userName = '您还未登录'
            }
        },
        settingChange(id, subId) {
            if (id == 1) {
                this.infoSetting = (subId + 1)
                console.log(this.infoSetting)
            } else {
                this.infoSetting = 0
            }
        },
        setMouse(id) {
            let ret = {}
            if (id == 2) {
                ret.cursor = 'pointer'
            }
            return ret
        },
        logOut(id) {
            if (id == 2) {
                this.dialogVisible = true
            }
        },
        confirmLogOut() {
            localStorage.clear()
            alert('退出成功！')
            location.reload()
        },
        focusChange(val) {
            switch(val) {
                case 'tmpName':
                    this.tmpName.focus = !this.tmpName.focus
                    break
                case 'tmpMobile':
                    this.tmpMobile.focus = !this.tmpMobile.focus
                    break
                case 'tmpVerti':
                    this.tmpVerti.focus = !this.tmpVerti.focus
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
        isTruePhoneNum() {
            let reg = /^1[3|4|5|7|8]\d{9}$/
            return reg.test(Number(this.tmpMobile.value))
        },
        isCode() {
            let reg = /^\d{6}$/
            return reg.test(Number(this.tmpVerti.value))
        },
        isFinished(type) {
            if (type == 1) {
                return this.tmpName.value != ''
            } else if (type == 2) {
                return this.isTruePhoneNum() && this.isCode()
            }
        },
        send() {
            let that = this
            axios.post(`${Conf.userApi}sms/sendCode`, {}, {
                params: {
                    mobile:  Number(this.tmpMobile.value)
                },
                withCredentials: true,
            }).then(
            (res)=>{
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
        },
        changeName() {
            console.log('名称：'+this.tmpName.value)
            let temp = JSON.parse(localStorage.getItem('userInfo'))
            temp.profile.nickname = this.tmpName.value
            axios.post(`${Conf.userApi}customerProfiles/update`,
                temp.profile
                ).then((res) => {
                    temp.profile = res.data.data
                    localStorage.setItem('userInfo', JSON.stringify(temp))
                    this.$alert('您已成功修改昵称！', '昵称修改', {
                      confirmButtonText: '确定',
                      callback: ()=> {
                        location.reload()
                      }
                    });
                }).catch((err) => {
                    this.$message.error('连接服务器失败，请稍后再试。。');
                })
        },
        changeMobile() {
            console.log('手机号：'+this.tmpMobile.value,'验证码：'+this.tmpVerti.value,)
            axios.post(`${Conf.userApi}auth/changeMobile`, {
                code: this.tmpVerti.value,
                mobile: this.tmpMobile.value
            }).then((res) => {
                let temp = JSON.parse(localStorage.getItem('userInfo'))
                let tempName = JSON.parse(localStorage.getItem('userName'))
                temp.profile.mobile = this.tmpMobile.value
                tempName.name = this.tmpMobile.value
                localStorage.setItem('userInfo', JSON.stringify(temp))
                localStorage.setItem('userName', JSON.stringify(tempName))
                this.$alert('您已成功修改手机号！', '手机号修改', {
                    confirmButtonText: '确定',
                    callback: ()=> {
                        location.reload()
                    }
                });
            }).catch((err) => {
                let code = err.response.data.code
                if (code == 40004) {
                    this.$message.error('手机已经被绑定！');
                }
                if (code == 90204) {
                    this.$message.error('验证码错误，请重新输入！');
                  alert('验证码错误，请重新输入')
                }
                if (code == 90205) {
                    this.$message.error('验证码已过期，请重新发送！');
                }
          })
        },
        isLogin() {
            let now  = Number(new Date().getTime())
            let userInfo = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')): null
            if (userInfo == null) {
                this.isLog = false
            } else if (Number(userInfo.expiredAt) < now) {
                this.isLog = false
            } else {
                this.isLog = true
                this.getLoanApplication()
            }
        },
        getLoanApplication() {
            axios.get(`${Conf.loanApi}loan-applications?filter=userId:${JSON.parse(localStorage.getItem('userInfo')).userId}`).then((res) => {
                console.log('分期方案', res.data.data)
                let result = res.data.data
                if (result.length > 0) {
                    result.map((e) => {
                        if (e.bankBranchPeriod !== null&&e.bankBranch !== null&&e.statusEnum == 3) {
                            this.loanAmount += e.loanQuota
                        } 
                        // else if (e.bankBranchPeriod !== null&&e.bankBranch !== null) {
                            
                        // } else {
                        //     this.loanApps.push({
                        //         bankName: e.bankBranch.name?,
                        //         period: e.bankBranchPeriod.name,
                        //         createdAt: e.createdAt,
                        //         activatorFullname: e.activatorFullname,
                        //         fullname: e.fullname,
                        //         status: e.statusEnum
                        //     })
                        // }
                        this.loanApps.push({
                            bankName: e.bankBranch?e.bankBranch.name:'处理中',
                            period: e.bankBranchPeriod?e.bankBranchPeriod.name:'处理中',
                            createdAt: e.createdAt,
                            activatorFullname: e.activatorFullname?e.activatorFullname:'处理中',
                            fullname: e.fullname,
                            status: e.statusEnum
                        })
                    })
                    this.hasIns = result.length
                }
            }).catch((err) => {
                throw err
            })
        },
        goto(url) {
            if (url) {
                this.$router.push(url)
            }
        },
        gotoPhone() {
            this.$alert('请联系客服电话进行提额操作：400-039-0808', '提额申请', {
              confirmButtonText: '确定',
            });
        },
        red(str) {
            let ret = {}
            if (str == '处理中') {
                ret.color = '#ff410e'
                ret.fontWeight = '300'
            }
            return ret
        },
        color(num, type) {
            let ret = {}
            if (type == 0) {
                if (num == 3) {
                    ret.border = '2px solid #ff9736'
                }
            } else {
                switch (num) {
                    case 0:
                        ret.color = '#ff410e'
                        break
                    case 1:
                    case 2:
                        ret.color = '#666'
                        break
                    case 3:
                        ret.color = '#ff9736'
                        ret.fontWeight = '600'
                        break
                    case 4:
                        ret.color = '#ff410e'
                        ret.fontWeight = '300'
                        break
                }
            }
            return ret
        }
	},
	mounted(){
		document.title = '个人中心'
        this.getName()
        this.isLogin()

	}
}
</script>