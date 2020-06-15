<template>
	<view>
		<filter :filterData="filterData"></filter>
		<card @go-detail="handleGoDetail"></card>
		<view style="width: 100%;height: 24rpx;"></view>
		<card></card>
		<view style="width: 100%;height: 24rpx;"></view>
		<card></card>
		<view style="width: 100%;height: 24rpx;"></view>
		<card></card>
		<view style="width: 100%;height: 24rpx;"></view>
		<card></card>
		<view style="width: 100%;height: 24rpx;"></view>
		<card></card>
		<view style="width: 100%;height: 24rpx;"></view>
	</view>
</template>

<script>
	import card from './recommend-card.vue'
	import filter from './recommend-filter.vue'
	export default {
		components: {
			card,
			filter
		},
		data() {
			return {
				filterData: ["热门", "景点", "乐园", "美食", "亲子酒店"]
			};
		},
		methods: {
			handleGoDetail() {
				console.log(212)
				uni.navigateTo({
					url: '/pages/poi/poi-detail'
				});
			}
		}
	}
</script>

<style lang="scss">

</style>
