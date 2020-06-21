<template>
	<view>

		<u-navbar :is-back="false" title="新增关注" :border-bottom="false">
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
							<view class="u-info">111
							</view>
						</view>
					</view>
					<view class="top-right">
						<view class="btn-focus">关注</view>
					</view>
				</view>
				<view class="m-info">
					<view class="info">去过<span>3</span>个景区·已发布<span>17</span>篇玩法</view>
					<view class="time">刚刚</view>
				</view>
				<u-line color="#f2f2f2" />
			</view>
			<view class="focus-item">
				<view class="card-top-wrap">
					<view class="top-left">
						<view class="avatar"></view>
						<view class="info">
							<view class="name">陈晓帅</view>
							<view class="u-info">111
							</view>
						</view>
					</view>
					<view class="top-right">
						<view class="btn-focus">关注</view>
					</view>
				</view>
				<view class="m-info">
					<view class="info">去过<span>3</span>个景区·已发布<span>17</span>篇玩法</view>
					<view class="time">刚刚</view>
				</view>
				<u-line color="#f2f2f2" />
			</view>
			<u-divider margin-top="50">已经到底了</u-divider>
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

<style lang="scss">
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
		margin: 0 32rpx;

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
					width: 120rpx;
					height: 56rpx;
					background: linear-gradient(138deg, rgba(253, 118, 62, 1) 0%, rgba(230, 75, 41, 1) 100%);
					box-shadow: 0rpx 0rpx 14rpx 0rpx rgba(0, 0, 0, 0.02);
					border-radius: 30rpx;
					text-align: center;
					line-height: 56rpx;
					font-size: 24rpx;
					color: #fff;
				}

				.time {
					font-size: 24rpx;
					color: #b3b3b3;
				}
			}

		}
	}
</style>
