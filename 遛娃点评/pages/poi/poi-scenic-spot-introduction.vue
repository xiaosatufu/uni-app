<template>
	<view>

		<u-navbar :is-back="false" title="成都大熊猫繁育研" :border-bottom="false">
			<view class="slot-wrap" @tap="handleBack">
				<view class="back-icon"></view>
			</view>
		</u-navbar>
		<view class="m-content">
			<u-tabs :list="list" :bar-style="barStyle" :is-scroll="false" :current="current" @change="change" inactive-color="#222"
			 active-color="#555" height="100"></u-tabs>

			<u-line color="#f2f2f2" />
			<view class="main-part">
				<view class="part-one m-part">
					<view class="main-tt">
						简介
					</view>
					<view class="introduce">
						·大熊猫繁育科研机构，完全模拟大熊猫野外生活环境，建有湖泊、溪流、竹林、草坪等，共饲养100 多只大熊猫。
						<br>·大门附近有个大熊猫博物馆，可在里面熊猫国邮政局寄出盖有熊猫邮戳的明信片，还可在电影院看有关大熊猫的纪录片。
						<br>·除了大熊猫，还可以看到黑颈鹤、孔雀、鹭鸶等小动物。在月亮产房，有时还可以看到刚出生得小熊猫。
					</view>
				</view>
				<view class="part-two m-part">
					<view class="main-tt">
						开放时间
					</view>
					<view class="main-date">
						1月1日-12月31日 周一至周日
					</view>
					<view class="date-item first-child">
						<view class="left">开放时间</view>
						<view class="right">
							07:30至18:00
						</view>
					</view>
					<view class="date-item">
						<view class="left">停止售票时间</view>
						<view class="right">
							17:00
						</view>
					</view>
				</view>
				<view class="part-three m-part">
					<view class="main-tt">
						交通攻略
					</view>
					<view class="u-text">
						乘87、198a、198、867 路公交车在熊猫基地站下车。
					</view>

				</view>
				<view class="part-four m-part">
					<view class="main-tt">
						门票攻略
					</view>
					<view class="main-date">
						1月1日-12月31日 周一至周日
					</view>
					<view class="ticket-item border-bottom">
						<view class="left">成人票</view>
						<view class="right">
							55 人民币
							半票 27 人民币
						</view>
					</view>
					<view class="ticket-item border-bottom">
						<view class="left">免票</view>
						<view class="right">
							6周岁以下或身高不足1.3米的儿童、65周岁以上老年人、离休人员、老红军、残疾人、现役军人，凭有效证件免票入园。
						</view>
					</view>
					<view class="ticket-item">
						<view class="left">半票</view>
						<view class="right">
							6周岁-18周岁未成年人、全日制大学本科及以下学历学生(包括港、澳、台未成年人/学生)、60周岁-65周岁老年人节假日，凭有效证件可购买半价票。
						</view>
					</view>

				</view>
				<view class="part-five m-part">
					<view class="main-tt">
						其他信息
					</view>
					<view class="sub-tt">用时参考</view>
					<view class="u-text">3个小时以上</view>
					<view class="other-item">
						<view class="tt">电话</view>
						<view class="link">028-83510033</view>
					</view>
					<view class="other-item">
						<view class="tt">网址</view>
						<view class="link">http://www.panda.org.cn</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				barStyle: {
					background: 'linear-gradient(139deg,rgba(253,118,62,1) 0%,rgba(241,59,3,1) 100%)',
					borderRadius: '4rpx'
				},
				list: [{
					name: '简介'
				}, {
					name: '开放时间'
				}, {
					name: '交通攻略'
				}, {
					name: '门票攻略'
				}, {
					name: '其他信息'
				}],
				current: 0
			};
		},

		methods: {
			change(index) {
				this.current = index;
			},
			handleBack() {

				uni.navigateBack();
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

	.main-part {
		margin: 0 32rpx;

		.m-part {
			margin-bottom: 21rpx;

			.main-tt {
				height: 100rpx;
				font-size: 32rpx;
				color: #3d3d3d;
				line-height: 100rpx;
				font-weight: 700;
			}

			.main-date {
				height: 100rpx;
				background: #f8f8f8;
				border-radius: 12rpx;
				font-size: 29rpx;
				color: #555;
				line-height: 100rpx;
				text-align: center;
			}

			&.part-one {
				.introduce {
					font-size: 29rpx;
					line-height: 40rpx;
					color: #555;
					text-justify: inter-ideograph;
					text-align: justify;
				}
			}

			&.part-two {
				.date-item {
					height: 100rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 29rpx;

					&.first-child {
						border-bottom: solid 1rpx #f2f2f2;
					}

					.left {
						color: #999;
					}

					.right {
						color: #222;
					}
				}
			}

			&.part-three {
				.u-text {
					font-size: 29rpx;
					color: #555;
				}
			}

			&.part-four {
				.ticket-item {
					padding: 40rpx 0;
					display: flex;
					font-size: 29rpx;

					&.border-bottom {
						border-bottom: solid 1rpx #f2f2f2;
					}

					.left {
						// margin-right: 80rpx;
						color: #999;
						width: 164rpx;
					}

					.right {
						color: #222;
						line-height: 40rpx;
						flex: 1;
						text-justify: inter-ideograph;
						text-align: justify;
					}
				}
			}

			&.part-five {
				font-size: 29rpx;

				.sub-tt {
					font-weight: 700;
					color: #222;
				}

				.u-text {
					margin: 20rpx 0 40rpx 0;
					color: #555;
				}

				.other-item {
					.tt {
						font-weight: 700;
						color: #222;
						margin-bottom: 20rpx;
					}

					.link {
						color: #4A90E2;
						margin-bottom: 40rpx;
					}
				}
			}
		}
	}
</style>
