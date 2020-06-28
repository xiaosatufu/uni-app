<template>
	<view class="main-content">

		<u-navbar :is-back="false" title="设置" :border-bottom="false">
			<view class="slot-wrap" @tap="handleBack">
				<view class="back-icon"></view>
			</view>
		</u-navbar>
		<view class="set-up-wrap">
			<view class="cell-group">
				<view class="cell-item avatar">
					<view class="cell-left">
						<view class="m-avatar">
							<view class="u-avatar">
								<image :src="userInfo.avatar" mode="aspectFill" class="avatar"></image>
							</view>
							<view class="text">修改头像</view>
						</view>
					</view>
					<view class="cell-right">
						<view class="arrow"></view>
						<view class="info"></view>
					</view>
				</view>
				<view class="cell-item " @tap="handleNavogateto('/pages/personal-center/set-up-nickname')">
					<view class="cell-left">
						<text>昵称</text>
					</view>
					<view class="cell-right">
						<view class="info">{{userInfo.nickName}}</view>

						<view class="arrow"></view>
					</view>
				</view>
				<view class="cell-item " @tap="handleNavogateto('/pages/personal-center/set-up-autograph')">
					<view class="cell-left">
						<text>个性签名</text>
					</view>
					<view class="cell-right">
						<view class="info">暂未填写</view>

						<view class="arrow"></view>
					</view>
				</view>
				<view class="cell-item ">
					<view class="cell-left">
						<text>背景图</text>
					</view>
					<view class="cell-right">

						<view class="arrow"></view>
					</view>
				</view>
			</view>
			<view class="cell-group">
				<view class="cell-item ">
					<view class="cell-left">
						<text>城市</text>
					</view>
					<view class="cell-right">
						<view class="info">{{userInfo.province}},{{userInfo.city}}</view>

						<view class="arrow"></view>
					</view>
				</view>
				<view class="cell-item " @tap="handleNavogateto('/pages/personal-center/set-up-like')">
					<view class="cell-left">
						<text>喜好</text>
					</view>
					<view class="cell-right">
						<view class="info">动物园</view>

						<view class="arrow"></view>
					</view>
				</view>
			</view>
			<view class="cell-group">
				<view class="cell-item " @tap="handleNavogateto('/pages/personal-center/set-up-cell-phone-number')">
					<view class="cell-left">
						<text>修改手机号</text>
					</view>
					<view class="cell-right">
						<view class="info">152****6662</view>
						<view class="arrow"></view>
					</view>
				</view>
				<view class="cell-item " @tap="handleChooseAddress">
					<view class="cell-left">
						<text>收货地址</text>
					</view>
					<view class="cell-right">
						<view class="info">修改/添加</view>
						<view class="arrow"></view>
					</view>
				</view>
				<view class="cell-item ">
					<view class="cell-left">
						<text>关于</text>
					</view>
					<view class="cell-right">
						<view class="arrow"></view>
					</view>
				</view>
			</view>
		</view>
		<view class="toggle-btn">
			切换账号
		</view>
	</view>
</template>

<script>
	import navMixin from '../../mixins/nav-mixin.js'
	export default {
		mixins: [navMixin],
		data() {
			return {

				userInfo: {}
			};
		},
		onLoad() {

			try {
				const value = uni.getStorageSync('userInfo');
				if (value) {
					// console.log(value);
					this.userInfo = value

				}
			} catch (e) {
				// error
			}
		},
		methods: {
			handleNavogateto(url) {

				uni.navigateTo({
					url: url
				});
			},
			handleChooseAddress() {
				uni.chooseAddress({
					success(res) {
						console.log(res.userName)
						console.log(res.postalCode)
						console.log(res.provinceName)
						console.log(res.cityName)
						console.log(res.countyName)
						console.log(res.detailInfo)
						console.log(res.nationalCode)
						console.log(res.telNumber)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main-content {
		background: #f8f8f8;
		padding-bottom: 68rpx;
	}

	.toggle-btn {
		width: 100%;
		height: 120rpx;
		line-height: 120rpx;
		background: #FFFFFF;
		font-size: 32rpx;
		color: #F13B03;
		text-align: center;
		margin-top: 40rpx;
	}

	.slot-wrap {
		.back-icon {
			width: 48rpx;
			height: 48rpx;
			background: url(../../static/images/icon_nav_arrow_black@3x.png);
			background-size: 48rpx;
			margin-left: 32rpx;
		}
	}

	.set-up-wrap {
		.cell-group {
			margin-bottom: 20rpx;
			padding: 0 32rpx;
			background: #fff;

			.cell-item {
				height: 120rpx;
				// margin: 0 32rpx;
				box-sizing: border-box;
				border-bottom: solid 1rpx #f2f2f2;
				display: flex;
				align-items: center;
				justify-content: space-between;

				&.avatar {
					height: 180rpx;

					.cell-left {
						.m-avatar {
							display: flex;
							align-items: center;

							.u-avatar {
								width: 120rpx;
								height: 120rpx;
								background-color: pink;
								margin-right: 20rpx;
								border-radius: 100%;
								overflow: hidden;

								.avatar {
									width: 120rpx;
									height: 120rpx;
									border-radius: 100%;
								}
							}

							.text {}
						}
					}
				}

				.cell-left {}

				.cell-right {
					display: flex;
					align-items: center;

					.arrow {
						width: 40rpx;
						height: 40rpx;
						background: url(../../static/images/icon_list_arrow_grey@3x.png);
						background-size: 40rpx;
						margin-left: 12rpx;
					}

					.info {
						font-size: 32rpx;
						color: #999;
					}
				}
			}
		}
	}
</style>
