<template>
	<view class="list-wrap">
		<view class="m-image">

		</view>
		<div class="m-info">
			<div class="info-top">
				<view class="u-title">成都大熊猫繁育基地</view>
				<view class="u-time">8:30</view>
			</div>
			<div class="info-bottom">
				<view class="u-msg">园区今日设备损坏，紧急闭园!</view>
				<view class="u-badge">
					<u-badge type="error" count="7" :absolute="false"></u-badge>
				</view>
			</div>
		</div>
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
	.list-wrap {
		background: #fff;
		display: flex;
		padding: 31rpx 0 0 32rpx;
		box-sizing: border-box;
		position: relative;

		// margin: 40rpx;

		.m-image {
			width: 80rpx;
			height: 80rpx;
			border-radius: 100%;
			background: red;
			margin-right: 20rpx;
		}

		.m-info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			// align-items: s;
			flex: 1;
			padding-bottom: 31rpx;
			box-sizing: border-box;
			padding-right: 31rpx;
			border-bottom: solid 1rpx #f2f2f2;
			// &:after{
			// 	content: "";
			// 	width: 100%;
			// 	height: 1rpx;
			// 	background: red;
			// 	right: 0;
			// 	bottom: 0;
			// }

			.info-top {
				display: flex;
				justify-content: space-between;

				.u-title {
					font-size: 29rpx;
					color: #000;
					margin-bottom: 10rpx;
				}

				.u-time {
					font-size: 24rpx;
					color: #b3b3b3;
				}
			}

			.info-bottom {
				display: flex;
				justify-content: space-between;

				.u-msg {
					font-size: 26rpx;
					color: #b3b3b3;
				}

				.u-badge {
					position: relative;
				}
			}
		}
	}
</style>
