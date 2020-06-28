<template>
	<view class="content">
		<tabbar-navigation :current-page="1"></tabbar-navigation>
		<div class="u-placeholder" :style="'height:'+header.top+'px;'"></div>
		<uni-transition :duration="200" :mode-class="modeClass" :show="transShow" :styles="transfromClass">

			<view class="fixed-wrap" :style="'padding-top:'+header.top+'px;'">
				<view class="search-box">
					<view class="icon"></view>
					<view class="text">大家都在搜索“国庆必去景点”</view>
				</view>
			</view>
		</uni-transition>
		<view class="header-wrap">
			<view class="m-header" :style="'height:' +  header.height + 'px;'">
				<view class="u-address">
					<text class="u-text">成都</text>
					<view class="u-arrow"></view>
				</view>
				<view class="u-logo">
					<image class="u-img" src="../../static/images/lwdp_logo@3x.png" mode=""></image>
				</view>
			</view>
			<view class="header-search-wrap">
				<view class="u-search-icon"></view>
				<text class="u-text">大家都在搜索“国庆必去景点”</text>
			</view>
			<div class="header-swiper">

				<u-swiper :list="swiperList" :effect3d="true" border-radius="16" height="266"></u-swiper>
			</div>
		</view>

		<view class="m-content">

			<recommend :recommendData="recommendData"></recommend>
		</view>


		<view style="width:100%;height: 150rpx;"></view>
	</view>
</template>

<script>
	import recommend from '../../components/recommend.vue'
	import uniTransition from '../../components/uni-transition.vue'
	export default {

		components: {
			recommend,
			uniTransition
		},
		data() {
			return {


				transShow: false,
				modeClass: ['fade'],
				transfromClass: {
					'z-index': '9999'
				},
				header: {
					top: 0,
					height: 0
				},

				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				current: 0,

				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				recommendData: [],


				swiperList: [{
						image: '/static/1.png',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					},
					{
						image: '/static/2.png',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					},
					{
						image: '/static/3.png',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					},
					{
						image: '/static/4.png',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					},
					{
						image: '/static/5.png',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					}
				]
			}
		},

		onLoad() {},
		onPageScroll(res) {
			// console.log(res.scrollTop)
			if (res.scrollTop >= 40) {
				uni.setNavigationBarColor({
					frontColor: '#000000',
					backgroundColor: '#FA6830',
					animation: {
						duration: 400,
						timingFunc: 'easeIn'
					}
				})
				this.transShow = true
			} else {
				uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: '#FA6830',
					animation: {
						duration: 400,
						timingFunc: 'easeIn'
					}
				})
				this.transShow = false
			}
		},
		created() {
			const header = uni.getMenuButtonBoundingClientRect()
			this.header.top = header.top
			this.header.height = header.height
		},
		mounted() {
			let query = {
				page: '1',
				size: '50',
				tagId: '1271353204155625474'
			}

			this.$api.poiApp(query).then(response => {
				this.recommendData = response.data
			}).catch((err) => {
				console.log(err)
			})

		},
		methods: {


		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background: #F8F8F8;
		padding-bottom: env(safe-area-inset-bottom);
		min-height: 100vh;
	}

	.u-placeholder {
		background: #FA6830;
	}

	.header-wrap {
		width: 100%;
		height: 372rpx;
		background: url(../../static/images/bg_head_gradient@3x.png) center bottom #fff;
		background-size: 100%;
		background-repeat: no-repeat;


		.m-header {
			width: 100%;
			display: flex;
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

		.header-search-wrap {
			width: 686rpx;
			height: 68rpx;
			background: rgba(255, 255, 255, .12);
			border-radius: 34rpx;
			margin: 26rpx auto 30rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			.u-search-icon {
				width: 40rpx;
				height: 40rpx;
				background: url(../../static/images/icon_home_search_grey@3x.png);
				background-size: 100%;
				opacity: .4;
				margin-right: 5rpx;

			}

			.u-text {
				font-size: 28rpx;
				color: #fff;
				opacity: .3;
			}
		}

		.header-swiper {
			.swiper-item {
				width: 686rpx;
				height: 266rpx;
				margin: 0 auto;
				border-radius: 16rpx;

				.image {
					width: 686rpx;
					height: 266rpx;
				}
			}
		}

	}

	.fixed-wrap {
		position: fixed;
		top: 0;
		background: #FFFFFF;
		width: 100%;
		padding-bottom: 12rpx;
		z-index: 9999;

		.search-box {
			width: 500rpx;
			height: 64rpx;
			background: rgba(244, 244, 244, 1);
			border-radius: 32rpx;
			display: flex;
			align-items: center;
			margin-left: 32rpx;

			.icon {
				width: 40rpx;
				height: 40rpx;
				background: url(../../static/images/icon_home_search_grey@3x.png);
				background-size: 40rpx;
				align-items: center;
				margin: 0 10rpx 0 32rpx;
			}

			.text {
				font-size: 28rpx;
				color: #555;
			}
		}
	}
</style>
