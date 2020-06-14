<template>
	<view>
		<index-page v-if="active==0"></index-page>
		<message-page v-if="active==3"></message-page>
		<view class="cu-bar tabbar  bg-white foot">
			<view class="action" v-for="(item,index) in navAction" :key="item.name" :class="{'add-action':item.name=='add','active':index==active}"
			 @tap="handleNavChange(index)">

				<view v-if="item.name!='add'" class="icon" :class="item.name&&item.name!='add'?`icon-${item.name}`:''"></view>
				<text v-if="item.name!='add'">{{item.text}}</text>

			</view>

			<!-- 	<view class="action">
				<view class="icon-index icon"></view>
				<text>首页</text>
			</view>
			<view class="action">
				<view class="icon-child icon"></view>
				<text>
					遛娃
				</text>
			</view>
			<view class="action add-action">
				<button class=""></button>
			</view>
			<view class="action">
				<view class="icon-message icon">
				</view>
				<text>消息</text>
			</view>
			<view class="action">
				<view class="icon-my icon">
				</view>
				<text>我的</text>
			</view> -->
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				navAction: [{
					name: 'index',
					text: '首页'
				}, {
					name: 'child',
					text: '遛娃'
				}, {
					name: 'add',
					text: '发布'
				}, {
					name: 'message',
					text: '消息'
				}, {
					name: 'my',
					text: '我的'
				}]
			}
		},
		methods: {
			handleNavChange(index) {
				this.active = index
				if (index != 0) {
					console.log(222)
					uni.setBackgroundColor({
						backgroundColor: '#ffffff',
						backgroundColorTop: '#ffffff',
					});
				}
			}
		}
	}
</script>

<style lang="scss">
	.cu-tabbar-height {
		min-height: 100upx;
		height: calc(100upx + env(safe-area-inset-bottom) / 2);
	}

	.cu-bar.tabbar .action.add-action {
		position: relative;
		z-index: 9999;
		margin-top: -70rpx;
		// z-index: 2;
		// padding-top: 50upx;
		width: 115rpx;
		height: 106rpx;
		background: url(../../static/images/icon_tabber_release@3x.png) top;
		background-size: 115rpx 106rpx;

		.add-btn {}
	}

	// .cu-bar.tabbar .action.add-action::after {
	// 	content: "";
	// 	position: absolute;
	// 	width: 100upx;
	// 	height: 100upx;
	// 	top: -50upx;
	// 	left: 0;
	// 	right: 0;
	// 	margin: auto;
	// 	box-shadow: 0 -3upx 8upx rgba(0, 0, 0, 0.08);
	// 	border-radius: 50upx;
	// 	background-color: inherit;
	// 	z-index: 0;
	// }

	// .cu-bar.tabbar .action.add-action::before {
	// 	content: "";
	// 	position: absolute;
	// 	width: 100upx;
	// 	height: 30upx;
	// 	bottom: 30upx;
	// 	left: 0;
	// 	right: 0;
	// 	margin: auto;
	// 	background-color: inherit;
	// 	z-index: 1;
	// }

	.bg-white {
		background-color: #ffffff;
		color: #666666;
	}

	.cu-bar {
		display: flex;
		position: relative;
		align-items: center;
		min-height: 100upx;
		justify-content: space-between;
	}

	.cu-bar .action {
		display: flex;
		align-items: center;
		height: 100%;
		justify-content: center;
		max-width: 100%;
		color: #999;
		font-size: 20rpx;

		&.active {
			color: #F13B03;

			.icon {


				&.icon-index {
					background: url(../../static/images/icon_tabbar_home_selected@3x.png);
					background-size: 100%;
				}

				&.icon-child {
					background: url(../../static/images/icon_tabbar_explore_selected@3x.png);
					background-size: 100%;
				}

				&.icon-message {
					background: url(../../static/images/icon_tabbar_message_selected@3x.png);
					background-size: 100%;
				}

				&.icon-my {
					background: url(../../static/images/icon_tabbar_mine_selected@3x.png);
					background-size: 100%;
				}
			}
		}

		.icon {

			width: 43rpx;
			height: 43rpx;
			margin: 0 auto 5rpx;

			&.icon-index {
				background: url(../../static/images/icon_tabbar_home_grey@3x.png);
				background-size: 100%;
			}

			&.icon-child {
				background: url(../../static/images/icon_tabbar_explore_grey@3x.png);
				background-size: 100%;
			}

			&.icon-message {
				background: url(../../static/images/icon_tabbar_message_grey@3x.png);
				background-size: 100%;
			}

			&.icon-my {
				background: url(../../static/images/icon_tabbar_mine_grey@3x.png);
				background-size: 100%;
			}
		}
	}



	.cu-bar .action:first-child {
		margin-left: 30upx;
		font-size: 30upx;
	}


	.cu-bar .cu-avatar:first-child {
		margin-left: 20upx;
	}


	.cu-bar .action:last-child {
		margin-right: 30upx;
	}


	.cu-bar.foot {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 1024;
		box-shadow: 0 -1upx 6upx rgba(0, 0, 0, 0.1);
	}

	.cu-bar.tabbar {
		padding: 0;
		height: calc(100upx + env(safe-area-inset-bottom) / 2);
		padding-bottom: calc(env(safe-area-inset-bottom) / 2);
	}


	.cu-bar.tabbar.shadow {
		box-shadow: 0 -1upx 6upx rgba(0, 0, 0, 0.1);
	}

	.cu-bar.tabbar .action {
		font-size: 22upx;
		position: relative;
		flex: 1;
		text-align: center;
		padding: 0;
		display: block;
		height: auto;
		line-height: 1;
		margin: 0;
		background-color: inherit;
		overflow: initial;
	}

	.cu-bar.tabbar.shop .action {
		width: 140upx;
		flex: initial;
	}

	// .cu-bar.tabbar .action.add-action {
	// 	position: relative;
	// 	z-index: 2;
	// 	padding-top: 50upx;
	// }


	// .cu-bar.tabbar .action.add-action::after {
	// 	content: "";
	// 	position: absolute;
	// 	width: 100upx;
	// 	height: 100upx;
	// 	top: -50upx;
	// 	left: 0;
	// 	right: 0;
	// 	margin: auto;
	// 	box-shadow: 0 -3upx 8upx rgba(0, 0, 0, 0.08);
	// 	border-radius: 50upx;
	// 	background-color: inherit;
	// 	z-index: 0;
	// }

	// .cu-bar.tabbar .action.add-action::before {
	// 	content: "";
	// 	position: absolute;
	// 	width: 100upx;
	// 	height: 30upx;
	// 	bottom: 30upx;
	// 	left: 0;
	// 	right: 0;
	// 	margin: auto;
	// 	background-color: inherit;
	// 	z-index: 1;
	// }


	.cu-bar.tabbar button.action::after {
		border: 0;
	}



	.cu-bar.tabbar.border .action::before {
		content: " ";
		width: 200%;
		height: 200%;
		position: absolute;
		top: 0;
		left: 0;
		transform: scale(0.5);
		transform-origin: 0 0;
		border-right: 1upx solid rgba(0, 0, 0, 0.1);
		z-index: 3;
	}

	.cu-bar.tabbar.border .action:last-child:before {
		display: none;
	}
</style>
