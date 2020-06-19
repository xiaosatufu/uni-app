<template>
	<view class="content">
		<tabbar-navigation :current-page="0"></tabbar-navigation>
		<div class="u-placeholder" :style="'height:'+header.top+'px;'"></div>
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
				<view class="uni-padding-wrap">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper class="swiper" :autoplay="autoplay" :interval="interval" :duration="duration" style="height: 266rpx;">
								<swiper-item>
									<view class="swiper-item uni-bg-red">A</view>
								</swiper-item>
								<swiper-item>
									<view class="swiper-item uni-bg-green">B</view>
								</swiper-item>
								<swiper-item>
									<view class="swiper-item uni-bg-blue">C</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
			</div>
		</view>


		<view>
			<u-tabs-swiper @change="handleChange" ref="uTabs" :list="list" bar-height="40" bar-width="40" :bar-style="barStyle"
			 font-size="32" :is-scroll="true" active-color="#3D3D3D" inactive-color="#3D3D3D" :active-item-style="activeItemStyle"
			 :current="current" gutter="80" height="100"></u-tabs-swiper>
		</view>
		<view style="margin-top: 47rpx;">

			<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish" :style="{height:aheight?aheight+'px':'auto'}">
				<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
					<scroll-view scroll-y style="height:101%;width: 100%;" @scrolltolower="onreachBottom">
						<view class="list1" v-if="item==0">
							<recommend-follow></recommend-follow>
							<follow></follow>
							<view style="width: 100%;height: 24rpx;"></view>
							<follow></follow>
							<view style="width: 100%;height: 24rpx;"></view>
						</view>
						<view class="list2" v-if="item==1">
							<recommend></recommend>

							<!-- 	<recommend></recommend>
							<view style="width: 100%;height: 24rpx;"></view>
							<recommend></recommend>
							<view style="width: 100%;height: 24rpx;"></view>
							<recommend></recommend>
							<view style="width: 100%;height: 24rpx;"></view>
							<recommend></recommend>
							<view style="width: 100%;height: 24rpx;"></view> -->
						</view>
						<view class="list3" v-if="item==2">
							<follow></follow>
							<follow></follow>
							<follow></follow>
						</view>
						<view class="list4" v-if="item==3">
							<follow></follow>
							<follow></follow>
							<follow></follow>
							<follow></follow>
						</view>
						<view class="list5" v-if="item==4">
							<follow></follow>
							<follow></follow>
							<follow></follow>
							<follow></follow>
							<follow></follow>
						</view>
						<view class="list6" v-if="item==5">
							<follow></follow>
							<follow></follow>
							<follow></follow>
							<follow></follow>
							<follow></follow>
							<follow></follow>
							<follow></follow>
						</view>
						<!-- <follow v-if="item==0"></follow>
						<follow v-if="item==0"></follow>
						<follow v-if="item==0"></follow>
						<follow v-if="item==0"></follow>
						<follow v-if="item==0"></follow>  
						<follow v-if="item==0"></follow>
						<follow v-if="item==0"></follow> -->
					</scroll-view>
				</swiper-item>
			</swiper>
			<u-divider>已经到底了</u-divider>
		</view>
	</view>
</template>

<script>
	import follow from "../../components/follow.vue"
	import recommendFollow from '../../components/recommend-follow.vue'
	import recommend from '../../components/recommend.vue'
	// import tabbarNavitation from '../../components/tabbar-navigation.vue'
	export default {

		components: {
			follow,
			recommendFollow,
			recommend,
			// tabbarNavitation
		},
		data() {
			return {
				activeItemStyle: {
					position: 'relative',
					fontSize: "44rpx"
				},
				barStyle: {
					background: 'linear-gradient(35deg,rgba(253,118,62,0) 0%,rgba(241,59,3,1) 100%);',
					opacity: '.6',
					top: '10rpx',
					marginLeft: '30rpx'
					// left:'auto',
					// right:'0'
				},


				aheight: '',
				title: 'Hello',
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
				list: [{
					name: '关注'
				}, {
					name: '推荐'
				}, {
					name: '指南'
				}, {
					name: '攻略'
				}, {
					name: '萌娃'
				}, {
					name: '度'
				}],
				tabs: [0, 1, 2, 3, 4, 5]
			}
		},
		// onLoad() {

		onLoad() {
			// console.log('111')
			// uni.hideTabBar()
		},
		// },
		created() {
			console.log(this.$u.config.v);
			const header = uni.getMenuButtonBoundingClientRect()
			this.header.top = header.top
			this.header.height = header.height
			console.log(this.header.top)
		},
		mounted() {
			this.calcSwiperHeight('.list1')

		},
		methods: {
			calcSwiperHeight(queryParam) {

				// 动态获取滑动页面高度
				const query = uni.createSelectorQuery().in(this);
				query.select(queryParam).boundingClientRect(data => {
					this.aheight = data.height
					console.log(this.aheight)
				}).exec();
			},

			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			handleChange(index) {
				console.log(index)
				// this.current = index

				this.swiperCurrent = index;
				// this.$refs.uTabs.setFinishCurrent(index);
			},

			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
				// this.calcSwiperHeight()
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
				console.log(current)
				const query = uni.createSelectorQuery().in(this);
				let querylist = `.list${current+1}`
				console.log(querylist)
				// if (current == 1) {
				this.calcSwiperHeight(querylist)





				// this.calcSwiperHeight()
			},
			// scroll-view到底部加载更多
			onreachBottom() {
				console.log('到底了')
			}
		}
	}
</script>

<style lang="scss">
	.content {
		background: #F8F8F8;
	}

	.u-placeholder {
		background: #FA6830;
	}

	.header-wrap {
		// border-top: solid 20rpx #fff;
		width: 100%;
		height: 372rpx;
		// border: solid 1px yellow;
		background: url(../../static/images/bg_head_gradient@3x.png) center bottom;
		background-size: 100%;
		background-repeat: no-repeat;
		margin-bottom: 120rpx;


		.m-header {
			// background: #F85D25;
			width: 100%;
			// border: solid 1px red;
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

		.header-search-wrap {
			width: 686rpx;
			height: 68rpx;
			background: rgba(255, 255, 255, .12);
			border-radius: 34rpx;
			// opacity:0.12;
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
				background: red;
				margin: 0 auto;
				border-radius: 16rpx;
			}
		}

	}
</style>
