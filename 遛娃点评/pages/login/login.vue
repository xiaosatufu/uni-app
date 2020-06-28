<template>
	<view class="app-container">
		<view class="main-title">
			欢迎来到遛娃点评
		</view>
		<view class="login-form">
			<view class="wrap">
				<!-- <u-toast ref="uToast"></u-toast> -->
				<!-- <view @tap="getCode">{{tips}}</view> -->
			</view>
			<form>
				<view class="uni-form-item uni-column">
					<view class="title">手机号码</view>
					<input class="uni-input" placeholder-class="font-color" v-model="form.mobile" placeholder="请输入您的手机号码" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">获取验证码</view>
					<div class="m-code">
						<input class="uni-input" placeholder-class="font-color" v-model="form.smscode" placeholder="请输入验证码" />
						<view class="u-divide"></view>
						<div class="u-get-code">
							<u-verification-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"></u-verification-code>
							<view @tap="getCode">{{tips}}</view>
						</div>
					</div>
				</view>
				<view class="uni-btn-v">

					<button class="login-btn normal-login-btn active" @click="handlelogin('normal')">登录</button>
					<button class="login-btn wx-login-btn" lang="zh_CN" open-type="getUserInfo" @getuserinfo="handleGetUserInfo">
						<view class="icon-wx"></view>
						<text class="u-text">
							微信快捷登录
						</text>
					</button>
					<!-- 	<view class="login-btn wx-login-btn" @tap="userLogin">
						
					</view> -->
				</view>
			</form>
		</view>
		<view class="u-label">点击登录按钮代表您已同意用户协议和政策隐私</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {

				tips: '',
				// refCode: null,
				seconds: 10,
				form: {
					mobile: '',
					smscode: ''
				},
				loginData: {

					type: 0,
					code: ''

				},
				wxParams: {}
			};
		},
		onLoad() {
			this.getSettingMes()
			uni.hideTabBar();
			//判断token是否存在，如果存在直接进入首页
			uni.getStorage({
				key: 'token',
				success: function(res) {
					// console.log(res.data);

					uni.reLaunch({
						url: '../index/index'
					});
				}
			});
		},
		mounted() {
			// plus.navigator.setStatusBarStyle('dark');
		},
		methods: {
			...mapMutations(['login', 'saveUserInfo']),
			codeChange(text) {
				this.tips = text;
			},
			handleGetUserInfo(res) {
				console.log('=======')
				console.log(res)
				console.log('=======')
				//获取用户信息
				if (res.detail.userInfo) {
					console.log(1)
					this.wxParams = res.detail
					this.userLogin()
				} else {

					console.log(2)
				}

			},

			// 查看已授权选项
			getSettingMes() {
				let _this = this;
				uni.getSetting({
					success(res) {
						if (res.authSetting['scope.userInfo']) {
							// 用户信息已授权，获取用户信息
							uni.getUserInfo({
								success(res) {
									console.log(res);
								},
								fail() {
									console.log("获取用户信息失败")
								}
							})
						} else if (!res.authSetting['scope.userInfo']) {
							console.log("需要点击按钮手动授权")
						}
					},
					fail() {
						console.log("获取已授权选项失败")
					}
				})
			},
			userLogin() {
				uni.login({
					success: (res) => {
						this.loginData.code = res.code

						this.$api.authLogin(this.loginData).then(response => {
							console.log(response)
							if (response) {
								//把token存入store
								this.login(response)
								//同步数据
								this.handleAuthUserInfo()
							}
						}).catch((err) => {
							console.log(err)
						})
						// uni.getUserInfo({
						// 	provider: 'weixin',
						// 	success: function(infoRes) {
						// 		console.log('用户昵称为：' + infoRes.userInfo.nickName);
						// 	},
						// 	fail:function(err){
						// 		console.log(err)
						// 	}
						// });
					}
				})
				// this.$api.authLogin(this.loginData).then(res=>{
				// 	console.log(res)
				// })
			},
			handleAuthUserInfo() {
				const submitData = {
					wxEncryptionUser: {
						encryptedData: this.wxParams.encryptedData,
						iv: this.wxParams.iv,
						rawData: this.wxParams.rawData,
						signature: this.wxParams.signature,
						userInfo: JSON.stringify(this.wxParams.userInfo)
					},
					type: '0'
				}
				this.$api.authUserInfo(submitData).then(response => {
					console.log(response)
					if (response) {
						
						this.saveUserInfo(response)
						// 跳转到首页
						uni.reLaunch({
							url: '../index/index'
						});

					}
				})
			},
			getCode() {
				console.log(11)
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					this.$api.userSendCode({
						mobile: '18081013913'
					}).then(res => {
						// 获得数据 
						console.log(res)
					}).catch(res => {
						// 失败进行的操作
					})
					// uni.request({
					// 	url: 'http://test-liuwa.hupovip.net/user/sendCode', //仅为示例，并非真实接口地址。
					// 	method:'POST',
					// 	data: {
					// 		mobile: '18081013913'
					// 	},
					// 	// header: {
					// 		// 'custom-header': 'hello' //自定义请求头信息
					// 	// },
					// 	success: (res) => {
					// 		console.log(res);
					// 		// this.text = 'request success';
					// 	}
					// });
					// setTimeout(() => {
					// 	uni.hideLoading();
					// 	// 这里此提示会被this.start()方法中的提示覆盖
					// 	this.$u.toast('验证码已发送');
					// 	// 通知验证码组件内部开始倒计时
					// 	this.$refs.uCode.start();
					// }, 2000);
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			end() {
				this.$u.toast('倒计时结束');
			},
			start() {
				this.$u.toast('倒计时开始');
			},
			handlelogin(type) {
				console.log(type)
				console.log(this.form)
				uni.reLaunch({
					url: '../index/index'
				});
			},

			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			}
		}
	}
