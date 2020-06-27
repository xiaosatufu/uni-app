<template>
	<view>

		<u-navbar :is-back="false" :title="detail.poiName" :border-bottom="false">
			<view class="slot-wrap" @tap="handleBack">
				<view class="back-icon"></view>
			</view>
		</u-navbar>
		<view class="content">
			<view class="u-tt">点评详情</view>
			<view class="m-detail" @tap="handleGoAlbum">
				<card-top :time="date" :cardData="detail">
					<template v-slot:info>

						<u-rate count="count" :current="detail.average" active-icon="star-fill" :disabled="true" inactive-icon="star-fill"
						 inactive-color="#E6E6E6" active-color="#F7AF43"></u-rate>
					</template>
				</card-top>
				<view class="m-text">
					{{detail.context}}
				</view>
				<view class="m-images">
					<view class="image-item" v-for="item in detail.picUrls" :key="item">
						<image :src="item" style="width: 218rpx;height: 218rpx;" mode="aspectFill"></image>
					</view>
				</view>

				<card-footer :isShowLable="true" :cardData="detail"></card-footer>
			</view>
			<reply></reply>
			<u-divider color="#D9D9D9" height="160">已经到底啦</u-divider>
			<!-- 正文内容 -->
		</view>
	</view>
</template>

<script>
	import cardTop from '../../components/card-top.vue'
	import cardFooter from '../../components/card-footer.vue'
	import reply from '../../components/reply.vue'
	import {
		getDateDiff
	} from '../../common/util.js'
	export default {
		components: {
			cardTop,
			cardFooter,
			reply
		},
		data() {
			return {
				id: '',
				detail: {},

				date: '',
				
			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option)
			this.id = option.id
			this.loadDetail()

		},
		methods: {
			handleBack() {
				uni.navigateBack();
			},
			handleGoAlbum() {
				uni.navigateTo({
					url: '/pages/poi/poi-comment-detail-album'
				});
			},
			loadDetail() {
				this.$api.poiCommentDetail({
					id: this.id
				}).then(res => {
					console.log(res)
					this.detail = res

					this.date = getDateDiff(this.detail.createTime)
				})
			}
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

	.content {
		background: #fff;

		>.u-tt {
			height: 100rpx;
			line-height: 100rpx;
			// display: flex;
			text-indent: 32rpx;
			font-size: 32rpx;
			color: #555;
		}

		.m-detail {
			padding: 0 32rpx;
			box-sizing: border-box;
			border-bottom: solid 20rpx #f8f8f8;

			.m-text {
				font-size: 29rpx;
				color: #222;
				line-height: 48rpx;
			}

			.m-images {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.image-item {
					width: 218rpx;
					height: 218rpx;
					border-radius: 12px;
					background: #D8D8D8;
					margin-top: 20rpx;
				}
			}
		}
	}
</style>
