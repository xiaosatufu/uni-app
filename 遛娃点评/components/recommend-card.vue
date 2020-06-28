<template>
	<view class="card-wrap" @tap="handleGoDetail(cardData.id)">
		<view class="card-info">
			<view class="image-box">
				<image class="image" :src="thumbnailUrl" mode="aspectFill"></image>
			</view>
			<view class="m-info">
				<view class="u-title">{{cardData.name}}</view>
				<view class="m-rate">
					<u-rate count="count" :current="cardData.score" active-icon="star-fill" :disabled="true" inactive-icon="star-fill"
					 inactive-color="#E6E6E6" active-color="#F7AF43"></u-rate>
					<span>{{cardData.score?cardData.score:'暂无评分'}}</span>
				</view>
				<view class="m-comment">
					<view class="m-avatar"></view>
					<view class="u-comment" v-if="cardData.commentCount"><span>{{cardData.commentCount}}</span>人点评</view>
					<view class="u-comment" v-else>暂无点评</view>
				</view>
				<view class="m-address">
					<span class="u-location">位于成华区</span>
					<span class="u-distance">20.5km</span>
				</view>
			</view>
		</view>
		<u-line color="#f2f2f2" />
		<card-data :tags="cardData.tag"></card-data>
	</view>
</template>

<script>
	import cardData from './card-footer-data.vue'
	export default {
		props: {
			cardData: {
				require: true,
				type: Object,
				default: {}
			}
		},
		components: {
			cardData
		},
		mounted(){
			if(this.cardData.thumbnailUrl && this.cardData.thumbnailUrl.indexOf(',')!=-1) {
				this.thumbnailUrl = this.cardData.thumbnailUrl.split(',')[0]
			} else {
				this.thumbnailUrl = this.cardData.thumbnailUrl
			}
		},
		data() {
			return {
				count: 5,
				thumbnailUrl:''
			};
		},
		methods: {
			handleGoDetail(id) {
				this.$emit('go-detail',id)
			}
		}
	}
</script>

<style lang="scss">
	.card-wrap {
		margin: 0 32rpx 0;
		padding: 32rpx 24rpx 0;
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
				overflow: hidden;

				.image {
					width: 200rpx;
					height: 200rpx;
					// display: block;
					// max-width: 100%;
				}
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

					.u-distance {
						margin-left: 20rpx;
					}
				}
			}
		}

	}
</style>
