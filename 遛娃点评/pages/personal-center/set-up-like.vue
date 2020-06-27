<template>
	<view>

		<u-navbar :is-back="false" title="喜好" :border-bottom="false">
			<view class="slot-wrap" @tap="handleBack">
				<view class="back-icon"></view>
			</view>
		</u-navbar>
		<view class="main-tt">
			你对那些内容感兴趣？
		</view>
		<view class="like-wrap">
			<view class="like-item active">
				动物园
			</view>
			<view class="like-item">
				游乐园
			</view>
			<view class="like-item">
				田园
			</view>
			<view class="like-item">
				景区
			</view>
			<view class="like-item">
				温泉
			</view>
			<view class="like-item">
				露营
			</view>
		</view>
		<view class="u-btn">
			选好了
		</view>
	</view>
</template>

<script>
	import navMixin from '../../mixins/nav-mixin.js'
	export default {
		mixins: [navMixin],
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
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
		font-size: 52rpx;
		color: #222;
		margin: 100rpx 0;
		font-weight: 700;
		text-align: center;
	}

	.like-wrap {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 0 65rpx;

		.like-item {
			width: 180rpx;
			height: 180rpx;
			background: #fbfbfb;
			border-radius: 100%;
			margin-bottom: 40rpx;
			text-align: center;
			line-height: 180rpx;
			font-size: 36rpx;
			color: #999;

			&.active {
				background: #FFF5F2;
				color: #F13B03;
			}
		}
	}
</style>
