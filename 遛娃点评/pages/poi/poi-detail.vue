<template>
	<view>
		<view class="m-swiper" style="margin-top: 200rpx;"></view>
		<view class="m-header">
			<view class="m-title">
				<view class="u-name">成都大熊猫繁育研究基地</view>
				<view class="m-btn">收藏</view>
			</view>
			<view class="m-rate">
				<view class="m-info">
					<view class="u-rate">9.4</view>
					<view class="m-comment-rate">
						<view class="u-text">遛娃点评评分</view>
						<view class="rate">
							<u-rate count="count" current="3.5" active-icon="star-fill" :disabled="true" inactive-icon="star-fill"
							 inactive-color="#E6E6E6" active-color="#F7AF43"></u-rate>
						</view>
					</view>
				</view>
				<view class="u-comment">已有<span>180</span>人点评</view>
			</view>
			<view class="u-introduce">全世界最可爱的熊猫，一定是在这里！全川推荐最值得一去的地方哦～一定要来这里！不看熊猫非好汉…</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				count: 4
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.m-header {
		padding-bottom: 48rpx;
		border-bottom: solid 20rpx #f8f8f8;
		.m-title {
			height: 140rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 0 32rpx;

			.u-name {
				font-size: 40rpx;
				font-weight: 500;
				color: rgba(34, 34, 34, 1);
				line-height: 56rpx;
			}

			.m-btn {
				width: 136rpx;
				height: 60rpx;
				border-radius: 30rpx;
				border: 1rpx solid rgba(230, 230, 230, 1);
				background: url(../../static/images/icon_stars_grey@3x.png) 20rpx center no-repeat;
				font-size: 24rpx;
				color: #555;
				text-indent: 64rpx;
				// text-align: center;
				line-height: 60rpx;

			}
		}

		.m-rate {
			background: rgba(255, 245, 242, 1);
			border-radius: 16px;
			padding: 27rpx 28rpx 33rpx 40rpx;
			margin: 0 32rpx 36rpx;
			display: flex;
			box-sizing: border-box;
			align-items: center;
			justify-content: space-between;

			.m-info {

				display: flex;

				.u-rate {
					font-size: 68rpx;
					font-family: DIN-Medium, DIN;
				}

				.m-comment-rate {
					display: flex;
					flex-direction: column;
					justify-content: center;
					margin-left: 20rpx;
					// justify-content: space-between;

					.u-text {
						font-size: 24rpx;
						color: #555;
						margin-bottom: 9rpx;
						margin-top: 9rpx;
					}
				}
			}

			.u-comment {
				font-size: 24rpx;
				color: #555;

				span {
					color: #F13B03;
				}
			}
		}

		// .u-introduce {}

		.u-introduce {
			// width: 400rpx;
			position: relative;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-justify: inter-ideograph;
			text-align: justify;
			font-size: 28rpx;
			color: #555;
			// margin-bottom: 40rpx;
			line-height: 48rpx;
			margin: 0 32rpx
		}

		.u-introduce:after {
			content: "...全部";
			position: absolute;
			bottom: 0;
			right: 0;
			padding: 0 0 1rpx 0;
			cursor: pointer;
			background: #FFFFFF;
			color: #F13B03;
		}
	}
</style>
