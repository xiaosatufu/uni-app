<template>
	<view>

		<view class="card-wrap" @tap="handleGoDetail">
			<card-top :time="date" :cardData="cardData">
				<template v-slot:info>

					<u-rate count="count" :current="cardData.average" active-icon="star-fill" :disabled="true" inactive-icon="star-fill"
					 inactive-color="#E6E6E6" active-color="#F7AF43"></u-rate>
				</template>
			</card-top>
			<view class="m-text">
				{{cardData.context}}
			</view>
			<image-box width="218rpx" limit='3' :images="cardData.picUrls"></image-box>
			<card-footer :isShowLable="true" :cardData="cardData"></card-footer>

		</view>
		<u-line color="#f2f2f2" />
	</view>
</template>

<script>
	import cardTop from './card-top.vue'
	import imageBox from './image-box.vue'
	import cardFooter from './card-footer.vue'
	import {
		getDateDiff
	} from '../common/util.js'
	export default {
		components: {
			cardTop,
			imageBox,
			cardFooter
		},
		props: {
			cardData: {
				type: Object,
				default: {}
			}
		},

		mounted() {
			console.log(this.cardData)
			this.date = getDateDiff(this.cardData.createTime)
		},
		data() {
			return {
				count: 5,
				date: ''
			};
		},
		methods: {
			handleGoDetail() {

				uni.navigateTo({
					url: `/pages/poi/poi-comment-detail?id=${this.cardData.id}`
				});
			}
		}
	}
</script>

<style lang="scss">
	.card-wrap {
		padding: 0 32rpx;
		box-sizing: border-box;

		.m-text {
			font-size: 29rpx;
			color: #222;
			line-height: 48rpx;
			margin-bottom: 20rpx;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
			overflow: hidden;
			display: -webkit-box;

			text-justify: inter-ideograph;
			text-align: justify;
		}
	}
</style>
