<template>
	<view class="main-wrap">
		<view class="message-wrap">
			<tabbar-navigation :current-page="3"></tabbar-navigation>
			<!-- <div class="u-placeholder" :style="'height:'+header.top+'px;'"></div> -->
			<u-navbar :is-back="false" title="消息" :border-bottom="false">
				<!-- <view class="slot-wrap" @tap="handleBack">
					<view class="back-icon"></view>
				</view> -->
			</u-navbar>
			<!-- <tabbar-navbar title="12312ddd阿萨德阿萨德"></tabbar-navbar> -->
			<view class="m-nav">
				<view class="nav-item" @tap="handleNavigateTo('/pages/message/star')">
					<view class="m-icon">
						<view class="icon icon-star"></view>
					</view>
					<text class="u-text">点赞</text>
				</view>
				<view class="nav-item" @tap="handleNavigateTo('/pages/message/new-concerns')">
					<view class="m-icon">
						<view class="icon icon-follow"></view>
					</view>
					<text class="u-text">新增关注</text>
				</view>
				<view class="nav-item" @tap="handleNavigateTo('/pages/message/comment')">
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
	import navMixin from '../../mixins/nav-mixin.js'
	import messageList from '../../components/message-list.vue'
	export default {
		mixins: [navMixin],
		components: {
			messageList
		},
		data() {
			return {
				title: '虾爬子',
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
	.slot-wrap {
		.back-icon {
			width: 48rpx;
			height: 48rpx;
			background: url(../../static/images/icon_nav_arrow_black@3x.png);
			background-size: 48rpx;
			margin-left: 32rpx;
		}
	}

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
