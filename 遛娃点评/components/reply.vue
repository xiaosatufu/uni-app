<template>
	<view class="m-wrap">
		<view class="m-tt">全部回复(2)</view>
		<view class="reply-header">
			<view class="u-avatar">

			</view>
			<view class="u-info">
				<view class="name">廖星儿</view>
				<view class="time">3月19日 8:53</view>
			</view>
		</view>
		<view class="reply-main">
			<!-- 回复主体 -->
			<view class="reply-text">
				这才是标准的攻略呀！感激😄
			</view>
			<view class="reply-operation">
				<view class="u-comment">
					<view class="icon">

					</view>
					<text>点赞</text>
				</view>
				<view class="u-reply" @click="handleReply">
					<view class="icon">

					</view>
					<text>
						回复
					</text>
				</view>
			</view>
			<view class="reply-content">
				<!-- 回复的回复 -->
				<view class="reply-item">
					<view class="reply-child-header">
						<view class="left">
							<view class="avatar">

							</view>
							<view class="name">黄轩轩</view>
							<view class="label">作者</view>
						</view>
						<view class="right">
							1小时前
						</view>
					</view>
					<view class="reply-child-text">
						<span>@廖星儿</span>有的，帮你查询了一下，最晚一班是23点！
					</view>
					<view class="reply-child-operation">

						<view class="u-comment">
							<view class="icon">

							</view>
							<text>点赞</text>
						</view>
						<view class="u-reply">
							<view class="icon">

							</view>
							<text>
								回复
							</text>
						</view>
					</view>
				</view>

				<u-line color="#f2f2f2" />
				<view class="reply-item">
					<view class="reply-child-header">
						<view class="left">
							<view class="avatar">

							</view>
							<view class="name">黄轩轩</view>
							<view class="label">作者</view>
						</view>
						<view class="right">
							1小时前
						</view>
					</view>
					<view class="reply-child-text">
						<span>@廖星儿</span>有的，帮你查询了一下，最晚一班是23点！
					</view>
					<view class="reply-child-operation">

						<view class="u-comment">
							<view class="icon">

							</view>
							<text>点赞</text>
						</view>
						<view class="u-reply">
							<view class="icon">

							</view>
							<text>
								回复
							</text>
						</view>
					</view>
				</view>

			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			handleReply() {

				uni.navigateTo({
					url: '/pages/poi/poi-comment-detail-reply'
				});
			}
		}
	}
</script>

<style lang="scss">
	.m-wrap {
		>.m-tt {
			height: 100rpx;
			line-height: 100rpx;
			text-indent: 32rpx;
			font-size: 32rpx;
			color: #3d3d3d;
			font-weight: 500;
		}

		.reply-header {
			height: 140rpx;
			display: flex;
			align-items: center;
			padding-left: 57rpx;
			box-sizing: border-box;

			.u-avatar {
				width: 68rpx;
				height: 68rpx;
				background: red;
				// margin: 20rpx;
				margin-right: 20rpx;
				border-radius: 100%;
			}

			.u-info {
				.name {
					font-size: 29rpx;
					color: #222;
				}

				.time {
					font-size: 20rpx;
					color: #b3b3b3;
				}
			}
		}

		.reply-main {
			.reply-text {
				font-size: 29rpx;
				color: #222;
				padding: 0 32rpx 0 144rpx;
				box-sizing: border-box;
			}

			.reply-operation {
				font-size: 24rpx;
				padding: 0 0 0 144rpx;
				box-sizing: border-box;
				color: #555;
				height: 120rpx;
				display: flex;
				align-items: center;

				.icon {

					width: 40rpx;
					height: 40rpx;
				}

				.u-comment {
					display: flex;
					align-items: center;
					margin-right: 60rpx;

					.icon {
						background: url(../static/images/icon_like_normal@3x.png);
						background-size: 100%;
						margin-right: 8rpx;
					}
				}

				.u-reply {
					display: flex;
					align-items: center;

					.icon {
						background: url(../static/images/icon_message@3x.png);
						background-size: 100%;
						margin-right: 8rpx;
					}
				}
			}

			.reply-content {
				background: #f8f8f8;
				border-radius: 12px;
				margin: 0 32rpx 40rpx 144rpx;



				.reply-child-header {
					height: 80rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 32rpx;
					box-sizing: border-box;

					.left {
						display: flex;
						align-items: center;

						.avatar {
							width: 32rpx;
							height: 32rpx;
							border-radius: 100%;
							background: red;
						}

						.name {
							font-size: 22rpx;
							color: #222;
							margin: 0 8rpx;
						}

						.label {
							width: 57rpx;
							height: 28rpx;
							background: linear-gradient(139deg, rgba(253, 118, 62, 1) 0%, rgba(230, 75, 41, 1) 100%);
							border-radius: 4rpx;
							font-size: 20rpx;
							color: #fff;
							text-align: center;
							line-height: 28rpx;
						}
					}

					.right {
						font-size: 24rpx;
						color: #b3b3b3;
					}
				}

				.reply-child-text {
					font-size: 29rpx;
					color: #555;
					padding: 0 32rpx;
					line-height: 48rpx;

					span {
						color: #999;
						margin: 10rpx;
					}
				}

				.reply-child-operation {
					font-size: 24rpx;
					color: #555;
					height: 100rpx;
					display: flex;
					align-items: center;
					padding-left: 32rpx;
					box-sizing: border-box;

					.icon {

						width: 40rpx;
						height: 40rpx;
						background: red;
					}

					.u-comment {
						display: flex;
						align-items: center;
						margin-right: 60rpx;

						.icon {
							background: url(../static/images/icon_like_normal@3x.png);
							background-size: 100%;
							margin-right: 8rpx;
						}
					}

					.u-reply {
						display: flex;
						align-items: center;

						.icon {
							background: url(../static/images/icon_message@3x.png);
							background-size: 100%;
							margin-right: 8rpx;
						}
					}
				}
			}
		}
	}
</style>
