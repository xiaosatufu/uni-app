<template>
	<view class="app-container">
		<view class="main-title">
			欢迎来到遛娃点评
		</view>
		<view class="login-form">
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
						<div class="u-get-code">获取验证码</div>
					</div>
				</view>
				<view class="uni-btn-v">

					<button class="login-btn normal-login-btn active" @click="handlelogin('normal')">登录</button>
					<view class="login-btn wx-login-btn">
						<view class="icon-wx"></view>
						<text class="u-text">
							微信快捷登录
						</text>
					</view>
				</view>
			</form>
		</view>
		<view class="u-label">点击登录按钮代表您已同意用户协议和政策隐私</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					mobile: '',
					smscode: ''
				}
			};
		},
		mounted() {
			plus.navigator.setStatusBarStyle('dark');
		},
		methods: {
			handlelogin(type) {
				console.log(type)
				console.log(this.form)
				uni.redirectTo({
					url: '../layout/index'
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
