<template>
	<view class="main-wrap">
		<view class="message-wrap">
			<tabbar-navigation :current-page="3"></tabbar-navigation>
			<!-- <div class="u-placeholder" :style="'height:'+header.top+'px;'"></div> -->
			<u-navbar back-text="返回" title="消息" :border-bottom="false"></u-navbar>
			<view class="m-nav">
				<view class="nav-item">
					<view class="m-icon">
						<view class="icon icon-star"></view>
					</view>
					<text class="u-text">点赞</text>
				</view>
				<view class="nav-item">
					<view class="m-icon">
						<view class="icon icon-follow"></view>
					</view>
					<text class="u-text">新增关注</text>
				</view>
				<view class="nav-item">
					<view class="m-icon">
						<view class="icon icon-comment"></view>
					</view>
					<text class="u-text">评论</text>
				</view>
			</view>


			<message-list></message-list>
			<message-list></message-list>
			<message-list></message-list>
			<message-list></message-list>
			<message-list></message-list>
			<message-list></message-list>
			<message-list></message-list>
			<message-list></message-list>
			<message-list></message-list>
			<message-list></message-list>
			<message-list></message-list>
			<!-- 	<view class="header" :style="'height:' +  header.height + 'px;'">
			<view class="back-btn">
				返回
			</view>
			<view class="u-title">消息</view>
		</view> -->
		</view>
	</view>
</template>

<script>
	import messageList from '../../components/message-list.vue'
	export default {
		components: {
			messageList
		},
		data() {
			return {

				header: {
					top: 0,
					height: 0
				},
			};
		},

		created() {
			const header = uni.getMenuButtonBoundingClientRect()
			this.header.top = header.top
			this.header.height = header.height
		},

	}
</script>

<style lang="scss">
	.u-placeholder {
		background: #fff;
	}
	.main-wrap {
		padding-bottom: env(safe-area-inset-bottom);
	}
	.message-wrap {
		background: #f8f8f8;
		padding-bottom: 150rpx;
		min-height: 92vh;

		.m-nav {
			display: flex;
			padding: 36rpx 77rpx;
			justify-content: space-between;
			background: #fff;
			border-bottom: solid 20rpx #f8f8f8;

			.nav-item {
				text-align: center;

				.m-icon {
					margin-bottom: 12rpx;

					.icon {
						width: 96rpx;
						height: 96rpx;

						&.icon-star {
							background: url(../../static/images/icon_message_like@3x.png);
							background-size: 100%;
						}

						&.icon-follow {
							background: url(../../static/images/icon_message_follow@3x.png);
							background-size: 100%;
						}

						&.icon-comment {
							background: url(../../static/images/icon_message_comment@3x.png);
							background-size: 100%;
						}
					}

				}

				.u-text {
					font-size: 29rpx;
					color: #000;
				}
			}
		}

	}

	// .header {
	// 	position: fixed;
	// 	display: flex;
	// 	align-items: center;
	// 	.back-btn {}


	// 	.u-title {
	// 		font-size: 36rpx;
	// 		color: #000;
	// 		text-align: center;
	// 	}
	// }
</style>
