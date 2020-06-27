<template>
	<view>
		<view class="m-header">
			<view class="info">
				<view class="icon"></view>
				<text>添加话题</text>
			</view>
		</view>
		<view class="m-topic-wrap">
			<!-- <view class="topic-item"></view> -->

			<!-- <view class="topic-item active">遛娃周末好去处</view>
			<view class="topic-item">遛娃周末处</view>
			<view class="topic-item">好去处</view>
			<view class="topic-item">遛娃周末好去处</view>
			<view class="topic-item">遛娃周末好去处</view> -->
			<view class="topic-item" v-for="(value,key,index) in topic" :key="index" :calss="key==current?'active':''" @tap="handleIndex(key)">
				<!-- {{ index }}. {{ key }} - {{ value }} -->
				{{value}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			topic: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				current: ''
			};
		},
		methods:{
			handleIndex(key) {
				this.current = key
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-header {
		height: 100rpx;
		display: flex;
		align-items: center;
		padding: 0 32rpx 0 40rpx;
		box-sizing: border-box;
		justify-content: space-between;

		.info {
			display: flex;
			align-items: center;
			font-size: 29rpx;
			color: #222;

			.icon {
				width: 40rpx;
				height: 40rpx;
				background: url(../static/images/icon_label_topic_grey@3x.png);
				background-size: 100%;
				margin-right: 23rpx;
			}
		}

		.arrow {
			width: 40rpx;
			height: 40rpx;
			background: url(../static/images/icon_list_arrow_grey@3x.png);
			background-size: 40rpx;
		}
	}

	.m-topic-wrap {
		margin: 0 32rpx;
		display: flex;
		flex-wrap: wrap;

		.topic-item {
			// width: 244rpx;
			padding-right: 20rpx;
			height: 48rpx;
			border-radius: 31rpx;
			font-size: 24rpx;
			color: #222222;
			line-height: 48rpx;
			text-indent: 57rpx;
			margin: 0 20rpx 20rpx 0;

			background: url(../static/images/icon_poi_topic@3x.png) #FDEDE5 12px center no-repeat;
			background-size: 32rpx;

			&.active {
				// background: rgba(253, 237, 229, 1);
				background: url(../static/images/icon_label_topic_orange@3x.png) #FDEDE5 12px center no-repeat;
				background-size: 32rpx;
				color: #F13B03;

			}
		}
	}
</style>
