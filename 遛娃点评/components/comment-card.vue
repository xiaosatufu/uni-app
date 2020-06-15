<template>
	<view>

		<view class="card-wrap" @tap="handleGoDetail">
			<card-top time="3小时前">
				<template v-slot:info>

					<u-rate count="count" current="3.5" active-icon="star-fill" :disabled="true" inactive-icon="star-fill"
					 inactive-color="#E6E6E6" active-color="#F7AF43"></u-rate>
				</template>
			</card-top>
			<view class="m-text">
				这个地方在抖音，朋友圈刷爆了，好火好🔥那我肯定要去抽热闹的嘿嘿，想着5.1人比较多就等到了4号，那天太热了没怎么拍照，网红景点也只打卡了3个，等后…
			</view>
			<image-box  width="218rpx"></image-box>
			<card-footer :isShowLable="true"></card-footer>

		</view>
		<u-line color="#f2f2f2" />
		<view class="card-wrap">
			<card-top time="3小时前">
				<template v-slot:info>

					<u-rate count="count" current="3.5" active-icon="star-fill" :disabled="true" inactive-icon="star-fill"
					 inactive-color="#E6E6E6" active-color="#F7AF43"></u-rate>
				</template>
			</card-top>
			<view class="m-text">
				这个地方在抖音，朋友圈刷爆了，好火好🔥那我肯定要去抽热闹的嘿嘿，想着5.1人比较多就等到了4号，那天太热了没怎么拍照，网红景点也只打卡了3个，等后…
			</view>
			<image-box width="218rpx"></image-box>
			<card-footer ></card-footer>

		</view>
		<u-line color="#f2f2f2" />
	</view>
</template>

<script>
	import cardTop from './card-top.vue'
	import imageBox from './image-box.vue'
	import cardFooter from './card-footer.vue'
	export default {
		components: {
			cardTop,
			imageBox,
			cardFooter
		},
		data() {
			return {
				count: 4
			};
		},
		methods:{
			handleGoDetail(){
				
				uni.navigateTo({
					url: '/pages/poi/poi-comment-detail'
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
