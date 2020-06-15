<template>
	<view>

		<u-navbar :is-back="false" title="成都大熊猫繁育研" :border-bottom="false">
			<view class="slot-wrap" @tap="handleBack">
				<view class="back-icon"></view>
			</view>
		</u-navbar>
		<view class="m-nav">

			<u-tabs :list="list" :bar-style="barStyle" :is-scroll="false" :current="current" @change="change" inactive-color="#222"
			 active-color="#555" height="100"></u-tabs>

			<u-line color="#f2f2f2" />
		</view>
		<view class="m-content">
			<filter background="#fff" :filterData="filterData" height="120rpx"></filter>
			<view class="images-box">
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
				<view class="image-item"></view>
			</view>
		</view>
		<u-divider color="#D9D9D9" height="160">已经到底啦</u-divider>
	</view>
</template>

<script>
	// import filter from './recommend-filter.vue'
	import filter from '../../components/recommend-filter.vue'
	export default {
		components: {
			filter
		},
		data() {
			return {

				filterData: ["动物特写", "园区环境"],
				barStyle: {
					background: 'linear-gradient(139deg,rgba(253,118,62,1) 0%,rgba(241,59,3,1) 100%)',
					borderRadius: '4rpx'
				},
				list: [{
					name: '商家相册'
				}, {
					name: '遛娃相册'
				}],
				current: 0
			};
		},
		methods: {

			handleBack() {
				uni.navigateBack();
			},
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="scss">
	.slot-wrap {
		.back-icon {
			width: 32rpx;
			height: 32rpx;
			background: url(../../static/images/icon_nav_arrow_black@3x.png);
			background-size: 100%;
			margin-left: 44rpx;
		}
	}

	.m-content {
		.images-box {
			margin: 0 32rpx;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.image-item {
				width: 218rpx;
				height: 218rpx;
				border-radius: 12rpx;
				background: #d8d8d8;
				margin-bottom: 16rpx;
			}
		}
	}
</style>
