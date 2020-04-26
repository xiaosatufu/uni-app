<template>
	<view class="info-list">
		
		<!-- 直播 -->
		<view class="item-wapper" @click="live">
			<view class="info-words">直播</view>
			
			<view class="right-wapper">
				<view class="arrow-block">
					<image src="../../static/left-gray-arrow.png" class="arrow-ico"></image>
				</view>
			</view>
		</view>
		
		<view class="line-top">
			<view class="line"></view>
		</view>
		
	
		
		<view class="line-top">
			<view class="line"></view>
		</view>
		
		<view class="item-wapper" @click="liveVideoRoom">
			<view class="info-words">视频聊</view>
			
			<view class="right-wapper">
				<view class="arrow-block">
					<image src="../../static/left-gray-arrow.png" class="arrow-ico"></image>
				</view>
			</view>
		</view>
		
		<view class="line-top">
			<view class="line"></view>
		</view>
		
		<view class="item-wapper" @click="liveAudioRoom">
			<view class="info-words">语音聊</view>
			
			<view class="right-wapper">
				<view class="arrow-block">
					<image src="../../static/left-gray-arrow.png" class="arrow-ico"></image>
				</view>
			</view>
		</view>
		
		<view class="line-top">
			<view class="line"></view>
		</view>
		
		<view class="item-wapper" @click="landscape">
			<view class="info-words">横屏直播</view>
			
			<view class="right-wapper">
				<view class="arrow-block">
					<image src="../../static/left-gray-arrow.png" class="arrow-ico"></image>
				</view>
			</view>
		</view>
		
		<view class="line-top">
			<view class="line"></view>
		</view>
		
		<view class="item-wapper" @click="recordscreen">
			<view class="info-words">录屏推流</view>
			
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
				pullUrl:""
			};
		},
	
		methods: {
			live() {
				
				uni.showActionSheet({
					itemList: ["主播", "观众竖屏","观众横屏"],
					success(res) {
						var index = res.tapIndex;
						if (index == 0) {
							uni.navigateTo({
								url:"../createliveroom/createliveroom"
							})
							
						} else if (index == 1) {
							uni.navigateTo({
								url:"../liveshow/liveshow?role=2&renderModel=1"
							})
						}else if (index == 2) {
							uni.navigateTo({
								url:"../liveshow/liveshow?role=2&renderModel=2"
							})
						}
						
						
					}
				})
			
			},
			liveVideoRoom(){
				uni.navigateTo({
					url:"../liveroom/liveroom"
				})
			},
			
			liveAudioRoom(){
				uni.navigateTo({
					url:"../liveaudioroom/liveaudioroom"
				})
			},
			landscape() {
				uni.navigateTo({
					url:"../landscape/landscape"
				})
			},
			recordscreen() {
				uni.navigateTo({
					url:"../screen/screen"
				})
			}
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