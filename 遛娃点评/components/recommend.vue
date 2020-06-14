<template>
	<view>
		<filter></filter>
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

			};
		}
	}
</script>

<style lang="scss">

</style>
