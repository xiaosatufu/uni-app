<template>
	<view class="switch-wrap">
		<view class="item" @tap="handleToggle(index)" v-for="(item,index) in switchData" :class="active==index?'active':''"
		 :key="item">{{item}}</view>
		<view class="current" :class="active==0?'current1':'current2'"></view>
	</view>
</template>

<script>
	export default {
		props: {
			active: {
				Type: Boolean,
				default: false
			},
			activeText: {
				Type: String,
				default: 'onssssss'
			},
			activeColor: {
				Type: String,
				default: '#c532a3'
			},
			inActiveText: {
				Type: String,
				default: 'off'
			},
			inActiveColor: {
				Type: String,
				default: 'yellow'
			}
		},
		data() {
			return {
				switchData: ['最新', '最热'],
				active: 0,
				activeState: true
			}
		},
		methods: {
			handleToggle(index) {
				this.active = index
			},
			toggle() {
				this.activeState = !this.activeState
			}
		}
	}
</script>

<style lang="scss" scoped>
	.switch-wrap {
		width: 164rpx;
		height: 60rpx;
		background: rgba(248, 248, 248, 1);
		border-radius: 30rpx;
		position: relative;
		display: flex;
		line-height: 60rpx;

		.current {
			position: absolute;
			width: 80rpx;
			height: 56rpx;
			background: rgba(255, 255, 255, 1);
			border-radius: 30rpx;
			top: 2rpx;

			// left: 2rpx;
			&.current1 {
				left: 2rpx;
			}

			&.current2 {
				right: 2rpx;
			}
		}

		.item {
			flex: 1;
			font-size: 24rpx;
			color: #b3b3b3;
			text-align: center;

			&.active {
				position: relative;
				z-index: 2;
				color: #222;
				font-weight: 700;
			}
		}
	}

	// .switch{
	//   display: inline-block;
	//   border-radius: 15rpx;
	//   box-sizing: border-box;
	//   overflow: hidden;
	//   & > div{
	//     float: left;
	//   }
	//   .switch-text{
	//     height: 28rpx;
	//     line-height: 28rpx;
	//     color: #ffffff;
	//     font-size: 14rpx;
	//     padding: 0 8rpx;
	//   }
	//   .switch-icon{
	//     width: 26rpx;
	//     height: 26rpx;
	//     border-radius: 13rpx;
	//     background-color: #ffffff;
	//     border-radius: 1rpx solid #dcdcdc;
	//     margin: 1rpx;
	//   }
	// }
</style>
