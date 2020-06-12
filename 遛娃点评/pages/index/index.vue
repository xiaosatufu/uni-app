<template>
	<view class="content">
		<view class="m-header" :style="'height:' +  header.height + 'px;' + 'padding-top:' + header.top + 'px;'">
			<view class="u-address">
				<text class="u-text">成都</text>
				<view class="u-arrow"></view>
			</view>
			<view class="u-logo">
				<image class="u-img" src="../../static/images/lwdp_logo@3x.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				header: {
					top: 0,
					height: 0
				}
			}
		},
		onLoad() {

		},
		created() {
			const header = uni.getMenuButtonBoundingClientRect()
			this.header.top = header.top
			this.header.height = header.height
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.m-header {
		background: #F85D25;
		width: 100%;
		display: flex;
		// justify-content: center;
		align-items: center;
		position: relative;

		.u-address {
			color: #fff;
			font-size: 36rpx;
			margin-left: 32rpx;
			display: flex;
			align-items: center;
			.u-arrow {
				width: 40rpx;
				height: 40rpx;
				background: url(../../static/images/icon_home_arrow_lower@3x.png);
				background-size: 100%;
				margin-left: 8rpx;
			}
		}

		.u-logo {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			.u-img {

				width: 144rpx;
				height: 44rpx;
			}

		}
	}
</style>
