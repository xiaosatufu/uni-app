<template>
		<uni-transition :duration="200" :mode-class="modeClass" :show="transShow" :styles="transfromClass">

			<view class="fixed-wrap" :style="'padding-top:'+header.top+'px;'">
				<view class="search-box">
					<view class="icon"></view>
					<view class="text">大家都在搜索“国庆必去景点”</view>
				</view>
			</view>
		</uni-transition>
</template>

<script>
	import uniTransition from './uni-transition.vue'
	export default {
		components: {
			uniTransition
		},
		props:{
			transShow:{
				type:Boolean,
				default:false
			},
			header:{
				type:Object,
				default:{}
			}
		},
		data() {
			return {

				// transShow: false,
				modeClass: ['fade'],
				transfromClass: {
					'z-index': '9999'
				},
			};
		},
		mounted(){
			console.log('321321321')
		}
	}
</script>

<style lang="scss" scoped>
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
				background: url(../static/images/icon_home_search_grey@3x.png);
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
