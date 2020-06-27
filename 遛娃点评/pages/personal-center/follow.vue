<template>
	<view class="main-content">

		<u-navbar :is-back="false" title="关注" :border-bottom="false">
			<view class="slot-wrap" @tap="handleBack">
				<view class="back-icon"></view>
			</view>
		</u-navbar>
		<view class="m-content">
			<view class="focus-item">
				<view class="card-top-wrap">
					<view class="top-left">
						<view class="avatar"></view>
						<view class="info">
							<view class="name">陈晓帅</view>
							<view class="u-info">成都市
							</view>
						</view>
					</view>
					<view class="top-right">
						<view class="btn-focus">已关注</view>
					</view>
				</view>
				<view class="m-info">
					<view class="info">去过<span>3</span>个景区·已发布<span>17</span>篇玩法</view>
					<view class="time">已获赞 <span>100W</span></view>
				</view>
				<u-line color="#f2f2f2" />
			</view>
			<view class="focus-item">
				<view class="card-top-wrap">
					<view class="top-left">
						<view class="avatar"></view>
						<view class="info">
							<view class="name">陈晓帅</view>
							<view class="u-info">成都市
							</view>
						</view>
					</view>
					<view class="top-right">
						<view class="btn-focus">已关注</view>
					</view>
				</view>
				<view class="m-info">
					<view class="info">去过<span>3</span>个景区·已发布<span>17</span>篇玩法</view>
					<view class="time">已获赞 <span>100W</span></view>
				</view>
				<u-line color="#f2f2f2" />
			</view>
		</view>
		<u-divider margin-top="50" bg-color="#f8f8f8">已经到底了</u-divider>
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

<style lang="scss">
	.main-content {
		background: #f8f8f8;
		// background: red;
		min-height: 100vh;
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

	.m-content {
		padding: 0 32rpx;
		box-sizing: border-box;
		background: #fff;

		.m-info {
			display: flex;
			justify-content: space-between;
			font-size: 24rpx;
			color: #b3b3b3;
			padding-bottom: 40rpx;

			.info {

				span {
					color: #555;
				}
			}

			.time {}
		}

		.focus-item {

			background: #fff;
		}

		.card-top-wrap {
			padding: 36rpx 0 36rpx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.top-left {
				display: flex;

				.avatar {
					width: 67rpx;
					height: 67rpx;
					border-radius: 100%;
					background: red;
					margin-right: 20rpx;
				}

				.info {
					.name {
						font-size: 28rpx;
						color: #222;
					}

					.u-info {
						font-size: 20rpx;
						color: #b3b3b3;
					}
				}
			}

			.top-right {

				.btn-focus {
					height: 55rpx;
					border-radius: 30rpx;
					border: 1rpx solid rgba(241, 59, 3, 1);
					padding: 0 24rpx;
					text-align: center;
					line-height: 55rpx;
					color: #F13B03;
					font-size: 24rpx;
				}

				.time {
					font-size: 24rpx;
					color: #b3b3b3;

					span {
						color: #222;
					}
				}
			}

		}
	}
</style>
