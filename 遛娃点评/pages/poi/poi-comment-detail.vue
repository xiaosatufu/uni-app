<template>
	<view>

		<u-navbar :is-back="false" title="成都大熊猫繁育研" :border-bottom="false">
			<view class="slot-wrap" @tap="handleBack">
				<view class="back-icon"></view>
			</view>
		</u-navbar>
		<view class="content">
			<view class="u-tt">点评详情</view>
			<view class="m-detail" @tap="handleGoAlbum">
				<card-top time="3小时前">
					<template v-slot:info>

						<u-rate count="count" current="3.5" active-icon="star-fill" :disabled="true" inactive-icon="star-fill"
						 inactive-color="#E6E6E6" active-color="#F7AF43"></u-rate>
					</template>
				</card-top>
				<view class="m-text">
					这个地方在抖音，朋友圈刷爆了，好火好🔥那我肯定要去抽热闹的嘿嘿，想着5.1人比较多就等到了4号，那天太热了没怎么拍照，网红景点也只打卡了3个，等以后机会我第一好好发挥，不拍个1000张不散场，哈哈哈~
					继续往里面走，就会发现大熊猫和小浣熊还有很多漂亮的孔雀，小朋友很喜欢，很可爱。最后，献上我仅有的照片，还是非常推荐大家去玩的，不论是亲子，情侣，闺蜜，都很适合😊😊
				</view>
				<view class="m-images">
					<view class="image-item"></view>
					<view class="image-item"></view>
					<view class="image-item"></view>
					<view class="image-item"></view>
					<view class="image-item"></view>
					<view class="image-item"></view>
				</view>

				<card-footer :isShowLable="true"></card-footer>
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
	export default {
		components: {
			cardTop,
			cardFooter,
			reply
		},
		data() {
			return {

			}
		},
		methods: {
			handleBack() {
				uni.navigateBack();
			},
			handleGoAlbum() {

				uni.navigateTo({
					url: '/pages/poi/poi-comment-detail-album'
				});
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