</script>

<style lang="scss">
	.font-color {
		color: #B3B3B3;
		font-size: 24rpx;
	}

	.app-container {
		margin: 0 60rpx;

		.main-title {
			padding: 92rpx 0 20rpx 0;

			font-size: 52rpx;
			color: #222222;
			font-weight: 600;

		}

		.login-form {
			.uni-form-item {
				.title {
					font-size: 32rpx;
					color: #222;
					font-weight: 500;
					margin-top: 60rpx;
				}

				.m-code {
					display: flex;
					align-items: center;
					position: relative;
					border-bottom: solid 1rpx #F2F2F2;

					.uni-input {
						flex: 1;
						border: none;
					}

					.u-get-code {
						width: 173rpx;
						text-align: right;
						font-size: 28rpx;
						color: #555;
					}

					.u-divide {
						width: 2rpx;
						height: 32rpx;
						background: #f2f2f2;
					}
				}

				.uni-input {
					height: 100rpx;
					border-bottom: solid 1rpx #F2F2F2;

				}
			}

			.uni-btn-v {
				margin-top: 120rpx;

				.login-btn {
					width: 630rpx;
					height: 100rpx;
					line-height: 100rpx;
					border-radius: 50rpx;
					font-size: 36rpx;
					color: #FFFFFF;

					&.normal-login-btn {
						background: linear-gradient(138deg, rgba(253, 118, 62, 1) 0%, rgba(241, 59, 3, 1) 100%);
						opacity: 0.5;
						margin-bottom: 60rpx;

						&.active {
							opacity: 1;
						}
					}

					&.wx-login-btn {
						background: linear-gradient(135deg, rgba(54, 187, 99, 1) 0%, rgba(70, 187, 54, 1) 100%);
						display: flex;
						align-items: center;
						justify-content: center;

						.icon-wx {
							width: 46rpx;
							height: 40rpx;
							background: url(../../static/images/icon_wechat@3x.png);
							background-size: 100%;
							margin-right: 24rpx;
						}
					}
				}
			}
		}

		.u-label {
			font-size: 24rpx;
			color: #B3B3B3;
			text-align: center;
			position: absolute;
			bottom: 120rpx;
			width: 630rpx;
		}
	}
</style>
