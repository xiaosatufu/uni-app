<template>
	<u-navbar :title="title" :border-bottom="borderBottom">
		1
		<view class="slot-wrap" v-if="isBack" @tap="handleBack">
			<view class="back-icon"></view>
			<view class="dd">
				123123213
			</view>
		</view>
	</u-navbar>

	<!-- 	<u-navbar :is-back="false" title="成都大熊猫繁育研" :border-bottom="false">
			<view class="slot-wrap" @tap="handleBack">
				<view class="back-icon"></view>
			</view>
		</u-navbar> -->
</template>

<script>
	export default {
		props: {
			isClose: {
				type: Boolean,
				default: false
			},
			isBack: {
				type: Boolean,
				default: true
			},
			backColor: {
				type: String,
				default: 'white'
			},
			borderBottom: {
				type: Boolean,
				default: false
			},
			// title: {
			// 	type: String,
			// 	default: '标题11'
			// }
		},
		data() {
			return {
				title: 123123
			};
		}
	}
</script>

<style lang="scss" scoped>
	.slot-wrap {
		display: flex;
		align-items: center;
		/* 如果您想让slot内容占满整个导航栏的宽度 */
		/* flex: 1; */
		/* 如果您想让slot内容与导航栏左右有空隙 */
		/* padding: 0 30rpx; */
	}

	.back-icon {
		width: 48rpx;
		height: 48rpx;
		background: url(../static/images/icon_nav_arrow_white@3x.png);
		background-size: 48rpx;
	}
</style>
