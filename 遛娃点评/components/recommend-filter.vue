<template>
	<view class="filter-wrap" :style="{'background':background?background:'','height':height?height:''}">
		<view class="filter-item" v-for="(item,index) in filterData" :key="item" :class="index==active?'active':''" @tap="handleTapFilter(index)">{{item}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			filterData: {
				type: Array,
				require: true,
				default: []
			},
			background: {
				type: String,
				default: ''
			},
			height: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				active: 0,
				// filterData: ["热门", "景点", "乐园", "美食", "亲子酒店"]
			};
		},
		methods: {
			handleTapFilter(index) {
				this.active = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.filter-wrap {
		display: flex;
		padding: 0 32rpx 0;
		height: 100rpx;
		background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(248, 248, 248, 1) 100%);
		align-items: center;
		// margin-top: 120rpx;

		.filter-item {
			height: 52rpx;
			background: rgba(242, 242, 242, 1);
			border-radius: 6rpx;
			line-height: 52rpx;
			padding: 0 24rpx;
			font-size: 24rpx;
			color: #555;
			margin-right: 16rpx;

			&.active {
				background: rgba(253, 237, 229, 1);
				color: #F13B03;
			}
		}
	}
</style>
