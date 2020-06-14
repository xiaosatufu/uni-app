<template>
	<view class="follow-wrap">
		<card-top >
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
</template>

<script>
	import cardTop from "./card-top.vue"
	import imageBox from './image-box.vue'
	import addressBox from './address.vue'
	import cardFooter from './card-footer.vue'
	export default {
		components: {
			cardTop,
			imageBox,
			addressBox,
			cardFooter
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.follow-wrap {
		margin: 0 32rpx;
		padding: 0 24rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 14rpx 0px rgba(0, 0, 0, 0.02);
		border-radius: 16rpx;
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
