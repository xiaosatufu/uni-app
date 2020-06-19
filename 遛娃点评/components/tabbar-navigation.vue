<template>

	<view class="tabbar-container">
		<block>
			<view class="tabbar-item" v-for="(item,index) in tabbarList" :class="[item.centerItem ? ' center-item' : '']" @click="changeItem(item)">
				<view class="item-top">
					<image :src="currentItem==item.id?item.selectedIconPath:item.iconPath"></image>
				</view>
				<view class="item-bottom" :class="[currentItem==item.id ? 'item-active' : '']">
					<text>{{item.centerItem?'':item.text}}</text>
				</view>
			</view>
		</block>
		<!-- 	<view class="safe-bottom">

			</view> -->
	</view>
</template>
<script>
	export default {
		props: {
			currentPage: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				currentItem: 0,
				tabbarList: [{
						id: 0,
						pagePath: '/pages/index/index',
						iconPath: '/static/images/icon_tabbar_home_grey@3x.png',
						selectedIconPath: '/static/images/icon_tabbar_home_selected@3x.png',
						text: '首页',
						centerItem: false
					},
					{
						id: 1,
						pagePath: '/pages/find/find',
						iconPath: '/static/images/icon_tabbar_explore_grey@3x.png',
						selectedIconPath: '/static/images/icon_tabbar_explore_selected@3x.png',
						text: '遛娃',
						centerItem: false
					},
					{
						id: 2,
						pagePath: '/pages/release/release',
						iconPath: '/static/images/icon_tabber_release@3x.png',
						selectedIconPath: '/static/images/icon_tabber_release@3x.png',
						text: '发布',
						centerItem: true
					},
					{
						id: 3,
						pagePath: '/pages/message/index',
						iconPath: '/static/images/icon_tabbar_message_grey@3x.png',
						selectedIconPath: '/static/images/icon_tabbar_message_selected@3x.png',
						text: '消息',
						centerItem: false
					},
					{
						id: 4,
						pagePath: '/pages/personal-center/personal-center',
						iconPath: '/static/images/icon_tabbar_mine_grey@3x.png',
						selectedIconPath: '/static/images/icon_tabbar_mine_selected@3x.png',
						text: '我的',
						centerItem: false
					}
				]
			};
		},
		//第一次加载
		mounted() {
			this.currentItem = this.currentPage;
			uni.hideTabBar();
		},
		methods: {
			changeItem(item) {
				console.log(item)
				let _this = this;
				//_this.currentItem = item.id;  
				uni.switchTab({
					url: item.pagePath
				});
			}
		}
	};
</script>
<style lang="scss" scoped>
	view {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	.main-wrap {
		width: 100%;
		height: 100rpx;
		background: red;
	}

	.tabbar-container {
		z-index: 9999;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 98rpx;
		// box-shadow: 0 0 5px #999;
		margin-bottom: env(safe-area-inset-bottom);
		display: flex;
		align-items: center;
		// padding: 5rpx 0;
		color: #999999;
		background: #fff;
		font-size: 20rpx;
		&::after{
			content: "";
			width: 100%;
			height: env(safe-area-inset-bottom);
			background: #fff;
			position: fixed;
			bottom: 0;
			left: 0;
		}
	}

	.tabbar-container .tabbar-item {
		width: 20%;
		height: 100rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.tabbar-container .item-active {
		color: #F13B03;
	}

	.tabbar-container .center-item {
		display: block;
		position: relative;
	}

	.tabbar-container .tabbar-item .item-top {
		width: 56rpx;
		height: 56rpx;
		// padding: 10rpx;
	}

	.tabbar-container .center-item .item-top {
		flex-shrink: 0;
		width: 150rpx;
		height: 148rpx;
		position: absolute;
		top: -60rpx;
		// left: calc(50% - 50rpx);
		// border:solid 1px red;
		border-radius: 50%;
		// box-shadow: 0 0 5px #999;
		// background-color: #ffffff;
	}

	.tabbar-container .tabbar-item .item-top image {
		width: 100%;
		height: 100%;
	}

	.tabbar-container .tabbar-item .item-bottom {
		font-size: 20rpx;
		width: 100%;
	}

	.tabbar-container .center-item .item-bottom {
		position: absolute;
		bottom: 5rpx;
	}
</style>
