<template>
	<view>
		<u-navbar :is-back="false" title="我的点评" :border-bottom="false">
			<view class="slot-wrap" @tap="handleBack">
				<view class="back-icon"></view>
			</view>
		</u-navbar>
		<view>

			<view class="follow-wrap">
				<card-top type="more" @more-click="handleMore">
					<template v-slot:info>
						3小时前
					</template>
				</card-top>
				<image-box></image-box>

				<view class="m-introduce">这里常年养着100余只大熊猫、小熊猫、黑颈鹤、白鹤等珍稀动物，看熊猫的最佳时间是09:30之前，因为9:00-11:00之间有个喂食时间，吃完后熊猫…
				</view>
				<address-box></address-box>
				<card-footer></card-footer>
			</view>
			<u-line color="#f2f2f2" />
		</view>
		<view>

			<view class="follow-wrap">
				<card-top type="more" @more-click="handleMore">
					<template v-slot:info>
						3小时前
					</template>
				</card-top>
				<image-box></image-box>

				<view class="m-introduce">这里常年养着100余只大熊猫、小熊猫、黑颈鹤、白鹤等珍稀动物，看熊猫的最佳时间是09:30之前，因为9:00-11:00之间有个喂食时间，吃完后熊猫…
				</view>
				<address-box></address-box>
				<card-footer></card-footer>
			</view>
			<u-line color="#f2f2f2" />
		</view>
		<u-action-sheet :list="list" @click="click" v-model="show" border-radius="40" :cancel-btn="false"
		 :safe-area-inset-bottom="true"></u-action-sheet>
	</view>
</template>

<script>
	import cardTop from "../../components/card-top.vue"
	import imageBox from '../../components/image-box.vue'
	import addressBox from '../../components/address.vue'
	import cardFooter from '../../components/card-footer.vue'
	import navMixin from '../../mixins/nav-mixin.js'
	export default {
		mixins: [navMixin],
		components: {
			cardTop,
			imageBox,
			addressBox,
			cardFooter
		},
		data() {
			return {
				show: false,

				list: [{
					text: '删除',
					color: '#222222',
					fontSize: 32
				}, {
					text: '编辑',
					color: '#222222',
					fontSize: 32
				}, {
					text: '举报',
					color: '#222222',
					fontSize: 32
				}, {
					text: '取消',
					color: '#b3b3b3',
					fontSize: 32
				}],
			};
		},
		methods: {

			click(index) {
				console.log(`点击了第${index + 1}项，内容为：${this.list[index].text}`)
			},
			handleMore() {
				this.show = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.slot-wrap {
		.back-icon {
			width: 48rpx;
			height: 48rpx;
			background: url(../../static/images/icon_nav_arrow_black@3x.png);
			background-size: 48rpx;
			margin-left: 32rpx;
		}
	}

	.follow-wrap {
		// margin: 0 32rpx;
		padding: 0 32rpx;
		background: rgba(255, 255, 255, 1);
		// box-shadow: 0px 0px 14rpx 0px rgba(0, 0, 0, 0.02);
		// border-radius: 16rpx;
		// border: solid 1px red;
		box-sizing: border-box;
	}

	.m-introduce {
		// width: 400rpx;
		position: relative;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-justify: inter-ideograph;
		text-align: justify;
		font-size: 28rpx;
		color: #555;
		margin-bottom: 40rpx;
		line-height: 48rpx;
	}

	// .m-introduce:after {
	// 	content: "...全部";
	// 	position: absolute;
	// 	bottom: 0;
	// 	right: 0;
	// 	padding: 0 0 1rpx 0;
	// 	cursor: pointer;
	// 	background: #FFFFFF;
	// 	color: #F13B03;
	// }
</style>
