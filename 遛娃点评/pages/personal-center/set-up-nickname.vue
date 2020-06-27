<template>
	<view>

		<u-navbar :is-back="false" title="昵称" :border-bottom="false">
			<view class="slot-wrap" @tap="handleBack">
				<view class="back-icon"></view>
			</view>
		</u-navbar>
		<view class="m-operation">
			<view class="btn-cancel">取消</view>
			<view class="btn-push">保存</view>
		</view>
		<view class="m-content">

			<u-input v-model="value" :type="type" :border="border" />
		</view>
	</view>
</template>

<script>
	import navMixin from '../../mixins/nav-mixin.js'
	export default {
		mixins: [navMixin],
		data() {
			return {

				value: '',
				type: 'textarea',
				border: false
			};
		},
		methods: {


			handleBack() {
				uni.navigateBack();
			},
		}

	}
</script>

<style lang="scss">
	.slot-wrap {
		.back-icon {
			width: 48rpx;
			height: 48rpx;
			background: url(../../static/images/icon_nav_arrow_black@3x.png);
			background-size: 48rpx;
			margin-left: 32rpx;
		}
	}

	.m-operation {
		height: 140rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 32rpx 32rpx;
		box-sizing: border-box;
		// margin-bottom: 32rpx;
		border-bottom: solid 1rpx #f2f2f2;

		.btn-cancel {
			font-size: 32rpx;
			color: #b3b3b3;
		}

		.btn-push {
			width: 120rpx;
			height: 61rpx;
			background: linear-gradient(139deg, rgba(253, 118, 62, 1) 0%, rgba(230, 75, 41, 1) 100%);
			border-radius: 30rpx;
			line-height: 61rpx;
			text-align: center;
			font-size: 32rpx;
			color: #fff;
		}
	}

	.m-content {
		padding: 0 32rpx;
	}
</style>
