<template>
	<view class="address-wrap">
		<view class="m-image">
			<view class="label">景区</view>
		</view>
		<view class="m-info">
			<view class="address-name">
				成都大熊猫繁育研究基地
			</view>
			<view class="m-rate">
				<u-rate count="count" current="3.5" active-icon="star-fill" :disabled="true" inactive-icon="star-fill" inactive-color="#E6E6E6"
				 active-color="#F7AF43"></u-rate>
				<span>9.4</span>
			</view>
			<view class="m-address">
				<span class="u-location">位于成华区</span>
				<span class="u-distance">20.5km</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				count: 4
			};
		}
	}
</script>

<style lang="scss">
	.address-wrap {
		background: rgba(248, 248, 248, 1);
		box-shadow: 0px 0px 14rpx 0px rgba(0, 0, 0, 0.02);
		border-radius: 12rpx;
		display: flex;
		padding: 20rpx;
		box-sizing: border-box;

		.m-image {
			width: 124rpx;
			height: 124rpx;
			background: rgba(251, 243, 239, 1);
			box-shadow: 0rpx 0rpx 14rpx 0rpx rgba(0, 0, 0, 0.02);
			border-radius: 8rpx;
			position: relative;
			margin-right: 22rpx;

			.label {
				width: 64rpx;
				height: 36rpx;
				background: linear-gradient(138deg, rgba(253, 118, 62, 1) 0%, rgba(230, 75, 41, 1) 100%);
				box-shadow: 0rpx 0rpx 14rpx 0rpx rgba(0, 0, 0, 0.02);
				border-radius: 8rpx 0rpx 8rpx 0rpx;
				position: absolute;
				top: 0;
				left: 0;
				font-size: 20rpx;
				color: #fff;
				text-align: center;
				line-height: 36rpx;
			}
		}

		.m-info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.address-name {
				font-size: 28rpx;
				color: #222;
				font-weight: 500;
			}

			.m-rate {}

			.m-address {
				font-size: 24rpx;
				color: #b3b3b3;

				.u-location {}

				.u-distance {}
			}

		}
	}
</style>
