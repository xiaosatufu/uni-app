<template>
	<view>
		<view class="item-wapper" v-for="item in liveRoomList" :key="item.id" @click="handleInterRoom(item.id)">
			<view class="info-words">视频聊</view>

			<view class="right-wapper">
				<view class="arrow-block">
					<image src="../../static/left-gray-arrow.png" class="arrow-ico"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				liveRoomList: []
			};
		},
		onLoad(option) {
			console.log(option); //打印出上个页面传递的参数。
			uni.request({
				url: 'http://119.3.27.227/app/user/user-room', //仅为示例，并非真实接口地址。
				header: {
					'content-type': "application/x-www-form-urlencoded",
					'token': option.token
				},
				success: (res) => {
					console.log(res.data);
					if (res.data.code == 1) {
						this.liveRoomList = res.data.data
					} else {

						uni.showToast({
							title: res.data.msg,
							duration: 2000,
							icon: "none"
						});
					}
					// this.text = 'request success';
				}
			});
		},
		methods: {
			// handleInterRoom(){
			// 	console.log(222)

			// }

			handleInterRoom(id) {
				uni.navigateTo({
					url: "../liveroom/liveroom?id="+id
				})
			},
		}
	}
</script>

<style>
	.info-list {
		/* margin-top: 20upx; */
		padding: 0upx 30upx;
	}

	.item-wapper {
		display: flex;
		/* margin-top: 20upx; */
		flex-direction: row;
		justify-content: flex-start;
	}

	.info-words {
		color: #333333;
		font-size: 16px;
		width: 25%;
		line-height: 80upx;
		/* font-weight: bold; */
	}

	.right-wapper {
		width: 80%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	.arrow-block {
		margin-left: 10upx;
		line-height: 86upx;
	}

	.arrow-ico {
		width: 30upx;
		height: 30upx;
	}

	.input {
		height: 80upx;
		line-height: 80upx;
		width: 500upx;
		margin-left: 40upx;
	}

	.graywords {
		color: #EAEAEA;
	}

	.submitBtn {
		width: 95%;
		margin-top: 40upx;
	}
</style>
