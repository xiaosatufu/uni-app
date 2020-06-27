<template>
	<view style="padding-top: 120rpx;background: #FFFFFF;">
		<filter :filterData="filterData"></filter>
		<view style="background: #f8f8f8;">

			<loading v-if="recommendData&&recommendData.length==0" style="position: relative;top: 100rpx;"></loading>
			<block v-for="(item,index) in recommendData" :key="index">

				<card :cardData="item" @go-detail="handleGoDetail"></card>
				<view style="width: 100%;height: 24rpx;"></view>
			</block>
		</view>
	</view>
</template>

<script>
	import card from './recommend-card.vue'
	import filter from './recommend-filter.vue'
	export default {
		props: {
			recommendData: {
				type: Array,
				default: []
			}
		},
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
			handleGoDetail(id) {
				console.log(212)
				uni.navigateTo({
					url: `/pages/poi/poi-detail?id=${id}`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	body,
	html {
		background: #f8f8f8;
	}
</style>
