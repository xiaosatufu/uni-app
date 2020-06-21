<template>
	<view class="main-wrap">
		<view class="content-wrap">

			<tabbar-navigation :current-page="4"></tabbar-navigation>

			<u-navbar :is-back="false" title="我的" :background="background" :border-bottom="false">
				<!-- 	<view class="slot-wrap" @tap="handleBack">
				<view class="back-icon"></view>
			</view> -->
			</u-navbar>
			<view class="m-header-image">
				<!-- <image class="img" src="../../static/bg.png"></image> -->
			</view>
			<view class="m-user-info">
				<view class="m-avatar">

				</view>
				<view class="m-operation">
					<view class="edit icon"></view>
					<view class="setting icon">

					</view>
				</view>
				<view class="m-name">
					<span>潘旺旺lwdp</span>
					<view class="icon-sex"></view>
				</view>
				<view class="m-detail">
					<view>四川成都</view>
					<u-line color="#f2f2f2" direction="col" length="20rpx" margin="0 16rpx" />
					<view><span>10</span>个目的地</view>
					<u-line color="#f2f2f2" direction="col" length="20rpx" margin="0 16rpx" />
					<view><span>9</span>篇玩法</view>
				</view>
				<view class="m-intro">地表最强遛娃指南小姐姐~</view>
				<view class="m-more">
					<view class="item">关注<span>56</span></view>
					<view class="item">粉丝<span>100</span></view>
					<view class="item">获赞<span>400</span></view>
				</view>
			</view>
			<u-gap height="20" bg-color="#F8F8F8"></u-gap>
			<view class="m-tabs" style="margin-bottom: 52rpx;">

				<u-tabs-swiper ref="uTabs" :list="list" height="88" font-size="32" active-color="#222" bar-width="40" bar-height="7"
				 inactive-color="#999" :bar-style="barStyle" :current="current" @change="tabsChange" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<view class="m-swiper">

				<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish" :style="{height:aheight?aheight+'px':'auto'}">
					<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
						<view class="m-waterfall list1" v-if="index==0">

							<u-waterfall v-model="flowList" ref="uWaterfall">
								<template v-slot:left="{leftList}">
									<view class="warter" v-for="(item, index) in leftList" :key="index">

										<view class="img-wrap">
											<image class="image" :src="item.image" mode="widthFix"></image>
										</view>
										<view class="title">
											{{item.title}}
										</view>
										<view class="footer">
											<view class="m-avatar">
												<view class="avatar"></view>
												<text>孙杉杉</text>
											</view>
											<view class="m-star">
												<view class="icon"></view>
												<text>25</text>
											</view>
										</view>

									</view>
								</template>
								<template v-slot:right="{rightList}">
									<view class="warter" v-for="(item, index) in rightList" :key="index">
										<view class="img-wrap">
											<image class="image" :src="item.image" mode="widthFix"></image>
										</view>
										<view class="title">
											{{item.title}}
										</view>
										<view class="footer">
											<view class="m-avatar">
												<view class="avatar"></view>
												<text>孙杉杉</text>
											</view>
											<view class="m-star">
												<view class="icon"></view>
												<text>25</text>
											</view>
										</view>
									</view>
								</template>
							</u-waterfall>
							<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
						</view>
						<view class="list2" v-if="index==1">
							点赞
						</view>
						<view class="list3" v-if="index==2">
							收藏
						</view>
						<!-- <scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom"> -->
						<!-- ... -->
						<!-- </scroll-view> -->
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				barStyle: {
					background: "linear-gradient(138deg,rgba(253,118,62,1) 0%,rgba(241,59,3,1) 100%)",
					borderRadius: "4rpx"
				},
				current: 0,
				swiperCurrent: 0,
				list: [{
					name: '玩法'
				}, {
					name: '点赞'
				}, {
					name: '收藏'
				}],

				tabs: [0, 1, 2],
				aheight: '',
				background: {
					backgroundColor: 'transparent',
				},

				loadStatus: 'loadmore',
				flowList: [],
				waterfallList: [{
						title: '必去的地点啊，看着毛绒绒的大熊猫真的是…',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
					},
					{
						title: '欢乐谷挺大的项目也还可以就是人太多排队…',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
					},
					{
						title: '从海滨城市飞去西南重镇去看海洋动物，这…',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					},
					{
						title: '大型游乐场最棒的是各种刺激的项目，夏天…',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
					}, {
						title: '必去的地点啊，看着毛绒绒的大熊猫真的是…',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
					},
					{
						title: '欢乐谷挺大的项目也还可以就是人太多排队…',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
					},
					{
						title: '从海滨城市飞去西南重镇去看海洋动物，这…',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					},
					{
						title: '大型游乐场最棒的是各种刺激的项目，夏天…',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
					}, {
						title: '必去的地点啊，看着毛绒绒的大熊猫真的是…',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
					},
					{
						title: '欢乐谷挺大的项目也还可以就是人太多排队…',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
					},
					{
						title: '从海滨城市飞去西南重镇去看海洋动物，这…',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					},
					{
						title: '大型游乐场最棒的是各种刺激的项目，夏天…',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
					}, {
						title: '必去的地点啊，看着毛绒绒的大熊猫真的是…',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
					},
					{
						title: '欢乐谷挺大的项目也还可以就是人太多排队…',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
					},
					{
						title: '从海滨城市飞去西南重镇去看海洋动物，这…',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					},
					{
						title: '大型游乐场最棒的是各种刺激的项目，夏天…',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
					},
				]
			};
		},
		onLoad() {
			this.addRandomData();
			setTimeout(() => {
				//计算swiper高度
				this.calcSwiperHeight('.list1')
			}, 500)
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000)
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
			addRandomData() {
				for (let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.waterfallList.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.waterfallList[index]))
					item.id = this.$u.guid();
					this.flowList.push(item);
					setTimeout(() => {
						//计算swiper高度
						this.calcSwiperHeight('.list1')
					}, 100)
				}
			},
			remove(id) {
				this.$refs.uWaterfall.remove(id);
			},
			clear() {
				this.$refs.uWaterfall.clear();
			},
			tabsChange(index) {
				console.log(index)
				// this.current = index

				this.swiperCurrent = index;
				// this.$refs.uTabs.setFinishCurrent(index);
			},

			// tabsChange() {},
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
				// this.calcSwiperHeight()
			},
			animationfinish() {

			},
			onreachBottom() {

			},

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

		}
	}
