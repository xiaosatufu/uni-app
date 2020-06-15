<template>
	<view class="m-card-footer">
		<view class="left content" v-if="isShowLable">遛娃周末好去处</view>
		<view class="left" v-else></view>
		
		<view class="right">
			<view class="m-message m-item">
				<view class="icon"></view>
				<text>25</text>
			</view>
			<view class="m-star m-item">
				<view class="icon"></view><text>33</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			isShowLable:{
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
	.m-card-footer {
		height: 120rpx;
		// box-shadow: 0rpx 0rpx 14rpx 0rpx rgba(0, 0, 0, 0.02);
		display: flex;
		align-items: center;

		.left {
			width: 244rpx;
			height: 48rpx;
			border-radius: 31rpx;

			&.content {
				// background: rgba(253, 237, 229, 1);
				background: url(../static/images/icon_label_topic_orange@3x.png) #FDEDE5 12px center  no-repeat;
				background-size: 32rpx;
				font-size: 24rpx;
				color: #F13B03;
				line-height: 48rpx;
				text-indent: 57rpx;
			}
		}

		.right {
			display: flex;
			flex: 1;

			justify-content: flex-end;
			align-items: center;

			.icon {
				width: 31rpx;
				height: 31rpx;
				margin-right: 8rpx;
			}

			.m-item {
				display: flex;
				align-items: center;
				font-size: 24rpx;
				color: #555;
				margin-left: 100rpx;
			}

			.m-message {
				.icon {
					background: url(../static/images/icon_message@3x.png);
					background-size: 100%;
				}
			}

			.m-star {
				.icon {
					background: url(../static/images/icon_like_normal@3x.png);
					background-size: 100%;
				}
			}
		}

	}
</style>
