import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		token: '',
		userInfo: {}
	},
	mutations: {
		login(state, user) {
			console.log(user)
			state.token = user.token
			// uni.setStorage({
			// 	key: 'token',
			// 	data: user.token
			// })
			console.log(state)

			try {
				uni.setStorageSync('token', user.token);
			} catch (e) {
				// error
			}


		},
		saveUserInfo(state, userInfo) {

			state.userInfo = userInfo
			uni.setStorage({
				key: 'userInfo',
				data: userInfo
			})
		}
	},
	actions: {}
})
export default store
