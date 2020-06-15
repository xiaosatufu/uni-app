<template>
	<view class="card-wrap" @tap="handleGoDetail">
		<view class="card-info">
			<view class="image-box"></view>
			<view class="m-info">
				<view class="u-title">成都大熊猫繁育研究基地</view>
				<view class="m-rate">
					<u-rate count="count" current="3.5" active-icon="star-fill" :disabled="true" inactive-icon="star-fill"
					 inactive-color="#E6E6E6" active-color="#F7AF43"></u-rate>
					<span>9.4</span>
				</view>
				<view class="m-comment">
					<view class="m-avatar"></view>
					<view class="u-comment"><span>566</span>人点评</view>
				</view>
				<view class="m-address">
					<span class="u-location">位于成华区</span>
					<span class="u-distance">20.5km</span>
				</view>
			</view>
		</view>
		<u-line color="#f2f2f2" />
		<card-data></card-data>
	</view>
</template>

<script>
	import cardData from './card-footer-data.vue'
	export default {
		components: {
			cardData
		},
		data() {
			return {
				count: 4
			};
		},
		methods:{
			handleGoDetail(){
				this.$emit('go-detail')
			}
		}
	}
</script>

<style lang="scss">
	.card-wrap {
		margin: 0 32rpx 0;
		padding: 32rpx 24rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 14rpx 0px rgba(0, 0, 0, 0.02);
		border-radius: 16rpx;
		// border: solid 1px red;
		box-sizing: border-box;

		.card-info {
			display: flex;
			
			margin-bottom: 32rpx;

			.image-box {
				width: 200rpx;
				height: 200rpx;
				background: rgba(251, 243, 239, 1);
				box-shadow: 0rpx 0rpx 15rpx 0rpx rgba(0, 0, 0, 0.02);
				border-radius: 12rpx;
				margin-right: 24rpx;
			}


			.m-info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.u-title {
					font-size: 32rpx;
					color: #222;
				}

				.m-rate {
					font-size: 24rpx;
					color: #555;
				}

				.m-comment {
					font-size: 24rpx;
					color: #b3b3b3;

					span {
						color: #F13B03;
					}
				}

				.m-address {
					font-size: 24rpx;
					color: #b3b3b3;

					.u-location {}

					.u-distance {}
				}
			}
		}

	}
</style>
