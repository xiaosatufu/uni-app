import urlConfig from './config.js'

const request = {}
const headers = {}
const PORT1 = '/baseinfo'

request.globalRequest = (url, method, data, power) => {
	/*     权限判断 因为有的接口请求头可能需要添加的参数不一样，所以这里做了区分
	    1 == 不通过access_token校验的接口
	    2 == 文件下载接口列表
	    3 == 验证码登录 */

	switch (power) {
		case 1:

			uni.getStorage({
				key: 'token',
				success: function(res) {
					// console.log(res.data);

					// console.log(res.data)
					headers['SecurityAuthorization'] = res.data
				}
			});
			break;
		case 2:
			headers['Authorization'] = 'Basic a3N1ZGlfcGM6a3N1ZGlfcGM='
			break;
		case 3:
			responseType = 'blob'
			break;
		default:
			// headers['Authorization'] = `Bearer ${
			// this.$store.getters.userInfo
			// }`
			// headers['TENANT-ID'] = this.$store.getters.userInfo.tenant_id
			break;
	}

	return uni.request({
		url: urlConfig + url,
		method,
		data: data,
		dataType: 'json',
		header: headers
	}).then(res => {
		console.log(res)
		// alert(JSON.stringify(res))
		uni.showModal({
			title: '提示',
			content: res,
			success: function(res) {
				if (res.confirm) {
					console.log('用户点击确定');
				} else if (res.cancel) {
					console.log('用户点击取消');
				}
			}
		});
		return res[1].data
		// if (res[1].data.status && res[1].data.code == 200) {
		// 	return res[1]
		// } else {
		// 	throw res[1].data
		// }
	}).catch(parmas => {

		switch (parmas.code) {
			case 401:
				uni.clearStorageSync()
				break
			default:
				uni.showToast({
					title: parmas.message,
					icon: 'none'
				})
				return Promise.reject()
				break
		}

	})
}
export default request
