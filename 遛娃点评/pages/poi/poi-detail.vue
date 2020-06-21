<template>
	<view class="m-detail-wrap">

		<u-navbar :is-back="false" title=" " :background="background" :border-bottom="false">
			<view class="slot-wrap" @tap="handleBack">
				<view class="back-icon"></view>
			</view>
		</u-navbar>

		<view class="m-swiper" @tap="handleNavigateTo('/pages/poi/poi-comment-detail-album')">
			<image class="image" :src="data.pictures[0].pictures"></image>
			<view class="m-small-image-wrap">
				<view class="image-wrap">
					<view v-for="item in imageData" class="image-item" :key="item.id">
						<image class="small-image" :src="item.pictures"></image>
					</view>
				</view>
				<view class="m-total">{{data.pictures.length}}张</view>
				<view class="u-arrow"></view>
			</view>
		</view>
		<view class="m-header">
			<view class="m-title">
				<view class="u-name">{{data.name}}</view>
				<view class="m-btn">收藏</view>
			</view>
			<view class="m-rate">
				<view class="m-info">
					<view class="u-rate">9.4</view>
					<view class="m-comment-rate">
						<view class="u-text">遛娃点评评分</view>
						<view class="rate">
							<u-rate count="count" current="3.5" active-icon="star-fill" :disabled="true" inactive-icon="star-fill"
							 inactive-color="#E6E6E6" active-color="#F7AF43"></u-rate>
						</view>
					</view>
				</view>
				<view class="u-comment">已有<span>180</span>人点评</view>
			</view>
			<view class="u-introduce">{{data.introduction}}</view>
		</view>
		<view class="m-scenic-spot">
			<view class="scenic-card">

				<scenic-spot iconType="introduce" @tap="handleGoDetail">
					<template v-slot:left>
						景区介绍
					</template>
					<template v-slot:right>
						正常开放
					</template>
				</scenic-spot>
				<scenic-spot iconType="time">
					<template v-slot:left>
						开放时间
					</template>
					<template v-slot:right>
						{{data.businessTime}}
					</template>
				</scenic-spot>
				<scenic-spot iconType="location">
					<template v-slot:left>
						{{data.address}}
					</template>
				</scenic-spot>
			</view>
			<view class="scenic-card">
				<scenic-spot iconType="ticket">
					<template v-slot:left>
						景区门票
					</template>
					<template v-slot:right>
						全部5种票型
					</template>
				</scenic-spot>
				<scenic-spot>
					<template v-slot:left>
						<view style="color: #B3B3B3;font-size: 24rpx;">
							等<span style="color: #F13B03;padding:0 5rpx">128</span>位粑粑麻麻购买过</view>
					</template>
				</scenic-spot>
				</viwe>
			</view>

			<view class="scenic-card">
				<view class="play-way" @tap="handleGoMorePlay">
					<view class="play-header">
						<view class="title">热门玩法</view>
						<view class="more">
							<text>更多玩法</text>
							<view class="arrow"></view>
						</view>
					</view>
					<view class="play-content">

						<scroll-view scroll-x="true">
							<view class="play-way-scroll">
								<play-way class="play-item"></play-way>
								<play-way class="play-item"></play-way>
								<play-way class="play-item"></play-way>
								<play-way class="play-item"></play-way>
								<play-way class="play-item"></play-way>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
		</view>
		<view class="m-comment">
			<view class="comment-header">
				<view class="title">点评(40)</view>
				<view class="right">
					<switch-item></switch-item>
				</view>
			</view>
			<view class="comment-content">
				<comment-card></comment-card>
				<u-divider color="#D9D9D9" height="160">已经到底啦</u-divider>
			</view>
		</view>
		<u-popup v-model="show" mode="bottom" border-radius="40" :safe-area-inset-bottom="true">
			<view class="popup-content">
				<view class="title">选择您要进行的操作</view>
				<view class="m-operation">
					<view class="operation-item" @tap="handleNavigateTo('/pages/poi/poi-play-way-push')">
						<view class="icon play-way"></view>
						<text>发玩法</text>
					</view>
					<view class="operation-item" @tap="handleNavigateTo('/pages/poi/poi-comment-push')">
						<view class="icon comment"></view>
						<text>写点评</text>
					</view>
				</view>
				<view class="close-btn" @tap="show=false"></view>
			</view>
		</u-popup>
		<view class="fixed-btn" @tap="show=true"></view>
	</view>
