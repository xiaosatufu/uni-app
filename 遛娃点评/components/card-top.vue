<template>
	<view class="card-top-wrap">
		<view class="top-left">
			<view class="avatar"></view>
			<view class="info">
				<view class="name">陈晓帅</view>
				<view class="u-info">
					<slot name="info"></slot>
				</view>
			</view>
		</view>
		<view class="top-right">
			<!-- <slot></slot> -->
			<!-- <slot name="right"></slot> -->
			<view class="btn-more" v-if="type=='more'"></view>
			<view class="btn-focus" v-if="type=='focus'">关注</view>
			<view class="time" v-if="time">{{time}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				type:String,
				default: ''
			},
			time:{
				type:String,
				default:''
			}
		},
		data() {
			return {

			}
		},
		mounted() {
			console.log(this.type)
		}
	}
</script>

<style lang="scss">
	.card-top-wrap {
		padding: 36rpx 0 36rpx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.top-left {
			display: flex;

			.avatar {
				width: 67rpx;
				height: 67rpx;
				border-radius: 100%;
				background: red;
				margin-right: 20rpx;
			}

			.info {
				.name {
					font-size: 28rpx;
					color: #222;
				}

				.u-info {
					font-size: 20rpx;
					color: #b3b3b3;
				}
			}
		}

		.top-right {
			.btn-more {
				width: 31rpx;
				height: 31rpx;
				background: url(../static/images/icon_moer@3x.png);
				background-size: 100%;
			}

			.btn-focus {
				width: 120rpx;
				height: 56rpx;
				background: linear-gradient(138deg, rgba(253, 118, 62, 1) 0%, rgba(230, 75, 41, 1) 100%);
				box-shadow: 0rpx 0rpx 14rpx 0rpx rgba(0, 0, 0, 0.02);
				border-radius: 30rpx;
				text-align: center;
				line-height: 56rpx;
				font-size: 24rpx;
				color: #fff;
			}
			.time {
				font-size: 24rpx;
				color: #b3b3b3;
			}
		}

	}
</style>
