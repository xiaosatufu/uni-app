<template>
	<view>
		<filter :filterData="filterData"></filter>
		<block v-for="(item,index) in recommendData" :key="index">

			<card :cardData="item" @go-detail="handleGoDetail"></card>
			<view style="width: 100%;height: 24rpx;"></view>
		</block>
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

<style lang="scss">

</style>
