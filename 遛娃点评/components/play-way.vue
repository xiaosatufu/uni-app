<template>
	<view class="m-wrap">
		<view class="label">TOP1</view>
		<view class="img-box">

		</view>
		<view class="m-content">
			<view class="tt">#玩法特色</view>
			<view class="comment">2.5w人点赞</view>
		</view>
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
	.m-wrap {
		width: 218rpx;
		height: 265rpx;
		border-radius: 12rpx;
		border: 1rpx solid rgba(242, 242, 242, 1);
		position: relative;
		border-radius: 12rpx 12rpx 0 0;
		overflow: hidden;

		.label {
			width: 72rpx;
			height: 36rpx;
			background: linear-gradient(135deg, rgba(242, 223, 172, 1) 0%, rgba(214, 167, 90, 1) 100%);
			border-radius: 12rpx 0rpx 12rpx 0rpx;
			position: absolute;
			top: 0;
			left: 0;
			color: #fff;
			font-size: 20rpx;
			text-align: center;
			line-height: 36rpx;
		}

		.img-box {
			width: 218rpx;
			height: 152rpx;
			margin-bottom: 20rpx;
			background: red;
		}

		.m-content {
			padding-left: 20rpx;

			.tt {
				font-size: 29rpx;
				color: #222;
				font-weight: 700;
			}

			.comment {
				font-size: 24rpx;
				color: #b3b3b3;
			}
		}
	}
</style>
