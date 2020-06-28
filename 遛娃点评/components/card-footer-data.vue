<template>
	<view class="card-wrap">
		<span v-for="item in tags">{{item}}</span>
	</view>
</template>
<script>
	export default {
		props:{
			tags:{
				type:Array,
				default:[]
			}
		},
		mounted(){
			// console.log(this.tags)
		}
	}
</script>
<style lang="scss">
	.card-wrap {
		// box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.02);
		border-radius: 0px 0px 16px 16px;
		height: 100rpx;
		display: flex;
		align-items: center;
		span {
			padding: 7rpx 12rpx;
			box-sizing: border-box;
			box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.02);
			border-radius: 6px;
			border: 1px solid rgba(198, 198, 198, 1);
			font-size: 22rpx;
			color: #555;
			margin-right: 16rpx;
		}
	}
</style>
