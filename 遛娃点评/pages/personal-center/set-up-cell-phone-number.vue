<template>
	<view>

		<u-navbar :is-back="false" title="修改手机号" :border-bottom="false">
			<view class="slot-wrap" @tap="handleBack">
				<view class="back-icon"></view>
			</view>
		</u-navbar>
		<view class="main-tt">
			您当前绑定的手机号为<br><span>152****6662</span> 是否确认更换？
		</view>
		<view class="u-notice">
			*为了您的账户安全，30天内只能更换1次手机号，如果您需要登录其他账号，请返回页面底部切换账号。
		</view>
		<button class="u-btn" open-type="getPhoneNumber" @getphonenumber="decryptPhoneNumber">
			确认更换
		</button>
	</view>
</template>

<script>
	import navMixin from '../../mixins/nav-mixin.js'
	export default {
		mixins: [navMixin],
		data() {
			return {

			};
		},
		methods:{
			decryptPhoneNumber(res){
				console.log(res)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.slot-wrap {
		.back-icon {
			width: 48rpx;
			height: 48rpx;
			background: url(../../static/images/icon_nav_arrow_black@3x.png);
			background-size: 48rpx;
			margin-left: 32rpx;
		}
	}

	.main-tt {
		font-size: 40rpx;
		color: #222;
		font-weight: 700;
		margin: 160rpx 0 100rpx 0;
		text-align: center;
		line-height: 60rpx;

		span {
			color: #F13B03;
		}
	}

	.u-notice {
		font-size: 28rpx;
		color: #555;
		margin: 0 60rpx;
		line-height: 40rpx;
	}

	.u-btn {
		width: 630rpx;
		height: 100rpx;
		background: linear-gradient(138deg, rgba(253, 118, 62, 1) 0%, rgba(241, 59, 3, 1) 100%);
		border-radius: 50rpx;
		text-align: center;
		line-height: 100rpx;
		font-size: 36rpx;
		color: #fff;
		position: absolute;
		left: 50%;
		margin-left: -315rpx;
		bottom: 120rpx;
	}
</style>
