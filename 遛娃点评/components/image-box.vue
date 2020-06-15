<template>
	<view class="image-wrap">
		<view class="image-item" :style="{'width':width,'height':width}">1</view>
		<view class="image-item" :style="{'width':width,'height':width}">2</view>
		<view class="image-item" :style="{'width':width,'height':width}">3</view>
	</view>
</template>

<script>
	export default {
		props:{
			width:{
				type:String,
				default:'202rpx'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.image-wrap {
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		margin-bottom: 20rpx;
		.image-item {
			// width: 218rpx;
			// height: 218rpx;
			background: rgba(251, 243, 239, 1);
			box-shadow: 0px 0px 14rpx 0px rgba(0, 0, 0, 0.02);
			border-radius: 12rpx;
		}
	}
</style>
