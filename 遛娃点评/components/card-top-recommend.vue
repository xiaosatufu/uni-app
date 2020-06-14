<template>
	<view class="card-top">
		<view class="title">推荐关注</view>
		<view class="intro">该用户最近7天收获了1000+粉丝哦</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.card-top {
	// width:686px;
	height:80rpx;
	// box-shadow:0rpx 0rpx 14rpx 0rpx rgba(0,0,0,0.02);
	border-radius:0rpx 0rpx 16rpx 16rpx;
	padding: 36rpx 0 4rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.title {
		font-size: 28rpx;
		color: #555;
	}
	.intro {
		font-size: 24rpx;
		color: #b3b3b3;
	}
}
</style>
