<template>
	<view class="m-wrap">
		<view class="u-icon" :class="iconType?iconType:''"></view>
		<view class="m-info">
			<view class="left">
				<slot name="left"></slot>
			</view>
			<view class="right">
				<view>
					<slot name="right"></slot>
				</view>
				<view class="arrow">

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			iconType: {
				type: String,
				default: ''
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.m-wrap {
		height: 100rpx;
		display: flex;

		.u-icon {
			width: 88rpx;
			// background-color: pink;

			&.introduce {
				background: url(../static/images/icon_poi_introduce@3x.png) no-repeat center 32rpx;
				background-size: 40rpx;
			}

			&.ticket {
				background: url(../static/images/icon_poi_coupon@3x.png) no-repeat center 32rpx;
				background-size: 40rpx;
			}

			&.time {
				background: url(../static/images/icon_poi_time@3x.png) no-repeat center 32rpx;
				background-size: 40rpx;
			}

			&.location {
				background: url(../static/images/iocn_location@3x.png) no-repeat center 32rpx;
				background-size: 40rpx;
			}
		}

		.m-info {
			display: flex;
			flex: 1;
			align-items: center;
			justify-content: space-between;
			border-bottom: solid 1rpx #F2F2F2;

			.left {
				font-size: 28rpx;
				color: #222;
			}

			.right {
				font-size: 28rpx;
				color: #999;
				display: flex;
				align-items: center;

				.arrow {
					width: 22rpx;
					height: 22rpx;
					background: url(../static/images/icon_list_arrow_grey@3x.png);
					background-size: 22rpx;
					margin: 0 32rpx 0 8rpx;
				}
			}
		}
	}
</style>