</template>

<script>
	import scenicSpot from '../../components/scenic-spot.vue'
	import playWay from '../../components/play-way.vue'
	import switchItem from '../../components/switch.vue'
	import commentCard from '../../components/comment-card.vue'
	import navMixin from '../../mixins/nav-mixin.js'
	export default {
		mixins: [navMixin],
		components: {
			scenicSpot,
			playWay,
			switchItem,
			commentCard
		},
		data() {
			return {
				background: {
					backgroundColor: 'transparent',
				},
				show: false,
				count: 4,
				id: '',
				data: {},
				imageData: []
			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option); //打印出上个页面传递的参数。
			this.id = option.id
		},
		mounted() {
			this.$api.poiAppDetail(this.id).then(res => {
				console.log(res)
				this.data = res
				const pictures = JSON.parse(JSON.stringify(this.data.pictures))
				this.imageData = pictures.splice(0, 4)
				console.log(this.imageData)
				console.log(this.data.pictures)
			})
		},
		methods: {
			// handleJumpAlbum(){}
			handleNavigateTo(url) {

				uni.navigateTo({
					url: url
				});
			},
			handleGoMorePlay() {

				uni.navigateTo({
					url: '/pages/poi/poi-comment-detail-more-play-way'
				});
			},
			handleGoDetail() {

				uni.navigateTo({
					url: '/pages/poi/poi-scenic-spot-introduction'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	// .m-detail-wrap {
	// 	padding-top: 562rpx;
	// }
	.m-swiper {
		position: absolute;
		width: 100%;
		height: 562rpx;
		left: 0;
		top: 0;
		&::after{
			content: "";
			width: 100%;
			height: 100rpx;
			background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
			position: absolute;
			bottom: 0;
			left: 0;
		}

		.image {
			width: 100%;
			height: 562rpx;
		}

		.m-small-image-wrap {

			position: absolute;
			width: 315rpx;
			height: 64rpx;
			background: rgba(0, 0, 0, .6);
			border-radius: 32rpx;
			bottom: 40rpx;
			right: 32rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			z-index: 1;

			.image-wrap {
				display: flex;
				margin-left: 24rpx;

				.image-item {
					width: 44rpx;
					height: 44rpx;
					overflow: hidden;
					margin-right: 4rpx;

					.small-image {
						width: 44rpx;
						height: 44rpx;
						// opacity: 0.6;
					}
				}


			}

			.m-total {
				font-size: 24rpx;
				color: #fff;
			}

			.u-arrow {
				width: 0;
				height: 0;
				border-top: 12rpx solid transparent;
				border-left: 17rpx solid #ffffff;
				border-bottom: 12rpx solid transparent;
				margin-right: 27rpx;
			}
		}
	}

	.slot-wrap {
		.back-icon {
			width: 48rpx;
			height: 48rpx;
			background: url(../../static/images/icon_nav_arrow_white@3x.png);
			background-size: 48rpx;
			margin-left: 32rpx;
		}
	}

	.m-header {
		margin-top: 440rpx;
		height: auto;
		padding-bottom: 48rpx;
		border-bottom: solid 20rpx #f8f8f8;

		.m-title {
			height: 140rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 0 32rpx;

			.u-name {
				font-size: 40rpx;
				font-weight: 500;
				color: rgba(34, 34, 34, 1);
				line-height: 56rpx;
			}

			.m-btn {
				width: 136rpx;
				height: 60rpx;
				border-radius: 30rpx;
				border: 1rpx solid rgba(230, 230, 230, 1);
				background: url(../../static/images/icon_collection@3x.png) 20rpx center no-repeat;
				background-size: 40rpx;
				font-size: 24rpx;
				color: #555;
				text-indent: 64rpx;
				line-height: 60rpx;

			}
		}

		.m-rate {
			background: rgba(255, 245, 242, 1);
			border-radius: 16px;
			padding: 27rpx 28rpx 33rpx 40rpx;
			margin: 0 32rpx 36rpx;
			display: flex;
			box-sizing: border-box;
			align-items: center;
			justify-content: space-between;

			.m-info {

				display: flex;

				.u-rate {
					font-size: 68rpx;
					font-family: DIN-Medium, DIN;
				}

				.m-comment-rate {
					display: flex;
					flex-direction: column;
					justify-content: center;
					margin-left: 20rpx;
					// justify-content: space-between;

					.u-text {
						font-size: 24rpx;
						color: #555;
						margin-bottom: 9rpx;
						margin-top: 9rpx;
					}
				}
			}

			.u-comment {
				font-size: 24rpx;
				color: #555;

				span {
					color: #F13B03;
				}
			}
		}

		// .u-introduce {}

		.u-introduce {
			// width: 400rpx;
			position: relative;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-justify: inter-ideograph;
			text-align: justify;
			font-size: 28rpx;
			color: #555;
			// margin-bottom: 40rpx;
			line-height: 48rpx;
			margin: 0 32rpx
		}

		.u-introduce:after {
			content: "...全部";
			position: absolute;
			bottom: 0;
			right: 0;
			padding: 0 0 1rpx 0;
			cursor: pointer;
			background: #FFFFFF;
			color: #F13B03;
		}
	}

	.m-scenic-spot {
		.scenic-card {
			border-bottom: solid 20rpx #f8f8f8;

			.play-way {
				padding: 0 0 40rpx 32rpx;
				box-sizing: border-box;

				.play-header {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 100rpx;

					.title {
						font-size: 32rpx;
						color: #3D3D3D;
						font-weight: 500;
					}

					.more {
						display: flex;
						align-items: center;

						font-size: 29rpx;
						color: #999;

						.arrow {
							width: 40rpx;
							height: 40rpx;
							background: url(../../static/images/icon_list_arrow_grey@3x.png);
							background-size: 40rpx;
						}
					}
				}

				.play-content {
					.play-way-scroll {
						display: flex;

						.play-item {
							margin-right: 16rpx;
						}
					}
				}
			}
		}
	}

	.m-comment {
		.comment-header {
			height: 100rpx;
			box-sizing: border-box;
			padding: 0 32rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.title {
				font-size: 32rpx;
				color: #3D3D3D;
				font-weight: 500;
			}

			.right {}
		}
	}

	.popup-content {
		.title {
			font-size: 28rpx;
			color: #999;
			text-align: center;
			padding: 60rpx 0 20rpx 0;
		}

		.m-operation {
			display: flex;
			align-items: center;
			justify-content: center;

			.operation-item {
				flex: 1;
				height: 375rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
				color: #222;

				.icon {
					width: 156rpx;
					height: 156rpx;
					margin-bottom: 20rpx;

					&.play-way {
						background: url(../../static/images/icon_poi_camera@3x.png);
						background-size: 156rpx;
					}

					&.comment {
						background: url(../../static/images/icon_poi_message@3x.png);
						background-size: 156rpx;
					}
				}
			}
		}

		.close-btn {
			height: 100rpx;
			background: url(../../static/images/Rectangle@3x.png) center center no-repeat;
			background-size: 28rpx;
		}
	}

	.fixed-btn {
		width: 90rpx;
		height: 90rpx;
		background: url(../../static/images/icon_poi_comment@3x.png);
		background-size: 100%;
		position: fixed;
		right: 32rpx;
		top: 70%;
	}
</style>
