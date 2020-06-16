<template>
	<view class="wrap">
		<u-navbar :is-back="false" title="成都大熊猫繁育研" :border-bottom="false">
			<view class="slot-wrap" @tap="handleBack">
				<view class="back-icon"></view>
			</view>
		</u-navbar>
		<view class="m-header">
			全部(69)
		</view>
		<!-- <u-button @click="clear">清空列表</u-button> -->
		<view class="m-content">

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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loadStatus: 'loadmore',
				flowList: [],
				list: [{
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
			}
		},
		onLoad() {
			this.addRandomData();
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
			handleBack() {
				uni.navigateBack();
			},
			addRandomData() {
				for (let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]))
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			remove(id) {
				this.$refs.uWaterfall.remove(id);
			},
			clear() {
				this.$refs.uWaterfall.clear();
			}
		}
	}
</script>

<style>
	/* page不能写带scope的style标签中，否则无效 */
	page {
		background-color: rgb(240, 240, 240);
	}
</style>

<style lang="scss" scoped>
	.slot-wrap {
		.back-icon {
			width: 32rpx;
			height: 32rpx;
			background: url(../../static/images/icon_nav_arrow_black@3x.png);
			background-size: 100%;
			margin-left: 44rpx;
		}
	}

	.m-header {
		height: 100rpx;
		line-height: 100rpx;
		font-size: 32rpx;
		color: #555;
		background: #fff;
		text-indent: 32rpx;
		position: relative;

		&::after {
			content: "";
			width: 100%;
			height: 100rpx;
			background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(248, 248, 248, 1) 100%);
			// background: red;
			position: absolute;
			bottom: -100%;
			left: 0;

		}
	}

	.m-content {
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
		background-color: #f8f8f8;
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