</script>

<style lang="scss">
	.m-tabs {
		position: relative;
		&::after {
			content: "";
			width: 100%;
			height: 100rpx;
			background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(248, 248, 248, 1) 100%);
			// background: red;
			position: absolute;
			left: 0;
			bottom: -100%;
		}
	}

	.m-swiper {
		background: #f8f8f8;
	}

	.main-wrap {
		background: #f8f8f8;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.content-wrap {
		padding-bottom: 200rpx;
	}

	.m-header-image {
		width: 100%;
		height: 440rpx;
		position: absolute;
		background: red;
		top: 0;
		left: 0;

		// background: url(../../static/bg.png);
		// background-size: 100%;

	}

	.m-user-info {
		width: 100%;
		height: 518rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 32rpx 32rpx 0px 0px;
		position: relative;
		margin-top: 280rpx;
		z-index: 1;

		.m-avatar {
			width: 160rpx;
			height: 160rpx;
			background: pink;
			border: solid 10rpx #ffffff;
			position: absolute;
			border-radius: 100%;
			left: 40rpx;
			top: -50rpx;
			box-sizing: border-box;
		}

		.m-operation {
			display: flex;
			justify-content: flex-end;
			padding: 28rpx 0 42rpx 0;

			.icon {
				width: 80rpx;
				height: 80rpx;
				border-radius: 100%;
				margin-right: 32rpx;

				&.edit {
					background: url(../../static/images/icon_mine_comment@3x.png) no-repeat center center #F2F2F2;
					background-size: 48rpx;
				}

				&.setting {
					background: url(../../static/images/icon_mine_setting@3x.png) no-repeat center center #F2F2F2;
					background-size: 48rpx;
				}
			}
		}

		.m-name {
			font-size: 40rpx;
			color: #222222;
			display: flex;
			align-items: center;
			padding: 0 32rpx;
			margin-bottom: 12rpx;

			.icon-sex {
				width: 40rpx;
				height: 40rpx;
				background: url(../../static/images/icon_female@3x.png);
				background-size: 40rpx;
			}
		}

		.m-detail {
			font-size: 28rpx;
			color: #999;
			display: flex;
			padding: 0 32rpx;
			align-items: center;

			span {
				color: #555;
			}
		}

		.m-intro {
			font-size: 28rpx;
			color: #555;
			line-height: 40rpx;
			padding: 40rpx 32rpx 20rpx;
		}

		.m-more {
			height: 160rpx;
			display: flex;

			align-items: center;
			justify-content: space-between;
			padding: 0 32rpx;

			.item {
				font-size: 24rpx;
				color: #b3b3b3;

				span {
					font-size: 40rpx;
					color: #222;
					margin-left: 8rpx;
				}
			}

		}
	}



	.m-waterfall {
		margin: 0 16rpx;

		.title {
			font-size: 28rpx;
			color: #222;
			padding: 16rpx 16rpx 0 16rpx;
			box-sizing: border-box;
			line-height: 40rpx;
		}

		.footer {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20rpx 16rpx;

			.m-avatar {
				font-size: 24rpx;
				color: #999;
				display: flex;
				align-items: center;

				.avatar {
					width: 40rpx;
					height: 40rpx;
					background: red;
					border-radius: 100%;
					margin-right: 8rpx;
				}
			}

			.m-star {
				display: flex;
				align-items: center;
				font-size: 24rpx;
				color: #555;

				.icon {
					width: 40rpx;
					height: 40rpx;
					background: url(../../static/images/icon_like_normal@3x.png);
					background-size: 40rpx;
				}
			}
		}
	}


	.warter {
		border-radius: 8px;
		margin: 8px;
		margin: 0 8rpx 16rpx 8rpx;
		background-color: #fff;
		// padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.image {
		width: 100%;
		border-radius: 4px;
	}

	.title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.tag {
		display: flex;
		margin-top: 5px;
	}

	.tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}
</style>
