<template>
	<view>

		<u-navbar :is-back="false" title="点赞" :border-bottom="false">
			<view class="slot-wrap" @tap="handleBack">
				<view class="back-icon"></view>
			</view>
		</u-navbar>
		<view class="comment-wrap">
			<view class="comment-item">

				<view class="card-top-wrap">
					<view class="top-left">
						<view class="avatar"></view>
						<view class="info">
							<view class="name">陈晓帅</view>
							<view class="u-info">111
							</view>
						</view>
					</view>
				</view>
				<view class="comment-content">
					赞了这条评论👍
				</view>
				<view class="m-play-way">
					<view class="comment">
						<span>@黄萱萱</span>有的，帮你查询了一下，最晚一班是23点！
					</view>
					<view class="card">
						<view class="u-image">

						</view>
						<view class="u-detail">
							这个地方在抖音，朋友圈刷爆了，好火好🔥那我肯定要去抽热闹的嘿嘿，想…
						</view>
					</view>
				</view>
				<!-- 	<view class="m-comment">
					<view class="comment">

					</view>

				</view> -->

			</view>
			<u-line color="#f2f2f2" margin="40rpx 0 0 0" />
		</view>

		<view class="comment-wrap">
			<view class="comment-item">

				<view class="card-top-wrap">
					<view class="top-left">
						<view class="avatar"></view>
						<view class="info">
							<view class="name">陈晓帅</view>
							<view class="u-info">111
							</view>
						</view>
					</view>
				</view>
				<view class="comment-content">
					赞了这篇玩法👍 </view>
				<view class="m-play-way">
					<!-- 	<view class="comment">
						<span>@黄萱萱</span>有的，帮你查询了一下，最晚一班是23点！
					</view> -->
					<view class="card">
						<view class="u-image">

						</view>
						<view class="u-detail">
							这个地方在抖音，朋友圈刷爆了，好火好🔥那我肯定要去抽热闹的嘿嘿，想…
						</view>
					</view>
				</view>
				<!-- 	<view class="m-comment">
					<view class="comment">
		
					</view>
		
				</view> -->

			</view>
			<u-line color="#f2f2f2" margin="40rpx 0 0 0" />
		</view>

		<view class="comment-wrap">
			<view class="comment-item">

				<view class="card-top-wrap">
					<view class="top-left">
						<view class="avatar"></view>
						<view class="info">
							<view class="name">陈晓帅</view>
							<view class="u-info">111
							</view>
						</view>
					</view>
				</view>
				<view class="comment-content">
					赞了这条点评👍 </view>
				<!-- <view class="m-play-way">
					<view class="comment">
						<span>@黄萱萱</span>有的，帮你查询了一下，最晚一班是23点！
					</view>
					<view class="card">
						<view class="u-image">
		
						</view>
						<view class="u-detail">
							这个地方在抖音，朋友圈刷爆了，好火好🔥那我肯定要去抽热闹的嘿嘿，想…
						</view>
					</view>
				</view> -->
				<view class="m-comment">
					<view class="comment">
						<span>@黄萱萱</span>有的，帮你查询了一下，最晚一班是23点！
					</view>
					<view class="scenic-spot-card">
						<view class="m-image">
							<view class="label">景区</view>
						</view>
						<view class="m-info">

							<view class="u-name">成都大熊猫繁育研究基地</view>
							<view class="u-rate">
								<u-rate count="count" current="3.5" active-icon="star-fill" :disabled="true" inactive-icon="star-fill"
								 inactive-color="#E6E6E6" active-color="#F7AF43"></u-rate> 9.4
							</view>
							<view class="location">位于成华区 20.5km</view>
						</view>
					</view>

				</view>

			</view>
			<u-line color="#f2f2f2" margin="40rpx 0 0 0" />
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

	.comment-item {
		padding: 0 32rpx;

		.comment-content {
			font-size: 28rpx;
			color: #222;
			line-height: 48rpx;

			span {
				color: #F13B03;
			}
		}

		.m-play-way {
			background: rgba(248, 248, 248, 1);
			border-radius: 12rpx;
			// padding: ;
			padding: 24rpx;
			box-sizing: border-box;
			margin-top: 20rpx;

			.comment {
				color: #555;
				line-height: 48rpx;
				font-size: 28rpx;
				padding-bottom: 24rpx;

				span {
					color: #F13B03;
				}
			}

			.card {
				// width: 686rpx;
				// height: 172rpx;
				background: rgba(248, 248, 248, 1);
				border-radius: 12rpx;
				padding: 0;
				box-sizing: border-box;
				display: flex;
				align-items: center;

				.u-image {
					width: 124rpx;
					height: 124rpx;
					background: red;
					border-radius: 8rpx;
					margin-right: 20rpx;
				}

				.u-detail {
					flex: 1;
					font-size: 28rpx;
					color: #999;
					line-height: 48rpx;
				}
			}
		}

		.m-comment {
			background: rgba(248, 248, 248, 1);
			border-radius: 12rpx;
			// padding: ;
			padding: 24rpx;
			box-sizing: border-box;
			margin-top: 20rpx;

			.comment {
				color: #555;
				line-height: 48rpx;
				font-size: 28rpx;
				padding-bottom: 24rpx;

				span {
					color: #F13B03;
				}
			}
		}
	}

	.scenic-spot-card {
		display: flex;

		.m-image {
			width: 124rpx;
			height: 124rpx;
			background: rgba(251, 243, 239, 1);
			border-radius: 8rpx;
			margin-right: 20rpx;

			.label {
				width: 64rpx;
				height: 36rpx;
				background: linear-gradient(138deg, rgba(253, 118, 62, 1) 0%, rgba(230, 75, 41, 1) 100%);
				border-radius: 8rpx 0rpx 8rpx 0rpx;
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

			.u-name {
				font-size: 28rpx;
				color: #222;
			}

			.u-rate {
				font-size: 24rpx;
				color: #555;
			}


			.location {
				font-size: 24rpx;
				color: #b3b3b3;
			}
		}
	}
</style>
