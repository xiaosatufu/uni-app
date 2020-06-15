<template>
	<view>

		<u-navbar :is-back="false" title="玩法" :border-bottom="false">
			<view class="slot-wrap">
				<view class="back-icon"></view>
			</view>
		</u-navbar>
		<view class="m-operation">
			<view class="btn-cancel">取消</view>
			<view class="right">
				<view class="btn-save">发布</view>
				<view class="btn-push">发布</view>
			</view>
		</view>
		<view class="m-rate">
			<view class="rate-item">
				<view class="tt">服务</view>
				<u-rate count="count" current="count" active-icon="star-fill" inactive-icon="star-fill" inactive-color="#E6E6E6"
				 active-color="#F7AF43"></u-rate>
			</view>
			<view class="rate-item">
				<view class="tt">环境</view>
				<u-rate count="count" current="count" active-icon="star-fill" inactive-icon="star-fill" inactive-color="#E6E6E6"
				 active-color="#F7AF43"></u-rate>
			</view>
			<view class="rate-item">
				<view class="tt">沟通</view>
				<u-rate count="count" current="count" active-icon="star-fill" inactive-icon="star-fill" inactive-color="#E6E6E6"
				 active-color="#F7AF43"></u-rate>
			</view>

			<u-line color="#f2f2f2" />
		</view>
		<view class="m-content">

			<u-input v-model="value" :type="type" :border="border" />
		</view>
		<view class="m-upload">

			<u-upload :action="action" width="140" :file-list="fileList"></u-upload>
		</view>
		<view class="m-location">
			<location isShowArrow="true"></location>
		</view>
		<view class="m-topic">
			<add-topic></add-topic>
		</view>
	</view>
</template>

<script>
	import location from '../../components/location.vue'
	import addTopic from '../../components/add-topic.vue'
	export default {
		components: {
			location,
			addTopic
		},
		data() {
			return {
				count: 0,
				value: '',
				type: 'textarea',
				border: false,

				action: 'http://www.example.com/upload',
				fileList: []
			};
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

	.m-operation {
		height: 140rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 32rpx;
		box-sizing: border-box;
		margin-bottom: 32rpx;
		border-bottom: solid 1rpx #f2f2f2;

		.btn-cancel {
			font-size: 32rpx;
			color: #b3b3b3;
		}

		.right {
			display: flex;
			.btn-save {
				width: 152rpx;
				height: 61rpx;
				border-radius: 30rpx;
				border: 1rpx solid rgba(230, 230, 230, 1);
				font-size: 32rpx;
				color: #999999;
				text-align: center;
				line-height: 61rpx;
				margin-right: 24rpx;
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

	}

	.m-content {
		// padding: 0 32rpx;
		height: 300rpx;
		padding: 40rpx 32rpx 20rpx;
		box-sizing: border-box;
	}

	.m-rate {
		margin: 0 32rpx;

		.rate-item {
			display: flex;
			align-items: center;
			padding-bottom: 35rpx;

			.tt {
				margin-right: 60rpx;
				font-size: 32rpx;
				color: #555;
			}
		}
	}

	.m-upload {
		height: 200rpx;
		padding: 0 32rpx;
		box-sizing: border-box;
		border-bottom: solid 20rpx #f8f8f8;
	}

	.m-location {
		border-bottom: solid 20rpx #f8f8f8;
	}
</style>
