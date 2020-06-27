<template>
	<view>

		<u-navbar :is-back="false" :title="title" :border-bottom="false">
			<view class="slot-wrap" @tap="handleBack">
				<view class="back-icon"></view>
			</view>
		</u-navbar>
		<view class="m-operation">
			<view class="btn-cancel">取消</view>
			<view class="btn-push" @tap="handlePush">发布</view>
		</view>
		<view class="m-rate">
			<view class="rate-item">
				<view class="tt">服务</view>
				<u-rate :count="count" current="0" active-icon="star-fill" inactive-icon="star-fill" inactive-color="#E6E6E6"
				 active-color="#F7AF43" @change="handleChangeServiceRate"></u-rate>
			</view>
			<view class="rate-item">
				<view class="tt">环境</view>
				<u-rate :count="count" current="0" active-icon="star-fill" inactive-icon="star-fill" inactive-color="#E6E6E6"
				 active-color="#F7AF43" @change="handleChangeEnviromentRate"></u-rate>
			</view>
			<view class="rate-item">
				<view class="tt">交通</view>
				<u-rate :count="count" :current="0" active-icon="star-fill" inactive-icon="star-fill" inactive-color="#E6E6E6"
				 active-color="#F7AF43" @change="handleChangeTrafficRate"></u-rate>
			</view>

			<u-line color="#f2f2f2" />
		</view>
		<view class="m-content">

			<u-input v-model="commentData.context" :type="type" :border="border" />
		</view>
		<view class="m-upload">

			<u-upload :action="action" @on-change="handleUploadChange" width="140" :file-list="fileList" :header="uploadHeader"></u-upload>
		</view>
		<view class="m-location">
			<location></location>
		</view>
		<view class="m-topic">
			<add-topic :topic="topicData"></add-topic>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import location from '../../components/location.vue'
	import addTopic from '../../components/add-topic.vue'
	export default {
		components: {
			location,
			addTopic
		},
		data() {
			return {
				count: 5,
				value: '',
				type: 'textarea',
				border: false,

				action: 'https://test-liuwa.hupovip.net/app/upload',
				uploadHeader: {
					'content-type': 'multipart/form-data',
					SecurityAuthorization: ''
				},
				fileList: [],
				commentData: {
					traffic: 0,
					environment: 0,
					service: 0,
					poiId: 0,
					fromUid: 0,
					context: '',
					picUrls: '',
					tagIds: []
				},
				topicData: [],
				token: '',
				title: ''

				// poiId: ''
			};
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option)
			this.title = option.poiName

			this.uploadHeader.SecurityAuthorization = uni.getStorageSync('token');
			this.commentData.poiId = option.poiId
			this.getTags()
		},
		methods: {
			handleUploadChange(res, index, lists) {
				console.log(res)
				console.log(index)
				console.log(lists)

				let tempPictures = []
				lists.forEach(item => {
					if (item.error == false && item.progress == 100) {
						tempPictures.push(item.response)
					}
				})
				this.commentData.picUrls = tempPictures
			},
			handleChangeServiceRate(value) {
				this.commentData.service = value
			},
			handleChangeEnviromentRate(value) {
				this.commentData.environment = value
			},
			handleChangeTrafficRate(value) {
				this.commentData.traffic = value

			},
			handleBack() {
				uni.navigateBack();
			},
			getTags() {
				this.$api.poiPushCommentTags().then(res => {
					console.log(res)
					this.topicData = res.formTags


					var arr = []
					for (let i in this.topicData) {
						let o = {};
						o[i] = this.topicData[i];
						arr.push(o)
					}
					console.log(arr);

					// for (let key in this.topicData) {
					// 	console.log(key + '---' + this.topicData[key])
					// }
				})
			},
			handlePush() {
				//数据构建
				// /this
				const self = this
				const userInfo = uni.getStorageSync('userInfo');
				if (userInfo) {
					console.log(userInfo);
					this.commentData.fromUid = userInfo.id
				}
				console.log(this.commentData)
				this.$api.poiPushComment(this.commentData).then(res => {
					console.log(res)
					if (res) {
						uni.$emit('commentPushSucess',{msg:'评论发布成功'})
						uni.navigateBack();
						// self.$refs.uToast.show({
						// 	title: '发布成功',
						// 	type: 'success',
						// 	callback:()=>{
						// 		console.log(22222)
						// 	}
						// })
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.slot-wrap {
		.back-icon {
			width: 48rpx;
			height: 48rpx;
			background: url(../../static/images/icon_nav_arrow_black@3x.png);
			background-size: 48rpx;
			margin-left: 32rpx;
		}
	}

	.m-operation {
		height: 140rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 32rpx;
		box-sizing: border-box;
		margin-bottom: 32rpx;

		.btn-cancel {
			font-size: 32rpx;
			color: #b3b3b3;
		}

		.btn-push {
			width: 120rpx;
			height: 61rpx;
			background: linear-gradient(139deg, rgba(253, 118, 62, 1) 0%, rgba(230, 75, 41, 1) 100%);
			border-radius: 30rpx;
			line-height: 61rpx;
			text-align: center;
			font-size: 32rpx;
			color: #fff;
		}
	}

	.m-content {
		// padding: 0 32rpx;
		height: 300rpx;
		padding: 40rpx 32rpx 20rpx;
		box-sizing: border-box;
	}

	.m-rate {
		margin: 0 32rpx;

		.rate-item {
			display: flex;
			align-items: center;
			padding-bottom: 35rpx;

			.tt {
				margin-right: 60rpx;
				font-size: 32rpx;
				color: #555;
			}
		}
	}

	.m-upload {
		height: 200rpx;
		padding: 0 32rpx;
		box-sizing: border-box;
		border-bottom: solid 20rpx #f8f8f8;
	}

	.m-location {
		border-bottom: solid 20rpx #f8f8f8;
	}
</style>
