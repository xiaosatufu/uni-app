<template>
	<view class="card-footer">
		<view>去过<span>3</span>个景区 · 已发布<span>17</span> 篇玩法 · 已获赞<span>100W</span></view>
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
	.card-footer {
		// width: 686rpx;
		// width: 100%;
		height: 120rpx;
		// box-shadow: 0rpx 0rpx 14rpx 0rpx rgba(0, 0, 0, 0.02);
		// border-radius: 0rpx 0rpx 16rpx 16rpx;
		display: flex;
		align-items: center;
		// padding: 0;
		box-sizing: border-box;
		font-size: 24rpx;
		color:#b3b3b3;
		span {
			color: #555;
			padding: 0 5rpx;
		}
	}
</style>
