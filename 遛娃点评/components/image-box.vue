<template>
	<view class="image-wrap">
		<view class="image-item" v-for="(item,index) in showImages" :style="{'width':width,'height':width}">
			<image :src="item" mode="aspectFill" :style="{'width':width,'height':width}"></image>
			<view class="label" v-if="(index+1)==limit">{{`+${images.length}`}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			width: {
				type: String,
				default: '202rpx'
			},
			limit: {
				type: String,
				default: ""
			},
			images: {
				type: Array,
				default: []
			}
		},
		mounted() {
			console.log(this.images)
		},
		data() {
			return {
				showImages: []
			};
		},
		mounted() {
			this.handleImages()
		},
		methods: {
			handleImages() {

				if (this.limit) {
					const tempImages = JSON.parse(JSON.stringify(this.images))
					this.showImages = tempImages.splice(0, this.limit)
					console.log(this.showImages)
				} else {
					this.showImages = this.images
				}
			}
		}
	}
</script>

<style lang="scss">
	.image-wrap {
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		margin-bottom: 20rpx;

		.image-item {
			// width: 218rpx;
			// height: 218rpx;
			background: rgba(251, 243, 239, 1);
			box-shadow: 0px 0px 14rpx 0px rgba(0, 0, 0, 0.02);
			border-radius: 12rpx;
			position: relative;
			.label {
				position: absolute;
				width: 60rpx;
				height: 60rpx;
				background: rgba(0, 0, 0, .5);
				border-radius: 12rpx 0rpx 12rpx 0rpx;
				color: #fff;
				text-align: center;
				line-height: 60rpx;
				bottom: 0;
				right: 0;
			}
		}
	}
</style>
