<template>
	<view class="m-card-footer">
		<view class="m-message m-item">
			<view class="icon"></view>
			<text>25</text>
		</view>
		<view class="m-star m-item">
			<view class="icon"></view><text>33</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.m-card-footer {
		height: 120rpx;
		// box-shadow: 0rpx 0rpx 14rpx 0rpx rgba(0, 0, 0, 0.02);
		display: flex;
		justify-content: flex-end;
		align-items: center;

		.icon {
			width: 31rpx;
			height: 31rpx;
			margin-right: 8rpx;
		}

		.m-item {
			display: flex;
			align-items: center;
			font-size: 24rpx;
			color: #555;
			margin-left: 100rpx;
		}

		.m-message {
			.icon {
				background: url(../static/images/icon_message@3x.png);
				background-size: 100%;
			}
		}

		.m-star {
			.icon {
				background: url(../static/images/icon_like_normal@3x.png);
				background-size: 100%;
			}
		}
	}
</style>
