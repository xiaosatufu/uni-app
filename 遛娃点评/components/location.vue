<template>
	<view class="m-wrap">
		<view class="info">
			<view class="icon"></view>
			<text>成都 · 成都大熊猫繁育研究基地</text>
		</view>
		<view class="arrow" v-if="isShowArrow"></view>
	</view>
</template>

<script>
	export default {
		props:{
			isShowArrow:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.m-wrap {
	height: 100rpx;
	display: flex;
	align-items: center;
	padding: 0 32rpx 0 40rpx;
	box-sizing: border-box;
	justify-content: space-between;
	.info {
		display: flex;
		align-items: center;
		font-size: 29rpx;
		color: #222;
		.icon {
			width: 40rpx;
			height: 40rpx;
			background: url(../static/images/iocn_location_grey@3x.png);
			background-size: 100%;
			margin-right: 23rpx;
		}
	}
	.arrow {
		width: 40rpx;
		height: 40rpx;
		background: url(../static/images/icon_list_arrow_grey@3x.png);
		background-size: 40rpx;
	}
}
</style>
