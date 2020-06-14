<template>
	<view class="card-wrap">
		<recommend-top></recommend-top>
		<card-top type="focus">
			<template v-slot:info>
				成都市
			</template>
		</card-top>
		<image-box></image-box>
		<footer-label></footer-label>
	</view>
</template>

<script>
	import recommendTop from './card-top-recommend.vue'
	import cardTop from './card-top.vue'
	import imageBox from './image-box.vue'
	import footerLabel from './card-footer-label.vue'
	export default {
		components: {
			recommendTop,
			cardTop,
			imageBox,
			footerLabel
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.card-wrap {
	background:rgba(255,255,255,1);
	box-shadow:0rpx 0rpx 14rpx 0rpx rgba(0,0,0,0.02);
	border-radius:16rpx;
		margin: 0 32rpx;
		padding: 0 24rpx;
}
</style>
